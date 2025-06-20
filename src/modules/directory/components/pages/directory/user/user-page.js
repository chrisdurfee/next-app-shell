import { Div, UseParent } from "@base-framework/atoms";
import { Data } from "@base-framework/base";
import { Overlay } from "@base-framework/ui/organisms";
import { getUserById } from "../users.js";
import { ContentSection } from "./content-section.js";
import { Sidebar } from "./sidebar.js";

/**
 *  Props for the UserPage component.
 *
 *  @typedef {object} Props
 */
const Props =
{
	/**
	 * Sets the context data for the user page.
	 *
	 * @param {object|null} context
	 * @returns {object}
	 */
	setContext(context)
	{
		return {
			data: new Data({
				user: null,
				loaded: false
			})
		};
	},

	/**
	 * Simulates loading and fetches the user by ID after a delay.
	 *
	 * @returns {void}
	 */
	afterSetup()
	{
		const route = this.route;
		const user = getUserById(route.userId);

		const DELAY = 500;
		setTimeout(() => this.context.data.set({ user, loaded: true }), DELAY);
	},

	/**
	 * Deletes the data when the component is destroyed.
	 *
	 * @returns {void}
	 */
	beforeDestroy()
	{
		this.context.data.delete();
		this.context.data.loaded = false;
	}
};

/**
 * UserPage
 *
 * Dynamically displays user details based on the `userId` from the route.
 *
 * @returns {object}
 */
export const UserPage = () =>
{
	return new Overlay(Props, [
		Div({ class: "flex flex-auto flex-col w-full" }, [
			Div({ class: "flex flex-auto flex-col gap-6 w-full" }, [
				Div({ class: 'flex flex-auto flex-col pt-0 sm:pt-2 lg:pt-0 lg:flex-row h-full' }, [
					UseParent(({ route }) => ([
						Sidebar({ userId: route.userId }),
						ContentSection({ userId: route.userId })
					]))
				])
			])
		])
	]);
};

export default UserPage;