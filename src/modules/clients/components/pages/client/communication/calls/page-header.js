import { Div, H1, Header } from "@base-framework/atoms";
import { Button, Tooltip } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";
import { SearchDropdown } from "@base-framework/ui/organisms";
import { FakeCalls } from "./fake-calls.js";

/**
 * convertCallsToOptions
 *
 * @param {Array<object>} calls
 * @returns {Array<object>}
 */
const convertCallsToOptions = (calls) => calls.map(c => ({ label: c.contactName, value: c.id }));

/**
 * SearchInput
 *
 * @returns {object}
 */
const SearchInput = () =>
	new SearchDropdown({
		options: convertCallsToOptions(FakeCalls),
		onSelect: item => console.log(item)
	});

/**
 * PageHeader
 *
 * Renders the header for the calls page.
 *
 * @returns {object}
 */
export const PageHeader = () =>
	Header({ class: 'flex flex-auto flex-col pt-0 sm:pt-2 md:pt-0' }, [
		Div({ class: 'flex flex-auto items-center justify-between w-full' }, [
			H1({ class: 'text-3xl font-bold' }, 'Calls'),
			Div({ class: 'hidden lg:flex min-w-[440px]' }, [
				SearchInput()
			]),
			Div({ class: 'flex items-center gap-2' }, [
				Div({ class: 'hidden lg:flex' }, [
					Button({ variant: 'withIcon', class: 'text-muted-foreground', icon: Icons.phone.default, click: () => null }, 'New Call')
				]),
				Div({ class: 'flex lg:hidden mr-0' }, [
					Tooltip({ content: 'New Call', position: 'left' },
						Button({ variant: 'icon', class: 'outline', icon: Icons.phone.default, click: () => null })
					)
				])
			])
		]),
		Div({ class: 'flex lg:hidden w-full mx-auto my-4' }, [
			SearchInput()
		])
	]);
