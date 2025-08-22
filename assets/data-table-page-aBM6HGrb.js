import{J as h,Q as f,X as d,ak as e,S as x,m as s,a8 as o,_ as l,Z as S}from"./index-CFDbfNLc.js";import{a as g,V as m}from"./tooltip-Cok_NM7z-Me-b7npL.js";import{j as c,b as T,y as u,r as v}from"./signature-panel-BEO99NlI-B8MbYZWJ.js";import{D as i,C as n}from"./doc-section-Del9k7Kh.js";import{D}from"./doc-page-TkUmvqza.js";import"./sidebar-menu-page-BtUJdw-T-BNhGV-ta.js";import"./mobile-nav-wrapper-C7RyGC5a-B2iBIcUi.js";const I=()=>{const t=[{id:1,status:"Active",email:"user1@example.com",amount:500.5},{id:2,status:"Inactive",email:"user2@example.com",amount:250.75},{id:3,status:"Active",email:"user3@example.com",amount:300}],a=()=>x([d({class:"text-muted-foreground border-b"},[T({}),u({key:"status",label:"Custom Status"}),u({key:"email",label:"User Email"}),u({key:"amount",label:"Amount (USD)",align:"justify-end"})])]),k=(r,y)=>d({class:"items-center px-4 py-2 hover:bg-muted/50"},[e({class:"p-4"},[new g({checked:r.selected,class:"mr-2",click:()=>y(r)})]),e({class:"p-4 justify-center"},r.status),e({class:"p-4"},r.email),e({class:"p-4 text-right"},`$${r.amount.toFixed(2)}`)]);return h({class:"w-full mt-4"},[h({class:"w-full rounded-md border overflow-x-auto"},[f({class:"w-full"},[new c({key:"id",customHeader:a(),rows:t,rowItem:k})])])])},w=[{label:"checkbox",key:""},{label:"Status",key:"status"},{label:"Email",key:"email"},{label:"Amount",key:"amount",align:"justify-end"}],p=[{id:1,status:"Success",email:"ken99@yahoo.com",amount:316,selected:!1},{id:2,status:"Success",email:"abe45@gmail.com",amount:242,selected:!1},{id:3,status:"Processing",email:"monserrat44@gmail.com",amount:837,selected:!1},{id:4,status:"Success",email:"silas22@gmail.com",amount:874,selected:!1},{id:5,status:"Failed",email:"carmella@hotmail.com",amount:721,selected:!1}],b=(t,a)=>d({class:"items-center px-4 py-2 hover:bg-muted/50"},[e({class:"p-4"},[new g({checked:t.selected,class:"mr-2",onChange:()=>a(t)})]),e({class:"p-4 "},[S({class:"text-muted-foreground"},t.status)]),e({class:"p-4 "},t.email),e({class:"p-4 text-right"},`$${t.amount.toFixed(2)}`)]),C=(t,a)=>d({class:"border-b hover:bg-muted/50"},[e({class:"p-4"},[m({shape:"circle",width:"w-4",height:"h-4"})]),e({class:"p-4"},[m({width:"w-20",height:"h-4"})]),e({class:"p-4"},[m({width:"w-32",height:"h-4"})]),e({class:"p-4"},[m({width:"w-16",height:"h-4"})])]),M=()=>D({title:"Data Tables",description:"Data tables are used to display or manipulate lists of items in tabular form."},[i({title:"Usage",description:"The DataTable component displays items in a structured format, supporting selection, custom row items, and more.",preview:[new c({headers:w,rows:p,rowItem:b,key:"id"})],code:`import { DataTable } from "@base-framework/ui/organisms";
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
});`}),i({title:"Custom Header Data Table",description:"Demonstrates a data table with custom headers and row rendering using the DataTable component.",preview:[I()],code:`// custom-header-table.js
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
};`}),i({title:"Scrollable Data Table",description:"The ScrollableDataTable component extends the basic DataTable by automatically loading additional rows as you scroll near the bottom of the table's container. It provides a refresh() method to reload data. You can pass a loadMoreItems callback for dynamic fetching or pass a data object to have the callback set up automatically.",preview:[v({cache:"table",headers:w,rows:p,rowItem:b,loadMoreItems:(t,a)=>{setTimeout(()=>{a([{id:6,status:"Success",email:"newuser@example.com",amount:200,selected:!1}])},1e3)},scrollContainer:window,limit:20})],code:`import { ScrollableDataTable } from "@base-framework/organisms";

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
	loadMoreItems: (tracker, callback) => {
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
scrollableTable.refresh();`}),i({title:"Skeleton Loading States",description:"DataTable supports skeleton loading states that automatically show when data is loading and disappear when real content arrives. Perfect for improving perceived performance and user experience.",preview:[new c({headers:w,skeleton:!0,key:"id"})],code:`import { DataTable } from "@base-framework/ui/organisms";
import { Skeleton } from "@base-framework/ui/atoms";

// Basic skeleton - shows 5 skeleton rows by default
new DataTable({
	headers,
	skeleton: true,
	rowItem,
	key: 'id'
});

// Custom skeleton count
new DataTable({
	headers,
	skeleton: { number: 10 }, // Show 10 skeleton rows
	rowItem,
	key: 'id'
});

// Custom skeleton row with advanced styling
const customSkeletonRow = (index, columnCount) => {
	return Tr({ class: 'border-b' }, [
		Td({ class: 'px-6 py-4' }, [
			Skeleton({ shape: 'circle', width: 'w-8', height: 'h-8' })
		]),
		Td({ class: 'px-6 py-4' }, [
			Skeleton({ width: 'w-3/4', height: 'h-4' })
		]),
		Td({ class: 'px-6 py-4' }, [
			Skeleton({ width: 'w-1/2', height: 'h-4' })
		])
	]);
};

new DataTable({
	headers,
	skeleton: {
		number: 8,
		row: customSkeletonRow
	},
	rowItem,
	key: 'id'
});

// Skeleton automatically removes when data is loaded
const table = new DataTable({ skeleton: true, headers, rowItem, key: 'id' });

// Load data asynchronously - skeleton disappears automatically
fetchData().then(data => {
	table.setRows(data); // Skeleton automatically removed
});`}),i({title:"Advanced Skeleton Examples",description:"Create sophisticated skeleton loading states that match your actual content layout for seamless transitions.",preview:[new c({headers:[{label:"User",key:"user"},{label:"Email",key:"email"},{label:"Role",key:"role"},{label:"Status",key:"status"}],skeleton:{number:6,row:C},key:"id"})],code:`// Advanced skeleton with avatars, badges, and actions
const userTableSkeleton = (index, columnCount) => {
	return Tr({ class: 'border-b hover:bg-muted/50' }, [
		// User column with avatar
		Td({ class: 'px-6 py-4' }, [
			Div({ class: 'flex items-center space-x-3' }, [
				Skeleton({ shape: 'circle', width: 'w-10', height: 'h-10' }),
				Div([
					Skeleton({ width: 'w-24', height: 'h-4' }),
					Div({ class: 'mt-1' }, [
						Skeleton({ width: 'w-16', height: 'h-3' })
					])
				])
			])
		]),
		// Email column
		Td({ class: 'px-6 py-4' }, [
			Skeleton({ width: 'w-32', height: 'h-4' })
		]),
		// Role badge column
		Td({ class: 'px-6 py-4' }, [
			Skeleton({
				width: 'w-20',
				height: 'h-6',
				class: 'rounded-full'
			})
		]),
		// Status column
		Td({ class: 'px-6 py-4' }, [
			Skeleton({
				width: 'w-16',
				height: 'h-6',
				class: 'rounded-full'
			})
		])
	]);
};

new DataTable({
	headers: [
		{ label: 'User', key: 'user' },
		{ label: 'Email', key: 'email' },
		{ label: 'Role', key: 'role' },
		{ label: 'Status', key: 'status' }
	],
	skeleton: {
		number: 8,
		row: userTableSkeleton
	},
	rowItem: userRowItem,
	key: 'id'
});`}),s({class:"space-y-4 mt-8"},[o({class:"text-lg font-bold"},"Skeleton API and Control"),l({class:"text-muted-foreground"},"The skeleton system provides automatic and manual control methods for managing loading states."),n(`// Skeleton configuration options
const table = new DataTable({
	headers,
	rowItem,

	// Basic skeleton (5 rows)
	skeleton: true,

	// Custom count
	skeleton: { number: 10 },

	// Custom skeleton row function
	skeleton: {
		number: 8,
		row: (index, columnCount) => CustomSkeletonRow({ index, columnCount })
	}
});

// Manual skeleton control
table.removeSkeleton(); // Manually remove skeleton
const isShowing = table.data.get('showSkeleton'); // Check skeleton state

// Automatic skeleton removal (happens automatically with these methods)
table.setRows(data);    // Replace all rows
table.append(newData);  // Add rows to end
table.prepend(newData); // Add rows to beginning
table.mingle(data);     // Merge/update rows

// Skeleton properties
// - Automatically counts columns from headers
// - Shows realistic varying widths for cells
// - Integrates with existing table styling
// - Prevents empty state from showing while loading
`)]),s({class:"space-y-4 mt-8"},[o({class:"text-lg font-bold"},"Selecting and Resetting Rows"),l({class:"text-muted-foreground"},"DataTable supports toggling all rows, clearing selections, and retrieving selected rows."),n(`// Suppose 'dt' is your DataTable instance

// Select or reset selection
dt.toggleAllSelectedRows(); // toggles between all selected or none

// Retrieve selected rows
const selectedItems = dt.getSelectedRows();
console.log('Selected Rows:', selectedItems);

// Clear the selection entirely
dt.data.selectedRows = [];
dt.updateSelected(); // updates the internal 'selected' boolean
`)]),s({class:"space-y-4 mt-8"},[o({class:"text-lg font-bold"},"Removing Items"),l({class:"text-muted-foreground"},"Use remove() to delete rows by passing an array of items (or a single item)."),n(`// dt is your DataTable instance

// Removing a single row
dt.remove([ rowToRemove ]);

// or removing multiple
dt.remove(selectedItems); // e.g. dt.getSelectedRows()
`)]),s({class:"space-y-4 mt-8"},[o({class:"text-lg font-bold"},"Appending Items"),l({class:"text-muted-foreground"},"Use append() to add rows at the end of the list. Accepts an array or single object."),n(`// dt is your DataTable instance
const newRow = { id: 6, status: 'New', email: 'newuser@example.com', amount: 100 };
dt.append(newRow);

// or multiple
dt.append([
	{ id: 7, status: 'Queued', email: 'queue@example.com', amount: 200 },
	{ id: 8, status: 'Processing', email: 'process@example.com', amount: 350 }
]);
`)]),s({class:"space-y-4 mt-8"},[o({class:"text-lg font-bold"},"Mingling Items"),l({class:"text-muted-foreground"},"Mingle merges new items with existing items by matching keys. If withDelete = true, items not in newItems are removed."),n(`// dt is your DataTable instance
const newItems = [
	{ id: 2, status: 'Success', email: 'abe45@gmail.com', amount: 242.00 },
	{ id: 9, status: 'Pending', email: 'another@example.com', amount: 500.00 }
];

// withDelete=true removes items not in newItems
dt.mingle(newItems, true);
`)]),s({class:"space-y-4 mt-8"},[o({class:"text-lg font-bold"},"Prepending Items"),l({class:"text-muted-foreground"},"Use prepend() to add new rows at the beginning of the list, shifting existing rows down."),n(`// dt is your DataTable instance
const topRow = { id: 0, status: 'Top', email: 'top@example.com', amount: 999.99 };
dt.prepend(topRow);

// or multiple
dt.prepend([
	{ id: -1, status: 'Urgent', email: 'urgent@example.com', amount: 777 },
	{ id: -2, status: 'Priority', email: 'priority@example.com', amount: 555 }
]);
`)])]);export{M as DataTablePage,M as default};
