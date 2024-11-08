import { Div } from "@base-framework/atoms";
import { Icons } from "@components/icons/icons.js";
import { Combobox } from "@components/molecules/combobox/combobox.js";
import { DocSection } from "../../../molecules/doc-section.js";
import { DocPage } from '../../doc-page.js';

// Mock framework data
const frameworks = [
    { value: 'next.js', label: 'Next.js', icon: Icons.home },
    { value: 'sveltekit', label: 'SvelteKit' },
    { value: 'nuxt.js', label: 'Nuxt.js' },
    { value: 'remix', label: 'Remix' },
    { value: 'astro', label: 'Astro' },
];

/**
 * ComboboxPage
 *
 * This will create a combobox page.
 *
 * @param {object} props
 * @param {object} children
 * @returns {DocPage}
 */
export const ComboboxPage = () => (
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
                    Div({ class: 'w-full max-w-[300px]' }, [
                        new Combobox({
                            items: frameworks,
                            onSelect: (item) => console.log(item)
                        })
                    ])
                ],
                code: `@components/molecules/combobox/combobox.js';
import { Icons } from "@components/icons/icons.js";

new Combobox({
    items: [
    { value: 'next.js', label: 'Next.js', icon: Icons.home },,
    { value: 'sveltekit', label: 'SvelteKit' },
    { value: 'nuxt.js', label: 'Nuxt.js' },
    { value: 'remix', label: 'Remix' },
    { value: 'astro', label: 'Astro' },
],
})`
            })
        ]
    )
);

export default ComboboxPage;