import { Div, On, Span } from '@base-framework/atoms';
import { calculateWeekNumber, getNextMonthDays, getPreviousMonthDays } from './utils.js';
import { WeekCell } from './week-cell.js';

/**
 * Generate a Sunday-based calendar grid for the given month/year.
 * Then for each 7-day row, compute an ISO weekNumber + year via `calculateWeekNumber`.
 *
 * @param {number} year
 * @param {number} month
 * @returns {Array<Object>} - Array of week objects: { weekNumber, year, days: Date[] }
 */
const generateWeeks = (year, month) =>
{
    const firstDayOfMonth = new Date(year, month, 1).getDay(); // 0=Sun,1=Mon,...
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // total days in the month

    const previousMonthDays = getPreviousMonthDays(year, month, firstDayOfMonth);
    const currentMonthDays = Array.from({ length: daysInMonth }, (_, i) => new Date(year, month, i + 1));

    // leftover is how many days are used up in the grid so far
    const leftover = (previousMonthDays.length + currentMonthDays.length) % 7;
    // how many days needed from next month to complete the last 7-day row
    const remainingDays = leftover === 0 ? 0 : (7 - leftover);

    const nextMonthDays = getNextMonthDays(year, month, remainingDays);

    // Combine everything into a single array of Date objects
    const allDays = [...previousMonthDays, ...currentMonthDays, ...nextMonthDays];

    // Split into weeks (rows of 7 days)
    const weeks = [];
    for (let i = 0; i < allDays.length; i += 7)
    {
        const week = allDays.slice(i, i + 7);
        // If none of the days is valid, fallback to any date from this month to keep stable
        const referenceDate = week.find((day) => day) || new Date(year, month, 1);
        const { weekNumber, year: isoYear } = calculateWeekNumber(referenceDate);

        weeks.push({
            weekNumber,
            year: isoYear,
            days: week,
        });
    }
    return weeks;
};

/**
 * WeekCells
 *
 * Renders the rows of the calendar (each row is one 'week').
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

        return Div({ class: 'grid grid-cols-8 gap-1 text-sm px-4 py-2' },
        [
            // Header row: "Week" label + day-of-week labels
            Div({ class: 'text-xs text-center col-span-1 text-muted-foreground flex items-center' }, 'Week'),
            Div({
                class: 'grid grid-cols-7 col-span-7 text-center text-muted-foreground items-center'
            },
            ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((dayLabel) =>
                Span({ class: 'px-1 py-1', text: dayLabel })
            )),

            // Render each "week" row
            ...weeks.map(({ weekNumber, days, year: weekYear }) =>
                Div({
                    class: 'grid grid-cols-8 col-span-8 items-center ring-primary rounded-sm px-1',
                    onSet: ['currentWeek', {
                        'ring': weekNumber,
                    }]
                }, [
                    // Left column: ISO week number
                    Div({
                        class: 'font-medium text-center col-span-1 rounded-sm cursor-pointer',
                        click: () => selectWeek(weekNumber, weekYear),
                        // If you have a 'currentWeek' state, you can highlight it with 'onSet'
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