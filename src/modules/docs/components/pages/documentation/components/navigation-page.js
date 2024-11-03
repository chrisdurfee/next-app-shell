import { Div } from "@base-framework/atoms";
import { Icons } from "@components/icons/icons.js";
import { InlineNavigation } from "@components/organisms/navigation/inline-navigation.js";
import { DocSection } from "../../../molecules/doc-section.js";
import { DocPage } from '../../doc-page.js';

/**
 * NavigationPage
 *
 * This will create a navigation page.
 *
 * @param {object} props
 * @param {object} children
 * @returns {DocPage}
 */
export const NavigationPage = () => (
	DocPage(
        {
            title: 'Navigations',
            description: 'Navigations are components that help users move around the website or application.',
        },
        [
            DocSection({
                title: 'Inline Navigation',
                description: 'The inline navigation component is a simple navigation component that can be used in a sidebar or app shell.',
                preview: [
                    Div({ class: 'flex flex-auto flex-col w-full border rounded-md max-w-[300px]' }, [
                        new InlineNavigation({
                            options: [
                                { label: 'Home', href: '/', icon: Icons.home },
                                { label: 'About', href: '/about' },
                                { label: 'Contact', href: '/contact' },
                                {
                                    label: 'Services',
                                    options: [
                                        { label: 'Web Development', href: '/web-development' },
                                    ]
                                },
                                {
                                    group: 'Frameworks',
                                    options: [
                                        { label: 'Next.js', href: '/next' },
                                        { label: 'SvelteKit', href: '/sveltekit' },
                                        { label: 'Nuxt.js', href: '/nuxt' },
                                        { label: 'Remix', href: '/remix' },
                                        { label: 'Astro', href: '/astro' }
                                    ]
                                }
                            ]
                        })
                    ])
                ],
                code: `import { Button } from '@components/organisms/navigation/inline-navigation.js';
import { Icons } from "@components/icons/icons.js";

new InlineNavigation({
    options: [
        { label: 'Home', href: '/', icon: Icons.home },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
        {
            label: 'Services',
            options: [
                { label: 'Web Development', href: '/web-development' },
            ]
        },
        {
            group: 'Frameworks',
            options: [
                { label: 'Next.js', href: '/next' },
                { label: 'SvelteKit', href: '/sveltekit' },
                { label: 'Nuxt.js', href: '/nuxt' },
                { label: 'Remix', href: '/remix' },
                { label: 'Astro', href: '/astro' }
            ]
        }
    ]
})`
            })
        ]
    )
);

export default NavigationPage;