import { Button, Div, I, Span } from '@base-framework/atoms';
import { DateTime, Jot } from '@base-framework/base';
import { Icons } from '../../icons/icons.js';
import { Calendar } from '../../organisms/calendar/calendar.js';

/**
 * This will check if the element clicked was in the
 * component of the button.
 *
 * @param {object} element
 * @param {object} panel
 * @returns {boolean}
 */
const isOutsideClick = (element, panel) => (!panel.contains(element));

/**
 * This will toggle the open state of the calendar.
 *
 * @param {object} props
 * @returns {object}
 */
const CalendarButton = ({ toggleOpen }) => (
    Button({
        class: 'flex items-center gap-2 w-full justify-between border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md h-10 px-4 py-2',
        click: toggleOpen,
    }, [
        Span({
            onState: ['selectedDate', (value) => value ? DateTime.format('standard', value) : 'Pick a date']
        }),
        I({ html: Icons.calendar.days })
    ])
);

/**
 * This will create the calendar container.
 *
 * @param {object} props
 * @returns {object}
 */
const CalendarContainer = ({ handleDateSelect }) => (
    Div({
        class: 'absolute mt-1 z-10 bg-background rounded-md shadow-lg',
        addEvent: ['click', document, (e, { state, panel }) =>
        {
            if (isOutsideClick(e.target, panel))
            {
                state.open = false;
            }
        }],
        onState: ['open', (value, ele, { state} ) =>
        {
            if (!value)
            {
                return null;
            }

            return new Calendar({
                selectedDate: state.selectedDate,
                selectedCallBack: handleDateSelect
            });
        }]
    })
);

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
    state()
    {
        return {
            selectedDate: this.selectedDate ?? null,
            open: false
        };
    },

    /**
	 * This will set the component context.
	 *
	 * @param {object|null} context
	 * @returns {object|null}
	 */
	setContext(context)
	{
        if (this.data)
        {
            return null;
        }

        const data = (this?.parent?.data ?? this?.parent?.context?.data ?? null);
        if (!data)
        {
            return null;
        }

		return { data };
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
            CalendarButton({
                toggleOpen
            }),
            CalendarContainer({
                handleDateSelect
            })
        ]);
    }
});

export default DatePicker;
