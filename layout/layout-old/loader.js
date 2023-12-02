(function(global)
{
    "use strict";

    /**
     * This will track previously loaded scripts and styles.
     */
    var loaded = [];

    /**
     * This will check if a script or style has been loaded.
     *
     * @param {string} src
     * @return {bool}
     */
    var isLoaded = function(src)
    {
        return base.inArray(loaded, src) !== -1;
    };

    /**
     * This will create a script atom.
     *
     * @param {object} props
     * @return {object}
     */
    var Script = function(props)
    {
        return {
            tag: 'script',
            src: props.src,
            defer: props.defer || false,
            load: function(e)
            {
                loaded.push(props.src);

                var callBack = props.load;
                if(callBack)
                {
                    callBack();
                }
            }
        };
    };

    /**
     * This will create a style atom.
     *
     * @param {object} props
     * @return {object}
     */
    var Style = function(props)
    {
        return {
            tag: 'link',
            rel: 'stylesheet',
            type: 'text/css',
            href: props.src,
            load: function(e)
            {
                loaded.push(props.src);

                var callBack = props.load;
                if(callBack)
                {
                    callBack();
                }
            }
        };
    };

    var builder = base.builder;

    /**
     * Group
     *
     * This will setup a depends group to load all
     * dependencies before loaded the script.
     */
    var Group = base.Class.extend(
    {
        constructor: function(callBack)
        {
            this.percent = 0;
            this.loaded = 0;
            this.total = 0;
            this.callBack = callBack || null;
        },

        /**
         * This will add the resource to the document.
         *
         * @param {string} src
         */
        add: function(src)
        {
            this.total++;
            var atom;

            if(src.indexOf('.css') !== -1)
            {
                atom = Style({
                    load: base.bind(this, this.update),
                    src: src
                });
            }
            else
            {
                atom = Script({
                    load: base.bind(this, this.update),
                    src: src,
                    defer: true,
                });
            }

            builder.build(atom, document.head);
        },

        /**
         * This will add the dependencies to the document.
         *
         * @param {array} files
         */
        addFiles: function(files)
        {
            if(!files)
            {
                return;
            }

            for(var i = 0, length = files.length; i < length; i++)
            {
                var src = files[i];
                if(!isLoaded(src))
                {
                    this.add(src);
                }
            }
        },

        update: function()
        {
            var percent = this.updateProgress();
            if(percent >= 100)
            {
                var callBack = this.callBack;
                if(callBack)
                {
                    callBack();
                }
            }
        },

        updateProgress: function()
        {
            ++this.loaded;
            return (this.percent = Math.floor(this.loaded / this.total * 100));
        }
    });

    /**
     * Loader
     *
     * This will create a loader component to defer loading
     * until the component needs to render. The loader will
     * load the script and add the component.
     */
    var Loader = base.Component.extend(
    {
        beforeSetup: function()
        {
            this.addScript();
        },

        render: function()
        {
            var self = this;

            return {
                className: 'loader',
                onState: [
                    ['loaded', {
                        completed: true
                    }],
                    ['loaded', function(ele, val)
                    {
                        if(!val)
                        {
                            return {};
                        }

                        return self.setLayout();
                    }],
                    ['loaded', function(ele, val)
                    {
                        if(val)
                        {
                            self.changePanel();
                        }
                    }]
                ]
            };
        },

        /**
         * This will setup the layout.
         *
         * @return {object}
         */
        setLayout: function()
        {
            if(this.persist && this.layout)
            {
                return this.layout;
            }

            var self = this,
            layout = this.getLayout();
            if(layout.isComponent !== true)
            {
                // this will cache the layout element
                layout.onCreated = function(ele)
                {
                    self.layout = ele;
                };
            }
            else
            {
                // this will pass the loader settings
                layout.route = this.route;
                if(this.persist === true)
                {
                    layout.persist = true;
                }
            }
            return (this.layout = layout);
        },

        /**
         * This will add the loader script.
         */
        addScript: function()
        {
            var src = this.src,
            loaded = this.isLoaded = isLoaded(src);
            if(!loaded)
            {
                var callBack = base.bind(this, this.loaded);
                if(this.depends)
                {
                    var group = new Group(callBack);

                    group.addFiles(this.depends);
                    group.add(this.src);
                    return;
                }

                this.build(Script({
                    src: src,
                    load: callBack
                }), document.head);
            }
        },

        loaded: function()
        {
            this.state.set('loaded', true);
        },

        setupStates: function()
        {
            return {
                loaded: this.isLoaded
            };
        },

        /**
         * This will swap loader panel to the layout element.
         */
        changePanel: function()
        {
            var panel = this.panel;

            // we want to add the component layout to the parent node
            var parent = panel.parentNode;
            if(parent)
            {
                var layout = this.layout;
                var element = layout.isComponent? layout.panel : layout;
                this.panel = element;
                parent.insertBefore(element, panel);
            }

            builder.removeElement(panel);
        },

        /**
         * This will get the loader layout.
         *
         * @return {object}
         */
        getLayout: function()
        {
            var layout = this.callBack();
            if(typeof layout === 'function')
            {
                layout = layout();
            }
            return layout;
        }
    });

    global.Loader = Loader;

})(this);