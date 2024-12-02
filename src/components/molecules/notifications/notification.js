import { A, Div, Footer, H3, Header, I, P } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";
import { Timer } from "@base-framework/organisms";
import { Button } from "../../atoms/buttons/buttons.js";
import { Icons } from "../../icons/icons.js";
import { DelayComponent } from "../delay-component.js";

/**
 * Type styles mapping (reusing from Alert component style)
 *
 * @constant
 * @type {object}
 */
const typeStyles =
{
    info: {
        bgColor: 'bg-muted/10',
        borderColor: 'border-blue-500',
        iconColor: 'text-blue-500'
    },
    warning: {
        bgColor: 'bg-muted/10',
        borderColor: 'border-warning',
        iconColor: 'text-warning'
    },
    destructive: {
        bgColor: 'bg-muted/10',
        borderColor: 'border-destructive',
        iconColor: 'text-red-500'
    },
    success: {
        bgColor: 'bg-muted/10',
        borderColor: 'border-emerald-500',
        iconColor: 'text-emerald-500'
    },
    default: {
        bgColor: 'bg-muted/10',
        borderColor: 'border',
        iconColor: 'text-muted-foreground'
    }
};

/**
 * This will get the title bar
 *
 * @param {object} titleBar
 * @returns Header
 */
const TitleBar = (title) => (
    Header({ class: 'flex justify-center' }, [
        H3({ class: 'text-lg font-bold mb-0' }, title)
    ])
);

/**
 * This will create a link for the notification.
 *
 * @param {object} props
 * @returns {object}
 */
const NotificationLink = Atom(({ href, class: customClass }, children) => (
    A({
        class: `pullRightIn bg-popover text-popover-foreground relative flex flex-auto flex-col justify-start shadow-lg pointer-events-auto p-4 border rounded-md min-w-[340px] max-w-[450px] mt-4 ${customClass}`,
        href: href,
        role: 'alert'
    }, children)
));

/**
 * This will create a button notification.
 *
 * @param {object} props
 * @returns {object}
 */
const NotificationButton = Atom(({ close, class: customClass }, children) => (
    Div({
        class: `pullRightIn bg-popover text-popover-foreground relative flex flex-auto flex-col justify-start shadow-lg pointer-events-auto p-4 border rounded-md min-w-[340px] max-w-[450px] mt-4 ${customClass}`,
        click: () => close(),
        role: 'alert'
    }, children)
));

/**
 * Notification
 *
 * A component that displays notifications.
 *
 * @class
 * @extends DelayComponent
 */
export class Notification extends DelayComponent
{
    removingClass = 'pullRight';

    /**
     * This will be called when the component is created.
     *
     * @returns {void}
     */
    onCreated()
    {
        this.duration = this.duration || 4000;
    }

    /**
     * This will render the component.
     *
     * @returns {object}
     */
    render()
    {
        const { bgColor, borderColor, iconColor } = this.getTypeStyles();
        const href = this.href || null;

        const notificationContent = this.getChildren(iconColor);

        /**
         * The notification can be either a link or a button.
         */
        if (href)
        {
            return NotificationLink({
                href,
                class: `${bgColor} ${borderColor}`,
            }, notificationContent);
        }

        return NotificationButton({
            close: this.close.bind(this),
            class: `${bgColor} ${borderColor}`,
        }, notificationContent);
    }

    /**
     * This will be called after the component is set up.
     *
     * @returns {void}
     */
    afterSetup()
    {
        const duration = this.duration;
        if (duration !== 'infinite')
        {
            this.timer = new Timer(duration, this.close.bind(this));
            this.timer.start();
        }
    }

    /**
     * This will get the style properties based on the notification type.
     *
     * @returns {object}
     */
    getTypeStyles()
    {
        const type = this.type || 'default';
        return typeStyles[type] || typeStyles.default;
    }

    /**
     * This will get the buttons for the notification.
     *
     * @returns {array}
     */
    getButtons()
    {
        return [
            Div({ class: 'flex flex-row mt-6 gap-2' }, [
                this.secondary && Button({ variant: 'outline', click: () => this.secondaryAction && this.secondaryAction() }, this.secondary),
                this.primary && Button({ click: () => this.primaryAction && this.primaryAction() }, this.primary)
            ])
        ];
    }

    /**
     * This will get the children for the notification.
     *
     * @param {string} iconColor
     * @returns {array}
     */
    getChildren(iconColor)
    {
        return [
            Div({ class: 'flex items-start' }, [
                this.icon && I({ class: `mr-4 ${iconColor}`, html: this.icon }),
                Div({ class: 'flex flex-auto flex-col' }, [
                    Div({ class: 'flex flex-auto flex-row items-center w-full pr-12' }, [
                        this.title && TitleBar(this.title)
                    ]),
                    P({ class: 'text-base text-muted-foreground m-0 pr-12' }, this.description),
                    (this.primary || this.secondary) && Footer({ class: 'margin-top-24 flex align-center' }, this.getButtons())
                ])
            ]),
            Button({
                class: 'absolute top-[12px] right-[12px]',
                variant: 'icon',
                icon: Icons.x,
                click: this.close.bind(this)
            })
        ];
    }

    /**
     * This will close the notification.
     *
     * @param {object} e The event object.
     * @returns {void}
     */
    close(e)
    {
        if (e)
        {
            e.stopPropagation();
        }

        if (this.duration !== 'infinite')
        {
            this.timer.stop();
        }

        if (this.onClick)
        {
            this.onClick();
        }

        this.destroy();
    }
}
