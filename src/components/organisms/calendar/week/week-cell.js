import { Button } from '@base-framework/atoms';

/**
 * Determines if the given date is the current day.
 *
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @returns {boolean}
 */
const isDayCurrentDay = (day, month, year) =>
{
    const current = new Date();
    return current.getDate() === day && current.getMonth() === month && current.getFullYear() === year;
};

/**
 * WeekCell
 *
 * A single button representing a day in the week.
 *
 * @param {object} props
 * @returns {object}
 */
export const WeekCell = ({ day, week, month, year, currentWeek, currentDate, selectWeek }) =>
{
    const isCurrentDay = isDayCurrentDay(day, month, year);
    const isCurrentWeek = week.some((date) => date?.getDate() === currentDate);

    return Button({
        text: day || '',
        disabled: !day,
        class: `
            px-2 py-1 text-center rounded-md
            ${isCurrentDay ? 'bg-accent text-accent-foreground' : ''}
            ${isCurrentWeek && !isCurrentDay ? 'border border-accent' : ''}
            hover:bg-primary hover:text-primary-foreground
        `,
        click: () => selectWeek(currentWeek),
    });
};
