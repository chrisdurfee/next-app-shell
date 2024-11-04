import { DataTable } from "@components/organisms/lists/data-table.js";
import { DocSection } from "../../../molecules/doc-section.js";
import { DocPage } from '../../doc-page.js';

const rows = [
    { id: 1, status: 'Success', email: 'ken99@yahoo.com', amount: 316.00, selected: false },
    { id: 2, status: 'Success', email: 'abe45@gmail.com', amount: 242.00, selected: false },
    { id: 3, status: 'Processing', email: 'monserrat44@gmail.com', amount: 837.00, selected: false },
    { id: 4, status: 'Success', email: 'silas22@gmail.com', amount: 874.00, selected: false },
    { id: 5, status: 'Failed', email: 'carmella@hotmail.com', amount: 721.00, selected: false },
    // Add more rows as needed
];

/**
 * DataTablePage
 *
 * This will create a data table page.
 *
 * @param {object} props
 * @param {object} children
 * @returns {DocPage}
 */
export const DataTablePage = () => (
	DocPage(
        {
            title: 'Data Tables',
            description: 'Data tables are used to display data in a structured format. They can be used to display a list of items, a grid of items, or a table of items.',
        },
        [
            DocSection({
                title: 'Usage',
                description: 'The data table component is used to display data in a structured format. It can be used to display a list of items, a grid of items, or a table of items.',
                preview: [
                    new DataTable({ rows }),
                ],
                code: `import { DataTable } from "@components/organisms/lists/data-table.js";

new DataTable({ rows: [
    { id: 1, status: 'Success', email: 'ken99@yahoo.com', amount: 316.00, selected: false },
    { id: 2, status: 'Success', email: 'abe45@gmail.com', amount: 242.00, selected: false },
    { id: 3, status: 'Processing', email: 'monserrat44@gmail.com', amount: 837.00, selected: false },
    { id: 4, status: 'Success', email: 'silas22@gmail.com', amount: 874.00, selected: false },
    { id: 5, status: 'Failed', email: 'carmella@hotmail.com', amount: 721.00, selected: false },
    // Add more rows as needed
]})`
            })
        ]
    )
);

export default DataTablePage;