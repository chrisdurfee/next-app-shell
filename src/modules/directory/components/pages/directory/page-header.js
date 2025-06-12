import { H1, Header, P } from "@base-framework/atoms";

/**
 * This will create a page header.
 *
 * @returns {object}
 */
export const PageHeader = () => (
	Header({ class: 'px-2 sm:py-4 sm:pb-0 lg:px-6 flex flex-col mb-4' }, [
		H1({ class: 'scroll-m-20 text-3xl font-bold tracking-tight' }, 'Directory'),
		P({ class: 'text-base text-muted-foreground py-2' }, 'Connect with your teammates.')
	])
);

export default PageHeader;