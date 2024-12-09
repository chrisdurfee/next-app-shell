import { H3, OnState } from "@base-framework/atoms";
import { Atom, Component } from "@base-framework/base";
import { Div } from "../../atoms/atoms.js";
import { Button } from "../../atoms/buttons/buttons.js";
import { Icon } from "../../atoms/icon.js";
import { Icons } from "../../icons/icons.js";
import { InlineNavigation } from "./inline-navigation.js";

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
        Icon(Icons.bar.three)
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
    Div({ class: 'sticky flex flex-auto flex-row items-center bg-popover lg:hidden top-0 z-10 border-0 border-b' }, [
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
 * This is the types for the navigation.
 *
 * @type {object} TYPES
 */
const TYPES = {
	PHONE: 'phone',
	TABLET: 'tablet',
	DESKTOP: 'desktop'
};

/**
 * This will check the type by size.
 *
 * @returns {string}
 */
const checkTypeBySize = () =>
{
	const width = window.innerWidth;
	if (width >= 1024)
	{
		return TYPES.DESKTOP;
	}

	if (width >= 640)
	{
		return TYPES.TABLET;
	}

	return TYPES.PHONE;
};

/**
 * This will get the type class.
 *
 * @param {string} type
 * @returns {string}
 */
const getTypeClass = (type) =>
{
	switch (type)
	{
		case TYPES.PHONE:
			return 'bottom: calc(56px + env(safe-area-inset-bottom));';
		case TYPES.TABLET:
			return 'left: calc(64px + env(safe-area-inset-left));';
		case TYPES.DESKTOP:
			return '';
	}
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
            class: `fixed inset-0 z-50`,
            style: '[[typeClass]]'
        }, [
            // Backdrop
            Div({
                class: `
                    absolute inset-0 bg-black/40 z-[-1] fadeIn
                    transition-opacity duration-200
                `,
                click: () => this.state.open = false
            }),

            // Popover Content
            Div({
                class: `
                    absolute popIn w-auto p-0 shadow-lg bg-popover m-auto top-0 bottom-0 left-2 right-2 max-h-[85vh] text-inherit block
                `,
				dataSet: ['open', ['expanded', true, 'true']]
            }, [
                Div({ class: 'flex flex-auto flex-col w-full overflow-y-auto max-h-[85vh] rounded-md bg-popover border' }, [
					PopupHeader({ title: this.title }),
					Div({ class: 'flex flex-auto flex-col' }, this.children)
				])
            ])
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
		const type = checkTypeBySize();

        return {
			type: {
				state: type,
				callBack: (type) =>
				{
					this.state.typeClass = getTypeClass(type);
				}
			},
			typeClass: getTypeClass(type),
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
	 * This will setup the events.
	 *
	 * @returns {array}
	 */
	setupEvents()
	{
		return [
			['resize', window, checkTypeBySize]
		];
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
			Header(props),
			MobileNav(props)
		])
	]);
});