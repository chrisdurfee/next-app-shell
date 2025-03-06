import{Y as u,L as y,T as d,ai as t,M as k,u as s,a7 as o,G as l,z as x}from"./index-D4NFwR8J.js";import{q as g}from"./tooltip-Cy5agtG6-CH95SLeL.js";import{k as f,p as T,w as c,i as D}from"./signature-panel-CrKk8upb-B_5ZHDju.js";import{D as n,C as r}from"./doc-section-DYPWfHLM.js";import{D as S}from"./doc-page-Dl7ZGvml.js";import"./sidebar-menu-page-nCAVFk3R-1BRe0fH9.js";import"./mobile-nav-wrapper-BE_hr65B-C0-TEPQz.js";const I=()=>{const e=[{id:1,status:"Active",email:"user1@example.com",amount:500.5},{id:2,status:"Inactive",email:"user2@example.com",amount:250.75},{id:3,status:"Active",email:"user3@example.com",amount:300}],m=()=>k([d({class:"text-muted-foreground border-b"},[T({}),c({key:"status",label:"Custom Status"}),c({key:"email",label:"User Email"}),c({key:"amount",label:"Amount (USD)",align:"justify-end"})])]),i=(a,h)=>d({class:"items-center px-4 py-2 hover:bg-muted/50"},[t({class:"p-4"},[new g({checked:a.selected,class:"mr-2",click:()=>h(a)})]),t({class:"p-4 justify-center"},a.status),t({class:"p-4"},a.email),t({class:"p-4 text-right"},`$${a.amount.toFixed(2)}`)]);return u({class:"w-full mt-4"},[u({class:"w-full rounded-md border overflow-x-auto"},[y({class:"w-full"},[new f({key:"id",customHeader:m(),rows:e,rowItem:i})])])])},p=[{label:"checkbox",key:""},{label:"Status",key:"status"},{label:"Email",key:"email"},{label:"Amount",key:"amount",align:"justify-end"}],b=[{id:1,status:"Success",email:"ken99@yahoo.com",amount:316,selected:!1},{id:2,status:"Success",email:"abe45@gmail.com",amount:242,selected:!1},{id:3,status:"Processing",email:"monserrat44@gmail.com",amount:837,selected:!1},{id:4,status:"Success",email:"silas22@gmail.com",amount:874,selected:!1},{id:5,status:"Failed",email:"carmella@hotmail.com",amount:721,selected:!1}],w=(e,m)=>d({class:"items-center px-4 py-2 hover:bg-muted/50"},[t({class:"p-4"},[new g({checked:e.selected,class:"mr-2",onChange:()=>m(e)})]),t({class:"p-4 "},[x({class:"text-muted-foreground"},e.status)]),t({class:"p-4 "},e.email),t({class:"p-4 text-right"},`$${e.amount.toFixed(2)}`)]),U=()=>S({title:"Data Tables",description:"Data tables are used to display or manipulate lists of items in tabular form."},[n({title:"Usage",description:"The DataTable component displays items in a structured format, supporting selection, custom row items, and more.",preview:[new f({headers:p,rows:b,rowItem:w,key:"id"})],code:`import { DataTable } from "@base-framework/ui/organisms";
import { Checkbox } from "@base-framework/ui/atoms";
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
});`}),n({title:"Custom Header Data Table",description:"Demonstrates a data table with custom headers and row rendering using the DataTable component.",preview:[I()],code:`// custom-header-table.js
import { CheckboxCol, HeaderCol } from "@base-framework/ui/organisms";
import { DataTable } from "@base-framework/ui/organisms";
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
};`}),n({title:"Scrollable Data Table",description:"The ScrollableDataTable component extends the basic DataTable by automatically loading additional rows as you scroll near the bottom of the table's container. It provides a refresh() method to reload data. You can pass a loadMoreItems callback for dynamic fetching or pass a data object to have the callback set up automatically.",preview:[D({cache:"table",headers:p,rows:b,rowItem:w,loadMoreItems:(e,m,i)=>{setTimeout(()=>{i([{id:6,status:"Success",email:"newuser@example.com",amount:200,selected:!1}])},1e3)},scrollContainer:window,limit:20})],code:`import { ScrollableDataTable } from "@base-framework/organisms";

const headers = [
	{ label: 'Status', key: 'status' },
	{ label: 'Email', key: 'email' },
	{ label: 'Amount', key: 'amount', align: 'justify-end' }
];

const rows = [
	{ id: 1, status: 'Success', email: 'ken99@yahoo.com', amount: 316.00, selected: false },
	// additional rows...
];

const scrollableTable = ScrollableDataTable({
	cache: 'table',
	headers,
	rows,
	rowItem,
	loadMoreItems: (offset, limit, callback) => {
		// Replace with asynchronous data fetching logic.
		setTimeout(() => {
			callback([
				{ id: 6, status: 'Success', email: 'newuser@example.com', amount: 200.00, selected: false }
			]);
		}, 1000);
	},
	scrollContainer: window,
	limit: 20
});

// To refresh the table data:
scrollableTable.refresh();`}),s({class:"space-y-4 mt-8"},[o({class:"text-lg font-bold"},"Selecting and Resetting Rows"),l({class:"text-muted-foreground"},"DataTable supports toggling all rows, clearing selections, and retrieving selected rows."),r(`// Suppose 'dt' is your DataTable instance

// Select or reset selection
dt.toggleAllSelectedRows(); // toggles between all selected or none

// Retrieve selected rows
const selectedItems = dt.getSelectedRows();
console.log('Selected Rows:', selectedItems);

// Clear the selection entirely
dt.data.selectedRows = [];
dt.updateSelected(); // updates the internal 'selected' boolean
`)]),s({class:"space-y-4 mt-8"},[o({class:"text-lg font-bold"},"Removing Items"),l({class:"text-muted-foreground"},"Use remove() to delete rows by passing an array of items (or a single item)."),r(`// dt is your DataTable instance

// Removing a single row
dt.remove([ rowToRemove ]);

// or removing multiple
dt.remove(selectedItems); // e.g. dt.getSelectedRows()
`)]),s({class:"space-y-4 mt-8"},[o({class:"text-lg font-bold"},"Appending Items"),l({class:"text-muted-foreground"},"Use append() to add rows at the end of the list. Accepts an array or single object."),r(`// dt is your DataTable instance
const newRow = { id: 6, status: 'New', email: 'newuser@example.com', amount: 100 };
dt.append(newRow);

// or multiple
dt.append([
	{ id: 7, status: 'Queued', email: 'queue@example.com', amount: 200 },
	{ id: 8, status: 'Processing', email: 'process@example.com', amount: 350 }
]);
`)]),s({class:"space-y-4 mt-8"},[o({class:"text-lg font-bold"},"Mingling Items"),l({class:"text-muted-foreground"},"Mingle merges new items with existing items by matching keys. If withDelete = true, items not in newItems are removed."),r(`// dt is your DataTable instance
const newItems = [
	{ id: 2, status: 'Success', email: 'abe45@gmail.com', amount: 242.00 },
	{ id: 9, status: 'Pending', email: 'another@example.com', amount: 500.00 }
];

// withDelete=true removes items not in newItems
dt.mingle(newItems, true);
`)]),s({class:"space-y-4 mt-8"},[o({class:"text-lg font-bold"},"Prepending Items"),l({class:"text-muted-foreground"},"Use prepend() to add new rows at the beginning of the list, shifting existing rows down."),r(`// dt is your DataTable instance
const topRow = { id: 0, status: 'Top', email: 'top@example.com', amount: 999.99 };
dt.prepend(topRow);

// or multiple
dt.prepend([
	{ id: -1, status: 'Urgent', email: 'urgent@example.com', amount: 777 },
	{ id: -2, status: 'Priority', email: 'priority@example.com', amount: 555 }
]);
`)])]);export{U as DataTablePage,U as default};
