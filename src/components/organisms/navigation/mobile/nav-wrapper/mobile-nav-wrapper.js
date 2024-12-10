import { Div, OnState } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";
import { InlineNavigation } from "../../inline-navigation.js";
import { NavigationPopover } from "./navigation-popover.js";
import { TitleHeader } from "./title-header.js";

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
 * This will create the mobile navigation.
 *
 * @param {object} props
 * @returns {object}
 */
const MobileNav = (props) =>
{
	const closeCallBack = (e, { parent }) => parent.parent.state.open = false;
	mapCloseCallBack(props.options, closeCallBack);

	return Div({ class: 'bg-background flex flex-auto flex-col w-full relative' }, [
		OnState('open', (state) => (!state)
			? null
			: [
				new NavigationPopover({ title: props.title }, [
					new InlineNavigation(
					{
						options: props.options
					})
				])
			]
		)
	]);
};

/**
 * This will create a mobile navigation wrapper.
 *
 * @param {object} props
 * @param {array} children
 * @return {object}
 */
export const MobileNavWrapper = Atom((props, children) =>
{
	return Div({ cache: 'mobileNav', class: 'bg-background flex flex-auto flex-col w-full relative lg:hidden' }, [
		Div({ class: 'flex flex-auto flex-col w-full' }, [
			TitleHeader(props),
			MobileNav(props)
		])
	]);
});