import { Icons } from "@components/icons/icons.js";
import { DropdownMenu } from '@components/molecules/dropdowns/dropdown-menu.js';
import { DocSection } from "../../../molecules/doc-section.js";
import { DocPage } from '../../doc-page.js';

/**
 * DropdownMenuPage
 *
 * This will create a combobox page.
 *
 * @param {object} props
 * @param {object} children
 * @returns {DocPage}
 */
export const DropdownMenuPage = () => (
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
                    new DropdownMenu({
                        label: 'My Account',
                        items: [
                            { icon: Icons.user.default, label: 'Profile', shortcut: '⌘P', value: 'profile' },
                            { icon: Icons.creditCard, label: 'Billing', shortcut: '⌘B', value: 'billing' },
                            { icon: Icons.cog, label: 'Settings', shortcut: '⌘S', value: 'settings' },
                            { icon: Icons.computerDesktop, label: 'Keyboard shortcuts', shortcut: '⌘K', value: 'shortcuts' },
                            { type: 'divider' },
                            { icon: Icons.user.multiple, label: 'Team', value: 'team' },
                            { icon: Icons.user.plus, label: 'Invite users', value: 'invite' },
                            { icon: Icons.plus, label: 'New Team', shortcut: '⌘T', value: 'new_team' },
                            { type: 'divider' },
                            { icon: Icons.github, label: 'GitHub', value: 'github' },
                            { icon: Icons.helpCircle, label: 'Support', value: 'support' },
                            { icon: Icons.api, label: 'API', value: 'api' },
                            { type: 'divider' }
                        ],
                        onSelect: (item) => {
                            console.log("Selected item:", item);
                            // Handle selected item
                        }
                    })
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

export default DropdownMenuPage;