import { State } from '@base-framework/base';
import { InlineNavigation, SubNavigation } from './inline-navigation.js';
import { MainLink } from './main-link.js';

/**
 * This will update the app to ingnor hover.
 *
 * @param {object} e
 * @return {void}
 */
const ignorHover = (e) =>
{
	State.set('app-control', 'ignoreHover', true);
};

/**
 * This will close inactive buttons.
 *
 * @param {array} buttons
 * @param {object} active
 * @return {boolean}
 */
const isActive = (buttons, active) =>
{
	if (!buttons.length)
	{
		return false;
	}

	return buttons.some(link =>
	{
        const { sub, link: button } = link;
        if (sub && sub.buttons.length && isActive(sub.buttons, active))
		{
            return true;
        }

        if (button !== active)
		{
            button.state.set('active', false);
        }
        return false;
    });
};

/**
 * PrimaryNavigation
 *
 * This will create a navigation that has sub
 * navigations. The sub naivigations will be
 * added the parent nav container.
 *
 * @class
 * @augments InlineNavigation
 */
export class PrimaryNavigation extends InlineNavigation
{
	beforeSetup()
	{
		this.buttons = [];
	}

	/**
	 * This wil set up the sub nav.
	 *
	 * @returns {void}
	 */
	afterSetup()
	{
		this.subs.forEach(sub => this.appNav.appendChild(sub.panel));
	}

	/**
	 * This will add the sub navs.
	 *
	 * @returns {array}
	 */
	addSubs()
	{
		return this.subs;
	}

	/**
	 * This will set up the sub nav.
	 *
	 * @param {object} link
	 * @returns {object}
	 */
	setupSubNav(link)
	{
		return new PrimarySubNavigation(
		{
			depth: 1,
			appNav: this.appNav,
			parentLink: link,
			options: link.options
		});
	}

	/**
	 * This will check the buttons.
	 *
	 * @param {boolean} active
	 */
	checkButtons(active)
	{
		isActive(this.buttons, active);
	}

	/**
	 * This will add a link.
	 *
	 * @param {object} option
	 * @return {object}
	 */
	addLink(option)
	{
		option.callBack = ignorHover;
		option.checkCallBack = option.options ? this.checkButtons.bind(this) : undefined;

		const link = new MainLink(option);
		this.links.push(link);

		if (link.options)
		{
			this.addSubNav(link);
			this.buttons.push(link);
		}
		return link;
	}
}

/**
 * PrimarySubNavigation
 *
 * This will create a primary sub navigation.
 * @class
 * @augments SubNavigation
 */
export class PrimarySubNavigation extends SubNavigation
{
	/**
	 * This will set upt he class name by depth.
	 *
	 * @return {void}
	 */
	beforeSetup()
	{
		const classNameMap = { 1: 'one', 2: 'two', 3: 'three' };
        this.mainClassName = classNameMap[this.depth] || '';
		this.buttons = [];
	}

	/**
	 * This will set up the sub nav.
	 *
	 * @returns {void}
	 */
	afterSetup()
	{
		this.subs.forEach(sub => this.appNav.appendChild(sub.panel));
	}

	addSubs()
	{
		return this.subs;
	}

	setupSubNav(link)
	{
		return new PrimarySubNavigation(
		{
			depth: 1 + this.depth,
			appNav: this.appNav,
			parentLink: link,
			options: link.options
		});
	}

	checkButtons(active)
	{
		isActive(this.buttons, active);
	}

	addLink(option)
	{
		option.callBack = ignorHover;
		option.checkCallBack = option.options ? this.checkButtons.bind(this) : undefined;

		const link = new MainLink(option);
		this.links.push(link);

		if (link.options)
		{
			this.addSubNav(link);
			this.buttons.push(link);
		}
		return link;
	}
}
