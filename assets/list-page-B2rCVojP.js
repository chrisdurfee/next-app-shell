import{ap as u,af as n,bo as i,bp as p,s as h,ad as e,I as t,_ as m,e as w,bq as g,br as x,n as s}from"./index-BOO5Pnj0.js";import{o as c}from"./skeleton-BlY3opxG-D4DfKjdh.js";import{D as a,C as o}from"./doc-section-BYWZkHEJ.js";import{D as y}from"./doc-page-DSSU-fnG.js";import"./signature-panel-BWHC9V2v-CAplkTPP.js";import"./sidebar-menu-page-D12NEBpp-CYabCRqd.js";import"./sidebar-menu-BHHp2hXa-BfYRJzQL.js";const l=[{name:"Leslie Alexander",email:"leslie.alexander@example.com",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Co-Founder / CEO",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Michael Foster",email:"michael.foster@example.com",image:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Co-Founder / CTO",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Dries Vincent",email:"dries.vincent@example.com",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Business Relations",status:"online"}],U=()=>y({title:"Lists",description:"Lists display a collection of items in a structured format. Each item can be customized (e.g. images, text, status). The List also supports advanced data manipulations."},[a({title:"Usage",description:"To use the List component, import it from the components library and display your items. You can pass a rowItem function to customize each row’s layout.",preview:[u({users:l})],code:`import { List } from "@base-framework/organisms";
import { Atom } from "@base-framework/base";

/**
 * A simple UserList that displays user data via a rowItem function.
 *
 * @param {object} props
 * @returns {object}
 */
const UserList = Atom((props) =>
{
	return new List(
	{
		cache: 'list',
		key: 'name',
		items: [
			{
				name: 'Leslie Alexander',
				email: 'leslie.alexander@example.com'
				// ...
			}
		],
		role: 'list',
		class: 'divide-y divide-border',
		rowItem: UserListItem  // A function that returns a row for each user
	});
});`}),a({title:"Empty State",description:"The List component can display an empty state when there are no items to show. You can customize the empty state message and layout.",preview:[new n({cache:"list",key:"name",items:[],role:"list",class:"divide-y divide-border",rowItem:i,emptyState:()=>p({title:"No Data Available",description:"There is no data to display at the moment.",icon:h.photo})})],code:`import { List } from "@base-framework/organisms";
import { Atom } from "@base-framework/base";
import { List } from "@base-framework/organisms";
import { EmptyState } from "@base-framework/ui/molecules";

/**
 * A simple UserList that displays user data via a rowItem function.
 *
 * @param {object} props
 * @returns {object}
 */
const UserList = Atom((props) =>
{
	return new List(
	{
		cache: 'list',
		key: 'name',
		items: [
			{
				name: 'Leslie Alexander',
				email: 'leslie.alexander@example.com'
				// ...
			}
		],
		role: 'list',
		class: 'divide-y divide-border',
		rowItem: UserListItem,  // A function that returns a row for each user
		emptyState: () => EmptyState({
			title: 'No Data Available',
			description: 'There is no data to display at the moment.',
			icon: Icons.photo
		})
	});
});`}),e({class:"text-lg font-bold"},"Description"),t({class:"text-muted-foreground"},"The List component displays items in a structured format, each of which can be customized. It supports removing, setting, getting, resetting, appending, mingling, and prepending items for dynamic data updates."),e({class:"text-lg font-bold mt-4"},"Performance"),t({class:"text-muted-foreground"},"The List automatically re-renders only the changed rows (based on the key). This improves performance, as it avoids re-rendering the entire list unnecessarily."),a({title:"Row Dividers",description:"You can add dividers between rows to separate them visually. The List can also group items by date or other properties using custom logic.",preview:[new n({key:"id",items:l,role:"list",divider:{itemProperty:"name",layout:r=>m({class:"flex mt-4"},[w({class:"text-sm font-bold text-muted-foreground px-2"},r[0])]),customCompare:(r,d)=>r[0]!==d[0]},class:"flex flex-col gap-4",rowItem:i})],code:`import { List } from "@base-framework/organisms";

new List(
{
	key: 'id',
	items,
	role: 'list',
	divider:
	{
		itemProperty: 'name',
		layout: (name) =>
		{
			return Div(
			{ class: "flex mt-4" },
			[
				Span(
				{ class: "text-sm font-bold text-muted-foreground px-2" },
				name[0]
				)
			]
			);
		},
		customCompare: (lastValue, value) =>
		{
			return lastValue[0] !== value[0];
		}
	},
	class: 'flex flex-col gap-4',
	rowItem: UserListItem
});`}),a({title:"ScrollableList",description:"The ScrollableList component extends the basic List by handling scroll events to automatically load more items as you reach the bottom of the container. It provides a refresh() method to reload the data. You can pass a loadMoreItems callback for dynamic data fetching or pass a data object to set up the callback automatically.",preview:[g({key:"name",items:l,class:"divide-y divide-border",rowItem:i,loadMoreItems:(r,d,f)=>{setTimeout(()=>{f([{name:"New User",email:"new.user@example.com"}])},1e3)},scrollContainer:window,limit:20})],code:`import { ScrollableList } from "@base-framework/organisms";

// Example initial data array
const initialItems = [
	{ name: 'User One', email: 'user.one@example.com' },
	{ name: 'User Two', email: 'user.two@example.com' }
];

const scrollableList = ScrollableList(
{
	key: 'name',
	items: initialItems,
	class: 'divide-y divide-border',
	rowItem: UserListItem,
	loadMoreItems: (offset, limit, callback) =>
	{
		// Asynchronously fetch more items.
		fetchUserData(offset, limit, (rows) =>
		{
			callback(rows);
		});
	},
	scrollContainer: window,
	limit: 20
});

// To refresh the list data:
scrollableList.refresh();`}),a({title:"Skeleton Rows",description:"Lists that use data fetching can display skeleton placeholder rows while the data is loading. Pass a skeleton object with number (how many placeholder rows to render) and row (a function returning the skeleton layout for each row). The skeleton rows are automatically removed once real data arrives via setRows(), append(), or prepend().",preview:[new n({cache:"skeleton-list",key:"name",items:[],role:"list",class:"flex flex-col gap-3",rowItem:i,skeleton:{number:3,row:()=>m({class:"flex items-center gap-3 p-4"},[c({shape:"circle",width:"w-10",height:"h-10",class:"flex-none"}),m({class:"flex flex-col flex-1 gap-1"},[c({width:"w-1/3",height:"h-4",class:"rounded"}),c({width:"w-1/2",height:"h-3",class:"rounded"})])])}})],code:`import { Div } from "@base-framework/atoms";
import { List } from "@base-framework/organisms";
import { Skeleton } from "@base-framework/ui/atoms";

/**
 * UserRowSkeleton
 *
 * A placeholder row displayed while user data is loading.
 *
 * @returns {object}
 */
const UserRowSkeleton = () =>
	Div({ class: 'flex items-center gap-3 p-4' }, [
		Skeleton({ shape: 'circle', width: 'w-10', height: 'h-10', class: 'flex-none' }),
		Div({ class: 'flex flex-col flex-1 gap-1' }, [
			Skeleton({ width: 'w-1/3', height: 'h-4', class: 'rounded' }),
			Skeleton({ width: 'w-1/2', height: 'h-3', class: 'rounded' })
		])
	]);

new List(
{
	key: 'name',
	items: [],
	role: 'list',
	class: 'flex flex-col gap-3',
	rowItem: UserListItem,

	// Skeleton rows render immediately while data loads.
	// Once real data arrives, they are replaced automatically.
	skeleton: {
		number: 3,       // Number of placeholder rows
		row: UserRowSkeleton  // Function returning a skeleton row layout
	}
});`}),a({title:"DataList",description:'The DataList component wraps a List inside a DataContainer, enabling model-driven data fetching. Pass a data model and an optional xhrMethod to specify which model endpoint to call (e.g. "following", "recent"). It also supports the skeleton prop and emptyState for loading / empty states.',preview:[x({key:"name",items:l,role:"list",class:"flex flex-col gap-3",rowItem:i,emptyState:()=>p({title:"No Users",description:"No users to display.",icon:h.photo})})],code:`import { Div } from "@base-framework/atoms";
import { DataList } from "@base-framework/organisms";
import { Skeleton } from "@base-framework/ui/atoms";
import { EmptyState } from "@base-framework/ui/molecules";
import { Icons } from "@base-framework/ui/icons";

/**
 * Skeleton row for the list loading state.
 *
 * @returns {object}
 */
const UserRowSkeleton = () =>
	Div({ class: 'flex items-center gap-3 p-4' }, [
		Skeleton({ shape: 'circle', width: 'w-10', height: 'h-10' }),
		Div({ class: 'flex flex-col flex-1 gap-1' }, [
			Skeleton({ width: 'w-1/3', height: 'h-4' }),
			Skeleton({ width: 'w-1/2', height: 'h-3' })
		])
	]);

DataList({
	data: new UsersModel(),    // Model with xhr methods for data fetching
	cache: 'list',
	key: 'id',
	role: 'list',
	class: 'flex flex-col gap-3',

	// Specifies which model xhr method to call (e.g. 'following', 'recent').
	xhrMethod: 'following',

	// Skeleton rows shown while waiting for the fetch response.
	skeleton: {
		number: 3,
		row: UserRowSkeleton
	},

	// Row renderer for real data.
	rowItem: (user) => UserRow(user),

	// Displayed when the fetch returns an empty result set.
	emptyState: () => EmptyState({
		title: 'No Users Found',
		description: 'There are no users to display.',
		icon: Icons.users
	})
});`}),e({class:"text-lg font-bold mt-4"},"Skeleton Behavior"),t({class:"text-muted-foreground"},"When a skeleton is configured and the list has no initial items, the list immediately renders the specified number of placeholder rows. As soon as real data is received (via setRows, append, or prepend), the skeleton is torn down and replaced with actual content. The row() method short-circuits during skeleton mode, returning the skeleton component directly instead of calling rowItem."),s({class:"flex flex-col gap-y-4 mt-8"},[e({class:"text-lg font-bold"},"Removing Items"),t({class:"text-muted-foreground"},"Use remove() to delete items by their key. You can pass an array of items."),o(`// Suppose 'list' is an instance of the List component.

// Removing a single item:
list.remove([ item ]);

// Removing multiple items:
list.remove([ item1, item2 ]);`)]),s({class:"flex flex-col gap-y-4 mt-8"},[e({class:"text-lg font-bold"},"Setting Rows"),t({class:"text-muted-foreground"},"Use setRows() to directly replace the entire items array in the list."),o(`const newData = [
	{ name: 'Alice', email: 'alice@example.com' },
	{ name: 'Bob', email: 'bob@example.com' }
];
list.setRows(newData); // Replaces entire list with newData
`)]),s({class:"flex flex-col gap-y-4 mt-8"},[e({class:"text-lg font-bold"},"Getting Rows"),t({class:"text-muted-foreground"},"Use getRows() to retrieve the current items array in the list."),o(`const currentItems = list.getRows();
console.log('Current list items:', currentItems);
`)]),s({class:"flex flex-col gap-y-4 mt-8"},[e({class:"text-lg font-bold"},"Resetting the List"),t({class:"text-muted-foreground"},"Use reset() to clear all items, returning it to an empty list. Dividers are also reset, if any."),o(`list.reset(); // Empties the list's items array
`)]),s({class:"flex flex-col gap-y-4 mt-8"},[e({class:"text-lg font-bold"},"Appending Items"),t({class:"text-muted-foreground"},"Use append() to add new items to the end of the list. Accepts an array or single object."),o(`// Single item
list.append({ name: 'Carol', email: 'carol@example.com' });

// Multiple items
list.append([
	{ name: 'David', email: 'david@example.com' },
	{ name: 'Erin', email: 'erin@example.com' }
]);
`)]),s({class:"flex flex-col gap-y-4 mt-8"},[e({class:"text-lg font-bold"},"Mingling Items"),t({class:"text-muted-foreground"},"Use mingle(newItems, withDelete) to merge new items into existing ones, removing old ones if not present when withDelete = true. Compares based on the key property."),o(`const newItems = [
	{ name: 'Leslie Alexander', email: 'leslie@example.com' },
	{ name: 'George Smith', email: 'george@example.com' }
];

// withDelete = true means items not in newItems are removed
list.mingle(newItems, true);
`)]),s({class:"flex flex-col gap-y-4 mt-8"},[e({class:"text-lg font-bold"},"Prepending Items"),t({class:"text-muted-foreground"},"Use prepend() to add new items at the beginning of the list, shifting existing items down."),o(`// Single item
list.prepend({ name: 'Zara', email: 'zara@example.com' });

// Multiple items
list.prepend([
	{ name: 'Yanni', email: 'yanni@example.com' },
	{ name: 'Xavier', email: 'xavier@example.com' }
]);
`)])]);export{U as ListPage,U as default};
