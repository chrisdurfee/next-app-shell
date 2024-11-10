import { Div, P } from "@base-framework/atoms";

/**
 * CalendarDay
 *
 * This component represents an individual day in the month view.
 *
 * @param {object} props - Contains the day number and any event data.
 * @returns {object}
 */
const CalendarDay = ({ day, isCurrentMonth, events = [] }) => (
    Div({
        class: `flex flex-col p-2 h-20 rounded-md ${isCurrentMonth ? '' : 'bg-muted text-muted-foreground'}`
    }, [
        P({ class: 'text-sm font-medium' }, String(day)), // Day number
        //...events.map(event => P({ class: 'text-xs truncate text-accent font-semibold mt-1' }, event))
    ])
);

/**
 * CalendarGrid
 *
 * The main grid layout for displaying the days of the month in a 7-column grid.
 *
 * @returns {object}
 */
export const CalendarGrid = () => (
    Div({ class: 'grid grid-cols-7 gap-2' }, [
        // Days of the week header
        ...['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day =>
            P({ class: 'text-center font-semibold text-muted-foreground' }, day)
        ),
        // Placeholder data for days of the month
        ...Array.from({ length: 42 }, (_, index) => {
            const day = index + 1 - new Date().getDay(); // Calculate day
            const isCurrentMonth = day > 0 && day <= 31; // Simplified check for March
            return CalendarDay({ day: isCurrentMonth ? day : '', isCurrentMonth });
        })
    ])
);

export default CalendarGrid;