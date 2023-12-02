"use strict";

/**
 * SwitchLink
 *
 * This will create a tab link component.
 * @class
 */
const SwitchLink = base.Component.extend(
{
	/**
	 * This will configure the link active class.
	 *
	 * @protected
	 */
	onCreated()
	{
		this.selectedClass = this.activeClass || 'selected';
	},

	render()
	{
		let href = this.href,
		text = this.text;

		let watchers = this.setupWatchers(href, text);

		let onState = {};
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
	getString(string)
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
	setupWatchers(href, text)
	{
		let watchers = [];

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

	setupStates()
	{
		return {
			selected: false
		};
	},

	getPathname()
	{
		this.link.pathname;
	},

	update(selected)
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
const SwitchALink = SwitchLink.extend(
{
	render()
	{
		let href = this.href,
		text = this.text;

		let watchers = this.setupWatchers(href, text);

		let onState = {};
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

	afterSetup()
	{
		this.link = this.panel;
	},

	getPathname()
	{
		this.link.pathname;
	}
});

const SwitchNavigation = base.Component.extend(
{
	onCreated()
	{
        this.data = base.router.data;
		this.reset();
	},

	reset()
	{
		this.links = [];
		this.hasSetup = false;
	},

	render()
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
					callBack: this.updateLinks.bind(this)
				},
				children: this.addLinks()
			}
		};
	},

	beforeDestroy()
	{
		this.reset();
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

			check = (new RegExp(link.getPathname() + '($|\/|\\.).*').test(value));
			this.updateLink(link, check);
		}

		if(check !== true && firstLink)
		{
			this.updateLink(firstLink, true);
		}
	},

	updateLink(link, selected)
	{
		link.update(selected);
	},

	addLinks()
	{
		let links = [],
		options = this.options || [];

		for(let i = 0, length = options.length; i < length; i++)
		{
			let link = this.addLink(options[i]);
			this.links.push(link);
			links.push(link);
		}
		return links;
	},

	addLink(option)
	{
		return new SwitchLink(
        {
			text: option.text,
            href: option.href,
            children: option.children
		});
    }
});