import { Button } from '@base-framework/atoms';

/**
 * This will get the class for today.
 *
 * @param {boolean} isToday - Indicates if the day is today.
 * @returns {string}
 */
const getTodayClass = (isToday) => (isToday ? 'bg-accent text-primary' : '');

/**
 * This will get the class for outside month.
 *
 * @param {boolean} isOutsideMonth
 * @returns {string}
 */
const getOutsideMonthClass = (isOutsideMonth) => (isOutsideMonth ? 'text-muted-foreground opacity-50' : '');

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
const getCurrentDateClass = (currentDate, date) => (isCurrentDate(currentDate, date) ? 'bg-primary text-primary-foreground' : '');

/**
 * Get the classes for the day cell.
 *
 * @param {boolean} isToday - Indicates if the day is today.
 * @param {string} currentDate - The current date.
 * @param {boolean} isOutsideMonth - Indicates if the day is outside the month.
 * @param {string} date - The date to compare.
 * @returns {string}
 */
const getClasses = (isToday, currentDate, isOutsideMonth, date) =>
{
    const currentDateClass = getCurrentDateClass(currentDate, date);
    if (currentDateClass)
    {
        return currentDateClass;
    }

    const todayClass = getTodayClass(isToday);
    if(isToday)
    {
        return todayClass;
    }

    const outsideMonthClass = getOutsideMonthClass(isOutsideMonth);
    if(isOutsideMonth)
    {
        return outsideMonthClass;
    }
    return 'text-foreground';
};

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
        ${getClasses(isToday, currentDate, isOutsideMonth, date)}
        hover:bg-muted/50 focus:z-10
      `,
            disabled: day === null,
            'aria-label': day ? `Day ${day}` : null,
            click: () => select(date),
        },
        day.toString()
    )
);