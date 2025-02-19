import { A, Div, P } from "@base-framework/atoms";

/**
 * getTodayClass
 *
 * Returns the CSS classes if the provided date is today.
 *
 * @param {boolean} isToday - Indicates if the date is today.
 * @returns {string} The CSS classes for today's cell.
 */
const getTodayClass = (isToday) =>
{
	return isToday ? "bg-accent text-primary" : "";
};

/**
 * isCurrentDate
 *
 * Checks if the provided date string matches the current date string.
 *
 * @param {string} currentDate - The current date in YYYY-MM-DD format.
 * @param {string} date - The date to compare in YYYY-MM-DD format.
 * @returns {boolean} True if both dates match, otherwise false.
 */
const isCurrentDate = (currentDate, date) => currentDate === date;

/**
 * getCurrentDateClass
 *
 * Returns the CSS classes if the provided date matches the current date.
 *
 * @param {string} currentDate - The current date in YYYY-MM-DD format.
 * @param {string} date - The date to compare.
 * @returns {string} The CSS classes if it's the current date, otherwise empty.
 */
const getCurrentDateClass = (currentDate, date) =>
{
	return isCurrentDate(currentDate, date) ? "bg-primary text-primary-foreground" : "";
};

/**
 * getClasses
 *
 * Determines the CSS classes for the week-day cell container.
 *
 * @param {boolean} isToday - Whether this cell is for today's date.
 * @param {string} currentDate - The currently selected date (YYYY-MM-DD).
 * @param {boolean} isOutsideMonth - Whether this date is outside the current month.
 * @param {string} date - The date for this cell.
 * @returns {string} Combined CSS classes for styling.
 */
const getClasses = (isToday, currentDate, isOutsideMonth, date) =>
{
	// If it's the currently selected date, highlight it:
	const currentDateClass = getCurrentDateClass(currentDate, date);
	if (currentDateClass)
	{
		return currentDateClass;
	}

	// Otherwise, if it's today, highlight differently:
	if (isToday)
	{
		return getTodayClass(true);
	}

	// If outside the current month, show it as muted:
	if (isOutsideMonth)
	{
		return "text-muted-foreground opacity-50";
	}

	// Default text color for a normal day in the week:
	return "text-foreground";
};

/**
 * formatHour
 *
 * Converts a 24-hour number into a display-friendly label.
 * For example, 0 -> "12 AM", 13 -> "1 PM", etc.
 *
 * @param {number} hour - The hour in 24-hour format (0-23).
 * @returns {string} A formatted hour label (12-hour format).
 */
const formatHour = (hour) =>
{
	// 12-hour logic
	const suffix = hour < 12 ? "AM" : "PM";
	let displayHour = hour % 12;
	if (displayHour === 0) displayHour = 12; // handle midnight/noon
	return `${displayHour} ${suffix}`;
};

/**
 * HourBlock
 *
 * Renders a single hour block within the day column, including any events matching that hour.
 *
 * @param {object} props - Properties for this hour block.
 * @param {number} props.hour - The hour in 24-hour format (0-23).
 * @param {string} props.date - The date in YYYY-MM-DD format.
 * @returns {object} A virtual DOM element representing one hour row in the day column.
 */
const HourBlock = ({ hour, date }) =>
{
	return Div(
		{ class: "relative h-16 flex flex-col px-2 py-1 hover:bg-muted/20" },
		[
			// Hour label on the left or top
			P({ class: "text-xs text-muted-foreground" }, formatHour(hour)),

			// A container for events. The "for" syntax will loop over the events
			// for this specific date and hour. For example, if your events object
			// is shaped like: events._yyyy_mm_dd.[hour] = [ "Event 1", "Event 2" ]
			// then we can reference that array by `events._${removeHyphens(date)}.${hour}`.
			Div({
				class: "flex flex-col gap-1 mt-1",
				// for: [`events._${removeHyphens(date)}.${hour}`, (event) =>
				// {
				// 	return Span({ class: "bg-secondary text-sm px-1 py-0.5 rounded" }, event);
				// }]
			})
		]
	);
};

/**
 * WeekDayCell
 *
 * A specialized day cell component for the week view. It displays a column
 * of 24 hourly blocks, placing any events in their respective hour slots.
 *
 * @param {object} props - The properties for the day cell.
 * @param {string} props.date - The date in YYYY-MM-DD format.
 * @param {boolean} props.isToday - Indicates if this date is today.
 * @param {boolean} props.isOutsideMonth - Indicates if the date is outside the current month.
 * @param {string} props.currentDate - The currently selected date in YYYY-MM-DD format.
 * @param {function} props.select - Callback to select the date.
 * @returns {object} A virtual DOM element representing a day column with hourly blocks.
 */
export const WeekDayCell = ({ date, isToday, isOutsideMonth, currentDate, select }) =>
{
	// The top label (e.g. day of month) can be extracted from the date string if you wish
	// or you can pass it in as a separate prop. For example:
	const dayLabel = date.split("-")[2]; // naive extraction of the day (DD) portion

	return A(
		{
			href: "/calendar/week/" + date,
			class: `
				flex flex-col hover:bg-muted/20
				focus:z-10 border-r
			`,
			click: () => select(date)
		},
		[
			// The date label at the top
			Div({ class: `p-2 text-sm font-semibold text-center border-b ${getClasses(isToday, currentDate, isOutsideMonth, date)}` }, dayLabel),

			// Hour blocks from 0..23
			Div(
				{ class: "flex flex-col flex-1 overflow-y-auto" },
				Array.from({ length: 24 }, (_, hour) =>
				{
					return HourBlock({ hour, date });
				})
			)
		]
	);
};

export default WeekDayCell;