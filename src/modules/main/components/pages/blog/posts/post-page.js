import { Div } from "@base-framework/atoms";
import { Data } from "@base-framework/base";
import { BackButton, Overlay } from "@components/organisms/overlay.js";
import { POSTS } from "../posts.js";
import { PostContent } from "./post-content.js";
import { PostHeader } from "./post-header.js";
import { PostSkeleton } from "./post-skeleton.js";

/**
 * Finds a post by its ID.
 *
 * @param {string} postId - The ID of the post to fetch.
 * @returns {object|null}
 */
export const getPostById = (postId) => POSTS.find((post) => post.id.toString() === postId) || null;


/**
 * Toolbar
 *
 * Displays a back button in the toolbar.
 *
 * @returns {object}
 */
const Toolbar = () => (
    Div({ class: "flex w-full items-center justify-between pb-2 mt-2" }, [
        Div({ class: 'flex' }, [
            BackButton({
                margin: 'm-0 ml-0'
            })
        ])
    ])
);

/**
 * PostPage
 *
 * Dynamically displays post details based on the `postId` from the route.
 *
 * @class
 */
export const PostPage = () =>
{
    /**
     * PostPage properties.
     *
     * @type {object} props
     */
    const props =
    {
        /**
         * Sets up the state and loading simulation for the page.
         *
         * @returns {object}
         */
        setData()
        {
            return new Data({
                loaded: false,
                post: null
            });
        },

        /**
         * Simulates loading and fetches the post by ID after a delay.
         *
         * @returns {void}
         */
        afterSetup()
        {
            const route = this.route;
            const post = getPostById(route.postId);

            const DELAY = 500;
            setTimeout(() => this.data.set({ post, loaded: true }), DELAY);
        },
    };

    return new Overlay(props, [
        Div({ class: "flex flex-col w-full min-h-screen px-4 lg:px-8" }, [
            Div({ class: "flex flex-auto items-center flex-col gap-6 mx-auto w-full max-w-[1024px]" }, [
                Toolbar(),
                Div({
                    class: 'flex flex-auto flex-col',
                    onSet: ["loaded", (loaded, ele, { data }) =>
                    {
                        if (!loaded)
                        {
                            return PostSkeleton();
                        }

                        const post = data.post;
                        if (!post)
                        {
                            return Div({ class: "text-center" }, "Post not found.");
                        }

                        return Div({ class: "w-full flex flex-col gap-6" }, [
                            PostHeader({ post }),
                            PostContent({ post }),
                        ]);
                    }]
                })
            ])
        ])
    ])
};