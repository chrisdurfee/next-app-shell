import { Div } from "@base-framework/atoms";
import { BlankPage } from "@components/pages/blank-page.js";
import { ClientSummaryCards } from "./client-summary-cards.js";
import { ClientTable } from "./client-table.js";
import { clients } from "./clients.js"; // Import fake data
import { PageHeader } from "./page-header.js";

/**
 * This will create the client list page.
 *
 * @returns {object}
 */
export const ClientListPage = () => (
    new BlankPage([
        Div({ class: 'grid grid-cols-1' }, [
            Div({ class: 'flex flex-auto flex-col p-6 pt-0 space-y-6 md:pt-6 lg:p-8 w-full mx-auto lg:max-w-[70vw]' }, [
                PageHeader(),
                ClientSummaryCards(),
                Div({ class: 'flex flex-col overflow-x-auto' }, [
                    ClientTable({ clients })
                ])
            ])
        ])
    ])
);

export default ClientListPage;