import { Breadcrumb } from "@components/molecules/breadcrumb/breadcrumb.js";
import { DocSection } from "../../../../molecules/doc-section.js";
import { DocPage } from '../../../doc-page.js';

const items = [
    { href: '/', label: 'Home' },
    { href: '/components', label: 'Components' },
    { label: 'Breadcrumb' } // Last item, no href needed
];

/**
 * BreadcrumbPage
 *
 * This will create a breadcrumb page.
 *
 * @param {object} props
 * @param {object} children
 * @returns {DocPage}
 */
export const BreadcrumbPage = () => (
	DocPage(
        {
            title: 'Breadcrumbs',
            description: 'Breadcrumbs are a navigation aid that helps users understand their location within a website or application.',
        },
        [
            DocSection({
                title: 'Usage',
                description: 'To use the Breadcrumb component, import it and provide an array of items. Each item can have a label and an optional href.',
                preview: [
                    new Breadcrumb( { items } ),
                ],
                code: `import { Breadcrumb } from "@components/molecules/breadcrumb/breadcrumb.js";

new Breadcrumb({ items: [
    { href: '/', label: 'Home' },
    { href: '/components', label: 'Components' },
    { label: 'Breadcrumb' } // Last item, no href needed
] })`
            })
        ]
    )
);

export default BreadcrumbPage;