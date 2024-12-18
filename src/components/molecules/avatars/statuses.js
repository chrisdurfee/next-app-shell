
/**
 * This will create a status object.
 *
 * @type {object} STATUSES
 */
export const STATUSES = {
    ONLINE: "online",
    OFFLINE: "offline",
    BUSY: "busy",
    AWAY: "away"
};

/**
 * This will create a status class object.
 *
 * @type {object} STATUS_CLASS
 */
export const STATUS_CLASS = {
    ONLINE: "bg-green-500",
    OFFLINE: "bg-gray-500",
    BUSY: "bg-red-500",
    AWAY: "bg-yellow-500"
};

/**
 * This will get the status class.
 *
 * @param {string} status
 * @returns {string}
 */
export const getStatusClass = (status = '') =>
{
    status = status.toUpperCase();
    return STATUS_CLASS[status] || STATUS_CLASS.OFFLINE;
};