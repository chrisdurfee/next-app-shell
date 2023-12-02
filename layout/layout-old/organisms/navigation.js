"use strict";

var NavButtonLink = base.Component.extend(
{
	render: function()
	{
		var state = this.state;

		return {
			onState: [
				['selected', {
					selected: true
				}],
				['active', {
					active: true
				}]
			],
			click: function()
			{
				state.set('active', !state.get('active'));
			},
			children: this.children
		};
	},

	setupStates: function()
	{
		return {
			selected: false,
			active: false
		};
	},

	update: function(selected)
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
var MainLink = base.Component.extend(
{
	render: function()
	{
		return {
			tag: 'li',
			className: 'option' + (this.options? ' sub' : ''),
			a: this.addLink(),
			click: !this.options? this.callBack : null
		};
	},

	addLink: function()
	{
		var link,
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
				children: children
			});
		}

		return this.cache('link', link);
	},

	update: function(selected)
	{
		this.link.update(selected);
	}
});

/**
 * This will return a navigation group.
 * @params {object} props
 * @return {object}
 */
var NavigationGroup = Atom.extend(function(props)
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
var Navigation = base.Component.extend(
{
	render: function()
	{
		return {
			tag: 'nav',
			className: 'navigation',
			ul: Ul(
			{
				children: this.addLinks(this.options)
			})
		};
	},

	addLinks: function(options)
	{
		var links = [];
		var option;

		for(var i = 0, length = options.length; i < length; i++)
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
	},

	addGroup: function(option)
	{
		var childLinks = this.addLinks(option.options);

		return NavigationGroup({
			text: option.group,
			children: childLinks
		});
	},

	addLink: function(option)
	{
		return new MainLink(option);
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
var InlineNavigation = Navigation.extend(
{
	onCreated: function()
	{
		this.subs = [];
	},

	addSubNav: function(link)
	{
		var sub = new SubNavigation(
		{
			parentLink: link,
			options: link.options
		});
		this.subs.push(sub);
		return sub;
	},

	addLink: function(option)
	{
		var link = new MainLink(option);
		if(link.options)
		{
			var sub = this.addSubNav(link);
			link = {
				className: 'child-group',
				link: link,
				sub: sub
			};
		}
		return link;
	}
});

var SubNavigation = Navigation.extend(
{
	onCreated: function()
	{
		this.links = [];
	},

	render: function()
	{
		return {
			tag: 'nav',
			className: 'navigation sub',
			onState: this.onState(),
			ul:
			{
				tag: 'ul',
				watch: {
					value: ['[[path]]', base.router.data],
					callBack: base.bind(this, this.updateLinks)
				},
				children: this.addLinks(this.options)
			}
		};
	},

	onState: function()
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

	setupStates: function()
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

	afterSetup: function()
	{
		var path = base.router.data.get('path');
		this.updateLinks(null, path);
	},

	updateLinks: function(ele, value)
	{
		var check = false,
		links = this.links,
		firstLink = null;

		for(var i = 0, length = links.length; i < length; i++)
		{
			var link = links[i];
			if(link.rendered === false)
			{
				continue;
			}

			var path = link.link.panel.pathname;
			check = link.exact? (value === path) : (new RegExp(path + '($|\/|\\.).*').test(value));;
			if(check === true)
			{
				break;
			}
		}

		this.updateParentLink(check);
	},

	updateParentLink: function(selected)
	{
		this.parentLink.update(selected);
	},

	addLink: function(option)
	{
		var link = new MainLink(option);
		this.links.push(link);
		if(link.options)
		{
			this.addSubNav(link);
		}
		return link;
	}
});

var ignorHover = function(e)
{
	base.state.set('app-control', 'ignoreHover', true);
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
var PrimaryNavigation = InlineNavigation.extend(
{
	afterSetup: function()
	{
		var subs = this.subs;
		if(!subs.length)
		{
			return false;
		}

		for(var i = 0, length = subs.length; i < length; i++)
		{
			var sub = subs[i];
			sub.setup(this.appNav);
		}
	},

	addSubNav: function(link)
	{
		this.subs.push(new PrimarySubNavigation(
		{
			appNav: this.appNav,
			parentLink: link,
			options: link.options
		}));
	},

	addLink: function(option)
	{
		option.callBack = ignorHover;

		var link = new MainLink(option);
		if(link.options)
		{
			this.addSubNav(link);
		}
		return link;
	}
});

var PrimarySubNavigation = SubNavigation.extend(
{
	addLink: function(option)
	{
		option.callBack = ignorHover;

		var link = new MainLink(option);
		this.links.push(link);
		if(link.options)
		{
			this.addSubNav(link);
		}
		return link;
	}
});