import { Div } from "@base-framework/atoms";
import { Skeleton } from "@base-framework/ui/atoms";

/**
 * PostSkeleton
 *
 * Displays a skeleton loader for the post page.
 *
 * @returns {object}
 */
export const PostSkeleton = () => (
    Div({ class: "flex flex-col gap-6" }, [
        Skeleton({ width: "w-full", height: "h-96", class: "rounded-lg" }), // Image skeleton
        Skeleton({ width: "w-3/4", height: "h-8", class: "rounded-md" }), // Title skeleton
        Skeleton({ width: "w-1/2", height: "h-5", class: "rounded-md" }), // Metadata skeleton
        Skeleton({ width: "w-full", height: "h-40", class: "rounded-md" }), // Content skeleton
    ])
);