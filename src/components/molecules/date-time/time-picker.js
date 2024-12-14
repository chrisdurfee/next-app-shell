import { Button, Div, I, Input, OnState, Span } from '@base-framework/atoms';
import { Veil, VeilJot } from '../../atoms/veil.js';
import { Icons } from '../../icons/icons.js';
import { PopOver } from '../popover.js';

/**
 * This will create a hidden input atom for the TimePicker.
 *
 * @param {object} props
 * @returns {object}
 */
const HiddenInput = ({ bind, required }) => (
    Input({
        cache: 'input',
        class: 'opacity-0 absolute top-0 left-0 w-full h-full pointer-events-none',
        bind,
        required
    })
);

/**
 * This will toggle the open state of the time picker.
 *
 * @param {object} props
 * @returns {object}
 */
const TimeButton = ({ bind, required, toggleOpen }) => (
    Button({
        class: 'relative flex items-center gap-2 w-full justify-between border border-input bg-background hover:bg-muted rounded-md h-10 px-4 py-2',
        click: toggleOpen,
    }, [
        HiddenInput({ bind, required }),
        Span({
            onState: ['selectedTime', (value) => value || 'Pick a time']
        }),
        I({ html: Icons.clock })
    ])
);

/**
 * This will create the time picker container.
 *
 * @param {object} props
 * @returns {object}
 */
const TimeContainer = ({ handleTimeSelect }) => (
    Div({ class: 'absolute mt-1 z-10 bg-background rounded-md shadow-lg' }, [
        OnState('open', (value, ele, parent) => (!value)
            ? null
            : new PopOver({
                cache: 'dropdown',
                parent: parent,
                button: parent.panel,
                size: 'fit'
            }, [
                Div({ class: 'flex flex-auto flex-col border rounded-md shadow-md' }, [
                    Div({ class: 'grid grid-cols-3 gap-2 p-4 text-center max-h-[220px] min-w-[240px]' }, [
                        // Hours column
                        Div({ class: 'flex flex-col max-h-[200px] overflow-y-auto' }, Array.from({ length: 12 }, (_, i) => {
                            const hour = (i + 1).toString().padStart(2, '0');
                            return Button({
                                text: hour,
                                class: 'hover:bg-muted/50 rounded-md px-2 py-1',
                                click: () => handleTimeSelect({ hour }),
                                onState: [parent.state, 'hour', {
                                    'bg-muted': hour
                                }]
                            });
                        })),
                        // Minutes column
                        Div({ class: 'flex flex-col max-h-[200px] overflow-y-auto' }, Array.from({ length: 60 }, (_, i) => {
                            const minute = i.toString().padStart(2, '0');
                            return Button({
                                text: minute,
                                class: 'hover:bg-muted/50 rounded-md px-2 py-1',
                                click: () => handleTimeSelect({ minute }),
                                onState: [parent.state, 'minute', {
                                    'bg-muted': minute
                                }]
                            });
                        })),
                        // AM/PM column
                        Div({ class: 'flex flex-col max-h-[200px] overflow-y-auto' }, ['AM', 'PM'].map((meridian) =>
                            Button({
                                text: meridian,
                                class: 'hover:bg-muted/50 rounded-md px-2 py-1',
                                click: () => handleTimeSelect({ meridian }),
                                onState: [parent.state, 'meridian', {
                                    'bg-muted': meridian
                                }]
                            })
                        )),
                    ])
                ])
            ])
        )
    ])
);

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
        const { hour, minute, meridian } = this.parseAndSetTime(selectedTime);

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
            const { hour, minute, meridian } = this.parseAndSetTime(selectedTime);
            this.state.set({
                hour,
                minute,
                meridian,
                selectedTime: this.input.value
            });
        }
    },

    /**
     * Parses a time string (e.g., "02:30 PM", "14:00:00") and assigns hour, minute, and meridian to the state.
     *
     * @param {string|null} time - The time string to parse.
     * @returns {object} - An object with parsed hour, minute, and meridian values.
     */
    parseAndSetTime(time)
    {
        if (!time)
        {
            return {
                hour: null,
                minute: null,
                meridian: null
            };
        }

        // Regex to match "HH:MM AM/PM", "HH:MM:SS AM/PM", or 24-hour time "HH:MM:SS" or "HH:MM"
        const timeRegex = /^(\d{1,2}):(\d{2})(?::(\d{2}))?\s?(AM|PM)?$/i;
        const match = time.match(timeRegex);
        if (!match)
        {
            return {
                hour: null,
                minute: null,
                meridian: null
            };
        }

        let [, hour, minute, , meridian] = match; // Extract components
        hour = parseInt(hour, 10);
        minute = parseInt(minute, 10);

        // Validate hour and minute
        if (hour < 0 || hour > 23 || minute < 0 || minute > 59)
        {
            return {
                hour: null,
                minute: null,
                meridian: null
            };
        }

        // Handle 24-hour format
        if (!meridian)
        {
            if (hour === 0)
            {
                // 24-hour midnight (00:00)
                meridian = 'AM';
                hour = 12;
            }
            else if (hour < 12)
            {
                // Morning in 24-hour format
                meridian = 'AM';
            }
            else if (hour === 12)
            {
                // Noon in 24-hour format
                meridian = 'PM';
            }
            else
            {
                // Convert PM in 24-hour format
                meridian = 'PM';
                hour -= 12;
            }
        }
        else
        {
            // Handle 12-hour format with AM/PM
            meridian = meridian.toUpperCase();
            if (meridian === 'PM' && hour < 12)
            {
                hour += 12; // Convert to 24-hour PM format
            }
            else if (meridian === 'AM' && hour === 12)
            {
                hour = 0; // Convert to 24-hour midnight
            }
        }

        return {
            hour: hour.toString().padStart(2, '0'),
            minute: minute.toString().padStart(2, '0'),
            meridian
        };
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

        return Div({ class: 'relative w-full max-w-[320px]' }, [
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