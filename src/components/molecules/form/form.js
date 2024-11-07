import { Form as BaseForm, Div, Label, P } from "@base-framework/atoms";
import { Atom, Jot } from "@base-framework/base";

/**
 * Form Component
 *
 * A wrapper around the form structure for accessibility and organization.
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
export const Form = Atom((props, children) => BaseForm({ ...props, class: 'space-y-8 w-full max-w-lg' }, children));

/**
 * FormField Component
 *
 * Handles controlled form fields with accessibility.
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
export const FormField = Jot(
{
    state()
    {
        return {
            error: null,
            value: this.defaultValue ?? ""
        };
    },

    /**
     * Renders the FormField component.
     *
     * @returns {object}
     */
    render()
    {
        const name = this.name;
        const id = this.getId(`${name}`);
        const { label, description, onValidate } = this;

        // Validation handler to check the input value
        const handleValidate = (value) =>
        {
            const error = onValidate ? onValidate(value) : null;
            this.state.error = error;
            this.state.value = value;
        };

        return Div({ class: "space-y-4" }, [
            FormItem([
                FormLabel({ htmlFor: id }, label),
                FormControl({
                    id,
                    name,
                    value: this.state.value,
                    input: (e) => handleValidate(e.target.value)
                }, this.children),
                description && FormDescription({ id: `${id}-description` }, description),
                Div({ onState: ['error', (error) => error && FormMessage(error)] })
            ])
        ]);
    }
});

/**
 * FormItem Component
 *
 * Groups form elements like label, control, description, and message.
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
const FormItem = Atom((props, children) => Div({ ...props, class: "space-y-2" }, children));

/**
 * FormLabel Component
 *
 * Accessible label for form inputs.
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
const FormLabel = Atom((props, children) => Label({ ...props, class: "text-sm font-medium" }, children));

/**
 * FormControl Component
 *
 * Wrapper around form control elements.
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
const FormControl = Atom((props, children) => {
    return Div({
        ...props
    }, children);
});

/**
 * FormDescription Component
 *
 * Provides additional information for form controls.
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
const FormDescription = Atom((props, children) => P({ ...props, class: "text-sm text-muted-foreground" }, children));

/**
 * FormMessage Component
 *
 * Displays validation error messages.
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
const FormMessage = ({ children }) => {
    return P({ class: "text-sm text-destructive" }, children);
};