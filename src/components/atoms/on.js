import { Builder, dataBinder } from "@base-framework/base";

/**
 * This will set a previous result.
 *
 * @private
 * @param {object} parent
 * @param {string} prop
 * @param {string} value
 * @param {object} result
 * @returns {*}
 */
const checkPreviousResult = (parent, prop, value, result) =>
{
    if (!parent || !result)
    {
        return result;
    }

    if (result.isUnit !== true || parent.persist !== true || !parent.state)
    {
        return result;
    }

    return setPreviousResult(parent, prop, value, result);
};

/**
 * This will set the previous result.
 *
 * @param {object} parent
 * @param {string} prop
 * @param {string} value
 * @param {object} result
 * @returns {*}
 */
const setPreviousResult = (parent, prop, value, result) =>
{
    let key = prop + ':' + value,
    state = parent.state,
    previousResult = state.get(key);
    if (typeof previousResult !== 'undefined')
    {
        result = previousResult;
    }

    state.set(key, result);
    return result;
};

/**
 * This will set up the update layout function.
 *
 * @param {function} callBack
 * @param {object} ele
 * @param {string} prop
 * @param {object} parent
 * @returns {function}
 */
const updateLayout = (callBack, ele, prop, parent) =>
{
    /**
     * This will hold the previous child element to
     * help remove it when updating.
     *
     * @type {(object|null)} prevEle
     */
    let prevEle = null;

    /**
     * This will update the layout.
     *
     * @param {object} value
     * @param {object} ele
     * @param {object} parent
     * @returns {void}
     */
    return (value) =>
    {
        let layout = callBack(value, ele, parent);
        if (!layout)
        {
            return;
        }

        /**
         * This will remove the previous element if it exists.
         */
        if (prevEle)
        {
            Builder.removeNode(prevEle);
        }

        /**
         * This will set the previous result if needed.
         */
        layout = checkPreviousResult(parent, prop, value, layout);

        /**
         * This will build the layout and insert it after the
         * comment element.
         */
        const frag = Builder.build(layout, null, parent);
        prevEle = frag.children[0];

        ele.parentNode.insertBefore(frag, ele.nextSibling);
    };
};

/**
 * This will create a comment.
 *
 * @param {object} props
 * @returns {object}
 */
const Comment = (props) => ({
    tag: 'comment',
    textContent: 'import placeholder',
    onCreated: props.onCreated
});

/**
 * This will get the parent set data.
 *
 * @param {object} parent
 * @returns {object|null}
 */
export const getParentData = (parent) =>
{
    if (parent.data)
    {
        return parent.data;
    }

    if (parent.context && parent.context.data)
    {
        return parent.context.data;
    }

    if (parent.state)
    {
        return parent.state;
    }

    return null;
};

/**
 * This will create an on data tag.
 *
 * @param {object} data
 * @param {string} prop
 * @param {function} callBack
 *
 * @overload
 * @param {string} prop
 * @param {function} callBack
 *
 * @returns {object}
 */
export const On = (...args) =>
{
    const settings = [...args];
    const callBack = settings.pop();
    if (typeof callBack !== 'function')
    {
        return;
    }

    /**
     * This will create a comment to use as a placeholder
     * to keep the layout in place.
     */
    return Comment({
        onCreated: (ele, parent) =>
        {
            if (settings.length < 2)
            {
                /**
                 * This will get the parent data and add it to the
                 * settings array.
                 */
                const data = getParentData(parent);
                settings.unshift(data);
            }

            const update = updateLayout(callBack, ele, settings[1], parent);
            dataBinder.watch(ele, settings[0], settings[1], update);
        }
    });
};

/**
 * This will create an on state tag.
 *
 * @param {object} data
 * @param {string} prop
 * @param {function} callBack
 *
 * @overload
 * @param {string} prop
 * @param {function} callBack
 *
 * @returns {object}
 */
export const OnState = (...args) =>
{
    const settings = [...args];
    const callBack = settings.pop();
    if (typeof callBack !== 'function')
    {
        return;
    }

    /**
     * This will create a comment to use as a placeholder
     * to keep the layout in place.
     */
    return Comment({
        onCreated: (ele, parent) =>
        {
            if (settings.length < 2)
            {
                const data = parent.state;
                settings.unshift(data);
            }

            const update = updateLayout(callBack, ele, settings[1], parent);
            dataBinder.watch(ele, settings[0], settings[1], update);
        }
    });
};