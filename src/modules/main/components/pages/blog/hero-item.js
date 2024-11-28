import { Div, H2, Img, P } from "@base-framework/atoms";
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
            height: "h-48",
            class: "rounded-lg",
        }),
        Skeleton({
            width: "w-3/4",
            height: "h-6",
            class: "rounded-md",
        }),
    ])
);


/**
 * HeroItem
 *
 * Simulates loading for each individual hero post.
 *
 * @class
 */
export const HeroItem = Jot({
    /**
     * Initial state for the HeroItem Jot.
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
     * Renders the HeroItem.
     *
     * @returns {object}
     */
    render() {
        const { post } = this;

        return Div(
            {
                class: "p-4 bg-card shadow-md rounded-lg relative overflow-hidden",
                onState: ["loaded", (loaded) =>
                    !loaded
                        ? SkeletonHero()
                        : [
                            Div({
                                class: "relative w-full h-48 overflow-hidden rounded-lg mb-4",
                            }, [
                                Img({
                                    src: post.image,
                                    alt: post.title,
                                    class: "w-full h-full object-cover",
                                }),
                            ]),
                            Div({
                                class: "absolute bottom-4 left-4 bg-black bg-opacity-50 p-2 rounded-md",
                            }, [
                                H2(
                                    { class: "text-xl font-bold text-white" },
                                    post.title
                                ),
                                P(
                                    { class: "text-sm text-gray-200" },
                                    post.description
                                ),
                            ]),
                        ]
                ],
            }
        );
    },
});
