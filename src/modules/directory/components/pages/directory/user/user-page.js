import { Div } from "@base-framework/atoms";
import { Data } from "@base-framework/base";
import { Overlay } from "@base-framework/ui/organisms";
import { USERS } from "../users.js";
import { ContentSection } from "./content-section.js";
import { Sidebar } from "./sidebar.js";

/**
 * Finds a user by its ID.
 *
 * @param {string} userId - The ID of the user to fetch.
 * @returns {object|null}
 */
export const getUserById = (userId) => USERS.find((user) => user.id.toString() === userId) || null;

/**
 * UserPage
 *
 * Dynamically displays user details based on the `userId` from the route.
 *
 * @returns {object}
 */
export const UserPage = () =>
{
	/**
	 * UserPage properties.
	 *
	 * @type {object} props
	 */
	const props =
	{
		/**
		 * Sets up the state and loading simulation for the page.
		 *
		 * @returns {object}
		 */
		setData()
		{
			return new Data({
				loaded: false,
				post: null
			});
		},

		/**
		 * Simulates loading and fetches the post by ID after a delay.
		 *
		 * @returns {void}
		 */
		afterSetup()
		{
			const route = this.route;
			const user = getUserById(route.userId);

			const DELAY = 500;
			setTimeout(() => this.data.set({ user, loaded: true }), DELAY);
		},

		/**
		 * Deletes the data when the component is destroyed.
		 *
		 * @returns {void}
		 */
		beforeDestroy()
		{
			this.data.delete();
			this.data.loaded = false;
		}
	};

	return new Overlay(props, [
		Div({ class: "flex flex-auto flex-col w-full" }, [
			Div({ class: "flex flex-auto flex-col gap-6 w-full" }, [
				Div({ class: 'flex flex-auto flex-col pt-0 sm:pt-2 lg:pt-0 lg:flex-row h-full' }, [
					Sidebar(),
					ContentSection()
				])
			])
		])
	])
};

export default UserPage;