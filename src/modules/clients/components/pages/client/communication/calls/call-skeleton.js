import { Div } from "@base-framework/atoms";
import { Card, Skeleton } from "@base-framework/ui/atoms";

/**
 * CallCardSkeleton
 *
 * Renders a single skeleton placeholder for a call card.
 *
 * @returns {object}
 */
const CallCardSkeleton = () =>
	Card({ class: "flex items-center justify-between p-4 bg-card rounded-lg", margin: "m-0" }, [
		Div({ class: "flex items-center space-x-4" }, [
			Skeleton({ width: "w-10", height: "h-10", shape: "circle" }),
			Div({ class: "flex flex-col space-y-1" }, [
				Skeleton({ width: "w-32", height: "h-4" }),
				Skeleton({ width: "w-48", height: "h-3" }),
				Skeleton({ width: "w-40", height: "h-3" })
			])
		]),
		Skeleton({ width: "w-20", height: "h-6", class: "rounded-full" })
	]);

/**
 * CallSkeleton
 *
 * Skeleton loader for client calls page.
 *
 * @returns {object}
 */
export default () =>
	Div({ class: "p-6 contained" }, [
		// Search input + Add Contact button skeleton
		Div({ class: "flex items-center justify-between space-x-4" }, [
			// Page title skeleton
			Skeleton({ width: "w-32", height: "h-8" }),

			Skeleton({ width: "w-32", height: "h-10", class: "rounded-lg" })
		]),

		Div({ class: 'flex flex-auto flex-col mt-14 space-y-2' }, [
			// Three call card skeletons
			...Array.from({ length: 3 }).map(() => CallCardSkeleton())
		])
	]);
