import { Div, Span } from '@base-framework/atoms';
import { DayCell } from './day-cell.js';
import { DayHeader } from './day-header.js';
import { NavigationButton } from './navigation-button.js';

/**
 * This will create the calendar header.
 *
 * @param {object} props
 * @param {function} next
 * @param {function} previous
 * @returns {object}
 */
const CalendarHeader = ({ next, previous }) => (
    Div({ class: 'text-sm font-medium text-center relative items-center' }, [
        Span('[[monthName]] [[current.year]]'),
        NavigationButton({
            label: 'Previous',
            click: () => previous
        }),
        NavigationButton({
            label: 'Next',
            click: next
        })
    ])
);

/**
 * This will create the calendar cells.
 *
 * @param {number} month
 * @param {number} year
 * @param {object} today
 * @returns {object}
 */
const CalendarCells = (month, year, today) =>
{
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const prevMonthDays = new Date(year, month, 0).getDate();

    const cells = [];

    // Previous month's last days
    for (let i = firstDay - 1; i >= 0; i--)
    {
        cells.push(
            DayCell({
                day: prevMonthDays - i,
                isOutsideMonth: true,
            })
        );
    }

    // Current month's days
    for (let day = 1; day <= daysInMonth; day++)
    {
        const isToday =
        day === today.date &&
        month === today.month &&
        year === today.year;

        cells.push(
            DayCell({
                day,
                isToday,
                isOutsideMonth: false,
            })
        );
    }

    // Next month's first days to fill the last week
    const totalCells = cells.length;
    const nextMonthDays = (7 - (totalCells % 7)) % 7;
    for (let i = 1; i <= nextMonthDays; i++)
    {
        cells.push(
            DayCell({
                day: i,
                isOutsideMonth: true,
            })
        );
    }

    return cells;
};

/**
 * This will create the month header row.
 *
 * @returns {object}
 */
const HeaderCells = () =>
{
    const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    return daysOfWeek.map(DayHeader);
};

/**
 * This will create the month calendar.
 *
 * @param {object} props
 * @returns {object}
 */
export const MonthCalendar = (props) => (
    Div({ class: 'rdp w-full space-y-1' }, [
        CalendarHeader({
            next: props.next,
            previous: props.previous
        }),
        Div({ class: 'grid grid-cols-7' }, HeaderCells()),
        Div({ class: 'grid grid-cols-7' }, CalendarCells(
            props.current.month,
            props.current.year,
            props.today
        )),
    ])
);
