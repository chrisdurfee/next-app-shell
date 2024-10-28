import { Div } from "@base-framework/atoms";
import { Component } from "@base-framework/base";
import { List } from "@base-framework/organisms";
import { Notification } from "./notification.js";

let id = 0;

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
     * This will render the component.
     *
     * @returns {object}
     */
    render()
    {
        return Div({ class: 'pointer-events-none fixed bottom-[80px] right-0 z-50 p-5' }, [
            new List({
                cache: 'list',
                key: 'id',
                role: 'list',
                rowItem: (item) => new Notification(item)
            })
        ]);
    }

    /**
     * This will add a notification.
     *
     * @param {object} props
     * @returns {void}
     */
    addNotice(props = {})
    {
        props.id = id++;
        props.callBack = () => this.removeNotice(props);
        this.list.append([ props ]);
    }

    /**
     * This will remove a notification.
     *
     * @param {object} notice
     * @returns {void}
     */
    removeNotice(notice)
    {
        this.list.delete(notice.id);
    }
}