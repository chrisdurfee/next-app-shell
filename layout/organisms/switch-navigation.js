"use strict";

/**
 * SwitchLink
 *
 * This will create a tab link component.
 * @class
 */
var SwitchLink = base.Component.extend(
{
	/**
	 * This will configure the link active class.
	 *
	 * @protected
	 */
	onCreated: function()
	{
		this.selectedClass = this.activeClass || 'selected';
	},

	render: function()
	{
		var href = this.href,
		text = this.text;

		var watchers = this.setupWatchers(href, text);

		var onState = {};
		onState[this.selectedClass] = true;

		return {
			tag: 'li',
			a:
			{
				tag: 'a',
				className: this.className || null,
				onState: ['selected', onState],
				href: this.getString(href),
				text: this.getString(text),
				children: this.children,
				watch: watchers,
				cache: 'link'
			}
		};
	},

	/**
	 * This will get string.
	 *
	 * @param {string} string
	 * @return {(string|null)}
	 */
	getString: function(string)
	{
		return typeof string !== 'object'? string : null;
	},

	/**
	 * This will setup the watchers.
	 *
	 * @protected
	 * @param {string} href
	 * @param {string} text
	 * @return {array}
	 */
	setupWatchers: function(href, text)
	{
		var watchers = [];

		if(href && typeof href === 'object')
		{
			watchers.push(
			{
				attr: 'href',
				value: href
			});
		}

		if(text && typeof text === 'object')
		{
			watchers.push(
			{
				attr: 'text',
				value: text
			});
		}
		return watchers;
	},

	setupStates: function()
	{
		return {
			selected: false
		};
	},

	getPathname: function()
	{
		this.link.pathname;
	},

	update: function(selected)
	{
		this.state.set('selected', selected);
	}
});

/**
 * SwitchLink
 *
 * This will create a tab link component.
 * @class
 * @augments SwitchLink
 */
var SwitchALink = SwitchLink.extend(
{
	render: function()
	{
		var href = this.href,
		text = this.text;

		var watchers = this.setupWatchers(href, text);

		var onState = {};
		onState[this.selectedClass] = true;

		return {
			tag: 'a',
			className: this.className || null,
			onState: ['selected', onState],
			href: this.getString(href),
			text: this.getString(text),
			children: this.children,
			watch: watchers
		};
	},

	afterSetup: function()
	{
		this.link = this.panel;
	},

	getPathname: function()
	{
		this.link.pathname;
	}
});

var SwitchNavigation = base.Component.extend(
{
	onCreated: function()
	{
        this.data = base.router.data;
		this.reset();
	},

	reset: function()
	{
		this.links = [];
		this.hasSetup = false;
	},

	render: function()
	{
		return {
			tag: 'nav',
			className: 'navigation switch-navigation',
			ul:
			{
				tag: 'ul',
                watch:
                {
					value: ['[[path]]', this.data],
					callBack: base.bind(this, this.updateLinks)
				},
				children: this.addLinks()
			}
		};
	},

	beforeDestroy: function()
	{
		this.reset();
	},

	updateLinks: function(ele, value)
	{
		if(this.hasSetup === false)
		{
			this.hasSetup = true;
			return;
		}

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

			check = (new RegExp(link.getPathname() + '($|\/|\\.).*').test(value));
			this.updateLink(link, check);
		}

		if(check !== true && firstLink)
		{
			this.updateLink(firstLink, true);
		}
	},

	updateLink: function(link, selected)
	{
		link.update(selected);
	},

	addLinks: function()
	{
		var links = [],
		options = this.options || [];

		for(var i = 0, length = options.length; i < length; i++)
		{
			var link = this.addLink(options[i]);
			this.links.push(link);
			links.push(link);
		}
		return links;
	},

	addLink: function(option)
	{
		return new SwitchLink(
        {
			text: option.text,
            href: option.href,
            children: option.children
		});
    }
});