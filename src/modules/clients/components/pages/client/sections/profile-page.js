import { Div, H2, On } from "@base-framework/atoms";
import { Data } from "@base-framework/base";
import { Button, Tooltip } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";
import { Page } from "@base-framework/ui/pages";
import { ClientModal } from "../../../organisms/modals/client-modal.js";
import { getClientById } from "../../clients/clients.js";
import { ClientContent } from "../client-content.js";
import ClientSkeleton from "../client-skeleton.js";

/**
 * ClientPage properties.
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
		const client = getClientById(route.clientId);

		const DELAY = 500;
		setTimeout(() => this.data.set({ client, loaded: true }), DELAY);
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
				return ClientSkeleton();
			}

			const client = data.client;
			if (!client)
			{
				return Div({ class: "text-center" }, "Client not found.");
			}

			return Div({ class: 'p-6 pt-0 2xl:mx-auto w-full 2xl:max-w-[1600px]' }, [
				Div({ class: 'flex flex-auto flex-col lg:flex-row lg:space-x-8'}, [
					Div({ class: 'flex-1' }, [
						Div({ class: 'flex flex-row justify-between gap-4' }, [
							H2({ class: 'text-2xl font-medium' }, 'Client'),
							Div({ class: 'flex flex-row space-x-2' }, [
								Div({ class: 'hidden lg:inline-flex' }, [
									Button({ variant: 'withIcon', class: 'text-muted-foreground outline', icon: Icons.pencil.square, click: ClientModal }, 'Edit'),
								]),
								Div({ class: 'flex lg:hidden mr-4' }, [
									Tooltip({ content: 'Edit', position: 'left' }, Button({ variant: 'icon', class: 'outline', icon: Icons.pencil.square, click: ClientModal }))
								])
							])
						]),
						ClientContent({ client }),
					]),
					Div({ class: 'w-full lg:w-1/4' }, [

					]),
				])
			]);
		})
    ])
);

export default ProfilePage;