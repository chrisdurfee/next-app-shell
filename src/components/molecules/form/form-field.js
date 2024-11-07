import { Div } from "@base-framework/atoms";
import { Jot } from "@base-framework/base";
import { FormDescription, FormItem, FormLabel, FormMessage } from "./form-atoms.js";
import { FormControl } from "./form-control.js";

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
            hasError: false,
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
        const { label, description } = this;

        const setErrorMessage = (error) =>
        {
            this.state.error = error;
            this.state.hasError = !!error;
        };

        return Div({ class: "space-y-4" }, [
            FormItem([
                FormLabel({ htmlFor: id }, label),
                FormControl({
                    id,
                    name,
                    value: this.state.value,
                    setError: setErrorMessage,
                }, this.children),
                description && FormDescription({ id: `${id}-description` }, description),
                Div({ onState: ['error', (error) => error && FormMessage(error)] })
            ])
        ]);
    }
});
