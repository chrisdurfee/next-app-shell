import { Button } from "../../../../../../../components/atoms/atoms.js";
import { Icons } from "../../../../../../../components/icons/icons.js";
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
                title: 'Usage',
                description: 'Call \'notify\' the gloabl notification container to display notifications.',
                preview: [
                    Button({
                        click: () =>
                        {
                            app.notify({
                                title: 'Notification Title',
                                description: 'This is a notification.',
                                icon: Icons.warning
                            })
                        }
                    }, 'Show')
                ],
                code: `app.notify({
    title: 'Notification Title',
    description: 'This is a notification.',
    icon: Icons.warning,
    duration: 5000 // in milliseconds, leave it blank for 4 seconds, infinite is also a value to prevent it from going away
})`
            })
        ]
    )
);

export default NotificationPage;