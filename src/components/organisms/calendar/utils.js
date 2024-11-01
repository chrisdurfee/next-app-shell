/**
 * This will 0 pad the number.
 *
 * @param {number} number
 * @returns {string}
 */
export const pad = (number) =>
{
    number *= 1;
    return (number < 10 ? `0${number}` : number);
};

/**
 * This will add time to the date.
 *
 * @param {string} date
 * @returns {string}
 */
export const addTime = (date) =>
{
    if (date.indexOf('T') === -1 && date.indexOf(' ') === -1)
    {
        date += 'T00:00:01';
    }

    date.replace(' ', 'T');
    return date;
};

/**
 * This will format the date.
 *
 * @param {number} year
 * @param {number} month
 * @param {number} day
 * @returns {string}
 */
export const FormatDate = (year, month, day) => `${year}-${pad(month + 1)}-${pad(day)}`;