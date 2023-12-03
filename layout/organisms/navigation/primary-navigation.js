
/**
 * NavButtonLink
 *
 * This will create a button to open and close
 * nested navigations.
 * @class
 */
export class NavButtonLink extends Component
{
	render()
	{
		let self = this,
		state = this.state;

		return {
			onState: [
				['selected', {
					selected: true
				}],
				['active', {
					active: true
				}]
			],
			click()
			{
				let value = !state.get('active');
				state.set('active', value);

				let active = null;
				if(value)
				{
					active = self;
				}

				if(self.checkCallBack)
				{
					self.checkCallBack(active);
				}
			},
			children: this.children
		};
	}

	setupStates()
	{
		return {
			selected: false,
			active: false
		};
	}

	update(selected)
	{
		this.state.set({
			selected: selected,
			active: selected
		});
	}
}

/**
 * MainLink
 *
 * This will setup a navigation link.
 * @class
 */
export class MainLink extends Component
{
	render()
	{
		return {
			tag: 'li',
			className: 'option' + (this.options? ' sub' : ''),
			a: this.addLink(),
			click: !this.options? this.callBack : null
		};
	}

	addLink()
	{
		let link,
		children = [
			(!this.icon)? null : Span({
				className: 'icon ' + this.icon
			}),
			{
				className: 'label',
				text: this.label || ''
			}
		];

		if(this.href)
		{
			link = new NavLink(
			{
				href: this.href,
				activeClass: 'selected',
				exact: this.exact || false,
				children: children
			});
		}
		else
		{
			link = new NavButtonLink({
				children: children,
				checkCallBack: this.checkCallBack
			});
		}

		return this.cache('link', link);
	}

	isSelected()
	{
		return this.link.state.get('selected');
	}

	update(selected)
	{
		this.link.update(selected);
	}
}

/**
 * This will return a navigation group.
 * @params {object} props
 * @return {object}
 */
const NavigationGroup = Atom.extend((props) =>
{
	return Ul({
		className: 'navigation-group',
		text: H2({
			text: props.text
		}),
		children: props.children || null
	});
});

/**
 * Navigation
 *
 * This will create a navigation component.
 * @class
 */
export class Navigation extends Component
{
	render()
	{
		return {
			tag: 'nav',
			className: 'navigation',
			ul: Ul(
			{
				children: this.addLinks(this.options)
			}),
			subs: this.addSubs()
		};
	}

	addSubs()
	{
		return null;
	}

	addLinks(options)
	{
		let links = [];
		let option;

		for(let i = 0, length = options.length; i < length; i++)
		{
			option = options[i];
			if(!option.group)
			{
				links.push(this.addLink(option));
				continue;
			}

			links.push(this.addGroup(option));

		}
		return links;
	}

	addGroup(option)
	{
		let childLinks = this.addLinks(option.options);

		return NavigationGroup({
			text: option.group,
			children: childLinks
		});
	}

	addLink(option)
	{
		return new MainLink(option);
	}
}

global.Navigation = Navigation;

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

	addSubNav(link)
	{
		let sub = this.setupSubNav(link);
		link.sub = sub;

		this.subs.push(sub);
		return sub;
	}

	addLink(option)
	{
		let link = new MainLink(option);
		this.links.push(link);

		if(link.options)
		{
			let sub = this.addSubNav(link);
			link = {
				className: 'child-group',
				link: link,
				sub: sub
			};
		}
		return link;
	}
}

global.InlineNavigation = InlineNavigation;

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
