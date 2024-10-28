import { Avatar } from "@components/molecules/avatar.js";
import { DocSection } from "../../../../molecules/doc-section.js";
import { DocPage } from '../../../doc-page.js';

/**
 * AvatarPage
 *
 * This will create a avatar page.
 *
 * @param {object} props
 * @param {object} children
 * @returns {DocPage}
 */
export const AvatarPage = () => (
	DocPage(
        {
            title: 'Cards',
            description: 'Cards are a great way to display content in a concise and organized manner.',
        },
        [
            DocSection({
                title: 'Usage',
                description: 'Import the card atom and use it in your components. The avatar can be set to multiple sizes: xs, sm, lg, xl, 2xl, 3xl.',
                preview: [
                    Avatar({
                        src: 'https://github.com/shadcn.png',
                        alt: '@shadcn',
                        fallbackText: 'CN'
                    })
                ],
                code: `import { Button } from '@components/atoms/cards/card.js';

Avatar({
    src: 'https://github.com/shadcn.png',
    alt: '@shadcn',
    fallbackText: 'CN',
    size: 'md' // You can change the size to xs, sm, lg, xl, 2xl, 3xl
})`
            })
        ]
    )
);

export default AvatarPage;