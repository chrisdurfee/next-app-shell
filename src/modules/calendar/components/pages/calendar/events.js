import { pad } from "./utils.js";

/**
 * This will get a random day.
 *
 * @returns {number}
 */
const getRandomDay = () => Math.floor(Math.random() * 28) + 1;

/**
 * This will get six random dates.
 *
 * @param {number} month
 * @param {number} year
 * @returns {array}
 */
const getSixedRandomDates = (month, year) =>
{
	const dates = [];
	const MAX_DATES = 6;
	for (let i = 0; i < MAX_DATES; i++)
	{
		dates.push(`_${year}_${pad(month + 1)}_${pad(getRandomDay())}`);
	}

	return dates;
};

/**
 * This will create dynamic events.
 *
 * @param {number|string} month
 * @param {number|string} year
 * @returns {object}
 */
export const createDynamicEvents = (month, year) =>
{
	const dates = getSixedRandomDates(Number(month), Number(year));
	const events = {};
	dates.forEach((date, index) =>
	{
		events[date] = events[date] ?? [];
		const random = Math.floor(Math.random() * 5) + 1;
		for (let i = 0; i < random; i++)
		{
			events[date].push(`Event ${index + 1}.${i + 1}`);
		}
	});

	return events;
};