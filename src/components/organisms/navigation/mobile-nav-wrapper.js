import { H3, I } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";
import { Div } from "../../atoms/atoms.js";
import { Button } from "../../atoms/buttons/buttons.js";
import { Icons } from "../../icons/icons.js";
import { InlineNavigation } from "./inline-navigation.js";

/**
 * @constant
 * @type {number} MobileWidth
 */
const MOBILE_WIDTH = 1024;

/**
 * This will check if the device is mobile.
 *
 * @returns {boolean}
 */
const isMobile = () => window.innerWidth < MOBILE_WIDTH;

/**
 * This will create a navigation button.
 *
 * @returns {object}
 */
const NavButton = () => (
    Button({ class: 'm-2', variant: 'ghost', click: (e, { state }) => state.toggle('expanded') }, [
        I({ html: Icons.bar.three })
    ])
);

/**
 * This will create a title element.
 *
 * @param {string} title
 * @returns {object}
 */
const Title = (title) => H3({ class: 'text-lg ml-2' }, title);

/**
 * This will create a header for the mobile navigation.
 *
 * @param {object} props
 * @returns {object}
 */
const Header = (props) => (
    Div({ class: 'flex flex-auto flex-row items-center lg:hidden' }, [
        NavButton(),
        props.title && Title(props.title)
    ])
);

/**
 * This will map the mobile options.
 *
 * @param {array} options
 * @param {function} callBack
 * @returns {void}
 */
const mapCloseCallBack = (options, callBack) =>
{
	options.forEach(option =>
	{
		if (option.options)
		{
			mapCloseCallBack(option.options, callBack);
			return;
		}

		/**
		 * We also want to add a callBack to ignore the hover to the main options.
		 */
		option.callBack = callBack;
	});
};

/**
 * This will create the expanded navigation.
 *
 * @param {object} props
 * @returns {object}
 */
const ExapandedNavigation = (props) =>
{
	const closeCallBack = (e, { parent }) => parent.parent.state.expanded = false;
	mapCloseCallBack(props.options, closeCallBack);

	return Div(
		{
			class: 'bg-popover flex flex-auto flex-col absolute w-full h-0 data-[expanded=true]:h-fit data-[expanded=false]:h-0 overflow-hidden data-[expanded=true]:shadow data-[expanded=true]:border rounded-md z-20',
			addState()
			{
				return {
					expanded: false
				};
			},
			dataSet: ['expanded', ['expanded', true, 'true']]
		},
		[
			new InlineNavigation(
			{
				options: props.options
			})
		]
	);
}

/**
 * This will create the mobile navigation.
 *
 * @param {object} props
 * @returns {object}
 */
const MobileNav = (props) => (
	Div({ class: 'bg-background flex flex-auto flex-col w-full relative' }, [
		ExapandedNavigation(props)
	])
);

/**
 * This will create a mobile navigation wrapper.
 *
 * @param {object} props
 * @param {array} children
 * @return {object}
 */
export const MobileNavWrapper = Atom((props, children) =>
{
	return Div({ class: 'bg-background flex flex-auto flex-col w-full relative lg:hidden' }, [
		Div({ class: 'flex flex-auto flex-col w-full' }, [
			Header(props),
			MobileNav(props)
		])
	]);
});