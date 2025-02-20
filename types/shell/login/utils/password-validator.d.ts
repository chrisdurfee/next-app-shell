/**
 * PasswordValidator
 *
 * This will validate the password.
 *
 * @class PasswordValidator
 */
export class PasswordValidator {
    /**
     * The minimum required password length.
     * @type {number}
     */
    static MIN_LENGTH: number;
    /**
     * Creates a new PasswordValidator instance.
     *
     * @param {string} firstName - The user's first name.
     * @param {string} lastName - The user's last name.
     * @param {string} password - The password to validate.
     */
    constructor(firstName: string, lastName: string, password: string);
    /**
     * Validates the password against various criteria.
     *
     * @returns {Object} An object containing:
     *  - valid {boolean}: True if the password passes all validations.
     *  - errors {string[]}: An array of error messages for each failed validation.
     */
    validate(): any;
    #private;
}
