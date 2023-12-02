"use strict";

/**
 * TabLink
 *
 * This will create a tab link component.
 * @class
 */
const TabLink = base.Component.extend(
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
		text = this.label;

		let watchers = this.setupWatchers(href, text);

		let onState = {};
		onState[this.selectedClass] = true;

		return {
			tag: 'li',
			className: 'option',
			a: {
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
		let self = this,
		exact = (this.exact !== false),
		data = base.router.data;

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

	update(selected)
	{
		this.state.set('selected', selected);
	}
});

const TabNavigation = base.Component.extend(
{
	onCreated()
	{
		this.links = [];
	},

	render()
	{
		return {
			tag: 'nav',
			className: 'tab',
			ul:
			{
				tag: 'ul',
				watch: {
					value: ['[[path]]', base.router.data],
					callBack: this.updateLinks.bind(this)
				},
				children: this.addLinks()
			}
		};
	},

	afterSetup()
	{
		let path = base.router.data.get('path');
		this.updateLinks(null, path);
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

			check = value.indexOf(link.link.pathname) !== -1;
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
		return new TabLink({
			label: option.label,
			href: option.href
		});
    }
});

/**
 * Tab
 *
 * This will create a tab component that can route
 * to tab panels.
 * @class
 */
const Tab = base.Component.extend(
{
	render()
	{
		return {
            className: 'tab-panel',
            children:
            [
                new TabNavigation({
					options: this.options
				}),
                {
					tag: 'section',
					className: 'tab-content',
                    switch: this.addGroup()
                }
            ]
        };
	},

    addGroup()
    {
		let option,
		switches = [];

		let options = this.options;
		for(let i = 0, length = options.length; i < length; i++)
		{
            option = options[i];
			switches.push(
            {
                uri: option.uri || option.href,
                component: option.component,
				title: option.title || null,
				persist: true
            });
		}
		return switches;
    }
});