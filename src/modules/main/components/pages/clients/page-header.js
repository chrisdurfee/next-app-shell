import { Div, H1, Header } from "@base-framework/atoms";
import { Button } from "@components/atoms/buttons/buttons.js";
import { Tooltip } from "@components/atoms/tooltip.js";
import { Icons } from "@components/icons/icons.js";
import { SearchDropdown } from "@components/organisms/search/search-dropdown.js";
import { clients } from "./clients.js";

/**
 * This will convert clients to options.
 *
 * @param {array} clients
 * @returns {array}
 */
const convertClientsToOptions = (clients) => clients.map((client) => ({ label: client.name, value: client.id }));

/**
 * This will create a page header for the clients page.
 *
 * @returns {object}
 */
export const PageHeader = () => (
    Header({ class: 'flex items-center justify-between' }, [
        H1({ class: 'text-3xl font-bold' }, 'Clients'),
        new SearchDropdown({ options: convertClientsToOptions(clients), onSelect: (item) => console.log(item) }),
        Div({ class: 'flex items-center gap-2' }, [
            Div({ class: 'hidden lg:flex' }, [
                Button({ variant: 'withIcon', class: 'text-muted-foreground', icon: Icons.circlePlus, click: () => console.log('Add Client') }, 'Add Client')
            ]),
            Div({ class: 'flex lg:hidden mr-0' }, [
                Tooltip({ content: 'Add Client', position: 'left' }, Button({ variant: 'icon', class: 'outline', icon: Icons.circlePlus }))
            ])
        ])
    ])
);