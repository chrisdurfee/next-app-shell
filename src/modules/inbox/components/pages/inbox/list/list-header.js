import { Div, H4, Header, Span } from "@base-framework/atoms";
import { Button, Tooltip } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";
import { TabGroup } from "@base-framework/ui/organisms";

/**
 * This will create the Title organism.
 *
 * @returns {object}
 */
const Title = () => (
	H4({
		class: "pl-2 lg:pl-0 text-3xl lg:text-xl font-bold",
		useParent: ({ route }) => (
			Span({ class: 'capitalize', text: ["[[page]]", route] })
		)
	})
);

/**
 * This will create the AddMessageButton organism.
 *
 * @returns {object}
 */
const AddMessageButton = () => (
	Div({ class: 'flex mr-2' }, [
		Tooltip({ content: 'Add Message', position: 'left' }, [
			Button({ variant: 'icon', icon: Icons.circlePlus })
		])
	])
);

/**
 * This will create the ListHeader organism.
 *
 * @returns {object}
 */
export const ListHeaer = () => (
	Header({ class: "px-4 pb-2 lg:p-4 bg-card" }, [
		Div({ class: "flex justify-between" }, [
			Title(),
			Div({ class: 'flex' }, [

				AddMessageButton(),

				// Message filter tabs
				new TabGroup({
					options: [
						{ label: "All Mail", value: "all" },
						{ label: "Unread", value: "unread" },
					],
					onSelect: (value, { state }) => state.list = value
				})
			])
		]),
	])
);

export default ListHeaer;
