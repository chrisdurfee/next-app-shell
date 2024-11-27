import { H3, I } from "@base-framework/atoms";
import { Atom, Component } from "@base-framework/base";
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
    Button({ class: 'm-2', variant: 'ghost', addState()
		{
			return {
				open: false
			};
		}, click: (e, { state }) => state.toggle('open') }, [
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
 * This will create a popup header for the mobile navigation.
 *
 * @param {object} props
 * @returns {object}
 */
const PopupHeader = (props) => (
    Div({ class: 'sticky flex flex-auto flex-row items-center bg-popover lg:hidden top-0 z-10 border-b' }, [
        Button({
			variant: 'icon',
			class: 'm-2',
			click: (e, { state }) => state.toggle('open'),
			icon: Icons.arrows.left,
		}),
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
 * PopOver
 *
 * This will create a absolute cotnainer component.
 *
 * @export
 * @class PopOver
 * @extends {Component}
 */
export class NavigationPopover extends Component
{
    /**
	 * This will render the modal component.
	 *
	 * @returns {object}
	 */
	render()
	{
        return Div({
            class: `fixed popIn m-auto rounded-md p-0 shadow-lg overflow-y-auto bg-popover top-5 bottom-5 left-2 right-2 min-h-[90vh] text-inherit block border z-30`,
			dataSet: ['open', ['expanded', true, 'true']]
        }, [
			PopupHeader({ title: this.title }),
			Div({ class: 'flex flex-auto flex-col' }, this.children)
		]);
	}

    /**
     * This will setup the states.
     *
     * @returns {object}
     */
    setupStates()
    {
        const parent = this.parent;
        const id = parent.getId();

        return {
            open: {
                id,
                callBack: (state) =>
                {
                    if (this.state.open === false)
                    {
                        this.destroy();
                    }
                }
            }
        };
    }

    /**
     * This will override the set up to use the body.
     *
     * @param {object} container
     */
    setup(container)
    {
        this.container = app.appShell.panel;
        this.initialize();
    }
}

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

	return Div({
		class: 'bg-background flex flex-auto flex-col w-full relative',
		onState: ['open', (state) =>
		{
			if (!state)
			{
				return null;
			}

			return [
				new NavigationPopover({ title: props.title }, [
					new InlineNavigation(
					{
						options: props.options
					})
				])
			];
		}]
	});
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
		Div({
				class: 'flex flex-auto flex-col w-full'
			}, [
			Header(props),
			MobileNav(props)
		])
	]);
});