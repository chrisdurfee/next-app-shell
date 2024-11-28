import { Model } from "@base-framework/base";

/**
 * UserStatus Model
 *
 * This will create a model for user status.
 *
 * @extends Model
 * @class UserData
 */
export const UserStatus = Model.extend({
    url: '/api', // API endpoint for fetching or updating user status
});
