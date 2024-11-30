import { A, Div, H2, Img, On, P } from "@base-framework/atoms";
import { Jot } from "@base-framework/base";
import { Skeleton } from "@components/atoms/skeleton.js";

/**
 * SkeletonPost
 * Displays a skeleton loader for a blog post.
 *
 * @returns {object}
 */
const SkeletonPost = () => (
    Div({ class: "flex flex-col bg-card rounded-md shadow-md" }, [
        Skeleton({
            width: "w-full",
            height: "h-[128px]",
            class: "rounded-lg mb-4",
        }),
        Skeleton({
            width: "w-3/4",
            height: "h-5",
            class: "rounded-md mb-2",
        }),
        Skeleton({
            width: "w-full",
            height: "h-20",
            class: "rounded-md mb-4",
        }),
    ])
);

/**
 * Post
 *
 * Displays a blog post.
 *
 * @param {object} post
 * @returns {array<object>}
 */
const Post = (post) => ([
    A({ href: `blog/posts/${post.id}` }, [
        Div({ class: "w-full h-32 overflow-hidden rounded-lg mb-4" }, [
            Img({
                src: post.image,
                alt: post.title,
                class: "w-full h-full object-cover",
            }),
        ]),
        H2({ class: "text-lg font-semibold text-foreground mb-2" }, post.title),
        P({ class: "text-sm text-muted-foreground" }, post.description),
        Div({ class: "mt-4 flex justify-between items-center" }, [
            P({ class: "text-xs text-muted-foreground" }, post.category),
            P({ class: "text-xs text-muted-foreground" }, `${post.comments} comments`),
        ])
    ])
]);

/**
 * PostItem
 *
 * Simulates loading for each individual post.
 *
 * @class
 */
export const PostItem = Jot(
{
    /**
     * Initial state for the PostItem Jot.
     */
    state:
    {
        loaded: false,
    },

    /**
     * Sets up the loading simulation.
     *
     * @returns {void}
     */
    after()
    {
        // Simulate loading for 500ms
        const DELAY = 500;
        setTimeout(() => this.state.loaded = true, DELAY);
    },

    /**
     * Renders the PostItem.
     *
     * @returns {object}
     */
    render()
    {
        const { post } = this;

        return Div({ class: "p-4 px-2 lg:px-4 transition" }, [
            On('loaded', (loaded) => (!loaded)
            ? SkeletonPost()
            : Post(post))
        ]);
    }
});
