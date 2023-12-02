(function(global)
{
	"use strict";

	/**
	 * NavButtonLink
	 *
	 * This will create a button to open and close
	 * nested navigations.
	 * @class
	 */
	var NavButtonLink = base.Component.extend(
	{
		render: function()
		{
			var self = this,
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
				click: function()
				{
					var value = !state.get('active');
					state.set('active', value);

					var active = null;
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
					children: children,
					checkCallBack: this.checkCallBack
				});
			}

			return this.cache('link', link);
		},

		isSelected: function()
		{
			return this.link.state.get('selected');
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
				}),
				subs: this.addSubs()
			};
		},

		addSubs: function()
		{
			return null;
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
	var InlineNavigation = Navigation.extend(
	{
		onCreated: function()
		{
			this.subs = [];
			this.links = [];
		},

		setupSubNav: function(link)
		{
			return new SubNavigation(
			{
				parentLink: link,
				options: link.options
			});
		},

		addSubNav: function(link)
		{
			var sub = this.setupSubNav(link);
			link.sub = sub;

			this.subs.push(sub);
			return sub;
		},

		addLink: function(option)
		{
			var link = new MainLink(option);
			this.links.push(link);

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

	global.InlineNavigation = InlineNavigation;

	/**
	 * SubNavigation
	 *
	 * This will create a nested navigation.
	 * @class
	 * @augments InlineNavigation
	 */
	var SubNavigation = InlineNavigation.extend(
	{
		render: function()
		{
			var className = this.mainClassName || '';

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
							callBack: base.bind(this, this.updateLinks)
						}
					}
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

		isSelected: function()
		{
			return this.state.get('selected');
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
		},

		updateParentLink: function(selected)
		{
			this.parentLink.update(selected);
		}
	});

	/**
	 * This will update the app to ingnor hover.
	 *
	 * @param {object} e
	 */
	var ignorHover = function(e)
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
	var isActive = function(buttons, active)
	{
		if(!buttons.length)
		{
			return false;
		}

		var check = false;
		for(var i = 0, length = buttons.length; i < length; i++)
		{
			var link = buttons[i],
			sub = link.sub,
			button = link.link;

			var sub = link.sub;
			if(sub.buttons.length)
			{
				var result = isActive(sub.buttons, active);
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
	var PrimaryNavigation = InlineNavigation.extend(
	{
		beforeSetup: function()
		{
			this.buttons = [];
		},

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
				this.appNav.appendChild(sub.panel);
			}
		},

		addSubs: function()
		{
			return this.subs;
		},

		setupSubNav: function(link)
		{
			return new PrimarySubNavigation(
			{
				depth: 1,
				appNav: this.appNav,
				parentLink: link,
				options: link.options
			});
		},

		checkButtons: function(active)
		{
			isActive(this.buttons, active);
		},

		addLink: function(option)
		{
			option.callBack = ignorHover;

			if(option.options)
			{
				option.checkCallBack = base.bind(this, this.checkButtons);
			}

			var link = new MainLink(option);
			this.links.push(link);

			if(link.options)
			{
				this.addSubNav(link);
				this.buttons.push(link);
			}
			return link;
		}
	});

	global.PrimaryNavigation = PrimaryNavigation;

	/**
	 * PrimarySubNavigation
	 *
	 * This will create a primary sub navigation.
	 * @class
	 * @augments SubNavigation
	 */
	var PrimarySubNavigation = SubNavigation.extend(
	{
		beforeSetup: function()
		{
			var className;
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
		},

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
				this.appNav.appendChild(sub.panel);
			}
		},

		addSubs: function()
		{
			return this.subs;
		},

		setupSubNav: function(link)
		{
			return new PrimarySubNavigation(
			{
				depth: 1 + this.depth,
				appNav: this.appNav,
				parentLink: link,
				options: link.options
			});
		},

		checkButtons: function(active)
		{
			isActive(this.buttons, active);
		},

		addLink: function(option)
		{
			option.callBack = ignorHover;

			if(option.options)
			{
				option.checkCallBack = base.bind(this, this.checkButtons);
			}

			var link = new MainLink(option);
			this.links.push(link);
			if(link.options)
			{
				this.addSubNav(link);
				this.buttons.push(link);
			}
			return link;
		}
	});
})(this);