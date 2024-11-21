import { Nav, Ul } from "@base-framework/atoms";
import { Component, NavLink, router } from "@base-framework/base";

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
	const path = link.getLinkPath();
	return link.exact? (url === path) : isPathActive(path, url);
};

/**
 * This will create a link.
 *
 * @param {object} props
 * @returns {object}
 */
const Link = ({ text, href, exact }) => (
	new NavLink({
		text,
		href,
		exact,
		dataSet: ['selected', ['state', true, 'active']],
		class: 'inline-flex flex-auto items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm'
	})
);

/**
 * TabNavigation
 *
 * This will create a tab navigation component.
 *
 * @class
 */
export class TabNavigation extends Component
{
	/**
	 * This will configure the links.
	 */
	beforeSetup()
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
		return Nav({ class: `tab items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${this.class}` }, [
			Ul({
				class: 'flex flex-auto flex-row',
				map: [this.options, (option) => this.addLink(option)],
				watch: {
					value: ['[[path]]', router.data],
					callBack: this.updateLinks.bind(this)
				}
			})
		]);
	}

	/**
	 * This will update the links.
	 *
	 * @returns {void}
	 */
	afterSetup()
	{
		const path = router.data.path;
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
		firstLink = this.links[0];

		this.deactivateAllLinks();

		for (const link of this.links)
		{
			if (link.rendered === false)
			{
				continue;
			}

			check = isLinkActive(link, value);
			if (check === true)
			{
				this.updateLink(link, true);
				break;
			}
		}

		if (check !== true && firstLink)
		{
			this.updateLink(firstLink, true);
		}
	}

	/**
     * This will deactivate all links.
     *
     * @returns {void}
     */
    deactivateAllLinks()
    {
        for (const link of this.links)
        {
            this.updateLink(link, false);
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
	 * This will add a link.
	 *
	 * @param {object} option
	 * @returns {object}
	 */
	addLink({ label: text, href, exact })
	{
		const link = Link({ text, href, exact });
		this.links.push(link);
		return link;
    }

	/**
	 * This will remove all the links.
	 *
	 * @returns {void}
	 */
	beforeDestroy()
	{
		this.links = [];
	}
}