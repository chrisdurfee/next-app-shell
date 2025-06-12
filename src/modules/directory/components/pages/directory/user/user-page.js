import { Div, On } from "@base-framework/atoms";
import { Data } from "@base-framework/base";
import { BackButton, Overlay } from "@base-framework/ui/organisms";
import { USERS } from "../users.js";
import { UserContent } from "./user-content.js";
import { UserHeader } from "./user-header.js";
import { UserSkeleton } from "./user-skeleton.js";

/**
 * Finds a user by its ID.
 *
 * @param {string} userId - The ID of the user to fetch.
 * @returns {object|null}
 */
export const getUserById = (userId) => USERS.find((user) => user.id.toString() === userId) || null;

/**
 * Toolbar
 *
 * Displays a back button in the toolbar.
 *
 * @returns {object}
 */
const Toolbar = () => (
	Div({ class: "flex w-full items-center justify-between pb-2 mt-2" }, [
		Div({ class: 'flex' }, [
			BackButton({
				margin: 'm-0 ml-0',
				backUrl: '/blog'
			})
		])
	])
);

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
		Div({ class: "flex flex-col w-full min-h-screen px-4 lg:px-8" }, [
			Div({ class: "flex flex-auto items-center flex-col gap-6 mx-auto w-full max-w-[1024px]" }, [
				Toolbar(),
				Div({ class: 'flex flex-auto flex-col w-full' }, [
					On("loaded", (loaded, ele, { data }) =>
					{
						if (!loaded)
						{
							return UserSkeleton();
						}

						const user = data.user;
						if (!user)
						{
							return Div({ class: "text-center" }, "User not found.");
						}

						return Div({ class: "w-full flex flex-auto flex-col gap-6" }, [
							UserHeader({ user }),
							UserContent({ user }),
						]);
					})
				])
			])
		])
	])
};

export default UserPage;