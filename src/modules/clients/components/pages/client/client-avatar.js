import { Div, On, Span } from "@base-framework/atoms";
import { Skeleton } from "@base-framework/ui/atoms";
import { Avatar } from "@base-framework/ui/molecules";

/**
 * Displays the client's avatar and name in a styled container.
 *
 * @returns {Array<object>}
 */
const ClientDetails = () => (
	[
		Avatar({ src: '[[client.avatar]]', alt: '[[client.name]]', watcherFallback: '[[client.name]]', size: "sm" }),
		Div({ class: "flex flex-auto flex-col" }, [
			Span({ class: "text-sm truncate" }, '[[client.name]]'),
			Span({ class: "text-xs truncate text-muted-foreground" }, '#[[client.id]]'),
		])
	]
);

/**
 * Displays a skeleton loader for client details.
 *
 *  @returns {Array<object>}
 */
const ClientDetailsSkeleton = () => (
	[
		Skeleton({ width: "w-9", height: "h-9", shape: "circle" }),
		Div({ class: "flex flex-auto flex-col gap-y-1" }, [
			Skeleton({ width: "w-32", height: "h-3" }),
			Skeleton({ width: "w-40", height: "h-3" }),
		])
	]
);

/**
 * Displays the client's avatar and name in a styled container.
 *
 * @returns {object}
 */
export const ClientAvatar = () => (
	On('loaded', (value => (
		Div({ class: "flex items-center gap-x-4 border rounded-md p-2 hover:bg-muted/50" },
			(!value)
			? ClientDetailsSkeleton()
			: ClientDetails()
		)
	)))
);