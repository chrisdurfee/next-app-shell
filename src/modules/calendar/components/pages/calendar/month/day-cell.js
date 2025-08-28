import { A, Div, P, Span } from "@base-framework/atoms";
import { removeHyphens } from "../utils.js";

/**
 * This will get the class for today.
 *
 * @param {boolean} isToday - Indicates if the day is today.
 * @returns {string}
 */
const getTodayClass = (isToday) => (isToday ? 'bg-accent text-primary' : '');

/**
 * This will get the class for outside month.
 *
 * @param {boolean} isOutsideMonth
 * @returns {string}
 */
const getOutsideMonthClass = (isOutsideMonth) => (isOutsideMonth ? 'text-muted-foreground opacity-50' : '');

/**
 * Check if the current date is the same as the date passed.
 *
 * @param {string} currentDate - The current date in string format.
 * @param {string} date - The date to compare.
 * @returns {boolean}
 */
const isCurrentDate = (currentDate, date) => currentDate === date;

/**
 * Get the class for the current date.
 *
 * @param {string} currentDate - The current date in string format.
 * @param {string} date - The date to compare.
 * @returns {string}
 */
const getCurrentDateClass = (currentDate, date) => (isCurrentDate(currentDate, date) ? 'bg-primary text-primary-foreground' : '');

/**
 * Get the classes for the day cell.
 *
 * @param {boolean} isToday - Indicates if the day is today.
 * @param {string} currentDate - The current date.
 * @param {boolean} isOutsideMonth - Indicates if the day is outside the month.
 * @param {string} date - The date to compare.
 * @returns {string}
 */
const getClasses = (isToday, currentDate, isOutsideMonth, date) =>
{
	const currentDateClass = getCurrentDateClass(currentDate, date);
	if (currentDateClass)
	{
		return currentDateClass;
	}

	const todayClass = getTodayClass(isToday);
	if(isToday)
	{
		return todayClass;
	}

	const outsideMonthClass = getOutsideMonthClass(isOutsideMonth);
	if(isOutsideMonth)
	{
		return outsideMonthClass;
	}
	return 'text-foreground';
};

/**
 * This will render an event.
 *
 * @param {object} event
 * @returns {object}
 */
const Event = (event) => Span({ class: 'bg-primary w-1 h-1 rounded-full m-[2px]' });

/**
 * This will render a desktop event.
 *
 * @param {object} event
 * @returns {object}
 */
const DesktopEvent = (event, index) =>
{
	const MAX_EVENTS = 3;
	if(index === MAX_EVENTS)
	{
		return Span({ class: 'px-1 border rounded-md text-sm text-muted-foreground bg-secondary' }, '...');
	}

	if (index > MAX_EVENTS)
	{
		return null;
	}

	return Span({ class: 'px-1 border rounded-md text-sm text-muted-foreground bg-secondary' }, event);
};

/**
 * This will render a day cell in a calendar.
 *
 * @param {object} props - The properties for the day cell.
 * @returns {object}
 */
export const DayCell = ({ day, currentDate, date, isToday, isOutsideMonth, select }) => (
	A(
		{
			href: '/calendar/month/' + date,
			class: `
		flex flex-auto flex-col p-2 rounded-md
		hover:bg-muted/50 focus:z-10 items-center lg:items-start
	  `,
			disabled: day === null,
			'aria-label': day ? `Day ${day}` : null,
			click: () => select(date),
		},
		[
			Div({ class: 'flex items-center justify-center w-full' }, [
				P({ class: `p-2 rounded-lg text-sm font-medium ${getClasses(isToday, currentDate, isOutsideMonth, date)}` }, String(day))
			]),
			Div({
				class: 'flex lg:hidden flex-row flex-wrap mt-[8px]',
				for: [`events._${removeHyphens(date)}`, Event]
			}),
			Div({
				class: 'hidden lg:flex flex-col gap-y-1',
				for: [`events._${removeHyphens(date)}`, DesktopEvent]
			})
		]
	)
);
