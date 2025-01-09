import { Div } from '@base-framework/atoms';
import { Page } from '@base-framework/ui/pages';

/**
 * This will create a page.
 *
 * @returns {object}
 */
export const Error404Page = () => (
    new Page({ class: 'flex flex-auto flex-col relative' }, [
        Div({ class: 'flex flex-auto flex-col items-center justify-center' }, [
            Div({ class: 'text-3xl font-semibold' }, '404 Not Found')
        ])
    ])
);

export default Error404Page;