import { Div, H1, Img } from "@base-framework/atoms";

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
	Div({ class: "flex flex-col gap-2 mt-4" }, [
		// User Image
		Img({
			src: user.image,
			alt: user.name,
			class: "w-full h-96 object-cover rounded-lg",
		}),

		// User Name
		H1({ class: "text-3xl font-bold text-foreground truncate" }, `${user.firstName} ${user.lastName}`),

		// User Metadata
		Div({ class: "text-sm text-muted-foreground flex gap-1 flex-col truncate" }, [
			Div({ class: 'text-xl' }, user.role),
			Div(user.location),
		])
	])
);

export default UserHeader;