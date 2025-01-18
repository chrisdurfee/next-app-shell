import { A, Div, H2, Img, P } from "@base-framework/atoms";
import { Component, Jot } from "@base-framework/base";
import { Skeleton } from "@base-framework/ui/atoms";

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
 * @returns {Array<object>}
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
		Div({ class: "absolute bottom-8 left-4 bg-background/80 p-2 rounded-md" }, [
			H2({ class: "text-xl font-bold" }, post.title),
			P({ class: "text-sm" }, post.description),
		])
	])
]);

/**
 * HeroItem
 *
 * Simulates loading for each individual hero post.
 *
 * @type {typeof Component}
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
		// @ts-ignore
		setTimeout(() => this.state.loaded = true, DELAY);
	},

	/**
	 * Renders the HeroItem.
	 *
	 * @returns {object}
	 */
	render()
	{
		// @ts-ignore
		const { post } = this;

		return Div({
			class: "p-4 px-2 lg:px-4 relative overflow-hidden",
			onState: ["loaded", (loaded) =>
				!loaded
					? SkeletonHero()
					: HeroPost(post)
			]
		});
	},
});

export default HeroItem;
