import { Checkbox as BaseCheckbox, Div, I, Label, Span } from '@base-framework/atoms';
import { Jot } from '@base-framework/base';
import { Icons } from '../../icons/icons';

/**
 * Checkbox
 *
 * This will create a checkbox component.
 *
 * @param {object} props
 * @returns {object}
 */
export const Checkbox = Jot(
{
    state: {
        checked: false
    },

    render()
    {
        return Div({ class: `flex items-center space-x-2 cursor-pointer ${this.class}` }, [
            Div({
                class: `relative flex items-center justify-center w-5 h-5 rounded-md transition-colors duration-200 border`,
                onState: ['checked', {
                    'bg-primary': true,
                    'text-primary-foreground': true,
                }]
            }, [
                BaseCheckbox({
                    class: "absolute opacity-0 w-full h-full cursor-pointer",
                    change: (event) =>
                    {
                        const checked = event.target.checked;
                        console.log(checked)
                        this.state.checked = checked;

                        if (typeof this.checked === 'function')
                        {
                            this.checked(checked);
                        }
                    },
                }),
                Span({ class: "absolute text-xs pointer-events-none", onState: ['checked', (value) =>
                    {
                        if (!value)
                        {
                            return null;
                        }

                        return I({
                            class: 'w-2 h-2 pointer-events-none',
                            html: Icons.check,
                        });
                    }]}),
            ]),
            Label({ class: "text-base" }, this.label || ''),
        ])
    }
});
