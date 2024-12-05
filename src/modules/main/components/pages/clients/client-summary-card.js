import { Div, H2, P } from "@base-framework/atoms";
import { Card } from "@components/atoms/cards/card.js";
import { Icon } from "@components/atoms/icon.js";

/**
 * ClientSummaryCard
 *
 * A card specifically designed for displaying client statistics.
 *
 * @param {object} props - Card properties
 * @param {string} props.title - The title of the card
 * @param {string|number} props.value - The main value to display
 * @param {string} props.change - Text to display for percentage or value change
 * @param {object} props.icon - Icon to display on the card
 * @returns {object}
 */
export const ClientSummaryCard = ({ title, value, change, icon }) => (
    Card({ class: 'flex flex-auto flex-col p-4 min-w-[200px] max-w-sm shadow-md hover:shadow-lg transition-shadow', margin: 'm-0' }, [
        Div({ class: 'flex justify-between items-center mb-2' }, [
            H2({ class: 'text-lg font-medium text-muted-foreground' }, title),
            Icon(icon, { class: 'text-xl' })
        ]),
        Div({ class: 'flex flex-col' }, [
            P({ class: 'text-3xl font-bold leading-tight' }, value),
            P({ class: 'text-sm text-muted-foreground mt-1' }, change)
        ])
    ])
);

export default ClientSummaryCard;