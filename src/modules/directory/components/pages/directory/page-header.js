import { Div, H1, Header } from "@base-framework/atoms";
import { Button, Tooltip } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";
import { SearchDropdown } from "@base-framework/ui/organisms";
import { USERS } from "./users.js";

/**
 * This will convert users to options.
 *
 * @param {array} users
 * @returns {array}
 */
const convertUsersToOptions = (users) => users.map((user) => ({ label: `${user.firstName} ${user.lastName}`, value: user.id }));

/**
 * This will create a search input for the users page.
 *
 * @returns {object}
 */
const SearchInput = () => (
	new SearchDropdown({
		options: convertUsersToOptions(USERS),
		onSelect: (item) => app.navigate(`/directory/user/${item.value}`),
	})
);

/**
 * This will create a page header.
 *
 * @returns {object}
 */
export const PageHeader = () => (
	Header({ class: 'px-2 sm:py-4 sm:pb-0 lg:px-6 flex flex-col mb-4' }, [
		Div({ class: 'flex flex-auto items-center justify-between w-full' }, [
			H1({ class: 'text-3xl font-bold' }, 'Directory'),
			Div({ class: 'hidden lg:flex min-w-[440px]' }, [
				SearchInput()
			]),
			Div({ class: 'flex items-center gap-2' }, [
				Div({ class: 'hidden lg:flex' }, [
					Button({ variant: 'withIcon', class: 'text-muted-foreground', icon: Icons.circlePlus, click: () => null }, 'Add')
				]),
				Div({ class: 'flex lg:hidden mr-0' }, [
					Tooltip({ content: 'Add User', position: 'left' }, Button({ variant: 'icon', class: 'outline', icon: Icons.circlePlus, click: () => null }))
				])
			])
		]),
		Div({ class: 'flex lg:hidden w-full mx-auto my-4' }, [
			SearchInput()
		])
	])
);

export default PageHeader;