import{Y as c,aW as b,K as u,D as i,E as e,H as p,O as f,Q as h,R as n,u as a,a4 as o,G as l,z as y}from"./index-B1V06mH8.js";import{D as d,C as m}from"./doc-section-BdXroFeL.js";import{D as x}from"./doc-page-DJab-6My.js";const k=()=>{const t=[{id:1,status:"Active",email:"user1@example.com",amount:500.5},{id:2,status:"Inactive",email:"user2@example.com",amount:250.75},{id:3,status:"Active",email:"user3@example.com",amount:300}],r=()=>f([i({class:"text-muted-foreground border-b"},[h({}),n({key:"status",label:"Custom Status"}),n({key:"email",label:"User Email"}),n({key:"amount",label:"Amount (USD)",align:"justify-end"})])]),g=(s,w)=>i({class:"items-center px-4 py-2 hover:bg-muted/50"},[e({class:"p-4"},[new p({checked:s.selected,class:"mr-2",click:()=>w(s)})]),e({class:"p-4 justify-center"},s.status),e({class:"p-4"},s.email),e({class:"p-4 text-right"},`$${s.amount.toFixed(2)}`)]);return c({class:"w-full mt-4"},[c({class:"w-full rounded-md border overflow-x-auto"},[b({class:"w-full"},[new u({key:"id",customHeader:r(),rows:t,rowItem:g})])])])},T=[{label:"checkbox",key:""},{label:"Status",key:"status"},{label:"Email",key:"email"},{label:"Amount",key:"amount",align:"justify-end"}],D=[{id:1,status:"Success",email:"ken99@yahoo.com",amount:316,selected:!1},{id:2,status:"Success",email:"abe45@gmail.com",amount:242,selected:!1},{id:3,status:"Processing",email:"monserrat44@gmail.com",amount:837,selected:!1},{id:4,status:"Success",email:"silas22@gmail.com",amount:874,selected:!1},{id:5,status:"Failed",email:"carmella@hotmail.com",amount:721,selected:!1}],I=(t,r)=>i({class:"items-center px-4 py-2 hover:bg-muted/50"},[e({class:"p-4"},[new p({checked:t.selected,class:"mr-2",onChange:()=>r(t)})]),e({class:"p-4 "},[y({class:"text-muted-foreground"},t.status)]),e({class:"p-4 "},t.email),e({class:"p-4 text-right"},`$${t.amount.toFixed(2)}`)]),R=()=>x({title:"Data Tables",description:"Data tables are used to display or manipulate lists of items in tabular form."},[d({title:"Usage",description:"The DataTable component displays items in a structured format, supporting selection, custom row items, and more.",preview:[new u({headers:T,rows:D,rowItem:I,key:"id"})],code:`import {  DataTable  } from "@base-framework/ui/organisms";
import {  Checkbox  } from "@base-framework/ui/atoms";
import { Tr, Td } from '@base-framework/atoms';

const headers = [
    { label: 'checkbox', key: '' },
    { label: 'Status', key: 'status' },
    { label: 'Email', key: 'email' },
    { label: 'Amount', key: 'amount', align: 'justify-end' }
];

const rows = [
    { id: 1, status: 'Success', email: 'ken99@yahoo.com', amount: 316.00, selected: false },
    // ...
];

const rowItem = (row, onSelect) =>
{
    return Tr({ class: 'items-center px-4 py-2 hover:bg-muted/50' }, [
        Td({ class: 'p-4' }, [
            new Checkbox({
                checked: row.selected,
                onChange: () => onSelect(row)
            })
        ]),
        Td({ class: 'p-4 ' }, row.status),
        Td({ class: 'p-4 ' }, row.email),
        Td({ class: 'p-4 text-right' }, \`$\${row.amount.toFixed(2)}\`)
    ]);
};

new DataTable({
    key: 'id',
    headers,
    rows,
    rowItem
});`}),d({title:"Custom Header Data Table",description:"Demonstrates a data table with custom headers and row rendering using the DataTable component.",preview:[k()],code:`// custom-header-table.js
import {  CheckboxCol, HeaderCol  } from "@base-framework/ui/organisms";
import {  DataTable  } from "@base-framework/ui/organisms";
import { Tr, Td, Thead } from '@base-framework/atoms';

// Showcases a custom header with CheckboxCol and HeaderCol, plus a custom rowItem.
export const CustomHeaderTable = () => {
   // define custom rows, rowItem, etc.
   return new DataTable({
       key: 'id',
       customHeader: ...,
       rows: ...,
       rowItem
   });
};`}),a({class:"space-y-4 mt-8"},[o({class:"text-lg font-bold"},"Selecting and Resetting Rows"),l({class:"text-muted-foreground"},"DataTable supports toggling all rows, clearing selections, and retrieving selected rows."),m(`// Suppose 'dt' is your DataTable instance

// Select or reset selection
dt.toggleAllSelectedRows(); // toggles between all selected or none

// Retrieve selected rows
const selectedItems = dt.getSelectedRows();
console.log('Selected Rows:', selectedItems);

// Clear the selection entirely
dt.data.selectedRows = [];
dt.updateSelected(); // updates the internal 'selected' boolean
`)]),a({class:"space-y-4 mt-8"},[o({class:"text-lg font-bold"},"Removing Items"),l({class:"text-muted-foreground"},"Use remove() to delete rows by passing an array of items (or a single item)."),m(`// dt is your DataTable instance

// Removing a single row
dt.remove([ rowToRemove ]);

// or removing multiple
dt.remove(selectedItems); // e.g. dt.getSelectedRows()
`)]),a({class:"space-y-4 mt-8"},[o({class:"text-lg font-bold"},"Appending Items"),l({class:"text-muted-foreground"},"Use append() to add rows at the end of the list. Accepts an array or single object."),m(`// dt is your DataTable instance
const newRow = { id: 6, status: 'New', email: 'newuser@example.com', amount: 100 };
dt.append(newRow);

// or multiple
dt.append([
    { id: 7, status: 'Queued', email: 'queue@example.com', amount: 200 },
    { id: 8, status: 'Processing', email: 'process@example.com', amount: 350 }
]);
`)]),a({class:"space-y-4 mt-8"},[o({class:"text-lg font-bold"},"Mingling Items"),l({class:"text-muted-foreground"},"Mingle merges new items with existing items by matching keys. If withDelete = true, items not in newItems are removed."),m(`// dt is your DataTable instance
const newItems = [
    { id: 2, status: 'Success', email: 'abe45@gmail.com', amount: 242.00 },
    { id: 9, status: 'Pending', email: 'another@example.com', amount: 500.00 }
];

// withDelete=true removes items not in newItems
dt.mingle(newItems, true);
`)]),a({class:"space-y-4 mt-8"},[o({class:"text-lg font-bold"},"Prepending Items"),l({class:"text-muted-foreground"},"Use prepend() to add new rows at the beginning of the list, shifting existing rows down."),m(`// dt is your DataTable instance
const topRow = { id: 0, status: 'Top', email: 'top@example.com', amount: 999.99 };
dt.prepend(topRow);

// or multiple
dt.prepend([
    { id: -1, status: 'Urgent', email: 'urgent@example.com', amount: 777 },
    { id: -2, status: 'Priority', email: 'priority@example.com', amount: 555 }
]);
`)])]);export{R as DataTablePage,R as default};
