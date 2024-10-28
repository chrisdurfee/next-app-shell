import { Card } from "@components/atoms/cards/card.js";
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
            title: 'Cards',
            description: 'Cards are a great way to display content in a concise and organized manner.',
        },
        [
            DocSection({
                title: 'Usage',
                description: 'Import the card atom and use it in your components.',
                preview: [
                    Card()
                ],
                code: `import { Button } from '@components/atoms/cards/card.js';

Card()`
            })
        ]
    )
);

export default CardPage;