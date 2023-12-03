import { State } from '../../libs/base/base.js';
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

	let check = false;
	for (let i = 0, length = buttons.length; i < length; i++)
	{
		let link = buttons[i],
		sub = link.sub,
		button = link.link;

		sub = link.sub;
		if (sub.buttons.length)
		{
			const result = isActive(sub.buttons, active);
			if (result)
			{
				check = true;
			}
		}

		if (button !== active && check === false)
		{
			button.state.set('active', false);
		}
	}
	return check;
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
		const subs = this.subs;
		if (!subs.length)
		{
			return;
		}

		for (let i = 0, length = subs.length; i < length; i++)
		{
			const sub = subs[i];
			this.appNav.appendChild(sub.panel);
		}
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

		if (option.options)
		{
			option.checkCallBack = this.checkButtons.bind(this);
		}

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
		let className;
		switch (this.depth)
		{
			case 1:
				className = 'one';
				break;
			case 2:
				className = 'two';
				break;
			case 3:
				className = 'three';
				break;
		}
		this.mainClassName = className;
		this.buttons = [];
	}

	/**
	 * This will set up the sub nav.
	 *
	 * @returns {void}
	 */
	afterSetup()
	{
		const subs = this.subs;
		if (!subs.length)
		{
			return;
		}

		for (let i = 0, length = subs.length; i < length; i++)
		{
			const sub = subs[i];
			if (!sub.panel)
			{
				continue;
			}
			this.appNav.appendChild(sub.panel);
		}
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

		if (option.options)
		{
			option.checkCallBack = this.checkButtons.bind(this);
		}

		let link = new MainLink(option);
		this.links.push(link);
		if (link.options)
		{
			this.addSubNav(link);
			this.buttons.push(link);
		}
		return link;
	}
}
