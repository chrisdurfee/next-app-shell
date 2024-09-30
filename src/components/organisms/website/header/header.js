import { Div } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';
import { Navigation } from './navigation.js';

/**
 * Header
 *
 * @returns {object}
 */
export const Header = Atom(() =>
{
    return Div({ class: 'absolute inset-x-0 top-0 z-50' }, [Navigation()]);
});
