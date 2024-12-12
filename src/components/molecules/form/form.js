import { Form as BaseForm } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";
import { FormItem } from "./form-atoms.js";
import { FormControl } from "./form-control.js";
import { FormField } from "./form-field.js";
export { FormControl, FormField, FormItem };

/**
 * This will handle the form submission.
 *
 * @param {object} e
 * @param {function|null} callBack
 * @returns {void}
 */
const submit = (e, callBack = null) =>
{
    const form = e.target;

    /**
     * If the form is not valid, this will prevent it
     * from perventing the default to allow the browser to
     * display the validation messages.
     */
    const isValid = form.checkValidity();
    if (!isValid)
    {
        return;
    }

    e.preventDefault();

    if (callBack)
    {
        callBack(e);
    }
};

/**
 * Form Component
 *
 * A wrapper around the form structure for accessibility and organization.
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
export const Form = Atom((props, children) => (
    BaseForm({ ...props, submit: (e) => submit(e, props.submit), class: `w-full ${props.class ?? '' }` }, children))
);
