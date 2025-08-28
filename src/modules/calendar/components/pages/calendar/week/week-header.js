import { Div, H2, Header, Span } from "@base-framework/atoms";
import { DateTime } from "@base-framework/base";
import { Button, Tooltip } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";

/**
 * getStartOfWeek
 *
 * Calculates the start of the week for the given date.
 *
 * @param {Date} date - The date to calculate from.
 * @returns {Date} The start of the week (Sunday) for the provided date.
 */
const getStartOfWeek = (date) =>
{
	let day = date.getDay();
	let diff = date.getDate() - day;
	return new Date(date.getFullYear(), date.getMonth(), diff);
};

/**
 * WeekHeader
 *
 * Renders the header for the week view of the calendar, displaying the range of dates and navigation controls.
 *
 * @param {object} props - Contains current date, today's date, and callback functions.
 * @param {object} props.current - The current date object with properties: year, month, and date.
 * @param {object} props.today - Today's date object.
 * @param {function} props.previous - Callback to navigate to the previous week.
 * @param {function} props.next - Callback to navigate to the next week.
 * @returns {object} A virtual DOM element representing the week header.
 */
export const WeekHeader = (props) =>
{
	const currentDateObj = new Date(
		props.current.year,
		props.current.month,
		props.current.date
	);
	const startOfWeek = getStartOfWeek(currentDateObj);
	const endOfWeek = new Date(
		startOfWeek.getFullYear(),
		startOfWeek.getMonth(),
		startOfWeek.getDate() + 6
	);

	let weekRangeString = "";
	if (startOfWeek.getMonth() === endOfWeek.getMonth())
	{
		weekRangeString = DateTime.getMonthName(startOfWeek.getMonth()) + " " +
			startOfWeek.getDate() + " - " + endOfWeek.getDate();
	}
	else
	{
		weekRangeString = DateTime.getMonthName(startOfWeek.getMonth()) + " " +
			startOfWeek.getDate() + " - " + DateTime.getMonthName(endOfWeek.getMonth()) + " " +
			endOfWeek.getDate();
	}

	const year = startOfWeek.getFullYear();

	return Div({ class: 'justify-between flex items-center mb-4' }, [
		Header({ class: 'inline-flex items-end' }, [
			H2({ class: 'scroll-m-20 text-3xl font-bold tracking-tight md:pl-4' }, weekRangeString),
			Span({ class: 'text-muted-foreground text-base ml-2 font-bold' }, String(year))
		]),
		Div({ class: 'flex items-center gap-x-2' }, [
			Button({ variant: 'icon', icon: Icons.chevron.single.left, click: props.previous }),
			Button({ variant: 'icon', icon: Icons.chevron.single.right, click: props.next }),
			Tooltip({ content: 'Add Event', position: 'left' }, Button({ variant: 'icon', class: 'lg:mr-4', icon: Icons.circlePlus }))
		])
	]);
};

export default WeekHeader;
