import { Button } from '@base-framework/atoms';

/**
 * This will get the class for today.
 *
 * @param {boolean} isToday - Indicates if the day is today.
 * @returns {string}
 */
const getTodayClass = (isToday) => (isToday ? 'bg-primary text-primary-foreground' : '');

/**
 * This will get the class for outside month.
 *
 * @param {boolean} isOutsideMonth
 * @returns {string}
 */
const getOutsideMonthClass = (isOutsideMonth) => (isOutsideMonth ? 'text-muted-foreground opacity-50' : 'text-foreground');

/**
 * Check if the current date is the same as the date passed.
 *
 * @param {string} currentDate - The current date in string format.
 * @param {string} date - The date to compare.
 * @returns {boolean}
 */
const isCurrentDate = (currentDate, date) => currentDate === date;

/**
 * Get the class for the current date.
 *
 * @param {string} currentDate - The current date in string format.
 * @param {string} date - The date to compare.
 * @returns {string}
 */
const getCurrentDateClass = (currentDate, date) => (isCurrentDate(currentDate, date) ? 'bg-accent text-accent-foreground' : '');

/**
 * This will render a day cell in a calendar.
 *
 * @param {object} props - The properties for the day cell.
 * @returns {object}
 */
export const DayCell = ({ day, currentDate, date, isToday, isOutsideMonth, select }) => (
    Button(
        {
            class: `
        flex items-center justify-center h-9 w-auto p-0 font-normal text-sm rounded-md
        ${getTodayClass(isToday)}
        ${getOutsideMonthClass(isOutsideMonth)}
        ${getCurrentDateClass(currentDate, date)}
        hover:bg-accent hover:text-accent-foreground focus:z-10
      `,
            disabled: day === null,
            'aria-label': day ? `Day ${day}` : null,
            click: () => select(date),
        },
        day.toString()
    )
);