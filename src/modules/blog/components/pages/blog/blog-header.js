import { H1, Header, P } from "@base-framework/atoms";

/**
 * This will create a blog header.
 *
 * @returns {object}
 */
export const BlogHeader = () => (
	Header({ class: 'px-2 sm:py-4 sm:pb-0 lg:px-6 flex flex-col' }, [
		H1({ class: 'scroll-m-20 text-3xl font-bold tracking-tight' }, 'Auto Updates'),
		P({ class: 'text-base text-muted-foreground py-2' }, 'Stay up to date with the latest news and updates.')
	])
);

export default BlogHeader;