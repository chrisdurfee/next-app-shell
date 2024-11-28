import { Div, H2, Img, P } from "@base-framework/atoms";
import { Jot } from "@base-framework/base";
import { Skeleton } from "@components/atoms/skeleton.js";

/**
 * SkeletonPost
 * Displays a skeleton loader for a blog post.
 *
 * @returns {object}
 */
const SkeletonPost = () => (
    Div({ class: "flex flex-col bg-card p-4 rounded-md shadow-md" }, [
        Skeleton({
            width: "w-full",
            height: "h-32",
            class: "rounded-lg mb-4",
        }),
        Skeleton({
            width: "w-3/4",
            height: "h-5",
            class: "rounded-md mb-2",
        }),
        Skeleton({
            width: "w-full",
            height: "h-4",
            class: "rounded-md mb-4",
        }),
    ])
);


/**
 * PostItem
 *
 * Simulates loading for each individual post.
 *
 * @class
 */
export const PostItem = Jot({
    /**
     * Initial state for the PostItem Jot.
     */
    state: {
        loaded: false,
    },

    /**
     * Sets up the loading simulation.
     *
     * @returns {void}
     */
    after() {
        setTimeout(() => {
            this.state.loaded = true;
        }, 500); // Simulate loading for 500ms
    },

    /**
     * Renders the PostItem.
     *
     * @returns {object}
     */
    render() {
        const { post } = this;

        return Div(
            {
                class: "bg-card p-4 rounded-md shadow-md hover:shadow-lg transition",
                onState: ["loaded", (loaded) =>
                    !loaded
                        ? SkeletonPost()
                        : [
                            Div({
                                class: "w-full h-32 overflow-hidden rounded-lg mb-4",
                            }, [
                                Img({
                                    src: post.image,
                                    alt: post.title,
                                    class: "w-full h-full object-cover",
                                }),
                            ]),
                            H2(
                                {
                                    class: "text-lg font-semibold text-foreground mb-2",
                                },
                                post.title
                            ),
                            P(
                                { class: "text-sm text-muted-foreground" },
                                post.description
                            ),
                            Div(
                                { class: "mt-4 flex justify-between items-center" },
                                [
                                    P(
                                        {
                                            class: "text-xs text-muted-foreground",
                                        },
                                        post.category
                                    ),
                                    P(
                                        {
                                            class: "text-xs text-muted-foreground",
                                        },
                                        `${post.comments} comments`
                                    ),
                                ]
                            ),
                        ]
                ],
            }
        );
    },
});
