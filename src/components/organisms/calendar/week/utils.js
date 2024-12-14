/**
 * Calculate the ISO 8601 week number for a given date.
 *
 * @param {Date} date
 * @returns {number}
 */
export const calculateWeekNumber = (date) =>
{
    const target = new Date(date.valueOf());
    const dayNr = (date.getDay() + 6) % 7;
    target.setDate(target.getDate() - dayNr + 3);
    const firstThursday = target.valueOf();

    target.setMonth(0, 1);
    if (target.getDay() !== 4)
    {
        target.setMonth(0, 1 + ((4 - target.getDay() + 7) % 7));
    }
    return 1 + Math.ceil((firstThursday - target) / 604800000);
};

/**
 * Calculates the first date of the given ISO week number.
 *
 * @param {number} week
 * @param {number} year
 * @returns {Date}
 */
export const getDateFromWeek = (week, year) =>
{
    // Set the date to January 4th of the given year (always in ISO week 1)
    const jan4 = new Date(year, 0, 4);

    // Find the start of ISO week 1 (the Monday of the week containing January 4th)
    const jan4DayOfWeek = jan4.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const isoWeek1Start = new Date(jan4);
    isoWeek1Start.setDate(jan4.getDate() - ((jan4DayOfWeek + 6) % 7)); // Adjust to the previous Monday

    // Calculate the first day of the desired ISO week
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
    const prevMonthDays = new Date(year, month, 0).getDate();
    const days = [];
    for (let i = firstDay - 1; i >= 0; i--)
    {
        days.push(new Date(year, month - 1, prevMonthDays - i));
    }
    return days;
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
    const days = [];
    for (let i = 1; i <= remainingDays; i++)
    {
        days.push(new Date(year, month + 1, i));
    }
    return days;
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
