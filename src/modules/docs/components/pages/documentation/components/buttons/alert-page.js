import { Icons } from "@components/icons/icons.js";
import { Alert } from "@components/molecules/alert.js";
import { DocSection } from "../../../../molecules/doc-section.js";
import { DocPage } from '../../../doc-page.js';

/**
 * AlertPage
 *
 * This will create a alert page.
 *
 * @param {object} props
 * @param {object} children
 * @returns {DocPage}
 */
export const AlertPage = () => (
	DocPage(
        {
            title: 'Alerts',
            description: 'Alerts are used to provide feedback to the user about the outcome of an action or to inform them of important information.',
        },
        [
            DocSection({
                title: 'Usage',
                description: 'To use the Alert component, import it from the components library and use it in your application.',
                preview: [
                    Alert({
                        title: 'Heads up!',
                        description: 'You can add components to your app using the cli.',
                        icon: Icons.information
                    })
                ],
                code: `import { Alert } from "@components/molecules/alert.js";
import { Icons } from "@components/icons/icons.js";

Alert({
    title: 'Heads up!',
    description: 'You can add components to your app using the cli.',
    icon: Icons.information
})`
            })
        ]
    )
);

export default AlertPage;