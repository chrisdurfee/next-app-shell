import { Button, I, Li, Nav, Span, Ul } from "@base-framework/atoms";
import { Component, Jot } from "@base-framework/base";
import { Icons } from "@components/icons/icons.js";
import { MobileLink } from "./mobile-link.js";
import { PopOverContainer } from "./popover-container.js";

/**
 * AdditionalOptionsButton
 *
 * A reusable button to trigger additional options in a navigation menu.
 *
 * @param {object} props
 * @returns {object}
 */
export const AdditionalOptionsButton = ({ click }) => (
    Li({
        class: 'mobile-link flex flex-auto items-center justify-center cursor-pointer max-h-[80px]',
        click
    }, [
        Button({ class: 'p-[4px] flex flex-col items-center justify-center', onState: ['open', { active: true }] }, [
            I({ class: 'flex items-center justify-center py-[2px] px-3 rounded-md', html: Icons.ellipsis.vertical }),
            Span({ class: 'text-[10px]' }, 'More')
        ])
    ])
);

/**
 * This will separate the options.
 *
 * @param {array} options
 * @returns {object}
 */
const separateOptions = (options) =>
{
    const MAX_PRIMARY_OPTIONS = 5;
    const primaryOptions = options.slice(0, MAX_PRIMARY_OPTIONS);
    const additionalOptions = options.slice(MAX_PRIMARY_OPTIONS);
    return { primaryOptions, additionalOptions };
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
 * MobileNavigation
 *
 * A mobile navigation component that displays a list of links in a dropdown.
 *
 * @class
 * @extends Component
 */
export const MobileNavigation = Jot(
{
    /**
     * Initializes the component state.
     *
     * @returns {object}
     */
    state()
    {
        const type = checkTypeBySize();

        return {
            open: false,
            type: {
				state: type,
				callBack: (type) =>
				{
					this.state.typeClass = getTypeClass(type);
				}
			},
			typeClass: getTypeClass(type)
        };
    },

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
	},

    /**
     * Handles item selection within the dropdown.
     *
     * @returns {void}
     */
    handleSelect()
    {
        this.state.open = false;
    },

    /**
     * Renders the Dropdown component.
     *
     * @returns {object}
     */
    render()
    {
        const options = this.options || [];
        options.map(option => option.click = this.handleSelect.bind(this));
        const { primaryOptions, additionalOptions } = separateOptions(options);

        return Nav({ class: 'mobile-navigation flex flex-auto flex-col w-full h-full lg:hidden z-50' }, [
            Ul({ class: 'flex flex-auto m-0 p-0 list-none sm:flex-col' }, [

                // Add the primary options and the additional options button.
                ...primaryOptions.map(option => MobileLink(option)),

                // Add the additional options button if there are additional options.
                additionalOptions.length > 0 && AdditionalOptionsButton({
                    click: () => this.state.toggle('open')
                })
            ]),
            PopOverContainer({ options: additionalOptions })
        ]);
    }
});