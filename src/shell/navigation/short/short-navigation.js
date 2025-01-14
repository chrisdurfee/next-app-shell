import { Nav, Ul } from "@base-framework/atoms";
import { Component, Jot } from "@base-framework/base";
import { MobileLink } from "../mobile/mobile-link.js";

/**
 * ShortNavigation
 *
 * A short navigation component that displays a list of links.
 *
 * @class
 * @extends Component
 */
export const ShortNavigation = Jot(
{
    /**
     * Renders the navigation component.
     *
     * @returns {object}
     */
    render()
    {
        const options = this.options || [];

        return Nav({ class: 'short-navigation flex flex-auto flex-col w-full h-full lg:hidden z-50' }, [
            Ul({ class: 'flex flex-auto m-0 p-0 list-none flex-col' }, options.map(option => MobileLink(option)))
        ]);
    }
});