import { Component, base } from "@base-framework/base";
import { A, Li, Nav, Ul } from "../atoms/atoms.js";

/**
 * SwitchLink
 *
 * This will create a tab link component.
 * @class
 */
export class SwitchLink extends Component
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
		text = this.text;

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
	 * This will get the link pathname.
	 *
	 * @returns {string}
	 */
	getPathname()
	{
		this.link.pathname;
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
 * SwitchLink
 *
 * This will create a tab link component.
 * @class
 * @augments SwitchLink
 */
export class SwitchALink extends SwitchLink
{
	/**
	 * This will render the component.
	 *
	 * @returns {object}
	 */
	render()
	{
		const href = this.href,
		text = this.text;

		const watchers = this.setupWatchers(href, text);

		const onState = {};
		onState[this.selectedClass] = true;

		return A({
			class: this.className || null,
			onState: ['selected', onState],
			href: this.getString(href),
			text: this.getString(text),
			children: this.children,
			watch: watchers
		});
	}

	/**
	 * This will set the link.
	 *
	 * @returns {void}
	 */
	afterSetup()
	{
		this.link = this.panel;
	}

	/**
	 * This will get the link pathname.
	 *
	 * @returns {string}
	 */
	getPathname()
	{
		this.link.pathname;
	}
}

/**
 * SwitchNavigation
 *
 * This will create a switch navigation component.
 *
 * @class
 * @extends Component
 */
export class SwitchNavigation extends Component
{
	onCreated()
	{
        this.data = base.router.data;
		this.reset();
	}

	/**
	 * This will reset the links.
	 *
	 * @returns {void}
	 */
	reset()
	{
		this.links = [];
		this.hasSetup = false;
	}

	/**
	 * This will render the component.
	 *
	 * @returns {object}
	 */
	render()
	{
		return Nav({ class: 'navigation switch-navigation' }, [
			Ul({
				watch: {
					value: ['[[path]]', base.router.data],
					callBack: this.updateLinks.bind(this)
				}
			}, this.addLinks())
		]);
	}

	/**
	 * This will reset the links on destroy.
	 *
	 * @returns {void}
	 */
	beforeDestroy()
	{
		this.reset();
	}

	updateLinks(value)
	{
		if (this.hasSetup === false)
		{
			this.hasSetup = true;
			return;
		}

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

			check = (new RegExp(link.getPathname() + '($|/|\\.).*').test(value));
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
		return new SwitchLink(
        {
			text: option.text,
            href: option.href,
            children: option.children
		});
    }
}