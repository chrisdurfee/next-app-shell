import { Div } from "@base-framework/atoms";

/**
 * UserContent
 *
 * Displays the body content of the post.
 *
 * @param {object} props
 * @param {object} props.user - The user data.
 * @returns {object}
 */
export const UserContent = ({ user }) => (
	Div({ class: "text-base text-foreground leading-relaxed space-y-4" }, user.description)
);