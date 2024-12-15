/**
 * Calculate the ISO 8601 week number for a given date.
 *
 * @param {Date} date - The date for which to calculate the week number.
 * @returns {object} - The ISO 8601 week number and year.
 */
export const calculateWeekNumber = (date) =>
{
    // Clone the date to avoid modifying the original
    const target = new Date(date.valueOf());

    // Adjust so that Monday = 0, Sunday = 6
    const dayNr = (target.getDay() + 6) % 7;

    // Move date to the nearest Thursday to align with ISO 8601
    target.setDate(target.getDate() - dayNr + 3);

    // Get the first Thursday of the year
    const targetYear = target.getFullYear();
    const firstThursday = new Date(targetYear, 0, 4);
    firstThursday.setDate(firstThursday.getDate() - ((firstThursday.getDay() + 6) % 7));

    // Calculate the difference in weeks
    const weekNumber = Math.ceil((target - firstThursday) / 604800000) + 1; // 604800000ms = 7 days
    if (weekNumber > 52 && !has53Weeks(targetYear))
    {
        return {
            weekNumber: 1,
            year: targetYear + 1
        };
    }

    return {
        weekNumber,
        year: targetYear
    };
};

/**
 * Determines if the given year has 53 weeks.
 *
 * @param {number} year - The year to check.
 * @returns {boolean} - True if the year has 53 weeks, false otherwise.
 */
const has53Weeks = (year) =>
{
    const dec31 = new Date(year, 11, 31); // December 31st
    const jan1 = new Date(year, 0, 1);   // January 1st
    return (
        (dec31.getDay() === 4) || // If December 31 is a Thursday
        (jan1.getDay() === 4)     // OR January 1 is a Thursday
    );
};

/**
 * Calculates the first date of the given ISO week number.
 *
 * @param {number} week - The ISO week number.
 * @param {number} year - The year.
 * @returns {Date} - The date representing the Monday of the specified ISO week.
 */
export const getDateFromWeek = (week, year) =>
{
    // Set date to January 4th (always in ISO week 1)
    const jan4 = new Date(year, 0, 4);

    // Find the Monday of ISO week 1
    const jan4DayOfWeek = (jan4.getDay() + 6) % 7; // Adjust so Monday = 0
    const isoWeek1Start = new Date(jan4);
    isoWeek1Start.setDate(jan4.getDate() - jan4DayOfWeek);

    // Calculate the Monday of the target week
    const targetDate = new Date(isoWeek1Start);
    targetDate.setDate(isoWeek1Start.getDate() + (week - 1) * 7);

    return targetDate;
};

/**
 * Generate weeks for the given month and year.
 *
 * @param {number} year
 * @param {number} month
 * @returns {array}
 */
export const generateWeeks = (year, month) =>
{
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const weeks = [];
    let week = [];

    for (let day = 1 - firstDay; day <= daysInMonth; day++)
    {
        const currentDate = new Date(year, month, day);
        week.push(day > 0 ? currentDate : null);
        if (week.length === 7 || day === daysInMonth)
        {
            weeks.push([...week]);
            week = [];
        }
    }

    return weeks;
};

/**
 * Gets the days from the previous month needed to fill the first week of the grid.
 *
 * @param {number} year
 * @param {number} month
 * @param {number} firstDay - The weekday of the first day of the month (0 = Sunday, 1 = Monday, etc.).
 * @returns {Array<Date>} - Array of Date objects for the previous month's days.
 */
export const getPreviousMonthDays = (year, month, firstDay) =>
{
    if (firstDay === 0) return []; // No trailing days if the first day is Sunday
    const prevMonthDays = new Date(year, month, 0).getDate(); // Total days in the previous month
    return Array.from({ length: firstDay }, (_, i) => new Date(year, month - 1, prevMonthDays - firstDay + i + 1));
};

/**
 * Gets the days from the next month needed to fill the last week of the grid.
 *
 * @param {number} year
 * @param {number} month
 * @param {number} remainingDays - The number of days needed to fill the week.
 * @returns {Array<Date>} - Array of Date objects for the next month's days.
 */
export const getNextMonthDays = (year, month, remainingDays) =>
{
    return Array.from({ length: remainingDays }, (_, i) => new Date(year, month + 1, i + 1));
};

/**
 * Splits the days of a month into weeks.
 *
 * @param {number} year
 * @param {number} month
 * @returns {Array<Array<Date>>} - Array of weeks, where each week is an array of Date objects.
 */
export const getMonthDays = (year, month) =>
{
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const weeks = [];
    let week = [];

    for (let day = 1; day <= daysInMonth; day++)
    {
        week.push(new Date(year, month, day));
        if (week.length === 7)
        {
            weeks.push(week);
            week = [];
        }
    }

    if (week.length > 0)
    {
        weeks.push(week);
    }

    return weeks;
};
