/**
 * This will add an event listener.
 *
 * @param {string} event
 * @param {object} obj
 * @param {function} fn
 * @param {bool} capture
 */
const addEvent = (event, obj, fn, capture) =>
{
    if (typeof window.addEventListener === 'function')
    {
        addEvent = (event, obj, fn, capture) =>
        {
            capture = capture || false;
            obj.addEventListener(event, fn, capture);
        };
    }
    else
    {
        addEvent = (event, obj, fn, capture) =>
        {
            obj.attachEvent('on' + event, fn);
        };
    }

    addEvent(event, obj, fn, capture);
};

/**
 * This will create a script object.
 *
 * @param {object} script
 */
const Script = (script) =>
{
    return {
        src: script.src || '',
        type: script.type || '',
        async: script.async || false,
        defer: (script.async || script.defer === false)? false : true,
        callBack: script.callBack || '',
        status: 'not_loaded'
    };
};

let ScriptLoader = global.ScriptLoader =
{
    /**
     * @param {array} scripts
     */
    scripts: [],

    /**
     * @param {object} progress
     */
    progress: {
        pending: 0,
        loaded: 0,
        callBack: null
    },

    onLoaded: null,
    pageLoaded: false,

    /**
     * This will setup the script loader events
     * and return itself.
     */
    setup()
    {
        this.addEvent();
        return this;
    },

    /**
     * This will add a script to be loaded.
     *
     * @param {object} scriptObj
     * @param {number} index
     * @return {object} self
     */
    add(scriptObj, index)
    {
        let script = Script(scriptObj),
        scripts = this.scripts;

        /* we want to check if the script is to be
        placed in a specific index in the script
        array */
        if(typeof index !== 'undefined')
        {
            if(index === 'first')
            {
                scripts.unshift(script);
            }
            else if(!isNaN(index))
            {
                scripts.splice(index, 0, script);
            }
            else
            {
                scripts.push(script);
            }
        }
        else
        {
            scripts.push(script);
        }

        this.progress.pending++;

        /* we want to check if the page is already loaded
        because we will just create the script */
        if(this.pageLoaded === true)
        {
            this.createScript(script);
        }

        return this;
    },

    /**
     * This will show the script loader progress.
     *
     * @param {object} progressBar
     * @param {object} progressLabel
     * @param {function} loadedCallBack
     */
    showProgress(progressBar, progressLabel, loadedCallBack)
    {
        return function(percent)
        {
            progressLabel.textContent = Math.round(percent) + '%';
            progressBar.style.width = percent + '%';

            if(percent >= 100)
            {
                document.body.classList.add('loaded');
                progressLabel.classList.add('complete');

                loadedCallBack();
            }
        };
    },

    /**
     * This will update the progress.
     */
    updateProgress()
    {
        let progress = this.progress;
        let percent = Math.floor(progress.loaded / progress.pending * 100);

        let callBack = this.progress.callBack;
        if(typeof callBack === 'function')
        {
            callBack(percent);
        }

        if(percent >= 100)
        {
            if(typeof this.onLoaded === 'function')
            {
                this.onLoaded();
            }
        }
    },

    /**
     * This will remove a script from the loader.
     *
     * @param {string} src
     * @return {object} self
     */
    remove(src)
    {
        let scripts = this.scripts;
        for(let i = 0; i < scripts.length; i++)
        {
            let obj = scripts[i];
            if(obj.src === src)
            {
                this.scripts.splice(i, 1);
            }
        }

        return this;
    },

    /**
     * This will create a script element.
     *
     * @param {object} obj
     * @return {object} self
     */
    createScript(obj)
    {
        if(obj && typeof obj === 'object')
        {
            let d = document;
            let s = d.createElement('script');

            s.async = (obj.async === true);
            s.defer = (obj.defer === true);

            let self = this;
            s.onload = () =>
            {
                self.progress.loaded++;
                self.updateProgress();
                obj.status = 'loaded';

                if(typeof obj.callBack === 'function')
                {
                    obj.callBack();
                }
            };

            s.src = obj.src;

            let node = d.getElementsByTagName('head')[0];
            node.appendChild(s);
        }

        return this;
    },

    /**
     * This will load the scripts.
     */
    loadScripts()
    {
        let scripts = this.scripts;
        for(let i = 0, maxLength = scripts.length; i < maxLength; i++)
        {
            let obj = scripts[i];
            this.createScript(obj);
        }
    },

    addEvent()
    {
        let self = this;
        addEvent('load', window, () =>
        {
            self.pageLoaded = true;
            self.loadScripts();
        });

        return this;
    }

/* we want to auto setup the object after closing
and return the object so it can still be used after
setup */
}.setup();