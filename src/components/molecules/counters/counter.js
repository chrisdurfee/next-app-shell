import { Div } from '@base-framework/atoms';
import { VeilJot } from '../../atoms/veil.js';
import { CountDisplay, MinusButton, PlusButton } from './atoms.js';

/**
 * Counter Atom
 *
 * This creates a counter component with an input for count and buttons to increment and decrement.
 *
 * @class
 * @extends {VeilJot}
 */
export const Counter = VeilJot(
{
    /**
     * Initial state for the counter component.
     *
     * @member {object} state
     */
    state()
    {
        return {
            count: {
                state: this.initialCount ?? 0,
                callBack: (value) => (this.change && this.change(value))
            }
        };
    },

    /**
     * Renders the Counter component.
     *
     * @returns {object}
     */
    render()
    {
        const className = this.class ?? '';
        return Div({ class: `flex flex-auto items-center justify-between space-x-4 p-4 ${className}` }, [
            MinusButton({ click: () => this.state.decrement('count') }),
            CountDisplay({
                bind: this.bind,
                readonly: this.readonly,
                min: this.min,
                max: this.max
            }),
            PlusButton({ click: () => this.state.increment('count') })
        ]);
    }
});

export default Counter;