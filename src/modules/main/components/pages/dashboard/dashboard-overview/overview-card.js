import { Div, H3, Header } from "@base-framework/atoms";
import { Card } from "@components/atoms/cards/card.js";

/**
 * This will create the OverviewCard molecule.
 * @returns {object}
 */
export const OverviewCard = () => (
    Card({ padding: 'p-0', margin: 'm-0', class: 'col-span-4' }, [
        Header({ class: 'flex flex-col space-y-1.5 p-6' }, [
            H3({ class: 'font-semibold leading-none tracking-tight' }, 'Overview')
        ]),
        Div({ class: 'p-6 pt-0 pl-2' }, [
            // Chart component placeholder
            Div({ class: 'h-64 bg-muted rounded-md' }) // Placeholder for Chart
        ])
    ])
);