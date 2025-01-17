import { Div } from "@base-framework/atoms";

/**
 * PostContent
 *
 * Displays the body content of the post.
 *
 * @param {object} props
 * @param {object} props.post - The post data.
 * @returns {object}
 */
export const PostContent = ({ post }) => (
	Div({ class: "text-base text-foreground leading-relaxed space-y-4" }, post.description)
);