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
        Div({ class: 'grid grid-cols-1 p-6 pt-0 md:pt-6 lg:p-8 space-y-6' }, [
            PageHeader(),
            ClientSummaryCards(),
            Div({ class: 'flex flex-col overflow-x-auto' }, [
                ClientTable({ clients })
            ])
        ])
    ])
);

export default ClientListPage;