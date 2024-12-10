import { Nav, Ul } from '@base-framework/atoms';
import { router } from '@base-framework/base';
import { MainLink } from './main-link.js';
import { Navigation } from './navigation.js';

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
		this.links = [];
	}

	/**
	 * This will set up the sub nav.
	 *
	 * @param {object} link
	 * @returns {object}
	 */
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
	 * @param {object} link
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
		return sub;
	}

	/**
	 * This will add a link.
	 *
	 * @param {object} option
	 * @returns {object}
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
 * This will validate if a path is active.
 *
 * @param {string} path
 * @param {string} url
 * @returns {boolean}
 */
const isPathActive = (path, url) => new RegExp(`${path}($|/|\\.).*`).test(url);

/**
 * This will check if a link is active.
 *
 * @param {object} link
 * @param {string} url
 * @returns {boolean}
 */
const isLinkActive = (link, url) =>
{
	const path = link.link.panel.pathname;
	if (!path)
	{
		if (link.isSelected())
		{
			return true;
		}
	}

	return link.exact? (url === path) : isPathActive(path, url);
};

/**
 * SubNavigation
 *
 * This will create a nested navigation.
 * @class
 * @augments InlineNavigation
 */
export class SubNavigation extends InlineNavigation
{
	/**
	 * This will render the component.
	 *
	 * @returns {object}
	 */
	render()
	{
		const className = `navigation flex flex-auto flex-col sub ${this.mainClassName || ''}`;
		const map = this.mapOptions(this.options);

		return Nav({ class: className, onState: this.onState() }, [
			Ul({ class: 'relative group flex flex-col gap-2 py-2 px-0 list-none m-0' }, [ ...map, ...this.addSubs(), this.addWatcher() ])
		]);
	}

	/**
	 * This will add awatcher to update the links
	 * when the path changes.
	 *
	 * @returns {object}
	 */
	addWatcher()
	{
		return {
			watch: {
				value: ['[[path]]', router.data],
				callBack: this.updateLinks.bind(this)
			}
		};
	}

	/**
	 * This will set up the on state.
	 *
	 * @returns {array}
	 */
	onState()
	{
		return [
			['selected', { active: true }],
			['active', { active: true }]
		];
	}

	/**
	 * This will set up the states.
	 *
	 * @returns {array}
	 */
	setupStates()
	{
		return {
			remotes: [
				{
					/**
					 * This will link the state to the parent link.
					 */
					id: this.parentLink.link.getId(),
					selected: null,
					active: null
				}
			]
		};
	}

	/**
	 * This will update the links after setup.
	 *
	 * @returns {void}
	 */
	afterSetup()
	{
		const path = router.data.get('path');
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
		let check = false;

		for (const link of this.links)
		{
			if (!link.rendered)
			{
				continue;
			}

			check = isLinkActive(link, value);
			if (check === true)
			{
				break;
			}
		}

		this.parentLink.update(check);
	}
}