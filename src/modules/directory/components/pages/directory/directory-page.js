import { Div } from "@base-framework/atoms";
import { List } from "@base-framework/organisms";
import { BlankPage } from "@base-framework/ui/pages";
import { PageHeader } from "./page-header.js";
import UserItem from "./user-item.js";
import { USERS } from "./users.js";

/**
 * This will create the list for the page.
 *
 * @param {object} props
 * @returns {object}
 */
const UserList = ({ users }) => (
	Div([
		new List({
			cache: "userlist",
			key: "id",
			items: users,
			role: "list",
			class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 md:gap-4 pb-6",
			rowItem: (user) => new UserItem({ user }),
		})
	])
);

/**
 * DirectoryPage
 *
 * Sets up the directory page using BlankPage and simulates loading for users.
 *
 * @returns {object}
 */
export const DirectoryPage = () => (
	new BlankPage([
		Div({ class: "flex flex-col w-full px-4 lg:px-8 max-w-[1800px] mx-auto" }, [
			PageHeader(),
			UserList({
				users: USERS
			})
		])
	])
);

export default DirectoryPage;