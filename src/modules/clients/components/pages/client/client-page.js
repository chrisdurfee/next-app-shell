import { Div, UseParent } from "@base-framework/atoms";
import { Overlay } from "@base-framework/ui/organisms";
import { ContentSection } from "./content-section.js";
import { Sidebar } from "./sidebar.js";

/**
 * ClientPage
 *
 * Dynamically displays client details based on the `clientId` from the route.
 *
 * @returns {object}
 */
export const ClientPage = () =>
{
	return new Overlay([
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