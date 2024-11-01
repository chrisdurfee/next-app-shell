import { FormatDate } from '../utils.js';
import { DayCell } from './day-cell.js';

/**
 * This will check if the date is today.
 *
 * @param {string|number} day
 * @param {string|number} month
 * @param {string|number} year
 * @param {object} today
 * @returns {boolean}
 */
const isDateToday = (day, month, year, today) =>
    day === today.date &&
    month === today.month &&
    year === today.year;

/**
 * This will create the calendar cells.
 *
 * @param {object} current
 * @param {object} today
 * @param {function} selectCallBack
 * @returns {object}
 */
export const CalendarCells = (current, today, selectCallBack) =>
{
    const { year, month } = current;
    const selectedDate = FormatDate(year, month, current.date);
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const prevMonthDays = new Date(year, month, 0).getDate();

    const cells = [];

    const prevMonth = month === 0 ? 11 : month - 1;
    const prevYear = month === 0 ? year - 1 : year;

    // Previous month's last days
    for (let i = firstDay - 1; i >= 0; i--)
    {
        const isToday = isDateToday(prevMonthDays - i, prevMonth, prevYear, today);

        cells.push(
            DayCell({
                day: prevMonthDays - i,
                currentDate: selectedDate,
                date: FormatDate(prevYear, prevMonth, prevMonthDays - i),
                isToday,
                isOutsideMonth: true,
                select: selectCallBack
            })
        );
    }

    // Current month's days
    for (let day = 1; day <= daysInMonth; day++)
    {
        const isToday = isDateToday(day, month, year, today);

        cells.push(
            DayCell({
                day,
                currentDate: selectedDate,
                date: FormatDate(year, month, day),
                isToday,
                isOutsideMonth: false,
                select: selectCallBack
            })
        );
    }

    // get next month and year
    const nextMonth = month === 11 ? 0 : month + 1;
    const nextYear = month === 11 ? year + 1 : year;

    // Next month's first days to fill the last week
    const totalCells = cells.length;
    const nextMonthDays = (7 - (totalCells % 7)) % 7;
    for (let i = 1; i <= nextMonthDays; i++)
    {
        const isToday = isDateToday(i, nextMonth, nextYear, today);

        cells.push(
            DayCell({
                day: i,
                currentDate: selectedDate,
                date: FormatDate(nextYear, nextMonth, i),
                isToday,
                isOutsideMonth: true,
                select: selectCallBack
            })
        );
    }

    return cells;
};
