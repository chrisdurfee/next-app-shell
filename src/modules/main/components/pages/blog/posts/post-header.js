import { Div, H1, Img, Span } from "@base-framework/atoms";

/**
 * PostHeader
 *
 * Displays the post header, including the image, title, and metadata.
 *
 * @param {object} props
 * @param {object} props.post - The post data.
 * @returns {object}
 */
export const PostHeader = ({ post }) => (
    Div({ class: "flex flex-col gap-6 mt-20" }, [
        // Post Image
        Img({
            src: post.image,
            alt: post.title,
            class: "w-full h-96 object-cover rounded-lg",
        }),

        // Post Title
        H1({ class: "text-3xl font-bold text-foreground" }, post.title),

        // Post Metadata
        Div({ class: "text-sm text-muted-foreground flex gap-4" }, [
            Span(post.date),
            Span(`${post.comments} comments`),
            Span(post.category),
        ]),
    ])
);