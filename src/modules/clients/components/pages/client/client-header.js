import { Div, H1, Img } from "@base-framework/atoms";
import { Tooltip } from "@base-framework/ui";
import { Button } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";
import { StaticStatusIndicator } from "@base-framework/ui/molecules";

/**
 * ClientHeader
 *
 * Displays the client header, including the image, name, and metadata.
 *
 * @param {object} props
 * @param {object} props.client - The client data.
 * @returns {object}
 */
export const ClientHeader = ({ client }) => (
	Div({ class: "flex flex-col gap-2 mt-4" }, [
		// User Image
		Div({ class: 'relative mt-6' }, [
			Img({
				src: client.image,
				alt: client.name,
				class: "w-full h-96 object-cover rounded-lg",
			}),
			Div({ class: "absolute bottom-3 right-3" }, [
				StaticStatusIndicator(client.status)
			])
		]),

		// User Name
		Div({ class: "text-sm text-muted-foreground flex gap-1 flex-col truncate items-center justify-center" }, [
			H1({ class: "text-3xl font-bold text-foreground truncate mt-4" }, `${client.firstName} ${client.lastName}`),
		]),

		// User Metadata
		Div({ class: "text-sm text-muted-foreground flex gap-1 flex-col truncate items-center justify-center" }, [
			Div({ class: 'text-xl' }, client.role),
			Div(client.location),
		]),

		// phone and email
		Div({ class: 'text-sm text-muted-foreground gap-1 flex-col truncate items-center justify-center mt-4 hidden md:flex' }, [
			Div(client.email),
			Div(client.phone || '—'),
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

export default ClientHeader;