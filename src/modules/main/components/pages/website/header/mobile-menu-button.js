import { Atom } from '@base-framework/base';
import { MobileNavButton } from "@base-framework/ui/organisms";
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

export default MobileMenuButton;
