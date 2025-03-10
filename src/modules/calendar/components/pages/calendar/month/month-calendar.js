import { Div, H2, Header, Span } from "@base-framework/atoms";
import { Button, Tooltip } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";
import { CalendarGrid } from "./calendar-grid.js";

/**
 * CalendarHeader
 *
 * This will create a calendar header with a title, month navigation, and add event button.
 *
 * @param {object} props
 * @returns {object}
 */
const CalendarHeader = (props) => (
	Div({ class: 'justify-between flex items-center mb-4' }, [
		Header({ class: 'inline-flex items-end'}, [
			H2({ class: 'scroll-m-20 text-3xl font-bold tracking-tight md:pl-4' }, '[[monthName]]'),
			Span({ class: 'text-muted-foreground text-base ml-2 font-bold' }, '[[current.year]]')
		]),
		Div({ class: 'flex items-center space-x-2' }, [
			Button({ variant: 'icon', icon: Icons.chevron.single.left, click: props.previous }),
			Button({ variant: 'icon', icon: Icons.chevron.single.right, click: props.next }),
			Tooltip({ content: 'Add Event', position: 'left' }, Button({ variant: 'icon', class: 'lg:mr-4', icon: Icons.circlePlus }))
		])
	])
);

/**
 * This will create the month calendar.
 *
 * @param {object} props
 * @returns {object}
 */
export const MonthCalendar = (props) => (
	Div({ class: 'flex flex-auto flex-col w-full space-y-1' }, [
		CalendarHeader(props),
		CalendarGrid({
			current: props.current,
			today: props.today,
			select: props.select
		})
	])
);