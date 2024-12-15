import { Div, On, Span } from '@base-framework/atoms';
import { calculateWeekNumber, getNextMonthDays, getPreviousMonthDays } from './utils.js';
import { WeekCell } from './week-cell.js';

/**
 * Generate weeks for the given month and year.
 *
 * @param {number} year
 * @param {number} month
 * @returns {Array<Object>} - Array of weeks, where each week is an object { weekNumber, days }.
 */
const generateWeeks = (year, month) =>
{
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const previousMonthDays = getPreviousMonthDays(year, month, firstDayOfMonth);
    const currentMonthDays = Array.from({ length: daysInMonth }, (_, i) => new Date(year, month, i + 1));

    // How many days are needed to complete the last row to make a full 7-day week
    const leftover = (previousMonthDays.length + currentMonthDays.length) % 7;
    const remainingDays = leftover === 0 ? 0 : (7 - leftover);

    const nextMonthDays = getNextMonthDays(year, month, remainingDays);

    const allDays = [...previousMonthDays, ...currentMonthDays, ...nextMonthDays];

    const weeks = [];
    for (let i = 0; i < allDays.length; i += 7)
    {
        const week = allDays.slice(i, i + 7);
        const weekDetails = calculateWeekNumber(week.find((day) => day) || new Date(year, month, 1));

        weeks.push({
            weekNumber: weekDetails.weekNumber,
            year: weekDetails.year,
            days: week,
        });
    }
    return weeks;
};

/**
 * WeekCells
 *
 * Generates weeks for a given month from the data store and renders them using <WeekCell>.
 *
 * @param {object} props
 * @returns {object}
 */
export const WeekCells = ({ selectWeek }) =>
{
    return On('month', (/* newMonthValue */ value, ele, { data }) =>
    {
        const { year, month, currentDate } = data;
        const weeks = generateWeeks(year, month);

        return Div({ class: 'grid grid-cols-8 gap-1 text-sm px-4 py-2' },
        [
            // Header row: "Week" label + day-of-week labels
            Div({ class: 'text-xs text-center col-span-1 text-muted-foreground flex items-center' }, 'Week'),
            Div({
                class: 'grid grid-cols-7 col-span-7 text-center text-muted-foreground items-center'
            }, ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((dayLabel) =>
                Span({ class: 'px-1 py-1', text: dayLabel })
            )),

            // Render each week's row
            ...weeks.map(({ weekNumber, days, year: weekYear }) =>
                Div({ class: 'grid grid-cols-8 col-span-8 items-center' },
                [
                    // Left column: week number
                    Div({
                        class: 'font-medium text-center col-span-1 rounded-sm cursor-pointer',
                        click: () => selectWeek(weekNumber, weekYear),
                        // You can style the "currentWeek" logic if needed:
                        onSet: ['currentWeek', {
                            'text-primary-foreground': weekNumber,
                            'bg-primary': weekNumber,
                        }],
                        text: weekNumber ? `W${weekNumber}` : '',
                    }),

                    // The 7 cells for each day in the row
                    Div({ class: 'grid grid-cols-7 col-span-7 text-center' },
                        days.map((day) =>
                            WeekCell({
                                year: day?.getFullYear() || null,
                                month: day?.getMonth() || null,
                                day: day?.getDate() || null,
                                week: days,
                                weekNumber,
                                currentDate,
                                selectWeek,
                            })
                        )
                    ),
                ])
            ),
        ]);
    });
};