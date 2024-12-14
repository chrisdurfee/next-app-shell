/**
 * Calculate the ISO 8601 week number for a given date.
 *
 * @param {Date} date
 * @returns {number}
 */
export const calculateWeekNumber = (date) => {
    const target = new Date(date.valueOf());
    const dayNr = (date.getDay() + 6) % 7;
    target.setDate(target.getDate() - dayNr + 3);
    const firstThursday = target.valueOf();
    target.setMonth(0, 1);
    if (target.getDay() !== 4) {
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
    const simple = new Date(year, 0, 1 + (week - 1) * 7);
    const dayOfWeek = simple.getDay();
    const ISOweekStart = simple;
    if (dayOfWeek <= 4)
    {
        ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
    }
    else
    {
        ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
    }
    return ISOweekStart;
};

/**
 * Generate weeks for the given month and year.
 *
 * @param {number} year
 * @param {number} month
 * @returns {array}
 */
export const generateWeeks = (year, month) => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const weeks = [];
    let week = [];

    for (let day = 1 - firstDay; day <= daysInMonth; day++) {
        const currentDate = new Date(year, month, day);
        week.push(day > 0 ? currentDate : null);
        if (week.length === 7 || day === daysInMonth) {
            weeks.push([...week]);
            week = [];
        }
    }

    return weeks;
};