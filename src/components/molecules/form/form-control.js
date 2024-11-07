import { Div } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";

/**
 * This will check if the child is an input element.
 *
 * @param {object} child
 * @returns {boolean}
 */
const isInput = (child) =>
{
    return child.tag === 'input' || child.tag === 'select' || child.tag === 'textarea';
};

/**
 * FormControl Component
 *
 * Wrapper around form control elements that automatically handles validation events.
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
export const FormControl = Atom((props, children) =>
{
    /**
     * This will handle the invalid event for validation.
     *
     * @param {object} e
     * @returns {void}
     */
    const handleInvalid = (e) =>
    {
        props.setError(e.target.validationMessage);
    };

    /**
     * This will handle the input event for validation.
     *
     * @param {object} e
     * @returns {void}
     */
    const handleInput = (e) =>
    {
        const isValid = e.target.checkValidity();
        if (isValid)
        {
            props.setError(null);
        }
    };

    /**
     * This will enhance the children with validation event listeners
     * if they are required.
     *
     * @type {array} enhancedChildren
     */
    const enhancedChildren = children.map((child) =>
    {
        if (!child.required)
        {
            return child;
        }

        if (isInput(child))
        {
            // Enhance input elements with validation event listeners
            return {
                ...child,
                aria: {
                    invalid: ['hasError'],
                },
                invalid: handleInvalid,
                input: handleInput
            };
        }
        return child;
    });

    return Div({
        ...props,
        class: "w-full"
    }, enhancedChildren);
});
