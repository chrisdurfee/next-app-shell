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
    BaseForm({ ...props, submit: (e) => submit(e, props.submit), class: `space-y-8 w-full ${props.class ?? '' }` }, children))
);
