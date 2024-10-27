import { Div } from "@base-framework/atoms";
import { Component, Data } from "@base-framework/base";
import { Notification } from "./notification.js";

/**
 * NotificationContainer
 *
 * A component that manages notifications.
 *
 * @class
 */
export class NotificationContainer extends Component
{
    /**
     * This will set the default data.
     *
     * @returns {Data}
     */
    setData()
    {
        return new Data({
            notifications: []
        });
    }

    /**
     * This will render the component.
     *
     * @returns {object}
     */
    render()
    {
        return Div({ class: 'pointer-events-none fixed bottom-[80px] right-0 z-50 p-5', for: ['notifications', (item) => new Notification(item)] });
    }

    /**
     * This will add a notification.
     *
     * @param {object} props
     * @returns {void}
     */
    addNotice(props = {})
    {
        props.callBack = (props) => this.removeNotice(props);
        this.data.push('notifications', props);
    }

    /**
     * This will remove a notification.
     *
     * @param {object} notice
     * @returns {void}
     */
    removeNotice(notice)
    {
        const index = this.data.notifications.indexOf(notice);
        if (index !== -1)
        {
            this.data.splice('nottifications', index);
        }
    }
}