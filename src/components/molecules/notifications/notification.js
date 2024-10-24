import { DelayComponent } from "../delay-component";

/**
 * This will get the title bar
 *
 * @param {object} titleBar
 * @returns Header
 */
const TitleBar = (titleBar) =>
{
    if(!titleBar)
    {
        return null;
    }

    return Header({
        className: 'flex align-center margin-bottom-small',
        children: [
            H3({
                className: 'margin-bottom-0 margin-right-12',
                text: titleBar[0]
            }),
            Span({
                className: (this.color === 'light')? 'gray-50' : 'gray-40',
                text: titleBar[1]
            })
        ]
    });
};

/**
 * NotificationComponent
 *
 * A component that displays notifications.
 *
 * @class
 * @extends DelayComponent
 */
export class NotificationComponent extends DelayComponent
{
    className = 'notification';
    text = 'This is a notification.';
    removingClass = 'pullRight';
    color = 'dark';

    onCreated()
    {
        this.duration = this.duration || 4000;
    }

    render()
    {
        const href = this.href || null;

        return {
            tag: (href)? 'a' : 'div',
            click: (!href)? null : () =>
            {
                this.close();
            },
            href: href,
            class: this.className + ' ' + this.color,
            role: 'alert',
            nest: this.getChildren()
        };
    }

    afterSetup()
    {
        const duration = this.duration;
        if (duration !== 'infinite')
        {
            this.timer = new Timer(duration, base.bind(this, this.close));
            this.timer.start();
        }
    }

    getIcon()
    {
        const icon = this.icon;
        return icon;
    }

    getTitleBar()
    {
        return TitleBar(this.titleBar);
    }

    getButtons()
    {
        return [
            this.secondary && SecondaryButton({
                text: this.secondary,
                click: this.secondaryAction && base.bind(this, this.secondaryAction)
            }),
            this.primary && Button({
                text: this.primary,
                click: this.primaryAction && base.bind(this, this.primaryAction)
            })
        ];
    }

    getChildren()
    {
        const icon = this.getIcon();
        const titleBar = this.getTitleBar();

        return [
            icon && Icon(icon),
            {
                class: 'notification-body',
                nest: [
                    (this.title && !this.titleBar) && H3({
                        className: 'margin-bottom-small',
                        text: this.title
                    }),
                    titleBar || null,
                    P({
                        className: 'margin-0',
                        text: this.text
                    }),
                    (this.primary || this.secondary) && Footer({
                        className: 'margin-top-24 flex align-center',
                        children: this.getButtons()
                    })
                ]
            },
            CloseButton({
                click: base.bind(this, this.close)
            })
        ];
    }

    close(e)
    {
        if(e)
        {
            StopEvent(e);
        }

        if(this.duration !== 'infinite')
        {
            this.timer.stop();
        }

        SafeInvoke(this.callBack, this);
        this.destroy();
    }
}

global.Alert = NotificationComponent.extend(
{
    type: 'default',
    icon: '',

    beforeSetup()
    {
        this.className = 'alert ' + this.type;
    },

    getIcon()
    {
        let type = this.type,
        types = ['default', 'danger', 'warning', 'success'],
        icon = this.icon;

        type = (types.includes(type)) ? type : 'default';
        if (!icon)
        {
            switch (type) {
                case 'danger':
                    icon = Icons.alert.error;
                    break;
                case 'warning':
                    icon = Icons.alert.warning;
                    break;
                case 'success':
                    icon = Icons.alert.success;
                    break;
                default:
                    icon = Icons.alert.info;
            }
        }

        return icon;
    }
});