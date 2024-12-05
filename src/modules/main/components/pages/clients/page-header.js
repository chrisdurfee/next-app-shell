import { Div, H1, Header } from "@base-framework/atoms";
import { Button } from "@components/atoms/buttons/buttons.js";
import { Tooltip } from "@components/atoms/tooltip.js";
import { Icons } from "@components/icons/icons.js";

/**
 * This will create a page header for the clients page.
 *
 * @returns {object}
 */
export const PageHeader = () => (
    Header({ class: 'flex items-center justify-between' }, [
        H1({ class: 'text-3xl font-bold' }, 'Clients'),
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