/**
 * Determines if the given year has 53 weeks.
 *
 * @param {number} year - The year to check.
 * @returns {boolean} - True if the year has 53 weeks, false otherwise.
 */
const has53Weeks = (year) =>
{
    const dec31 = new Date(year, 11, 31); // December 31
    const jan1 = new Date(year, 0, 1);    // January 1
    return (
        dec31.getDay() === 4 || // December 31 is a Thursday
        jan1.getDay() === 4     // January 1 is a Thursday
    );
};

/**
 * Calculate the ISO 8601 week number for a given date.
 * Also returns the ISO year for that week.
 *
 * @param {Date} date - The date for which to calculate the week number.
 * @returns {object} - An object { weekNumber, year } for the ISO week.
 */
export const calculateWeekNumber = (date) =>
{
    const target = new Date(date.valueOf());

    // Adjust so that Monday = 0, Sunday = 6
    const dayNr = (target.getDay() + 6) % 7;

    // Move date to the nearest Thursday to align with ISO 8601
    target.setDate(target.getDate() - dayNr + 3);

    // Year might be different from the date's actual .getFullYear()
    const targetYear = target.getFullYear();

    // First Thursday of that year
    const firstThursday = new Date(targetYear, 0, 4);
    firstThursday.setDate(firstThursday.getDate() - ((firstThursday.getDay() + 6) % 7));

    // Calculate difference in weeks
    const weekNumber = Math.ceil((target - firstThursday) / 604800000) + 1; // 604800000ms = 7 days

    // If we exceed 52 weeks and the year doesn't have 53 weeks, the ISO week belongs to next year
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
 * Gets the days from the previous month needed to fill the first row in a Sunday-based 7-day grid.
 *
 * @param {number} year
 * @param {number} month
 * @param {number} firstDay - Day of week for the 1st of the month (0=Sun,1=Mon,...)
 * @returns {Date[]}
 */
export const getPreviousMonthDays = (year, month, firstDay) =>
{
    // If first day is Sunday (0), there are no "previous" month days needed
    if (firstDay === 0) return [];

    const prevMonthDaysCount = new Date(year, month, 0).getDate(); // Days in the previous month
    // e.g. if month is 8 (September), month-1 is 7 (August)
    return Array.from({ length: firstDay }, (_, i) =>
        new Date(year, month - 1, prevMonthDaysCount - firstDay + i + 1)
    );
};

/**
 * Gets the days from the next month needed to fill the last row in a Sunday-based 7-day grid.
 *
 * @param {number} year
 * @param {number} month
 * @param {number} remainingDays - The number of days needed to fill the grid row.
 * @returns {Date[]}
 */
export const getNextMonthDays = (year, month, remainingDays) =>
{
    return Array.from({ length: remainingDays }, (_, i) => new Date(year, month + 1, i + 1));
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
