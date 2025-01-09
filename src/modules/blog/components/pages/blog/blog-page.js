import { Div } from "@base-framework/atoms";
import { List } from "@base-framework/organisms";
import { BlankPage } from "@base-framework/ui/pages";
import { BlogHeader } from "./blog-header.js";
import { HeroItem } from "./hero-item.js";
import { PostItem } from "./post-item.js";
import { HERO_POSTS, POSTS } from "./posts.js";

/**
 * This will create the hero section for the blog page.
 *
 * @param {object} props
 * @returns {object}
 */
const HeroSection = (props) => (
    Div({ class: "grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4 md:mb-8", map: [HERO_POSTS, (post) => new HeroItem({ post })] })
);

/**
 * This will create the post list for the blog page.
 *
 * @param {object} props
 * @returns {object}
 */
const PostList = ({ posts }) => (
    Div([
        new List({
            cache: "post-list",
            key: "id",
            items: posts,
            role: "list",
            class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6",
            rowItem: (post) => new PostItem({ post }),
        })
    ])
);

/**
 * BlogPage
 *
 * Sets up the blog page using BlankPage and simulates loading for posts.
 *
 * @returns {object}
 */
export const BlogPage = () => (
    new BlankPage([
        Div({ class: "flex flex-col w-full px-4 lg:px-8 max-w-[1800px] m-auto" }, [
            BlogHeader(),
            HeroSection(),
            PostList({
                posts: POSTS
            })
        ])
    ])
);

export default BlogPage;