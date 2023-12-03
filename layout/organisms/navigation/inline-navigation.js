import { Ul } from '../../atoms/atoms.js';
import { base } from '../../libs/base/base.js';
import { MainLink } from './main-link.js';
import { Nav } from './navigation-atoms.js';
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
		this.subs = [];
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
	 * @param {objecy} link
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

		this.subs.push(sub);
		return sub;
	}

	/**
	 * This will add a link.
	 *
	 * @param {object} option
	 * @return {object}
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
	 * @return {object}
	 */
	render()
	{
		const mainClassName = this.mainClassName || '';
		const className = 'navigation sub ' + mainClassName;
		const map = this.mapOptions(this.options);

		return Nav({ class: className, onState: this.onState() }, [
			Ul({ map }, [
				...this.addSubs(),
				this.addWatcher()
			])
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
				value: ['[[path]]', base.router.data],
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
			['selected', {
				active: true
			}],
			['active', {
				active: true
			}]
		];
	}

	/**
	 * This will set up the states.
	 *
	 * @return {array}
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
	 * This will check if the link is selected.
	 *
	 * @returns {boolean}
	 */
	isSelected()
	{
		return this.state.get('selected');
	}

	/**
	 * This will update the links after setup.
	 *
	 * @return {void}
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
		let check = false;
		const links = this.links;

		for (let i = 0, length = links.length; i < length; i++)
		{
			const link = links[i];
			if (link.rendered === false)
			{
				continue;
			}

			const path = link.link.panel.pathname;
			if (!path)
			{
				if (link.isSelected())
				{
					check = true;
					break;
				}
			}

			check = link.exact? (value === path) : (new RegExp(path + '($|\/|\\.).*').test(value));
			if (check === true)
			{
				break;
			}
		}

		this.updateParentLink(check);
	}

	/**
	 * This will update the parent link.
	 *
	 * @param {boolean} selected
	 * @returns {void}
	 */
	updateParentLink(selected)
	{
		this.parentLink.update(selected);
	}
}