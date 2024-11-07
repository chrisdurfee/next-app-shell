import { H4, P } from "@base-framework/atoms";
import { Card } from "@components/atoms/cards/card.js";
import { DocSection } from "../../../../molecules/doc-section.js";
import { DocPage } from '../../../doc-page.js';
import AccountCard from "./examples/account-card.js";
import PaymentCard from "./examples/payment-card.js";

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
            }),

            H4({ class: 'text-lg font-bold' }, 'Examples'),
            P({ class: 'text-muted-foreground' }, 'This is a list of examples of how to use the card component in your application.'),

            DocSection({
                title: 'Account Card',
                preview: [
                    AccountCard()
                ],
                code: `import AccountCard from "./examples/account-card.js";

AccountCard()`
            }),

            DocSection({
                title: 'Paymnet Card',
                preview: [
                    PaymentCard()
                ],
                code: `import AccountCard from "./examples/payment-card.js";

PaymentCard()`
            })
        ]
    )
);

export default CardPage;