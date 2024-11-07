import { Form as BaseForm, Div, Label, P } from "@base-framework/atoms";
import { Atom, Jot } from "@base-framework/base";

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
    BaseForm({ ...props, submit: (e) => submit(e, props.submit), class: 'space-y-8 w-full max-w-lg' }, children))
);

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
 * Wrapper around form control elements that automatically handles validation events.
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
const FormControl = Atom((props, children) =>
{
    const handleInvalid = (e) =>
    {
        props.setError(e.target.validationMessage);
    };

    const handleInput = (e) =>
    {
        const isValid = e.target.checkValidity();
        if (isValid)
        {
            props.setError(null);
        }
    };

    const enhancedChildren = children.map((child) =>
    {
        if (!child.required)
        {
            return child;
        }

        if (child.tag === 'input' || child.type === 'select' || child.type === 'textarea')
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
const FormMessage = Atom((props, children) => {
    return P({ ...props, class: "text-sm text-destructive" }, children);
});
