import { A, Div, Footer, H3, Header, I, P } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";
import { Timer } from "@base-framework/organisms";
import { Button } from "../../atoms/buttons/buttons.js";
import { Icons } from "../../icons/icons.js";
import { DelayComponent } from "../delay-component.js";

/**
 * This will get the title bar
 *
 * @param {object} titleBar
 * @returns Header
 */
const TitleBar = (title) =>
{
    return Header({ class: 'flex justify-center'}, [
        H3({ class: 'text-lg font-bold mb-0' }, title)
    ]);
};

/**
 * This will create a link for the notification.
 *
 * @param {object} props
 * @returns {object}
 */
const NotificationLink = Atom((props, children) => (
    A({
        class: `bg-popover text-popover-foreground relative flex flex-auto flex-col justify-start shadow-lg pointer-events-auto p-4 ${props.color} border rounded-md min-w-[380px] mt-4`,
        href: href,
        class: `${props.class} ${props.color}`,
        role: 'alert'
    }, children)
));

/**
 * This will create a link for the notification.
 *
 * @param {object} props
 * @returns {object}
 */
const NotificationButton = Atom((props, children) => (
    Div({
        class: `bg-popover text-popover-foreground relative flex flex-auto flex-col justify-start shadow-lg pointer-events-auto p-4 ${props.color} border rounded-md min-w-[380px] mt-4`,
        click: () => props.close(),
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
    class = 'notification';
    text = 'This is a notification.';
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
        const href = this.href || null;
        if (href)
        {
            return NotificationLink({
                href,
                class: this.class,
                color: this.color
            }, this.getChildren());
        }

        return NotificationButton({
            close: this.close,
            class: this.class,
            color: this.color
        }, this.getChildren());
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
     * This will get the buttons for the notification.
     *
     * @returns {array}
     */
    getButtons()
    {
        return [
            this.secondary && Button({
                variant: 'secondary',
                click: this.secondaryAction && this.secondaryAction.bind(this)
            }, this.secondary),
            this.primary && Button({
                click: this.primaryAction && this.primaryAction.bind(this)
            }, this.primary,)
        ];
    }

    /**
     * This will get the children for the notification.
     *
     * @returns {array}
     */
    getChildren()
    {
        return [
            Div({ class: 'flex flex-auto flex-col' }, [
                Div({ class: 'flex flex-auto flex-row items-center w-full' }, [
                    this.icon && I({ class: 'mr-4', html: this.icon }),
                    this.title && TitleBar(this.title)
                ]),
                P({ class: 'text-base text-muted-foreground m-0' }, this.description),
                (this.primary || this.secondary) && Footer({
                    class: 'margin-top-24 flex align-center',
                    children: this.getButtons()
                })
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

        if (this.callBack)
        {
            this.callBack();
        }

        this.destroy();
    }
}