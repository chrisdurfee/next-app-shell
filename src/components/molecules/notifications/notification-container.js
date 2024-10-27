import { Div } from "@base-framework/atoms";
import { Component, Data } from "@base-framework/base";

export class NotificationContainer extends Component
{
    /**
     * @member {string} removingClass This is the class name that will be added.
     */
    removingClass = 'fadeOut';

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

    render()
    {
        return Div({ class: 'pointer-events-none fixed bottom-[80px] right-0 z-50 p-5', for: ['notifications', (item) => new Notification(item)] });
    }

    addNotice(props = {})
    {
        props.callBack = (props) => this.removeNotice(props);
        this.data.push('notifications', props);
    }

    removeNotice(notice)
    {
        const index = this.data.notifications.indexOf(notice);
        if (index !== -1)
        {
            this.data.splice('nottifications', index);
        }
    }
}