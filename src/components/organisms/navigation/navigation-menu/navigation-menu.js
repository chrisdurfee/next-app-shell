import { Nav, Ul } from "@base-framework/atoms";
import { Component, NavLink, router } from "@base-framework/base";

/**
 * This will validate if a path is active.
 *
 * @param {string} path
 * @param {string} url
 * @returns {boolean}
 */
const isPathActive = (path, url) => url.includes(path);

/**
 * This will create a link.
 *
 * @param {object} props
 * @returns {object}
 */
const Link = ({ text, href }) => (
    new NavLink({
        text,
        href,
        dataSet: ['selected', ['state', true, 'active']],
        class: 'inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium transition-all rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring focus-visible:ring-offset-background hover:bg-primary hover:text-primary-foreground disabled:opacity-50 disabled:pointer-events-none data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm'
    })
);

/**
 * NavigationMenu
 *
 * This will create a tab navigation component.
 *
 * @class
 */
export class NavigationMenu extends Component
{
    /**
     * This will configure the links.
     */
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
        return Nav({ class: `flex items-center justify-center bg-background p-2 text-muted-foreground rounded-md` }, [
                Ul({
                    class: 'flex space-x-4',
                    map: [this.options, (option) => this.addLink(option)],
                    watch: {
                        value: ['[[path]]', router.data],
                        callBack: this.updateLinks.bind(this)
                    }
                })
            ]
        );
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
     * This will update the links based on the current path.
     *
     * @param {string} path
     * @returns {void}
     */
    updateLinks(path)
    {
        let activeLinkSet = false;

        for (const link of this.links)
        {
            if (!link.rendered)
            {
                continue;
            }

            const isActive = isPathActive(link.getLinkPath(), path);
            if (isActive)
            {
                this.updateLink(link, true);
                activeLinkSet = true;
            }
            else
            {
                this.updateLink(link, false);
            }
        }

        // Fallback to set the first link active if none match
        if (!activeLinkSet && this.links[0])
        {
            this.updateLink(this.links[0], true);
        }
    }

    /**
     * This will update the link's active state.
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
     * This will add a link to the navigation.
     *
     * @param {object} option
     * @returns {object}
     */
    addLink({ label: text, href })
    {
        const link = Link({ text, href });
        this.links.push(link);
        return link;
    }
}

export default NavigationMenu;
