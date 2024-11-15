import { Div } from "@base-framework/atoms";
import { Icons } from "@components/icons/icons.js";
import { InlineNavigation } from "@components/organisms/navigation/inline-navigation.js";
import { SidebarMenu } from "@components/organisms/navigation/sidebar-menu/sidebar-menu.js";
import NavigationMenu from "../../../../../../components/organisms/navigation/navigation-menu/navigation-menu.js";
import { DocSection } from "../../../molecules/doc-section.js";
import { DocPage } from '../../doc-page.js';

const PAGE_URL = 'music';

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
                title: 'Navigation Menu',
                description: 'The navigation menu component is a simple navigation component that will create a horizontal menu.',
                preview: [
                    Div({ class: 'flex flex-auto flex-col w-full' }, [
                        new NavigationMenu({
                            options: [
                                { label: 'Examples', href: 'docs/components/navigations/examples' },
                                { label: 'Mail', href: 'docs/components/navigations/mail' },
                                { label: 'Dashboard', href: 'docs/components/navigations/dashboard' },
                                { label: 'Tasks', href: 'docs/components/navigations/tasks' },
                                { label: 'Playground', href: 'docs/components/navigations/playground' },
                                { label: 'Forms', href: 'docs/components/navigations/forms' },
                                { label: 'Music', href: 'docs/components/navigations/music' },
                                { label: 'Authentication', href: 'docs/components/navigations/authentication' }
                            ]
                        })
                    ])
                ],
                code: `import { Button } from '@components/organisms/navigation/inline-navigation.js';
import { Icons } from "@components/icons/icons.js";

new NavigationMenu({
    options: [
        { label: 'Examples', href: '/examples' },
        { label: 'Mail', href: '/mail' },
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Tasks', href: '/tasks' },
        { label: 'Playground', href: '/playground' },
        { label: 'Forms', href: '/forms' },
        { label: 'Music', href: '/music' },
        { label: 'Authentication', href: '/authentication' }
    ]
})`
            }),

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
            }),

            //sidebar menu
            DocSection({
                title: 'Sidebar Menu',
                description: 'The sidebar menu component is a navigation component that can be used in a sidebar or app shell.',
                preview: [
                    Div({ class: 'flex flex-auto flex-col w-full border rounded-md max-w-[300px]' }, [
                        SidebarMenu({
                            title: 'Discover',
                            options: [
                                { label: 'Listen Now', href: `${PAGE_URL}`, icon: Icons.playing, exact: true },
                                { label: 'Browse', href: `${PAGE_URL}/browse`, icon: Icons.square.grid },
                                { label: 'Radio', href: `${PAGE_URL}/radio`, icon: Icons.signal },
                                {
                                    group: 'Library',
                                    options: [
                                        { label: 'Playlists', href: `${PAGE_URL}/playlists`, icon: Icons.list.down },
                                        { label: 'Songs', href: `${PAGE_URL}/songs`, icon: Icons.music },
                                        { label: 'Made for You', href: `${PAGE_URL}/made-for-you`, icon: Icons.user.default },
                                        { label: 'Artists', href: `${PAGE_URL}/artists`, icon: Icons.speaker.default },
                                        { label: 'Albums', href: `${PAGE_URL}/albums`, icon: Icons.square.stack }
                                    ]
                                }
                            ]
                        })
                    ])
                ],
                code: `import { Icons } from "@components/icons/icons.js";
import { SidebarMenu } from "@components/organisms/navigation/sidebar-menu/sidebar-menu.js";

const PAGE_URL = 'music';

SidebarMenu({
    title: 'Discover',
    options: [
        { label: 'Listen Now', href: \`\${PAGE_URL}\`, icon: Icons.playing, exact: true },
        { label: 'Browse', href: \`\${PAGE_URL}/browse\`, icon: Icons.square.grid },
        { label: 'Radio', href: \`\${PAGE_URL}/radio\`, icon: Icons.signal },
        {
            group: 'Library',
            options: [
                { label: 'Playlists', href: \`\${PAGE_URL}/playlists\`, icon: Icons.list.down },
                { label: 'Songs', href: \`\${PAGE_URL}/songs\`, icon: Icons.music },
                { label: 'Made for You', href: \`\${PAGE_URL}/made-for-you\`, icon: Icons.user.default },
                { label: 'Artists', href: \`\${PAGE_URL}/artists\`, icon: Icons.speaker.default },
                { label: 'Albums', href: \`\${PAGE_URL}/albums\`, icon: Icons.square.stack }
            ]
        }
    ]
})
`
            }),
        ]
    )
);

export default NavigationPage;