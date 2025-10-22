import{P as h,N as k,a0 as c,al as e,R as x,b as s,M as a,a9 as o,H as T}from"./index-Dlh7DyLN.js";import{a as g,V as d}from"./tooltip-PupzYM1r-Cr15Abjm.js";import{j as m,x as S,w as u,b as D}from"./signature-panel-Bq-usDxi-BIswlIS0.js";import{D as n,C as l}from"./doc-section-DJ9LGQtS.js";import{D as v}from"./doc-page-Cmr3Uwv9.js";import"./sidebar-menu-page-D4WMgz5U-C3BkSQd-.js";import"./mobile-nav-wrapper-Dm9DinRD-DxZ7AXqD.js";const I=()=>{const t=[{id:1,status:"Active",email:"user1@example.com",amount:500.5},{id:2,status:"Inactive",email:"user2@example.com",amount:250.75},{id:3,status:"Active",email:"user3@example.com",amount:300}],r=()=>x([c({class:"text-muted-foreground border-b"},[S({}),u({key:"status",label:"Custom Status"}),u({key:"email",label:"User Email"}),u({key:"amount",label:"Amount (USD)",align:"justify-end"})])]),y=(i,f)=>c({class:"items-center px-4 py-2 hover:bg-muted/50"},[e({class:"p-4"},[new g({checked:i.selected,class:"mr-2",click:()=>f(i)})]),e({class:"p-4 justify-center"},i.status),e({class:"p-4"},i.email),e({class:"p-4 text-right"},`$${i.amount.toFixed(2)}`)]);return h({class:"w-full mt-4"},[h({class:"w-full rounded-md border overflow-x-auto"},[k({class:"w-full"},[new m({key:"id",customHeader:r(),rows:t,rowItem:y})])])])},p=[{label:"checkbox",key:""},{label:"Status",key:"status"},{label:"Email",key:"email"},{label:"Amount",key:"amount",align:"justify-end"}],w=[{id:1,status:"Success",email:"ken99@yahoo.com",amount:316,selected:!1},{id:2,status:"Success",email:"abe45@gmail.com",amount:242,selected:!1},{id:3,status:"Processing",email:"monserrat44@gmail.com",amount:837,selected:!1},{id:4,status:"Success",email:"silas22@gmail.com",amount:874,selected:!1},{id:5,status:"Failed",email:"carmella@hotmail.com",amount:721,selected:!1}],b=(t,r)=>c({class:"items-center px-4 py-2 hover:bg-muted/50"},[e({class:"p-4"},[new g({checked:t.selected,class:"mr-2",onChange:()=>r(t)})]),e({class:"p-4 "},[T({class:"text-muted-foreground"},t.status)]),e({class:"p-4 "},t.email),e({class:"p-4 text-right"},`$${t.amount.toFixed(2)}`)]),C=(t,r)=>c({class:"border-b hover:bg-muted/50"},[e({class:"p-4"},[d({shape:"circle",width:"w-4",height:"h-4"})]),e({class:"p-4"},[d({width:"w-20",height:"h-4"})]),e({class:"p-4"},[d({width:"w-32",height:"h-4"})]),e({class:"p-4"},[d({width:"w-16",height:"h-4"})])]),B=()=>v({title:"Data Tables",description:"Data tables are used to display or manipulate lists of items in tabular form."},[n({title:"Usage",description:"The DataTable component displays items in a structured format, supporting selection, custom row items, and more.",preview:[new m({headers:p,rows:w,rowItem:b,key:"id"})],code:`import { DataTable } from "@base-framework/ui/organisms";
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
};`}),n({title:"Scrollable Data Table",description:"The ScrollableDataTable component extends the basic DataTable by automatically loading additional rows as you scroll near the bottom of the table's container. It provides a refresh() method to reload data. You can pass a loadMoreItems callback for dynamic fetching or pass a data object to have the callback set up automatically.",preview:[D({cache:"table",headers:p,rows:w,rowItem:b,loadMoreItems:(t,r)=>{setTimeout(()=>{r([{id:6,status:"Success",email:"newuser@example.com",amount:200,selected:!1}])},1e3)},scrollContainer:window,limit:20})],code:`import { ScrollableDataTable } from "@base-framework/organisms";

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
scrollableTable.refresh();`}),n({title:"Dynamic Data Table",description:"The DynamicDataTable component automatically fetches data using a model when created and updates the list dynamically. It provides seamless integration with data models for real-time data management.",preview:[a({class:"text-muted-foreground italic"},"Dynamic data table example requires a data model. See code example below for implementation.")],code:`import { DynamicDataTable } from "@base-framework/ui/organisms";
import { Badge } from "@base-framework/ui/atoms";
import { Tr, Td, P } from "@base-framework/atoms";
import { UserAuthedDeviceModel } from "../models/user-authed-device-model.js";
import { EmptyState } from "@base-framework/ui/molecules";

// Example with user authenticated devices
DynamicDataTable({
	key: 'id',
	data: new UserAuthedDeviceModel({
		userId: user.id,
		orderBy: {
			createdAt: 'DESC'
		}
	}),
	headers: [
		{ label: 'Platform', key: 'platform' },
		{ label: 'Brand', key: 'brand' },
		{ label: 'Version', key: 'version' }
	],
	rows: [],
	limit: 10,
	rowItem: (device) => Tr({ class: "items-center px-4 py-2 hover:bg-muted/50" }, [
		Td({ class: "p-4" }, P(device.platform)),
		Td({ class: "p-4 text-muted-foreground" }, P(device.brand)),
		Td({ class: "p-4" }, Badge({ variant: "primary" }, device.version))
	]),
	emptyState: () => EmptyState({
		title: 'No Authenticated Devices',
		description: 'The user has not authenticated any devices yet.',
		icon: 'device'
	})
});

// Example with custom model and pagination
DynamicDataTable({
	key: 'id',
	data: new OrdersModel({
		clientId: client.id,
		status: 'active',
		orderBy: {
			createdAt: 'DESC'
		}
	}),
	headers: [
		{ label: 'Order #', key: 'orderNumber' },
		{ label: 'Date', key: 'date' },
		{ label: 'Amount', key: 'amount', align: 'justify-end' },
		{ label: 'Status', key: 'status' }
	],
	limit: 25,
	rowItem: (order) => Tr({ class: "items-center px-4 py-2 hover:bg-muted/50" }, [
		Td({ class: "p-4" }, P(order.orderNumber)),
		Td({ class: "p-4" }, P(new Date(order.date).toLocaleDateString())),
		Td({ class: "p-4 text-right" }, P(\`$\${order.amount.toFixed(2)}\`)),
		Td({ class: "p-4" }, Badge({
			variant: order.status === 'completed' ? 'success' : 'warning'
		}, order.status))
	]),
	emptyState: () => EmptyState({
		title: 'No Orders Found',
		description: 'This client has no orders matching the current filters.',
		action: {
			label: 'Create Order',
			onClick: () => createNewOrder()
		}
	})
});`}),s({class:"flex flex-col gap-y-4 mt-8"},[o({class:"text-lg font-bold"},"Dynamic Data Table Features"),a({class:"text-muted-foreground"},"DynamicDataTable provides automatic data management with built-in loading states, error handling, and model integration."),l(`// Key features of DynamicDataTable:

// 1. Automatic data fetching on creation
const table = DynamicDataTable({
	data: new MyModel({ userId: 123 }),
	// ... other props
});
// Data is automatically fetched when the table is created

// 2. Model integration with real-time updates
// The table automatically updates when the model data changes
model.on('update', () => {
	// Table automatically re-renders with new data
});

// 3. Built-in pagination and loading states
// The table handles loading states during data fetching
// Shows skeleton rows while loading
// Automatically manages pagination with limit parameter

// 4. Error handling
// Built-in error states when data fetching fails
// Customizable error messages and retry actions

// 5. Empty state management
// Shows custom empty state when no data is available
// Supports actions for creating new items

// 6. Automatic refresh capabilities
table.refresh(); // Manually refresh data from model

// 7. Real-time data synchronization
// Updates automatically when underlying model changes
// Maintains selection state during updates
// Preserves scroll position when possible`)]),n({title:"Skeleton Loading States",description:"DataTable supports skeleton loading states that automatically show when data is loading and disappear when real content arrives. Perfect for improving perceived performance and user experience.",preview:[new m({headers:p,skeleton:!0,key:"id"})],code:`import { DataTable } from "@base-framework/ui/organisms";
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
});`}),n({title:"Advanced Skeleton Examples",description:"Create sophisticated skeleton loading states that match your actual content layout for seamless transitions.",preview:[new m({headers:[{label:"User",key:"user"},{label:"Email",key:"email"},{label:"Role",key:"role"},{label:"Status",key:"status"}],skeleton:{number:6,row:C},key:"id"})],code:`// Advanced skeleton with avatars, badges, and actions
const userTableSkeleton = (index, columnCount) => {
	return Tr({ class: 'border-b hover:bg-muted/50' }, [
		// User column with avatar
		Td({ class: 'px-6 py-4' }, [
			Div({ class: 'flex items-center gap-x-3' }, [
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
});`}),s({class:"flex flex-col gap-y-4 mt-8"},[o({class:"text-lg font-bold"},"Skeleton API and Control"),a({class:"text-muted-foreground"},"The skeleton system provides automatic and manual control methods for managing loading states."),l(`// Skeleton configuration options
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
`)]),s({class:"flex flex-col gap-y-4 mt-8"},[o({class:"text-lg font-bold"},"Selecting and Resetting Rows"),a({class:"text-muted-foreground"},"DataTable supports toggling all rows, clearing selections, and retrieving selected rows."),l(`// Suppose 'dt' is your DataTable instance

// Select or reset selection
dt.toggleAllSelectedRows(); // toggles between all selected or none

// Retrieve selected rows
const selectedItems = dt.getSelectedRows();
console.log('Selected Rows:', selectedItems);

// Clear the selection entirely
dt.data.selectedRows = [];
dt.updateSelected(); // updates the internal 'selected' boolean
`)]),s({class:"flex flex-col gap-y-4 mt-8"},[o({class:"text-lg font-bold"},"Removing Items"),a({class:"text-muted-foreground"},"Use remove() to delete rows by passing an array of items (or a single item)."),l(`// dt is your DataTable instance

// Removing a single row
dt.remove([ rowToRemove ]);

// or removing multiple
dt.remove(selectedItems); // e.g. dt.getSelectedRows()
`)]),s({class:"flex flex-col gap-y-4 mt-8"},[o({class:"text-lg font-bold"},"Appending Items"),a({class:"text-muted-foreground"},"Use append() to add rows at the end of the list. Accepts an array or single object."),l(`// dt is your DataTable instance
const newRow = { id: 6, status: 'New', email: 'newuser@example.com', amount: 100 };
dt.append(newRow);

// or multiple
dt.append([
	{ id: 7, status: 'Queued', email: 'queue@example.com', amount: 200 },
	{ id: 8, status: 'Processing', email: 'process@example.com', amount: 350 }
]);
`)]),s({class:"flex flex-col gap-y-4 mt-8"},[o({class:"text-lg font-bold"},"Mingling Items"),a({class:"text-muted-foreground"},"Mingle merges new items with existing items by matching keys. If withDelete = true, items not in newItems are removed."),l(`// dt is your DataTable instance
const newItems = [
	{ id: 2, status: 'Success', email: 'abe45@gmail.com', amount: 242.00 },
	{ id: 9, status: 'Pending', email: 'another@example.com', amount: 500.00 }
];

// withDelete=true removes items not in newItems
dt.mingle(newItems, true);
`)]),s({class:"flex flex-col gap-y-4 mt-8"},[o({class:"text-lg font-bold"},"Prepending Items"),a({class:"text-muted-foreground"},"Use prepend() to add new rows at the beginning of the list, shifting existing rows down."),l(`// dt is your DataTable instance
const topRow = { id: 0, status: 'Top', email: 'top@example.com', amount: 999.99 };
dt.prepend(topRow);

// or multiple
dt.prepend([
	{ id: -1, status: 'Urgent', email: 'urgent@example.com', amount: 777 },
	{ id: -2, status: 'Priority', email: 'priority@example.com', amount: 555 }
]);
`)])]);export{B as DataTablePage,B as default};
