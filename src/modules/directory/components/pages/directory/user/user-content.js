import { H2, H3, Header, P } from "@base-framework/atoms";
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
 * @returns {array}
 */
export const UserContent = ({ user }) => ([
	H3({ class: "text-lg text-foreground mt-4" }, `Biography`),
	Card({ class: "w-full mx-auto p-6 bg-card space-y-4" }, [
		P({ class: "text-sm text-muted-foreground" }, `${user.bio}`),
	]),
	Card({ class: "w-full mx-auto p-6 bg-card space-y-2" }, [
		CardHeader({ title: "Schedule" }),

	]),
	Card({ class: "w-full mx-auto p-6 bg-card space-y-2" }, [
		CardHeader({ title: "Interests" }),

	]),
	Card({ class: "w-full mx-auto p-6 bg-card space-y-2" }, [
		CardHeader({ title: "Teams" }),

	]),
	Card({ class: "w-full mx-auto p-6 bg-card space-y-2" }, [
		CardHeader({ title: "Projects" }),

	]),
]);