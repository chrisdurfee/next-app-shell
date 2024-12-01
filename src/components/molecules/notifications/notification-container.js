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
        /**
         * The container needs to be set as a popover to allow it
         * to be shown over modals and popups.
         */
        return Div({ class: 'notification-container pointer-events-none inset-auto bg-transparent backdrop:bg-transparent overflow-visible fixed bottom-[80px] right-0 z-50 p-5', popover: 'manual', }, [
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
        /**
         * The list requires an id on the itme to keep track of the items.
         */
        props.id = id++;

        /**
         * The notice needs to have the remove callback set to remove the notice.
         */
        props.callBack = () => this.removeNotice(props);
        this.list.append([ props ]);

        /**
         * The popup needs to be hidden first incase we have
         * multiple notifications at the same time to show it
         * all content.
         */
        this.panel.hidePopover();
        this.panel.showPopover();
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