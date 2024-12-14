import { Div, On, Span } from '@base-framework/atoms';
import { calculateWeekNumber } from './utils.js';
import { WeekCell } from './week-cell.js';

/**
 * Generate weeks for the given month and year.
 *
 * @param {number} year
 * @param {number} month
 * @returns {array} - Array of weeks, where each week is an object containing the week number and days.
 */
const generateWeeks = (year, month) =>
{
    const firstDayOfMonth = new Date(year, month, 1); // First day of the month
    const firstDay = firstDayOfMonth.getDay(); // Day of the week (0 = Sunday, 1 = Monday, etc.)
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // Total days in the month
    const weeks = [];
    let week = [];
    let currentWeekNumber = null;

    for (let day = 1 - firstDay; day <= daysInMonth; day++)
    {
        const currentDate = day > 0 && day <= daysInMonth ? new Date(year, month, day) : null;

        if (currentDate)
        {
            // Calculate ISO week number for the current date
            const weekNumber = calculateWeekNumber(currentDate);

            // If the week number changes or the week is full, push the week
            if (currentWeekNumber !== weekNumber && week.length > 0)
            {
                weeks.push({ weekNumber: currentWeekNumber, days: [...week] });
                week = [];
            }

            currentWeekNumber = weekNumber;
        }

        week.push(currentDate);

        // Push the week if it's full or we're at the end of the month
        if (week.length === 7 || day === daysInMonth)
        {
            weeks.push({ weekNumber: currentWeekNumber, days: [...week] });
            week = [];
        }
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
            const { year, month, currentDate, currentWeek } = data;
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
                            click: () => selectWeek(weekNumber),
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
                                year,
                                month,
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
