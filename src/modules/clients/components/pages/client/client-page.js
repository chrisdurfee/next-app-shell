import { Div, UseParent } from "@base-framework/atoms";
import { Data } from "@base-framework/base";
import { Overlay } from "@base-framework/ui/organisms";
import { getClientById } from "../clients/clients.js";
import { ContentSection } from "./content-section.js";
import { Sidebar } from "./sidebar.js";

/**
 * ClientPage properties.
 *
 * @type {object} props
 */
const props =
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
				client: null,
				loaded: false
			})
		};
	},

	/**
	 * Simulates loading and fetches the client by ID after a delay.
	 *
	 * @returns {void}
	 */
	afterSetup()
	{
		const route = this.route;
		const client = getClientById(route.clientId);

		const DELAY = 500;
		setTimeout(() => this.context.data.set({ client, loaded: true }), DELAY);
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
 * ClientPage
 *
 * Dynamically displays client details based on the `clientId` from the route.
 *
 * @returns {Overlay}
 */
export const ClientPage = () =>
{
	return new Overlay(props, [
		Div({ class: "flex flex-auto flex-col w-full" }, [
			Div({ class: "flex flex-auto flex-col gap-6 w-full" }, [
				Div({ class: 'flex flex-auto flex-col pt-0 sm:pt-2 lg:pt-0 lg:flex-row h-full' }, [
					UseParent(({ route }) => (
						Div({ class: 'flex flex-auto flex-row' }, [
							Sidebar({ clientId: route.clientId }),
							ContentSection({ clientId: route.clientId })
						])
					))
				])
			])
		])
	])
};

export default ClientPage;