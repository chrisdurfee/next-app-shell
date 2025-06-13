import { Div, On } from "@base-framework/atoms";
import { Data } from "@base-framework/base";
import { Page } from "@base-framework/ui/pages";
import { getUserById } from "../../users.js";
import { UserContent } from "../user-content.js";
import UserHeader from "../user-header.js";
import UserSkeleton from "../user-skeleton.js";

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
			user: null
		});
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

/**
 * ProfilePage
 *
 * Profile page for displaying user information.
 *
 * @returns {object}
 */
export const ProfilePage = () => (
    new Page(props, [
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

			return Div({ class: 'p-6 pt-0 2xl:mx-auto w-full 2xl:max-w-[2200px]' }, [
				Div({ class: 'flex flex-auto flex-col lg:flex-row lg:space-x-8'}, [
					Div({ class: 'w-full lg:w-1/3' }, [
						UserHeader({ user })
					]),
					Div({ class: 'flex-1 space-y-4' }, [
						UserContent({ user }),
					])
				])
			]);
		})
    ])
);

export default ProfilePage;