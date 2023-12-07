import { Builder, Component, Html } from "../libs/base/base.js";

const added = [];

/**
 * This will check if a script or style has been added.
 *
 * @param {string} src
 * @return {bool}
 */
const isAdded = (src) => added.indexOf(src) !== -1;

/**
 * This will track previously loaded scripts and styles.
 */
const loaded = [];

/**
 * This will check if a script or style has been loaded.
 *
 * @param {string} src
 * @return {bool}
 */
const isLoaded = (src) => loaded.indexOf(src) !== -1;

/**
 * This will create a script atom.
 *
 * @param {object} props
 * @return {object}
 */
const Script = (props) => ({
    tag: 'script',
    src: props.src,
    async: false,
    load(e)
    {
        loaded.push(props.src);

        const callBack = props.load;
        if (callBack)
        {
            callBack();
        }
    }
});

/**
 * This will create a style atom.
 *
 * @param {object} props
 * @return {object}
 */
const Style = (props) => ({
    tag: 'link',
    rel: 'stylesheet',
    type: 'text/css',
    href: props.src,
    load(e)
    {
        loaded.push(props.src);

        const callBack = props.load;
        if (callBack)
        {
            callBack();
        }
    }
});

/**
 * Group
 *
 * This will setup a depends group to load all
 * dependencies before loaded the script.
 */
export class Group
{
    constructor(callBack)
    {
        this.percent = 0;
        this.loaded = 0;
        this.total = 0;
        this.callBack = callBack || null;
    }

    /**
     * This will add the resource to the document.
     *
     * @param {string} src
     */
    add(src)
    {
        this.total++;
        let atom;

        const load = this.update.bind(this);
        if (isAdded(src))
        {
            load();
            return;
        }
        else
        {
            added.push(src);
        }

        if (src.indexOf('.css') !== -1)
        {
            atom = Style({
                load,
                src
            });
        }
        else
        {
            atom = Script({
                load,
                src
            });
        }

        Builder.build(atom, document.head);
    }

    /**
     * This will add the dependencies to the document.
     *
     * @param {array} files
     */
    addFiles(files)
    {
        if (!files)
        {
            return;
        }

        for (let i = 0, length = files.length; i < length; i++)
        {
            const src = files[i];
            if (!isLoaded(src))
            {
                this.add(src);
            }
        }
    }

    /**
     * This will update the progress.
     *
     * @return {void}
     */
    update()
    {
        const percent = this.updateProgress();
        if (percent >= 100)
        {
            const callBack = this.callBack;
            if (callBack)
            {
                callBack();
            }
        }
    }

    updateProgress()
    {
        ++this.loaded;
        return (this.percent = Math.floor(this.loaded / this.total * 100));
    }
}

/**
 * Loader
 *
 * This will create a loader component to defer loading
 * until the component needs to render. The loader will
 * load the script and add the component.
 *
 * @class
 */
export class Loader extends Component
{
    /**
     * This will add the script.
     *
     * @return {void}
     */
    beforeSetup()
    {
        this.addScript();
    }

    /**
     * This will render the loader.
     *
     * @returns {object}
     */
    render()
    {
        return {
            class: 'loader',
            onState: [
                ['loaded', {
                    completed: true
                }],
                ['loaded', (val) =>
                {
                    if (!val)
                    {
                        return {};
                    }

                    return this.setLayout();
                }],
                ['loaded', (val) =>
                {
                    if (val)
                    {
                        this.changePanel();
                    }
                }]
            ]
        };
    }

    /**
     * This will setup the layout.
     *
     * @return {object}
     */
    setLayout()
    {
        if (this.persist && this.layout)
        {
            return this.layout;
        }

        const layout = this.getLayout();
        if (layout.isUnit !== true)
        {
            // this will cache the layout element
            layout.onCreated = (ele) =>
            {
                this.layout = ele;
            };
        }
        else
        {
            // this will pass the loader settings
            layout.route = this.route;
            if (this.persist === true)
            {
                layout.persist = true;
            }
        }
        return (this.layout = layout);
    }

    /**
     * This will add the loader script.
     *
     * @return {void}
     */
    addScript()
    {
        const src = this.src;
        const loaded = this.isLoaded = isLoaded(src);
        if (loaded)
        {
            return;
        }

        const callBack = this.loaded.bind(this);
        if (this.depends)
        {
            const group = new Group(callBack);

            group.addFiles(this.depends);
            group.add(src);
            return;
        }

        Builder.build(Script({
            src,
            load: callBack
        }), document.head);
    }

    /**
     * This will set the loaded state.
     *
     * @return {void}
     */
    loaded()
    {
        this.state.set('loaded', true);
    }

    /**
     * This will setup the loader states.
     *
     * @return {object}
     */
    setupStates()
    {
        return {
            loaded: this.isLoaded
        };
    }

