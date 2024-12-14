import { Div, On, Span } from '@base-framework/atoms';
import { calculateWeekNumber, getNextMonthDays, getPreviousMonthDays } from './utils.js';
import { WeekCell } from './week-cell.js';

/**
 * Generate weeks for the given month and year.
 *
 * @param {number} year
 * @param {number} month
 * @returns {Array<Object>} - Array of weeks, where each week is an object containing the week number and days.
 */
const generateWeeks = (year, month) =>
{
    const firstDayOfMonth = new Date(year, month, 1).getDay(); // Day of the week (0 = Sunday, 1 = Monday, etc.)
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // Total days in the month

    // Gather all days (including from previous and next months) into a flat array
    const previousMonthDays = getPreviousMonthDays(year, month, firstDayOfMonth);
    const currentMonthDays = Array.from({ length: daysInMonth }, (_, i) => new Date(year, month, i + 1));
    const remainingDays = 7 - ((previousMonthDays.length + currentMonthDays.length) % 7 || 7);
    const nextMonthDays = getNextMonthDays(year, month, remainingDays);

    // Combine all days into a flat array
    const allDays = [...previousMonthDays, ...currentMonthDays, ...nextMonthDays];

    // Split the flat array into weeks of 7 days
    const weeks = [];
    for (let i = 0; i < allDays.length; i += 7)
    {
        const week = allDays.slice(i, i + 7);
        weeks.push({
            weekNumber: calculateWeekNumber(week.find((day) => day) || new Date(year, month, 1)),
            days: week,
        });
    }

    return weeks;
};

/**
 * WeekCells
 *
 * Generates weeks for a given month and renders them using `WeekCell`.
 *
 * @param {object} props
 * @returns {object}
 */
export const WeekCells = ({ selectWeek }) =>
{
    return On('month', (value, ele, { data }) =>
    {
        const { year, month, currentDate } = data;
        const weeks = generateWeeks(year, month);

        return Div(
        {
            class: 'grid grid-cols-8 gap-1 text-sm px-4 py-2',
        }, [
            // Header row for week numbers and days
            Div({ class: 'text-xs text-center col-span-1 text-muted-foreground flex items-center' }, 'Week'),
            Div(
            {
                class: 'grid grid-cols-7 col-span-7 text-center text-muted-foreground items-center',
            }, ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) =>
                Span({ class: 'px-1 py-1', text: day })
            )),

            // Render each week's row
            ...weeks.map(({ weekNumber, days }) =>
            {
                return Div(
                {
                    class: 'grid grid-cols-8 col-span-8 items-center',
                }, [
                    // Week number column
                    Div(
                    {
                        class: `font-medium text-center col-span-1 rounded-sm cursor-pointer`,
                        click: () => selectWeek(weekNumber, year),
                        onSet: ['currentWeek', {
                            'text-primary-foreground': weekNumber,
                            'bg-primary': weekNumber,
                        }],
                        text: weekNumber ? `W${weekNumber}` : '',
                    }),
                    // Days of the week
                    Div(
                    {
                        class: 'grid grid-cols-7 col-span-7 text-center',
                    }, days.map((day) =>
                        WeekCell({
                            year: day ? day.getFullYear() : null,
                            month: day ? day.getMonth() : null,
                            day: day ? day.getDate() : null,
                            week: days,
                            weekNumber,
                            currentDate,
                            selectWeek,
                        })
                    )),
                ]);
            }),
        ]);
    });
};
