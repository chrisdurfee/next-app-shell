import { Div } from '@base-framework/atoms';

/**
 * This will create a day header for a calendar.
 *
 * @param {string|number} day
 * @returns {object}
 */
export const DayHeader = (day) => (
    Div(
        { class: 'flex items-center justify-center h-9 w-auto text-[0.8rem] font-normal text-muted-foreground' },
        day
    )
);