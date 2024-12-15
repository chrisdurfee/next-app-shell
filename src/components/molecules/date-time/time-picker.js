import { Button, Div, I, Input, OnState, Span } from '@base-framework/atoms';
import { Veil, VeilJot } from '../../atoms/veil.js';
import { Icons } from '../../icons/icons.js';
import { PopOver } from '../popover.js';

/**
 * Hidden input for the TimePicker.
 *
 * @param {object} props
 * @returns {object}
 */
function HiddenInput({ bind, required })
{
    return Input({
        cache: 'input',
        class: 'opacity-0 absolute top-0 left-0 w-full h-full pointer-events-none',
        bind,
        required
    });
}

/**
 * Button that toggles the time picker popover.
 *
 * @param {object} props
 * @returns {object}
 */
function TimeButton({ bind, required, toggleOpen })
{
    return Button({
        class: 'relative flex items-center gap-2 w-full justify-between border border-input bg-background hover:bg-muted rounded-md h-10 px-4 py-2',
        click: toggleOpen,
    },
    [
        HiddenInput({ bind, required }),
        Span({
            onState: ['selectedTime', (value) => value || 'Pick a time']
        }),
        I({ html: Icons.clock })
    ]);
}

/**
 * A generic time-column that lists hours, minutes, or meridians.
 *
 * @param {object} props
 * @returns {object}
 */
function TimeColumn({ items, handleTimeSelect, state, stateValue, pad = false })
{
    return Div({ class: 'flex flex-col max-h-[200px] overflow-y-auto' },
        items.map((item) =>
        {
            let displayItem = pad
                ? item.toString().padStart(2, '0')
                : item.toString();

            return Button({
                text: displayItem,
                class: 'hover:bg-muted/50 rounded-md px-2 py-1',
                click: () => handleTimeSelect({ [stateValue]: displayItem }),
                onState: [state, stateValue, { 'bg-muted': displayItem }]
            });
        })
    );
}

/**
 * Container and wrapper logic for the time columns (Hours, Minutes, AM/PM).
 *
 * @param {object} props
 * @returns {object}
 */
function TimeContainer({ handleTimeSelect })
{
    return Div({ class: 'absolute mt-1 z-10 bg-background rounded-md shadow-lg' },
    [
        OnState('open', (value, ele, parent) =>
            !value
                ? null
                : new PopOver({
                    cache: 'dropdown',
                    parent: parent,
                    button: parent.panel,
                    size: 'fit'
                },
                [
                    Div({ class: 'flex flex-auto flex-col border rounded-md shadow-md' },
                    [
                        Div({ class: 'grid grid-cols-3 gap-2 p-4 text-center max-h-[220px] min-w-[240px]' },
                        [
                            // Hours column
                            TimeColumn({
                                items: Array.from({ length: 12 }, (_, i) => i + 1),
                                handleTimeSelect,
                                state: parent.state,
                                stateValue: 'hour',
                                pad: true
                            }),
                            // Minutes column
                            TimeColumn({
                                items: Array.from({ length: 60 }, (_, i) => i),
                                handleTimeSelect,
                                state: parent.state,
                                stateValue: 'minute',
                                pad: true
                            }),
                            // AM/PM column
                            TimeColumn({
                                items: ['AM', 'PM'],
                                handleTimeSelect,
                                state: parent.state,
                                stateValue: 'meridian'
                            })
                        ])
                    ])
                ]
            )
        )
    ]);
}

/**
 * Parses a time string (e.g., "02:30 PM", "14:00:00") and returns hour, minute, meridian.
 *
 * @param {string|null} time
 * @returns {{ hour: string|null, minute: string|null, meridian: string|null }}
 */
function parseAndSetTime(time)
{
    if (!time)
    {
        return { hour: null, minute: null, meridian: null };
    }

    // Regex to match "HH:MM AM/PM", "HH:MM:SS AM/PM", or 24-hour time "HH:MM:SS" or "HH:MM"
    const timeRegex = /^(\d{1,2}):(\d{2})(?::(\d{2}))?\s?(AM|PM)?$/i;
    const match = time.match(timeRegex);

    if (!match)
    {
        return { hour: null, minute: null, meridian: null };
    }

    let [, parsedHour, parsedMinute, , parsedMeridian] = match;
    let hour = parseInt(parsedHour, 10);
    let minute = parseInt(parsedMinute, 10);

    // Validate hour and minute
    if (hour < 0 || hour > 23 || minute < 0 || minute > 59)
    {
        return { hour: null, minute: null, meridian: null };
    }

    // If meridian is missing, convert from 24-hour format
    if (!parsedMeridian)
    {
        if (hour === 0)
        {
            parsedMeridian = 'AM';
            hour = 12;
        }
        else if (hour < 12)
        {
            parsedMeridian = 'AM';
        }
        else if (hour === 12)
        {
            parsedMeridian = 'PM';
        }
        else
        {
            parsedMeridian = 'PM';
            hour -= 12;
        }
    }
    else
    {
        // Handle user-provided AM/PM
        parsedMeridian = parsedMeridian.toUpperCase();
        if (parsedMeridian === 'PM' && hour < 12)
        {
            hour += 12;
        }
        else if (parsedMeridian === 'AM' && hour === 12)
        {
            hour = 12;
        }
    }

    return {
        hour: hour.toString().padStart(2, '0'),
        minute: minute.toString().padStart(2, '0'),
        meridian: parsedMeridian
    };
}

/**
 * TimePicker Atom
 *
 * This will create a time picker component.
 *
 * @class
 * @extends {Veil}
 */
export const TimePicker = VeilJot(
{
    /**
     * The initial shallow state of the TimePicker.
     *
     * @member {object} state
     */
    state()
    {
        const selectedTime = this.selectedTime ?? null;
        const { hour, minute, meridian } = parseAndSetTime(selectedTime);

        return {
            selectedTime,
            open: false,
            hour,
            minute,
            meridian
        };
    },

    /**
     * Updates the state after the input is rendered.
     *
     * @returns {void}
     */
    after()
    {
        if (this.input.value)
        {
            const { hour, minute, meridian } = parseAndSetTime(this.input.value);

            this.state.set({
                hour,
                minute,
                meridian,
                selectedTime: this.input.value
            });
        }
    },

    /**
     * Renders the TimePicker component.
     *
     * @returns {object}
     */
    render()
    {
        const toggleOpen = (e, { state }) => state.toggle('open');
        const handleTimeSelect = ({ hour, minute, meridian }) =>
        {
            if (hour) this.state.hour = hour;
            if (minute) this.state.minute = minute;
            if (meridian) this.state.meridian = meridian;

            if (this.state.hour && this.state.minute && this.state.meridian)
            {
                const formattedTime = `${this.state.hour}:${this.state.minute} ${this.state.meridian}`;
                this.state.selectedTime = formattedTime;
                this.state.open = false;
                this.input.value = formattedTime;

                if (typeof this.change === 'function')
                {
                    this.change(formattedTime);
                }
            }
        };

        return Div({ class: 'relative w-full max-w-[320px]' },
        [
            TimeButton({
                toggleOpen,
                bind: this.bind,
                required: this.required
            }),
            TimeContainer({
                handleTimeSelect
            })
        ]);
    }
});

export default TimePicker;