import { Model } from "@base-framework/base";
import { Configs } from "../../configs.js";

/**
 * UserStatus Model
 *
 * This will create a model for user status.
 *
 * @type {Model} UserStatus
 */
export const UserStatus = Model.extend({
    url: Configs.userStatusApi // API endpoint for fetching or updating user status
});