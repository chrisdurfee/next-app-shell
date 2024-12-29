import { Div } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';
import { NavigationMenu } from '@base-framework/ui/organisms';
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

export default DesktopMenuLinks;