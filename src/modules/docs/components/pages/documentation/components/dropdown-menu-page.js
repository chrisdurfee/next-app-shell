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
            title: 'Dropdown Menus',
            description: 'Dropdown menus are used to display a list of options when a user clicks on a button or input field.',
        },
        [
            DocSection({
                title: 'Usage',
                description: 'To use the DropdownMenu component, import it from the components library and use it in your application.',
                preview: [
                    new DropdownMenu({
                        icon: Icons.ellipsis.vertical,
                        groups: [
                            [
                                { icon: Icons.user.default, label: 'Profile', shortcut: '⌘P', value: 'profile' },
                                { icon: Icons.creditCard, label: 'Billing', shortcut: '⌘B', value: 'billing' },
                                { icon: Icons.cog.six, label: 'Settings', shortcut: '⌘S', value: 'settings' },
                                { icon: Icons.computerDesktop, label: 'Keyboard shortcuts', shortcut: '⌘K', value: 'shortcuts' },
                            ],
                            [
                                { icon: Icons.user.multiple, label: 'Team', value: 'team' },
                                { icon: Icons.user.plus, label: 'Invite users', value: 'invite' },
                                { icon: Icons.plus, label: 'New Team', shortcut: '⌘T', value: 'new_team' },
                            ],
                            [
                                { icon: Icons.github, label: 'GitHub', value: 'github' },
                                { icon: Icons.helpCircle, label: 'Support', value: 'support' },
                                { icon: Icons.api, label: 'API', value: 'api' },
                            ]
                        ],
                        onSelect: (item) =>
                        {
                            console.log("Selected item:", item);
                            // Handle selected item
                        }
                    })
                ],
                code: `import { Icons } from "@components/icons/icons.js";
import { DropdownMenu } from '@components/molecules/dropdowns/dropdown-menu.js';

new DropdownMenu({
    icon: Icons.ellipsis.vertical,
    groups: [
        [
            { icon: Icons.user.default, label: 'Profile', shortcut: '⌘P', value: 'profile' },
            { icon: Icons.creditCard, label: 'Billing', shortcut: '⌘B', value: 'billing' },
            { icon: Icons.cog, label: 'Settings', shortcut: '⌘S', value: 'settings' },
            { icon: Icons.computerDesktop, label: 'Keyboard shortcuts', shortcut: '⌘K', value: 'shortcuts' },
        ],
        [
            { icon: Icons.user.multiple, label: 'Team', value: 'team' },
            { icon: Icons.user.plus, label: 'Invite users', value: 'invite' },
            { icon: Icons.plus, label: 'New Team', shortcut: '⌘T', value: 'new_team' },
        ],
        [
            { icon: Icons.github, label: 'GitHub', value: 'github' },
            { icon: Icons.helpCircle, label: 'Support', value: 'support' },
            { icon: Icons.api, label: 'API', value: 'api' },
        ]
    ],
    onSelect: (item) =>
    {
        console.log("Selected item:", item);
        // Handle selected item
    },
})`
            })
        ]
    )
);

export default DropdownMenuPage;