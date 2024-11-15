import { Div, Label, P } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";

/**
 * FormItem Component
 *
 * Groups form elements like label, control, description, and message.
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
export const FormItem = Atom((props, children) => Div({ ...props, class: "flex flex-auto flex-col space-y-2" }, children));

/**
 * FormLabel Component
 *
 * Accessible label for form inputs.
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
export const FormLabel = Atom((props, children) => Label({ ...props, class: "flex auto text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" }, children));

/**
 * FormDescription Component
 *
 * Provides additional information for form controls.
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
export const FormDescription = Atom((props, children) => P({ ...props, class: "text-sm text-muted-foreground" }, children));

/**
 * FormMessage Component
 *
 * Displays validation error messages.
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
export const FormMessage = Atom((props, children) => {
    return P({ ...props, class: "text-sm text-destructive" }, children);
});