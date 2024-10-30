import { Button, Div, I, Span } from '@base-framework/atoms';
import { Jot } from '@base-framework/base';
import { Icons } from '../../icons/icons.js';
import { Calendar } from '../../organisms/calendar/calendar.js';

/**
 * DatePicker Atom
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
export const DatePicker = Jot(
{
    state: {
        open: false
    },

    /**
     * Renders the DatePicker component.
     *
     * @returns {object}
     */
    render()
    {
        const toggleOpen = (e, { state }) => state.toggle('open');
        const handleDateSelect = (date) => {
            this.state.selectedDate = date;
            this.state.open = false;
        };

        return Div({ class: 'relative w-[200px]' }, [
            Button({
                class: 'flex items-center gap-2 w-full justify-between border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md h-10 px-4 py-2',
                click: toggleOpen,
            }, [
                Span({
                    onState: ['selectedDate', (value) => value ? value.toDateString() : 'Pick a date']
                }),
                I({ html: Icons.calendar.days })
            ]),
            Div({
                class: 'absolute mt-1 z-10 bg-background border rounded-md shadow-lg p-2',
                onState: ['open', (value) => (value ? new Calendar({
                    selectedCallBack: handleDateSelect
                }) : null)]
            })
        ]);
    }
});
