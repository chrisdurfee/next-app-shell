import { Div, UseParent } from "@base-framework/atoms";
import { Overlay } from "@base-framework/ui/organisms";
import { ContentSection } from "./content-section.js";
import { Sidebar } from "./sidebar.js";

/**
 * UserPage
 *
 * Dynamically displays user details based on the `userId` from the route.
 *
 * @returns {object}
 */
export const UserPage = () =>
{
	return new Overlay([
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
	])
};

export default UserPage;