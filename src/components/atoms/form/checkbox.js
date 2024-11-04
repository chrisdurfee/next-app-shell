import { Checkbox as BaseCheckbox, Div, I, Label, Span } from '@base-framework/atoms';
import { Jot } from '@base-framework/base';
import { Icons } from '../../icons/icons';

/**
 * This will return the id of the checkbox.
 *
 * @returns {string}
 */
const getId = () => `checkbox-${Math.random().toString(36).substring(2, 9)}`;

/**
 * Checkbox
 *
 * This will create an accessible checkbox component.
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
        const id = getId();

        return Div({ class: `flex items-center space-x-2 cursor-pointer ${this.class}` }, [
            Div({
                class: `relative flex items-center justify-center w-5 h-5 rounded-md transition-colors duration-200 border hover:border-accent-foreground`,
                onState: ['checked',
                {
                    'bg-primary': true,
                    'text-primary-foreground': true,
                }],
                role: 'checkbox',
                aria:
                {
                    checked: ['checked'],
                },
                tabIndex: 0,
                click: () =>
                {
                    this.state.checked = !this.state.checked;
                    if (typeof this.checked === 'function')
                    {
                        this.checked(this.state.checked);
                    }
                }
            }, [
                BaseCheckbox({
                    id,
                    class: "absolute opacity-0 w-full h-full cursor-pointer",
                    aria:
                    {
                        checked: ['checked'],
                    },
                    change: (event) =>
                    {
                        const checked = event.target.checked;
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
                    }]
                }),
            ]),
            Label({
                class: "text-base cursor-pointer",
                htmlFor: id,
                click: () =>
                {
                    this.state.toggle('checked');

                    if (typeof this.checked === 'function')
                    {
                        this.checked(this.state.checked);
                    }
                }
            }, this.label || ''),
        ])
    }
});
