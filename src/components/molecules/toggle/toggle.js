import { Button, Span } from '@base-framework/atoms';
import { Jot } from '@base-framework/base';

/**
 * Toggle
 *
 * This will create a toggle switch component.
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
export const Toggle = Jot(
{
    /**
     * The initial state of the Toggle.
     *
     * @member {object} state
     */
    state()
    {
        return {
            active: {
                state: this.active ?? false,
                callBack: (value) => this.input.checked = value
            }
        };
    },

    /**
     * Renders the Toggle component.
     *
     * @returns {object}
     */
    render()
    {
        const toggleActive = (e, { state }) => state.toggle('active');

        return Button({
            class: 'inline-flex h-6 w-11 items-center rounded-full bg-muted transition-colors focus:outline-none',
            onState: ['active', { 'bg-primary': true, 'bg-muted': false }],
            click: toggleActive
        }, [
            Span({
                class: 'absolute h-5 w-5 bg-background rounded-full shadow-md transform transition-transform',
                onState: ['active', { 'translate-x-[22px]' : true, 'translate-x-[2px]': false }]
            })
        ]);
    }
});

export default Toggle;
