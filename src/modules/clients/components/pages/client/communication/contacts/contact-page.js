import { Div, On } from "@base-framework/atoms";
import { Data } from "@base-framework/base";
import { Page } from "@base-framework/ui/pages";
import { ContactList } from "./contact-list.js";
import ContactSkeleton from "./contact-skeleton.js";
import { FakeContacts } from "./fake-contacts.js";
import { PageHeader } from "./page-header.js";

/**
 * props for ClientContactsPage
 *
 * @type {object} props
 */
const props =
{
	class: 'flex flex-auto flex-col w-full',

	/**
	 * setData
	 *
	 * Initializes component state.
	 *
	 * @returns {object} Data instance with loaded and client.
	 */
	setData()
	{
		return new Data(
		{
			loaded: false,
			contacts: []
		});
	},

	/**
	 * afterSetup
	 *
	 * Fetches client data after mount.
	 *
	 * @returns {void}
	 */
	afterSetup()
	{
		const route = this.route;
		const DELAY = 500;
		setTimeout(() => this.data.set({ contacts: FakeContacts, loaded: true }), DELAY);
	},

	/**
	 * beforeDestroy
	 *
	 * Cleans up component state.
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
 * ContactPage
 *
 * Page showing a client's contact list.
 *
 * @returns {object} A Page component.
 */
export const ContactPage = () =>
	new Page(props, [
		On("loaded", (loaded, ele, { data }) =>
		{
			if (!loaded)
			{
				return ContactSkeleton();
			}

			return Div({ class: "p-6 2xl:mx-auto w-full contained" }, [
				PageHeader(),
				ContactList({ contacts: data.contacts })
			]);
		})
	]);

export default ContactPage;
