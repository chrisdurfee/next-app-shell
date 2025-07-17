import{u as e,_ as t,m as s,a1 as n,aA as d,o as p,J as u,Z as f,aB as h}from"./index-CLGmlMVg.js";import{D as g,d as r}from"./signature-panel-DRKSN07h-CvMSEmhP.js";import{D as o,C as a}from"./doc-section-DRLqbh6m.js";import{D as y}from"./doc-page-CBb-hUi3.js";import"./tooltip-Ssw4NmQM-BZySqOUk.js";import"./sidebar-menu-page-BVryQj2Z-CNOHAaqX.js";import"./mobile-nav-wrapper-Dj67Pb8l-DZkbLL-C.js";const m=[{name:"Leslie Alexander",email:"leslie.alexander@example.com",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Co-Founder / CEO",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Michael Foster",email:"michael.foster@example.com",image:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Co-Founder / CTO",lastSeen:"2023-01-23T13:23Z",status:"offline"},{name:"Dries Vincent",email:"dries.vincent@example.com",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",role:"Business Relations",status:"online"}],k=()=>y({title:"Lists",description:"Lists display a collection of items in a structured format. Each item can be customized (e.g. images, text, status). The List also supports advanced data manipulations."},[o({title:"Usage",description:"To use the List component, import it from the components library and display your items. You can pass a rowItem function to customize each row’s layout.",preview:[g({users:m})],code:`import { List } from "@base-framework/organisms";
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
});`}),o({title:"Empty State",description:"The List component can display an empty state when there are no items to show. You can customize the empty state message and layout.",preview:[new n({cache:"list",key:"name",items:[],role:"list",class:"divide-y divide-border",rowItem:r,emptyState:()=>d({title:"No Data Available",description:"There is no data to display at the moment.",icon:p.photo})})],code:`import { List } from "@base-framework/organisms";
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
});`}),e({class:"text-lg font-bold"},"Description"),t({class:"text-muted-foreground"},"The List component displays items in a structured format, each of which can be customized. It supports removing, setting, getting, resetting, appending, mingling, and prepending items for dynamic data updates."),e({class:"text-lg font-bold mt-4"},"Performance"),t({class:"text-muted-foreground"},"The List automatically re-renders only the changed rows (based on the key). This improves performance, as it avoids re-rendering the entire list unnecessarily."),o({title:"Row Dividers",description:"You can add dividers between rows to separate them visually. The List can also group items by date or other properties using custom logic.",preview:[new n({key:"id",items:m,role:"list",divider:{itemProperty:"name",layout:i=>u({class:"flex mt-4"},[f({class:"text-sm font-bold text-muted-foreground px-2"},i[0])]),customCompare:(i,l)=>i[0]!==l[0]},class:"flex flex-col gap-4",rowItem:r})],code:`import { List } from "@base-framework/organisms";

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
});`}),o({title:"ScrollableList",description:"The ScrollableList component extends the basic List by handling scroll events to automatically load more items as you reach the bottom of the container. It provides a refresh() method to reload the data. You can pass a loadMoreItems callback for dynamic data fetching or pass a data object to set up the callback automatically.",preview:[h({key:"name",items:m,class:"divide-y divide-border",rowItem:r,loadMoreItems:(i,l,c)=>{setTimeout(()=>{c([{name:"New User",email:"new.user@example.com"}])},1e3)},scrollContainer:window,limit:20})],code:`import { ScrollableList } from "@base-framework/organisms";

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
scrollableList.refresh();`}),s({class:"space-y-4 mt-8"},[e({class:"text-lg font-bold"},"Removing Items"),t({class:"text-muted-foreground"},"Use remove() to delete items by their key. You can pass an array of items."),a(`// Suppose 'list' is an instance of the List component.

// Removing a single item:
list.remove([ item ]);

// Removing multiple items:
list.remove([ item1, item2 ]);`)]),s({class:"space-y-4 mt-8"},[e({class:"text-lg font-bold"},"Setting Rows"),t({class:"text-muted-foreground"},"Use setRows() to directly replace the entire items array in the list."),a(`const newData = [
	{ name: 'Alice', email: 'alice@example.com' },
	{ name: 'Bob', email: 'bob@example.com' }
];
list.setRows(newData); // Replaces entire list with newData
`)]),s({class:"space-y-4 mt-8"},[e({class:"text-lg font-bold"},"Getting Rows"),t({class:"text-muted-foreground"},"Use getRows() to retrieve the current items array in the list."),a(`const currentItems = list.getRows();
console.log('Current list items:', currentItems);
`)]),s({class:"space-y-4 mt-8"},[e({class:"text-lg font-bold"},"Resetting the List"),t({class:"text-muted-foreground"},"Use reset() to clear all items, returning it to an empty list. Dividers are also reset, if any."),a(`list.reset(); // Empties the list's items array
`)]),s({class:"space-y-4 mt-8"},[e({class:"text-lg font-bold"},"Appending Items"),t({class:"text-muted-foreground"},"Use append() to add new items to the end of the list. Accepts an array or single object."),a(`// Single item
list.append({ name: 'Carol', email: 'carol@example.com' });

// Multiple items
list.append([
	{ name: 'David', email: 'david@example.com' },
	{ name: 'Erin', email: 'erin@example.com' }
]);
`)]),s({class:"space-y-4 mt-8"},[e({class:"text-lg font-bold"},"Mingling Items"),t({class:"text-muted-foreground"},"Use mingle(newItems, withDelete) to merge new items into existing ones, removing old ones if not present when withDelete = true. Compares based on the key property."),a(`const newItems = [
	{ name: 'Leslie Alexander', email: 'leslie@example.com' },
	{ name: 'George Smith', email: 'george@example.com' }
];

// withDelete = true means items not in newItems are removed
list.mingle(newItems, true);
`)]),s({class:"space-y-4 mt-8"},[e({class:"text-lg font-bold"},"Prepending Items"),t({class:"text-muted-foreground"},"Use prepend() to add new items at the beginning of the list, shifting existing items down."),a(`// Single item
list.prepend({ name: 'Zara', email: 'zara@example.com' });

// Multiple items
list.prepend([
	{ name: 'Yanni', email: 'yanni@example.com' },
	{ name: 'Xavier', email: 'xavier@example.com' }
]);
`)])]);export{k as ListPage,k as default};
