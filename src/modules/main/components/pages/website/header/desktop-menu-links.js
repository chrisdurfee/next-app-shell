import { Div } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';
import NavigationMenu from '@components/organisms/navigation/navigation-menu/navigation-menu.js';
import { Options } from './options.js';

/**
 * This will create a list of links.
 *
 * @returns {object}
 */
export const DesktopMenuLinks = Atom(() => (
    Div({ class: 'hidden lg:flex lg:flex-1 lg:justify-center' }, [
        new NavigationMenu({
            options: Options
        })
    ])
));