import { Div } from "@base-framework/atoms";
import { WeekGrid } from "./week-grid.js";
import { WeekHeader } from "./week-header.js";

/**
 * WeekCalendar
 *
 * The week view layout for the calendar page.
 *
 * @param {object} props - Contains current date, today's date, and callback functions.
 * @param {object} props.current - The current date object with properties: year, month, and date.
 * @param {object} props.today - Today's date object with properties: year, month, and date.
 * @param {function} props.previous - Callback to navigate to the previous week.
 * @param {function} props.next - Callback to navigate to the next week.
 * @param {function} props.select - Callback to select a date.
 * @returns {object} A virtual DOM element representing the week calendar.
 */
export const WeekCalendar = (props) =>
{
	return Div({ class: 'flex flex-auto flex-col w-full space-y-1' }, [
		WeekHeader({
			current: props.current,
			today: props.today,
			previous: props.previous,
			next: props.next
		}),
		WeekGrid({
			current: props.current,
			today: props.today,
			select: props.select
		})
	]);
};

export default WeekCalendar;