    /**
     * This will swap loader panel to the layout element.
     *
     * @return {void}
     */
    changePanel()
    {
        const panel = this.panel;

        if (!this.isLoaded)
        {
            this.checkUpdate();
        }

        // we want to add the component layout to the parent node
        const parent = panel.parentNode;
        if (parent)
        {
            const layout = this.layout;
            const element = layout.isComponent? layout.panel : layout;

            this.panel = element;
            parent.insertBefore(element, panel);
        }

        Html.removeElement(panel);
    }

    /**
     * This will update the layout from the route.
     *
     * @param {object} params
     */
    update(params)
    {
        this.loadedParams = params;

        if (this.state.get('loaded'))
        {
            this.checkUpdate();
        }
    }

    checkUpdate()
    {
        const layout = this.layout;
        if(layout && layout.isUnit && typeof layout.update === 'function')
        {
            layout.update(this.loadedParams);
        }
    }

    /**
     * This will get the loader layout.
     *
     * @return {object}
     */
    getLayout()
    {
        const layout = this.callBack();
        if (typeof layout === 'function')
        {
            layout = layout();
        }
        return layout;
    }
}

const modules = [];

/**
 * This will load the module.
 *
 * @param {string} src
 * @param {function} callBack
 * @return {object}
 */
export const loadModule = (src, callBack) =>
{
    import(src).then(module =>
    {
        modules.push(src);

        if (callBack)
        {
            callBack(module);
        }
    });
};

/**
 * This will check if an object is a contructor.
 *
 * @param {object|function} object
 * @returns {bool}
 */
const isConstructor = (object) =>
{
    if (!object)
    {
        return false;
    }

    return (typeof object?.prototype?.constructor === 'function');
};

/**
 * This will render the module.
 *
 * @param {object} layout
 * @param {object} ele
 * @param {object} parent
 * @param {function} callBack
 * @return {object}
 */
const render = (layout, ele, parent) =>
{
    const frag = Builder.build(layout, null, parent);
    const firstChild = frag.firstChild;
    ele.after(frag);
    return firstChild;
};

/**
 * This will create a comment.
 *
 * @param {object} props
 * @returns {object}
 */
const Comment = (props) => ({
    tag: 'comment',
    text: 'import placeholder',
    onCreated: props.onCreated
});

/**
 * This will create an import wrapper component that
 * will wrap the comment atom to pass route to the
 * imported layout.
 *
 * @param {object} props
 * @returns {object}
 */
const ImportWrapper = Jot(
{
    render()
    {
        return Comment(
        {
            onCreated: (ele) =>
            {
                const src = this.src;
                if (!src)
                {
                    return;
                }

                if (this.depends)
                {
                    const group = new Group(() =>
                    {
                        this.loadAndRender(ele);
                    });

                    group.addFiles(this.depends);
                    return;
                }

                this.loadAndRender(ele);
            }
        });
    },

    getLayout(module)
    {
        let layout = module.default;
        if (!layout)
        {
            return;
        }

        const callBack = this.callBack;
        if (callBack)
        {
            layout = callBack(layout);
        }
        else
        {
            if (isConstructor(layout))
            {
                layout = new layout();
                layout.route = this.route;

                if (this.persist)
                {
                    layout.persist = true;
                }
            }
            else
            {
                layout = layout();
            }
        }

        return (this.layout = layout);
    },

    /**
     * This will load the module and render the layout.
     *
     * @param {object} ele
     */
    loadAndRender(ele)
    {
        loadModule(this.src, (module) =>
        {
            this.loaded = true;
            const layout = this.layout || this.getLayout(module);
            this.layoutRoot = render(layout, ele, this.parent);
        });
    },

    /**
     * This will check if the layout should be updated.
     *
     * @param {object} layout
     * @returns {bool}
     */
    shouldUpdate(layout)
    {
        if (this.updateLayout === true)
        {
            return true;
        }

        return (this.updateLayout = (layout && layout.isUnit && typeof layout.update === 'function'));
    },

    /**
     * This will update the module layout.
     *
     * @param {object} params
     */
    updateModuleLayout(params)
    {
        const layout = this.layout;
        if (this.shouldUpdate(layout))
        {
            layout.update(params);
        }
    },

    /**
     * This will call if the import is added to a route. This will pass
     * the update params to the imported layout.
     *
     * @param {object} params
     */
    update(params)
    {
        if (this.loaded === true)
        {
            this.updateModuleLayout(params);
        }
    },

    beforeDestroy()
    {
        if (!this.layoutRoot)
        {
            return;
        }

        Html.removeElement(this.layoutRoot);
    }
});

/**
 * This will import a module.
 *
 * @param {object} props
 * @returns {object}
 */
export const Import = (props) =>
{
    return new ImportWrapper(props);
};