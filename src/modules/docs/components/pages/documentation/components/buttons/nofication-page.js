import { Button } from "@components/atoms/atoms.js";
import { Icons } from "@components/icons/icons.js";
import { Notification } from "@components/molecules/notifications/notification.js";
import { DocSection } from "../../../../molecules/doc-section.js";
import { DocPage } from '../../../doc-page.js';

/**
 * NotificationPage
 *
 * This will create a notification page.
 *
 * @param {object} props
 * @param {object} children
 * @returns {DocPage}
 */
export const NotificationPage = () => (
	DocPage(
        {
            title: 'Notifications',
            description: 'Displays a notification message to the user.'
        },
        [
            DocSection({
                title: 'In App Notifications',
                description: 'Notifications can be displayed in the app to inform users about important events or updates.',
                preview: [
                    new Notification({
                        title: 'Notification Title',
                        description: 'This is a notification.',
                        icon: Icons.warning,
                        duration: 'infinite',
                    })
                ],
                code: `app.notify({
    title: 'Notification Title',
    description: 'This is a notification.',
    icon: Icons.warning,
    type: 'warning', // 'success', 'destructive', 'info', 'warning'
    duration: 5000 // in milliseconds, leave it blank for 4 seconds, infinite is also a value to prevent it from going away
})`
            }),

            DocSection({
                title: 'Usage',
                description: 'Call \'notify\' the gloabl notification container to display notifications.',
                preview: [
                    Button({
                        click: () =>
                        {
                            app.notify({
                                title: 'Notification Title',
                                description: 'This is a notification.',
                                icon: Icons.warning,
                                type: 'warning'
                            })
                        }
                    }, 'Show')
                ],
                code: `app.notify({
    title: 'Notification Title',
    description: 'This is a notification.',
    icon: Icons.warning,
    type: 'warning', // 'success', 'destructive', 'info', 'warning'
    duration: 5000 // in milliseconds, leave it blank for 4 seconds, infinite is also a value to prevent it from going away
})`
            })
        ]
    )
);

export default NotificationPage;