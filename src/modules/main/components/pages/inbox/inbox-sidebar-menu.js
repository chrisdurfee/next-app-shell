import { Div, H1, Header, Span } from "@base-framework/atoms";
import { NavLink } from "@base-framework/base";
import { Icon } from "@components/atoms/icon.js";
import { Icons } from "@components/icons/icons.js";

/**
 * @type {array} PRIUMARY_BUTTONS
 * Contains all sidebar navigation options with labels, counts, icons, and links.
 */
const PRIUMARY_BUTTONS = [
    { label: "Inbox", count: 8, icon: Icons.inbox.default, href: "inbox/inbox" },
    { label: "Drafts", count: 0, icon: Icons.document.default, href: "inbox/drafts" },
    { label: "Sent", count: 0, icon: Icons.envelope.open, href: "inbox/sent" },
    { label: "Junk", count: 0, icon: Icons.archive.box.x, href: "inbox/junk" },
    { label: "Trash", count: 0, icon: Icons.trash, href: "inbox/trash" },
    { label: "Archive", count: 0, icon: Icons.archive.box.default, href: "inbox/archive" }
];

/**
 * @type {array} OTHER_BUTTONS
 */
const OTHER_BUTTONS = [
    { label: "Social", count: 0, icon: Icons.user.group, href: "inbox/social" },
    { label: "Updates", count: 0, icon: Icons.bell.alert, href: "inbox/updates" },
    { label: "Forums", count: 0, icon: Icons.chat.text, href: "inbox/forums" },
    { label: "Shopping", count: 0, icon: Icons.shoppingBag, href: "inbox/shopping" }
];

/**
 * CustomNavLink
 *
 * A tailored nav link for the Inbox Sidebar Menu.
 *
 * @param {object} props - Props for the NavLink component.
 * @param {string} props.label - The label of the link.
 * @param {number} props.count - The count badge value.
 * @param {string} props.icon - The icon for the link.
 * @param {string} props.href - The URL for navigation.
 *
 * @returns {object}
 */
const CustomNavLink = ({ label, count, icon, href }) => (
    new NavLink({
            class: "flex items-center justify-between p-2 rounded-md hover:bg-muted transition",
            activeClass: "bg-muted",
            href,
            exact: false
        }, [
        Div({ class: "flex items-center space-x-2" }, [
            icon && Icon({ class: "flex-shrink-0 w-5 h-5" }, icon),
            Span({ class: "text-sm font-medium text-foreground" }, label),
        ]),
        Span({ class: "text-xs text-muted-foreground" }, count.toString()),
    ])
);

/**
 * This will create the InboxSidebarMenu organism.
 *
 * @returns {object}
 */
export const InboxSidebarMenu = () => (
    Div({ class: "flex-auto flex-col pb-12 hidden lg:flex p-6 border-r bg-sidebar max-w-[270px] h-full" }, [
        Header({ class: 'pb-4 px-2 flex flex-col' }, [
            H1({ class: "scroll-m-20 text-2xl font-bold tracking-tight" }, "Messages"),
        ]),
        Div({ class: 'flex flex-auto flex-col divide-y divide-border' }, [
            Div({
                class: "space-y-2 mb-4",
                map: [ PRIUMARY_BUTTONS, CustomNavLink]
            }),
            Div({
                class: "space-y-2 pt-4",
                map: [ OTHER_BUTTONS, CustomNavLink]
            })
        ]),
    ])
);