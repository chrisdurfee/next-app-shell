import { Button, Div, I, Input, OnState, Span } from '@base-framework/atoms';
import { DateTime } from '@base-framework/base';
import { Veil, VeilJot } from '../../atoms/veil.js';
import { Icons } from '../../icons/icons.js';
import { Calendar } from '../../organisms/calendar/calendar.js';
import { PopOver } from '../popover.js';

/**
 * This will create a hidden input atom.
 *
 * @param {object} props
 * @returns {object}
 */
const HiddenImput = ({ bind, required }) => (
    Input({
        cache: 'input',
        class: 'opacity-0 absolute top-0 left-0 w-full h-full pointer-events-none',
        bind,
        required
    })
);

/**
 * This will toggle the open state of the calendar.
 *
 * @param {object} props
 * @returns {object}
 */
const CalendarButton = ({ bind, required, toggleOpen }) => (
    Button({
        class: 'relative flex items-center gap-2 w-full justify-between border border-input bg-background hover:bg-muted rounded-md h-10 px-4 py-2',
        click: toggleOpen,
    }, [
        HiddenImput({ bind, required }),
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
    Div({ class: 'absolute mt-1 z-10 bg-background rounded-md shadow-lg' }, [
        OnState('open', (value, ele, parent ) => (!value)
            ? null
            : new PopOver({
                cache: 'dropdown',
                parent: parent,
                button: parent.panel,
                size: 'fit'
            }, [
                new Calendar({
                    selectedDate: parent.state.selectedDate,
                    selectedCallBack: handleDateSelect
                })
            ])
        )
    ])
);

/**
 * DatePicker Atom
 *
 * This will create a date picker component.
 *
 * @class
 * @extends {Veil}
 */
export const DatePicker = VeilJot(
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
     * This is added to check the input after the component is rendered.
     * to see if the bind updated the input value.
     *
     * @returns {void}
     */
    after()
    {
        this.state.selectedDate = this.input.value;
    },

    /**
     * Renders the DatePicker component.
     *
     * @returns {object}
     */
    render()
    {
        const toggleOpen = (e, { state }) => state.toggle('open');
        const handleDateSelect = (date) =>
        {
            this.state.selectedDate = date;
            this.state.open = false;
            this.input.value = date;

            if (typeof this.onChange === 'function')
            {
                this.onChange(date);
            }
        };

        return Div({ class: 'relative w-full max-w-[320px]' }, [
            CalendarButton({
                toggleOpen,
                bind: this.bind,
                required: this.required
            }),
            CalendarContainer({
                handleDateSelect
            })
        ]);
    }
});

export default DatePicker;
