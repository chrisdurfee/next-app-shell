import { Div, On } from "@base-framework/atoms";
import { Data } from "@base-framework/base";
import { Button, Tooltip } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";
import { Breadcrumb } from "@base-framework/ui/molecules";
import { Page } from "@base-framework/ui/pages";
import { EmployeeModal } from "../../../../../organisms/modals/employee-modal.js";
import { getUserById } from "../../../users.js";
import UserSkeleton from "../../user-skeleton.js";
import { UserContent } from "../user-content.js";
import UserHeader from "../user-header.js";

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

			return Div({ class: 'p-6 pt-0 2xl:mx-auto w-full 2xl:max-w-[1600px]' }, [
				Div({ class: 'flex flex-row justify-between gap-4' }, [
					new Breadcrumb({
						items: [
							{ href: "/directory", label: "Directory" },
							{ href: `/directory/user/${user.id}`, label: "Profile" },
							{ label: `${user.firstName} ${user.lastName}` },
						],
					}),
					Div({ class: 'flex flex-row space-x-2' }, [
						Div({ class: 'hidden lg:inline-flex' }, [
							Button({ variant: 'withIcon', class: 'text-muted-foreground outline', icon: Icons.pencil.square, click: EmployeeModal }, 'Edit'),
						]),
						Div({ class: 'flex lg:hidden mr-4' }, [
							Tooltip({ content: 'Edit', position: 'left' }, Button({ variant: 'icon', class: 'outline', icon: Icons.pencil.square, click: EmployeeModal }))
						])
					])
				]),
				Div({ class: 'flex flex-auto flex-col lg:flex-row lg:space-x-8'}, [
					Div({ class: 'w-full lg:w-1/3' }, [
						UserHeader({ user })
					]),
					Div({ class: 'flex-1' }, [
						UserContent({ user }),
					])
				])
			]);
		})
    ])
);

export default ProfilePage;