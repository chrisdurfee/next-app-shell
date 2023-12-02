"use strict";

const NavButtonLink = base.Component.extend(
{
	render()
	{
		let state = this.state;

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
				state.set('active', !state.get('active'));
			},
			children: this.children
		};
	},

	setupStates()
	{
		return {
			selected: false,
			active: false
		};
	},

	update(selected)
	{
		this.state.set({
			selected: selected,
			active: selected
		});
	}
});

/**
 * MainLink
 *
 * This will setup a navigation link.
 * @class
 */
const MainLink = base.Component.extend(
{
	render()
	{
		return {
			tag: 'li',
			className: 'option' + (this.options? ' sub' : ''),
			a: this.addLink(),
			click: !this.options? this.callBack : null
		};
	},

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
			link = new SwitchALink(
			{
				href: this.href,
				activeClass: 'selected',
				children: children
			});
		}
		else
		{
			link = new NavButtonLink({
				children: children
			});
		}

		return this.cache('link', link);
	},

	update(selected)
	{
		this.link.update(selected);
	}
});

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
const Navigation = SwitchNavigation.extend(
{
	render()
	{
		return {
			tag: 'nav',
			className: 'navigation',
			ul:
			{
				tag: 'ul',
                watch:
                {
					value: ['[[path]]', this.data],
					callBack: this.updateLinks.bind(this)
				},
				children: this.addLinks(this.options)
			}
		};
    },

    updateLinks(ele, value)
	{
		if(this.hasSetup === false)
		{
			this.hasSetup = true;
			return;
		}

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

			/* we want to save the first route in the switch
			so it can be selected if no route is active */
			if(i === 0)
			{
				firstLink = link;
			}

			if(check === true)
			{
				this.updateLink(link, false);
				continue;
			}

			let a = link.link.link;
			if(!a)
			{
				continue;
			}

			check = (new RegExp(a.pathname + '($|\/|\\.).*').test(value));
			this.updateLink(link, check);
		}

		if(check !== true && firstLink)
		{
			this.updateLink(firstLink, true);

			let links = firstLink.links;
			if(links)
			{
				this.updateLink(links[0], true);
			}
		}
    },

    updateLink(link, selected)
	{
		link.update(selected);
	},

	afterSetup()
	{
		let path = this.data.get('path');
		this.updateLinks(null, path);
	},

	addLinks(options)
	{
		let links = [];
		let option;

		for(let i = 0, length = options.length; i < length; i++)
		{
			option = options[i];
			if(!option.group)
			{
                let link = this.addLink(option);
				links.push(link);
				continue;
			}

			links.push(this.addGroup(option));

		}
		return links;
	},

	addGroup(option)
	{
		let childLinks = this.addLinks(option.options);

		return NavigationGroup({
			text: option.group,
			children: childLinks
		});
	},

	addLink(option)
	{
        let link = new MainLink(option);
        this.links.push(link);
        return link;
	}
});

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
const InlineNavigation = Navigation.extend(
{
	onCreated()
	{
		this.data = base.router.data;
		this.reset();
		this.subs = [];
	},

	addSubNav(link)
	{
		let sub = new SubNavigation(
		{
			parentLink: link,
			options: link.options,
			parentLinks: this.links
		});
		this.subs.push(sub);
		return sub;
	},

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
});

const SubNavigation = Navigation.extend(
{
	onCreated()
	{
		this.data = base.router.data;
		this.reset();
		this.subs = [];

		this.links = this.addLinks(this.options);
		this.parentLink.links = this.links;
	},

	render()
	{
		return {
			tag: 'nav',
			className: 'navigation sub',
			onState: this.onState(),
			ul:
			{
				tag: 'ul',
				watch: {
					value: ['[[path]]', this.data],
					callBack: this.updateLinks.bind(this)
				},
				children: this.links
			}
		};
	},

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
	},

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
	},

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

			if(!link.link)
			{
				continue;
			}

			check = (new RegExp(link.link.panel.pathname + '($|\/|\\.).*').test(value))
			if(check === true)
			{
				break;
			}
		}

		this.updateParentLink(check);
	},

	updateParentLink(selected)
	{
		this.parentLink.update(selected);
	},

	addLink(option)
	{
		let link = new MainLink(option);
		this.links.push(link);
		this.parentLinks.push(link);

		if(link.options)
		{
			this.addSubNav(link);
		}
		return link;
	}
});

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
const PrimaryNavigation = InlineNavigation.extend(
{
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
			sub.setup(this.appNav);
		}

		let path = this.data.get('path');
		this.updateLinks(null, path);
	},

	addSubNav(link)
	{
		this.subs.push(new PrimarySubNavigation(
		{
			appNav: this.appNav,
			parentLink: link,
			options: link.options,
			parentLinks: this.links
		}));
	},

	addLink(option)
	{
		option.callBack = (e) =>
		{
			base.state.set('app-control', 'ignoreHover', true);
		};

        let link = new MainLink(option);
        this.links.push(link);

		if(link.options)
		{
			this.addSubNav(link);
		}
		return link;
	}
});

const PrimarySubNavigation = SubNavigation.extend(
{
	addLink(option)
	{
		option.callBack = (e) =>
		{
			base.state.set('app-control', 'ignoreHover', true);
		};

		let link = new MainLink(option);
		this.links.push(link);
		this.parentLinks.push(link);

		if(link.options)
		{
			this.addSubNav(link);
		}
		return link;
	}
});