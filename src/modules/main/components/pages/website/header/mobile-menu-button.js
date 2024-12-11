import { Atom } from '@base-framework/base';
import { MobileNavButton } from '@components/organisms/navigation/mobile/nav-wrapper/mobile-nav-wrapper.js';
import { Options } from './options.js';

/**
 * This will create a mobile menu button.
 *
 * @param {object} props
 * @returns {object}
 */
export const MobileMenuButton = Atom((props) =>
{
    return MobileNavButton({
        title: 'Menu',
        options: Options
    });
});
