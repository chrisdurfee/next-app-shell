import { H2, Header, P } from "@base-framework/atoms";
import { Card } from "@base-framework/ui/atoms";

/**
 * This will create the card header.
 *
 * @param {object} props
 * @returns {object}
 */
export const CardHeader = ({ title, description }) => (
	Header({ class: 'text-left' }, [
		H2({ class: "font-semibold tracking-tight text-2xl" }, title),
		P({ class: "text-sm text-muted-foreground" }, description)
	])
);

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
	Card({ class: "w-full mx-auto p-6 bg-card space-y-6" }, [
		CardHeader({ title: "Team Member" }),

		P({ class: "text-sm text-muted-foreground" }, `${user.bio}`),
	])
);