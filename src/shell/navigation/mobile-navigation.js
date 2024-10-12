import { I, Span } from "@base-framework/atoms";
import { Component, NavLink } from "@base-framework/base";
import { Li, Nav, Ul } from "../../components/atoms/atoms.js";

/**
 * This will create a mobile link.
 *
 * @param {object} props
 * @returns {object}
 */
const MobileLink = (props) => (
    Li({ class: 'flex flex-auto items-center justify-center' }, [
        new NavLink({
            class: 'p-[4px] flex flex-col items-center justify-center',
            href: props.href,
        },
        [
            I({ class: 'rounded-md flex items-center justify-center', html: props.icon }),
            Span({ class: 'text-[10px]' }, props.label)
        ])
    ])
);

/**
 * MobileNavigation
 *
 * This will create the mobile navigation.
 *
 * @class
 * @extends Component
 */
export class MobileNavigation extends Component
{
	/**
	 * This will render the component.
	 *
	 * @returns {object}
	 */
	render()
	{
		return Nav({ class: 'mobile-navigation flex flex-auto flex-col w-full h-full sm:hidden' }, [
			Ul({ class: 'flex flex-auto m-0 p-0 list-none', map: [this.options, MobileLink] })
		]);
	}
}