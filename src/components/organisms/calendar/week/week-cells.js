import { Div } from '@base-framework/atoms';
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
        week.push(day > 0 ? day : null);
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
export const WeekCells = ({ year, month, currentDate, currentWeek, selectWeek }) => {
    const weeks = generateWeeks(year, month);

    return Div({
        class: 'week-selector grid grid-cols-7 gap-2 px-4 py-2',
        map: [weeks, (week, index) =>
            WeekCell({
                index,
                week,
                currentWeek,
                currentDate,
                selectWeek,
            }),
        ],
    });
};