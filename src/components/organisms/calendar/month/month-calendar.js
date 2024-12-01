import { Div, Span } from '@base-framework/atoms';
import { CalendarCells } from './calendar-cells.js';
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
    Div({ class: 'flex flex-auto min-h-12 text-sm font-medium relative justify-center items-center' }, [
        Span('[[monthName]] [[current.year]]'),
        NavigationButton({
            label: 'Previous',
            click: previous
        }),
        NavigationButton({
            label: 'Next',
            click: next
        })
    ])
);

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
        Div({ class: 'flex flex-auto flex-col w-full', onSet: ['currentDate', () => [
                Div({ class: 'grid grid-cols-7' }, HeaderCells()),
                Div({ class: 'grid grid-cols-7' }, CalendarCells(
                    props.current,
                    props.today,
                    props.select
                ))
            ]]
        })
    ])
);
