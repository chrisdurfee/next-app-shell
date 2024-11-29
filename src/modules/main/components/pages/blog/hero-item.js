import { A, Div, H2, Img } from "@base-framework/atoms";
import { Jot } from "@base-framework/base";
import { Skeleton } from "@components/atoms/skeleton.js";

/**
 * SkeletonHero
 *
 * Displays skeleton loader for hero posts.
 *
 * @returns {object}
 */
const SkeletonHero = () => (
    Div({ class: "flex flex-col gap-4" }, [
        Skeleton({
            width: "w-full",
            height: "h-56",
            class: "rounded-lg",
        })
    ])
);

/**
 * HeroPost
 *
 * Displays a hero post.
 *
 * @param {object} post
 * @returns {array<object>}
 */
const HeroPost = (post) => ([
    A({ href: `blog/posts/${post.id}` }, [
        Div({ class: "relative w-full h-56 overflow-hidden rounded-lg mb-4" }, [
            Img({
                src: post.image,
                alt: post.title,
                class: "w-full h-full object-cover"
            }),
        ]),
        Div({ class: "absolute bottom-4 left-4 bg-black bg-opacity-50 p-2 rounded-md" }, [
            H2({ class: "text-xl font-bold" }, post.title),
            //P({ class: "text-sm" }, post.description),
        ])
    ])
]);

/**
 * HeroItem
 *
 * Simulates loading for each individual hero post.
 *
 * @class
 */
export const HeroItem = Jot(
{
    /**
     * Initial state for the HeroItem Jot.
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
     * Renders the HeroItem.
     *
     * @returns {object}
     */
    render()
    {
        const { post } = this;

        return Div({
            class: "p-4 relative overflow-hidden",
            onState: ["loaded", (loaded) =>
                !loaded
                    ? SkeletonHero()
                    : HeroPost(post)
            ]
        });
    },
});
