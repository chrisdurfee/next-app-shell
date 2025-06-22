/**
 * Mock timeclock data.
 *
 * @typedef {Object} TimeEntry
 * @property {number} id - The unique identifier for the time entry
 * @property {string} employeeName - The name of the employee
 * @property {string} employeeImage - URL to employee's avatar image
 * @property {string} email - Employee's email address
 * @property {string} date - The date of the time entry
 * @property {string} clockIn - Time the employee clocked in
 * @property {string} clockOut - Time the employee clocked out (if applicable)
 * @property {number} hoursWorked - Total hours worked
 * @property {string} status - Current status of the entry (Complete/Incomplete)
 * @property {string} department - Employee's department
 * @property {number} hourlyRate - Employee's hourly rate
 *
 * @type {Array<TimeEntry>}
 */
export const TIMES: {
    id: number;
    employeeName: string;
    employeeImage: string;
    email: string;
    date: string;
    clockIn: string;
    clockOut: string;
    hoursWorked: number;
    status: string;
    department: string;
    hourlyRate: number;
}[];
/**
 * Mock timeclock data.
 */
export type TimeEntry = Array<TimeEntry>;
