import { Div, On } from "@base-framework/atoms";
import { Data } from "@base-framework/base";
import { Fieldset } from "@base-framework/ui/atoms";
import { Page } from "@base-framework/ui/pages";
import { SettingsSection } from "../../../../atoms/settings-section.js";
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

			return SettingsSection({
				title: 'Profile',
				description: 'This is how others will see you on the site.',
				class: 'max-w-[500px]',
				submit: (data) => console.log("Profile Settings:", data)
			}, [
				Fieldset({ legend: 'Profile Information' }, [
					UserHeader({ user }),
					UserContent({ user }),
				])
			]);
		})
    ])
);

export default ProfilePage;