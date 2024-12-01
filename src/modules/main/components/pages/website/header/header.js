import { Div } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';
import { Navigation } from './navigation.js';

/**
 * Header
 *
 * This will create a header for the website.
 *
 * @returns {object}
 */
export const Header = Atom(() => (
    Div({ class: 'inset-x-0 top-0 z-50' }, [Navigation()])
));
