import { Button, Div, I, Span } from '@base-framework/atoms';
import { DateTime, Jot } from '@base-framework/base';
import { Icons } from '../../icons/icons.js';
import { Calendar } from '../../organisms/calendar/calendar.js';

/**
 * DatePicker Atom
 *
 * This will create a date picker component.
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
export const DatePicker = Jot(
{
    /**
     * The initial state of the DatePicker.
     *
     * @member {object} state
     */
    state: {
        selectedDate: null,
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

        return Div({ class: 'relative w-full max-w-[320px]' }, [
            Button({
                class: 'flex items-center gap-2 w-full justify-between border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md h-10 px-4 py-2',
                click: toggleOpen,
            }, [
                Span({
                    onState: ['selectedDate', (value) => value ? DateTime.format('standard', value) : 'Pick a date']
                }),
                I({ html: Icons.calendar.days })
            ]),
            Div({
                class: 'absolute mt-1 z-10 bg-background rounded-md shadow-lg',
                onState: ['open', (value) => (value ? new Calendar({
                    selectedDate: this.selectedDate,
                    selectedCallBack: handleDateSelect
                }) : null)]
            })
        ]);
    }
});

export default DatePicker;
