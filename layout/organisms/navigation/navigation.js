import { Atom, Component } from "../../libs/base/base.js";
import { MainLink } from "./main-link.js";

/**
 * This will return a navigation group.
 *
 * @param {object} props
 * @return {object}
 */
const NavigationGroup = Atom((props, children) =>
{
	return Ul({ class: 'navigation-group', map: props.map }, [
		H2(props.text),
		...children
	]);
});

/**
 * This will return a navigation.
 *
 * @param {object} props
 * @return {object}
 */
const Nav = Atom((props, children) =>
{
	return {
		tag: 'nav',
		...props,
		children
	};
});

/**
 * Navigation
 *
 * This will create a navigation component.
 * @class
 */
export class Navigation extends Component
{
	/**
	 * This will render the component.
	 *
	 * @return {object}
	 */
	render()
	{
		/**
		 * This will get the options.
		 */
		const map = this.mapOptions(this.options);

		return Nav({ class: 'navigation' }, [
			Ul({ map }),
			this.addSubs()
		]);
	}

	/**
	 * This will get the options.
	 *
	 * @param {array} options
	 * @return {array}
	 */
	mapOptions(options)
	{
		return [options, (option) =>
		{
			if (!option.group)
			{
				return this.addLink(option);
			}

			return this.addGroup(option);
		}];
	}

	/**
	 * This will get the subs.
	 *
	 * @return {array|null}
	 */
	addSubs()
	{
		return null;
	}

	/**
	 * This will add a group.
	 *
	 * @param {object} option
	 * @return {object}
	 */
	addGroup(option)
	{
		const map = this.mapOptions(option.options);
		return NavigationGroup({ map }, option.group);
	}

	/**
	 * This will add a link.
	 *
	 * @param {object} option
	 * @return {object}
	 */
	addLink(option)
	{
		return new MainLink(option);
	}
}

/**
 * InlineNavigation
 *
 * This will create a navigation that has sub
 * navigations. The sub navigations items will
 * display below the parent.
 *
 * @class
 * @augments Navigation
 */
export class InlineNavigation extends Navigation
{
	onCreated()
	{
		this.subs = [];
		this.links = [];
	}

	setupSubNav(link)
	{
		return new SubNavigation(
		{
			parentLink: link,
			options: link.options
		});
	}

	/**
	 * This will add a sub navigation.
	 *
	 * @param {objecy} link
	 * @returns {object}
	 */
	addSubNav(link)
	{
		/**
		 * This will set the sub nav to the link and add
		 * the sub nav to the subs array.
		 */
		const sub = this.setupSubNav(link);
		link.sub = sub;

		this.subs.push(sub);
		return sub;
	}

	/**
	 * This will add a link.
	 *
	 * @param {object} option
	 * @return {object}
	 */
	addLink(option)
	{
		const link = new MainLink(option);
		this.links.push(link);

		if (!link.options)
		{
			return link;
		}

		const sub = this.addSubNav(link);
		return {
			class: 'child-group',
			link,
			sub
		};
	}
}

/**
 * SubNavigation
 *
 * This will create a nested navigation.
 * @class
 * @augments InlineNavigation
 */
export class SubNavigation extends InlineNavigation
{
	render()
	{
		let className = this.mainClassName || '';

		return {
			tag: 'nav',
			className: 'navigation sub ' + className,
			onState: this.onState(),
			ul:
			{
				tag: 'ul',
				children: this.addLinks(this.options),
				subs: this.addSubs(),
				link: {
					watch: {
						value: ['[[path]]', base.router.data],
						callBack: this.updateLinks.bind(this)
					}
				}
			}
		};
	}

	onState()
	{
		return [
			['selected', {
				active: true
			}],
			['active', {
				active: true
			}]
		];
	}

	setupStates()
	{
		return {
			remotes: [
				{
					id: this.parentLink.link.getId(),
					selected: null,
					active: null
				}
			]
		};
	}

	isSelected()
	{
		return this.state.get('selected');
	}

	afterSetup()
	{
		let path = base.router.data.get('path');
		this.updateLinks(null, path);
	}

	updateLinks(ele, value)
	{
		let check = false,
		links = this.links,
		firstLink = null;

		for(let i = 0, length = links.length; i < length; i++)
		{
			let link = links[i];
			if(link.rendered === false)
			{
				continue;
			}

			let path = link.link.panel.pathname;
			if(!path)
			{
				if(link.isSelected())
				{
					check = true;
					break;
				}
			}

			check = link.exact? (value === path) : (new RegExp(path + '($|\/|\\.).*').test(value));
			if(check === true)
			{
				break;
			}
		}

		this.updateParentLink(check);
	}

	updateParentLink(selected)
	{
		this.parentLink.update(selected);
	}
}

/**
 * This will update the app to ingnor hover.
 *
 * @param {object} e
 */
const ignorHover = (e) =>
{
	base.state.set('app-control', 'ignoreHover', true);
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
	if(!buttons.length)
	{
		return false;
	}

	let check = false;
	for(let i = 0, length = buttons.length; i < length; i++)
	{
		let link = buttons[i],
		sub = link.sub,
		button = link.link;

		sub = link.sub;
		if(sub.buttons.length)
		{
			let result = isActive(sub.buttons, active);
			if(result)
			{
				check = true;
			}
		}

		if(button !== active && check === false)
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

	afterSetup()
	{
		let subs = this.subs;
		if(!subs.length)
		{
			return false;
		}

		for(let i = 0, length = subs.length; i < length; i++)
		{
			let sub = subs[i];
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
			depth: 1,
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

		if(option.options)
		{
			option.checkCallBack = this.checkButtons.bind(this);
		}

		let link = new MainLink(option);
		this.links.push(link);

		if(link.options)
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
	beforeSetup()
	{
		let className;
		switch(this.depth)
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

	afterSetup()
	{
		let subs = this.subs;
		if(!subs.length)
		{
			return false;
		}

		for(let i = 0, length = subs.length; i < length; i++)
		{
			let sub = subs[i];
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

		if(option.options)
		{
			option.checkCallBack = this.checkButtons.bind(this);
		}

		let link = new MainLink(option);
		this.links.push(link);
		if(link.options)
		{
			this.addSubNav(link);
			this.buttons.push(link);
		}
		return link;
	}
}
