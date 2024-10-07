import { Component, base } from "@base-framework/base";
import { A, Div, Li, Nav, Ul } from "../atoms/atoms.js";

/**
 * TabLink
 *
 * This will create a tab link component.
 * @class
 */
export class TabLink extends Component
{
	/**
	 * This will configure the link active class.
	 *
	 * @protected
	 */
	onCreated()
	{
		this.selectedClass = this.activeClass || 'selected';
	}

	/**
	 * This will render the component.
	 *
	 * @returns {object}
	 */
	render()
	{
		const href = this.href,
		text = this.label;

		const watchers = this.setupWatchers(href, text);

		const onState = {};
		onState[this.selectedClass] = true;

		return Li({ class: 'option' }, [
			A({
				class: this.className || null,
				onState: ['selected', onState],
				href: this.getString(href),
				text: this.getString(text),
				children: this.children,
				watch: watchers,
				cache: 'link'
			})
		]);
	}

	/**
	 * This will get string.
	 *
	 * @param {string} string
	 * @returns {(string|null)}
	 */
	getString(string)
	{
		return typeof string !== 'object'? string : null;
	}

	/**
	 * This will setup the watchers.
	 *
	 * @protected
	 * @param {string} href
	 * @param {string} text
	 * @returns {array}
	 */
	setupWatchers(href, text)
	{
		const watchers = [];

		if (href && typeof href === 'object')
		{
			watchers.push(
			{
				attr: 'href',
				value: href
			});
		}

		if (text && typeof text === 'object')
		{
			watchers.push(
			{
				attr: 'text',
				value: text
			});
		}
		return watchers;
	}

	/**
	 * This will setup the states.
	 *
	 * @returns {object}
	 */
	setupStates()
	{
		return {
			selected: false
		};
	}

	/**
	 * This will update the link.
	 *
	 * @param {boolean} selected
	 * @returns {void}
	 */
	update(selected)
	{
		this.state.set('selected', selected);
	}
}

/**
 * TabNavigation
 *
 * This will create a tab navigation component.
 *
 * @class
 */
export class TabNavigation extends Component
{
	onCreated()
	{
		this.links = [];
	}

	/**
	 * This will render the component.
	 *
	 * @returns {object}
	 */
	render()
	{
		return Nav({ class: 'tab' }, [
			Ul({
				watch: {
					value: ['[[path]]', base.router.data],
					callBack: this.updateLinks.bind(this)
				}
			}, this.addLinks())
		]);
	}

	/**
	 * This will update the links.
	 *
	 * @returns {void}
	 */
	afterSetup()
	{
		const path = base.router.data.get('path');
		this.updateLinks(path);
	}

	/**
	 * This will update the links.
	 *
	 * @param {string} value
	 * @returns {void}
	 */
	updateLinks(value)
	{
		let check = false,
		firstLink = null;
		const links = this.links;

		for (let i = 0, length = links.length; i < length; i++)
		{
			const link = links[i];
			if (link.rendered === false)
			{
				continue;
			}

			/* we want to save the first route in the switch
			so it can be selected if no route is active */
			if (i === 0)
			{
				firstLink = link;
			}

			if (check === true)
			{
				this.updateLink(link, false);
				continue;
			}

			check = value.indexOf(link.link.pathname) !== -1;
			this.updateLink(link, check);
		}

		if (check !== true && firstLink)
		{
			this.updateLink(firstLink, true);
		}
	}

	/**
	 * This will update the link.
	 *
	 * @param {object} link
	 * @param {boolean} selected
	 * @returns {void}
	 */
	updateLink(link, selected)
	{
		link.update(selected);
	}

	/**
	 * This will add the links.
	 *
	 * @returns {array}
	 */
	addLinks()
	{
		const links = [],
		options = this.options || [];

		for (let i = 0, length = options.length; i < length; i++)
		{
			const link = this.addLink(options[i]);
			this.links.push(link);
			links.push(link);
		}
		return links;
	}

	/**
	 * This will add a link.
	 *
	 * @param {object} option
	 * @returns {object}
	 */
	addLink(option)
	{
		return new TabLink({
			label: option.label,
			href: option.href
		});
    }
}

/**
 * Tab
 *
 * This will create a tab component that can route
 * to tab panels.
 * @class
 */
export class Tab extends Component
{
	/**
	 * This will render the component.
	 *
	 * @returns {object}
	 */
	render()
	{
		return Div({ class: 'tab-panel' }, [
			new TabNavigation({
				options: this.options
			}),
			{
				tag: 'section',
				class: 'tab-content',
				switch: this.addGroup()
			}
		]);
	}

	/**
	 * This will add the group.
	 *
	 * @returns {array}
	 */
    addGroup()
    {
		let option;
		const switches = [];

		const options = this.options;
		for (let i = 0, length = options.length; i < length; i++)
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
}