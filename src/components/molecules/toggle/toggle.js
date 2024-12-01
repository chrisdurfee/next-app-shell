import { Button, Checkbox, Span } from '@base-framework/atoms';
import { VeilJot } from '../../atoms/veil.js';

/**
 * Toggle
 *
 * This will create a toggle switch component.
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
export const Toggle = VeilJot(
{
    /**
     * The initial state of the Toggle.
     *
     * @returns {object}
     */
    state()
    {
        return {
            active: this.active ?? false
        };
    },

    /**
     * This is added to check the checkbox after the component is rendered.
     * to see if the bind updated the checked value.
     *
     * @returns {void}
     */
    after()
    {
        this.state.active = this.checkbox.checked;
    },

    /**
     * Renders the Toggle component.
     *
     * @returns {object}
     */
    render()
    {
        const toggleActive = (e, { state }) =>
        {
            state.toggle('active');
            this.checkbox.checked = state.active;
        };

        return Button({
            class: 'relative inline-flex h-6 w-11 min-w-11 items-center rounded-full bg-muted transition-colors focus:outline-none',
            onState: ['active', { 'bg-primary': true, 'bg-muted': false }],
            click: toggleActive
        }, [
            Checkbox({
                cache: 'checkbox',
                class: 'opacity-0 absolute top-0 left-0 bottom-0 right-0 w-full h-full',

                /**
                 * This will add the default checked before binding.
                 * If binding it will override the default checked value.
                 */
                checked: this.state.active,
                bind: this.bind,
                required: this.required
            }),
            Span({
                class: 'absolute h-5 w-5 bg-background rounded-full shadow-md transform transition-transform',
                onState: ['active', { 'translate-x-[22px]' : true, 'translate-x-[2px]': false }]
            })
        ]);
    }
});

export default Toggle;
