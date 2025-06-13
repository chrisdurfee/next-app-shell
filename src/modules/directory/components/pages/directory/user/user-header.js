import { Div, H1, Img } from "@base-framework/atoms";
import { Tooltip } from "@base-framework/ui";
import { Button } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";

/**
 * UserHeader
 *
 * Displays the user header, including the image, name, and metadata.
 *
 * @param {object} props
 * @param {object} props.user - The user data.
 * @returns {object}
 */
export const UserHeader = ({ user }) => (
	Div({ class: "flex flex-col gap-2 mt-4 items-center justify-center" }, [
		// User Image
		Img({
			src: user.image,
			alt: user.name,
			class: "w-full h-96 object-cover rounded-lg",
		}),

		// User Name
		H1({ class: "text-3xl font-bold text-foreground truncate" }, `${user.firstName} ${user.lastName}`),

		// User Metadata
		Div({ class: "text-sm text-muted-foreground flex gap-1 flex-col truncate items-center justify-center" }, [
			Div({ class: 'text-xl' }, user.role),
			Div(user.location),
		]),
		Div({ class: 'flex flex-auto items-center justify-center' }, [
			Div({ class: 'flex space-x-4 mt-4' }, [
				Tooltip({ content: 'Email' }, [
					Button({ variant: 'icon', class: 'primary', icon: Icons.envelope.default, label: 'Email' })
				]),
				Tooltip({ content: 'Call' }, [
					Button({ variant: 'icon', icon: Icons.phone.default, label: 'Call' })
				]),
				Tooltip({ content: 'Message' }, [
					Button({ variant: 'icon', icon: Icons.chat.text, label: 'Message' })
				]),
				Tooltip({ content: 'More' }, [
					Button({ variant: 'icon', icon: Icons.ellipsis.vertical, label: 'More' })
				])
			])
		])
	])
);

export default UserHeader;