import { Div } from "@base-framework/atoms";
import { DelayComponent } from "../delay-component";

export class NotificationContainer extends DelayComponent
{
    /**
     * @member {string} removingClass This is the class name that will be added.
     */
    removingClass = 'fadeOut';

    onCreated(props)
    {
        this.notifications = [];
    }

    render()
    {
        return Div({ class: 'notification-container' });
    }

    setupStates()
    {
        return {
            count: 0,
            notifications:
            {
                state: false,
                callBack: (val) =>
                {
                    if (val)
                    {
                        this.setup(this.parent.panel.parentNode);
                    }
                    else
                    {
                        this.destroy();
                    }
                }
            }
        };
    }

    update(hasNotices)
    {
        this.state.notifications = hasNotices;
    }

    updateCount(direction)
    {
        const state = this.state;
        let value = state.count,
        count = (direction === 'up') ? ++value : --value;

        let hasNotices = true;
        if (count <= 0)
        {
            count = 0;
            hasNotices = false;
        }
        this.update(hasNotices);

        state.count = count;
    }

    addNotice(props)
    {
        this.updateCount('up');

        props = props || {};
        props.callBack = this.removeNotice.bind(this);

        let notice;
        if (props.type)
        {
            notice = new Alert(props);
        }
        else
        {
            notice = new NotificationComponent(props);
        }

        notice.setup(this.panel);
        this.notifications.push(notice);
    }

    removeNotice(notice)
    {
        const index = this.notifications.indexOf(notice);
        if (index !== -1)
        {
            this.notifications.splice(index, 1);
            this.updateCount('down');
        }
    }
}