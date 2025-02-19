import { Div } from "@base-framework/atoms";
import { DayCell } from "../month/day-cell.js";
import { FormatDate } from "../utils.js";

/**
 * getStartOfWeek
 *
 * Calculates the starting date of the week for the provided date.
 *
 * @param {Date} date - The date for which to find the week's start.
 * @returns {Date} The start of the week (Sunday) for the provided date.
 */
const getStartOfWeek = (date) =>
{
	let day = date.getDay();
	let diff = date.getDate() - day;
	return new Date(date.getFullYear(), date.getMonth(), diff);
};

/**
 * WeekGrid
 *
 * Renders a grid layout for the week view by generating day cells for each day of the week.
 *
 * @param {object} props - Contains the current date, today's date, and a select callback.
 * @param {object} props.current - The current date object with properties: year, month, and date.
 * @param {object} props.today - Today's date object.
 * @param {function} props.select - Callback function to handle date selection.
 * @returns {object} A virtual DOM element representing the week grid.
 */
export const WeekGrid = (props) =>
{
	const currentDateObj = new Date(
		props.current.year,
		props.current.month,
		props.current.date
	);
	const startOfWeek = getStartOfWeek(currentDateObj);
	const cells = [];
	for (let i = 0; i < 7; i++)
	{
		const cellDate = new Date(
			startOfWeek.getFullYear(),
			startOfWeek.getMonth(),
			startOfWeek.getDate() + i
		);
		const isToday =
			cellDate.getDate() === props.today.date &&
			cellDate.getMonth() === props.today.month &&
			cellDate.getFullYear() === props.today.year;
		const formattedDate = FormatDate(
			cellDate.getFullYear(),
			cellDate.getMonth(),
			cellDate.getDate()
		);
		const isOutsideMonth = (cellDate.getMonth() !== props.current.month);
		cells.push(
			DayCell({
				day: cellDate.getDate(),
				currentDate: FormatDate(
					props.current.year,
					props.current.month,
					props.current.date
				),
				date: formattedDate,
				isToday: isToday,
				isOutsideMonth: isOutsideMonth,
				select: props.select
			})
		);
	}
	return Div({ class: 'grid grid-cols-7 h-full' }, cells);
};

export default WeekGrid;