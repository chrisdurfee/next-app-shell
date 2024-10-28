import { Card } from "../../../../../../../components/atoms/cards/card.js";
import { DocSection } from "../../../../molecules/doc-section.js";
import { DocPage } from '../../../doc-page.js';

/**
 * DialogPage
 *
 * This will create a dialog page.
 *
 * @param {object} props
 * @param {object} children
 * @returns {DocPage}
 */
export const CardPage = () => (
	DocPage(
        {
            title: 'Dialog',
            description: 'Displays a dialog or a component that looks like a dialog.'
        },
        [
            DocSection({
                title: 'Usage',
                description: 'Import the dialog atom and use it in your components.',
                preview: [
                    Card()
                ],
                code: `import { Button } from '../components/atoms/cards/card.js';

Card()`
            })
        ]
    )
);

export default CardPage;