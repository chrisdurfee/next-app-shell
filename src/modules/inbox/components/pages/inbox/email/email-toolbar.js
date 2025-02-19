import { Div } from "@base-framework/atoms";
import { Button, Tooltip } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";
import { Confirmation } from "@base-framework/ui/molecules";
import { BackButton } from "@base-framework/ui/organisms";

/**
 * This will create a tooltip button.
 *
 * @param {object} props
 * @returns {object}
 */
const TooltipButton = (props) => (
	Tooltip({ content: props.content, position: props.position }, [
		Button({
			variant: "icon",
			icon: props.icon,
			click: props.click
		}),
	])
);

/**
 * Toolbar for Email Actions.
 *
 * @param {object} props
 * @returns {object}
 */
export const EmailToolbar = (props) => (
	Div({ class: "flex items-center justify-between border-b pb-2" }, [
		Div({ class: 'flex lg:hidden' }, [
			BackButton({
				margin: 'm-0 ml-0',
				backUrl: '/inbox'
			})
		]),
		Div({ class: "hidden lg:flex items-center gap-2" }, [
			// Move to Inbox
			TooltipButton({
				content: "Move to inbox",
				position: "bottom-right",
				icon: Icons.archive.box.default,
				click: () => {}
			}),

			// Move to Junk
			TooltipButton({
				content: "Move to junk",
				position: "bottom",
				icon: Icons.archive.box.x,
				click: () => {}
			}),

			// Delete
			TooltipButton({
				content: "Delete",
				position: "bottom",
				icon: Icons.trash,
				click: (e, parent) =>
				{
					new Confirmation({
						icon: Icons.trash,
						title: 'Delete Message',
						description: 'Are you sure you want to delete this message?',
						confirmTextLabel: 'Delete',
						confirmed: () =>
						{
							props.delete(props.message.id);
						}
					}).open();
				}
			}),

			// Snooze
			TooltipButton({
				content: "Snooze",
				position: "bottom",
				icon: Icons.clock,
				click: () => {}
			}),
		]),

		Div({ class: "hidden lg:flex items-center gap-2" }, [
			// Reply
			TooltipButton({
				content: "Reply",
				position: "bottom",
				icon: Icons.arrows.left,
				click: () => {}
			}),

			// Reply All
			TooltipButton({
				content: "Reply all",
				position: "bottom",
				icon: Icons.arrows.uturn.left,
				click: () => {}
			}),

			// Forward
			TooltipButton({
				content: "Forward",
				position: "bottom",
				icon: Icons.arrows.right,
				click: () => {}
			}),

			// Separator
			Div({ class: "w-px h-5 bg-border mx-2" }),

			// More Options
			TooltipButton({
				content: "More options",
				position: "bottom-left",
				icon: Icons.ellipsis.vertical,
				click: () => {}
			}),
		])
	])
);

export default EmailToolbar;
