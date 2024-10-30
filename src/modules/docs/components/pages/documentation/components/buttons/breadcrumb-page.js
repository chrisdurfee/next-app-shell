import { H4, P } from "@base-framework/atoms";
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
            title: 'Comboboxes',
            description: 'Comboboxes are used to allow users to select an option from a dropdown list or enter a custom value.',
        },
        [
            DocSection({
                title: 'Usage',
                description: 'To use the Combobox component, import it from the components library and use it in your application.',
                preview: [
                    new Breadcrumb( { items } ),
                ],
                code: `import { Breadcrumb } from "@components/molecules/breadcrumb/breadcrumb.js";

new Breadcrumb({ items: [
    { href: '/', label: 'Home' },
    { href: '/components', label: 'Components' },
    { label: 'Breadcrumb' } // Last item, no href needed
] })`
            }),

            H4({ class: 'text-lg font-bold' }, 'Description'),
            P({ class: 'text-muted-foreground' }, 'The List component can be used to display a list of items in a structured format. Each item can be customized to show different information. The List component supports appending, prepending, mingling, and deleting or items. '),

            H4({ class: 'text-lg font-bold' }, 'Performance'),
            P({ class: 'text-muted-foreground' }, 'The list will only update or re-render the items that have changed, improving performance. It uses a key to know when to update an item.'),
        ]
    )
);

export default BreadcrumbPage;