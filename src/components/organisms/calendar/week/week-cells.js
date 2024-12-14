import { Div, On, Span } from '@base-framework/atoms';
import { calculateWeekNumber } from './utils.js';
import { WeekCell } from './week-cell.js';

/**
 * Generate weeks for the given month and year.
 *
 * @param {number} year
 * @param {number} month
 * @returns {array}
 */
const generateWeeks = (year, month) => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const weeks = [];
    let week = [];

    for (let day = 1 - firstDay; day <= daysInMonth; day++) {
        const currentDate = new Date(year, month, day);
        week.push(day > 0 ? currentDate : null);
        if (week.length === 7 || day === daysInMonth) {
            weeks.push([...week]);
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
export const WeekCells = ({ selectWeek }) => {

    return On('month', (value, ele, {data}) =>
    {
        const { year, month, currentWeek, currentDate } = data;
        const weeks = generateWeeks(year, month);

        return Div({
            class: 'grid grid-cols-8 gap-1 text-sm px-4 py-2',
        }, [
            // Header row for week numbers and days
            Div({ class: 'text-xs text-center col-span-1 text-muted-foreground flex items-center' }, 'Week'),
            Div({
                class: 'grid grid-cols-7 col-span-7 text-center text-muted-foreground items-center',
            }, ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) =>
                Span({ class: 'px-1 py-1', text: day })
            )),

            // Render each week's row
            ...weeks.map((week, index) => {
                const weekNumber = calculateWeekNumber(week.find((day) => day) || new Date(year, month, 1));

                return Div({ class: 'grid grid-cols-8 col-span-8 items-center' }, [
                    Div({
                        class: `font-medium text-center col-span-1 rounded-sm cursor-pointer`,
                        click: () => selectWeek(weekNumber),
                        text: `${weekNumber}`,
                        onSet: ['currentWeek', {
                            'text-primary-foreground': weekNumber,
                            'bg-primary': weekNumber,
                        }]
                    }),
                    Div({
                        class: 'grid grid-cols-7 col-span-7 text-center',
                    }, week.map((day) =>
                        WeekCell({
                            year,
                            month,
                            day: day ? day.getDate() : null,
                            week,
                            currentWeek,
                            currentDate,
                            selectWeek,
                        })
                    )),
                ]);
            }),
        ]);
    });
};
