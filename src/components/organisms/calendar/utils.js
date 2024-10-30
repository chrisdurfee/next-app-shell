/**
 * This will 0 pad the number.
 *
 * @param {number} number
 * @returns {string}
 */
export const pad = (number) => (number < 10 ? `0${number}` : number);

/**
 * This will format the date.
 *
 * @param {number} year
 * @param {number} month
 * @param {number} day
 * @returns {string}
 */
export const FormatDate = (year, month, day) => `${year}-${pad(month + 1)}-${pad(day)}`;