import { Atom, Component } from "@base-framework/base";
import { Div } from "../atoms/atoms.js";
import { Button } from "../atoms/buttons/buttons.js";
import { Icon } from "../atoms/icon.js";
import { Icons } from "../icons/icons.js";

/**
 * This will create an overlay back button.
 *
 * @param {object} props
 * @returns {object}
 */
export const BackButton = Atom((props) =>
{
    const margin = props.margin || 'm-4 ml-0';
    return Div({ class: `flex-none ${margin}` }, [
        Button({
            variant: 'icon',
            class: 'back-button',
            click: () => window.history.back()
        }, [
            Icon(Icons.arrows.left)
        ])
    ]);
});

/**
 * Overlay
 *
 * This will create an overlay.
 *
 * @class
 * @extends Component
 */
export class Overlay extends Component
{
    /**
     * This will render the component.
     *
     * @returns {object}
     */
    render()
    {
        return Div(
            {
                class: this.getClassName(),
                onSet: ['loading', {
                    loading: true
                }]
            },
            [
                this.addBody()
            ]
        );
    }

    /**
     * This will get the referral path if set by a route.
     *
     * @returns {string|null}
     */
    getReferralPath()
    {
        let route = this.route;
        if(!route)
        {
            return null;
        }

        let referralPath = route.referralPath;
        return (referralPath !== window.location.pathname)? referralPath : null;
    }

    /**
     * This will get the overlay className.
     *
     * @returns {string}
     */
    getClassName()
    {
        return 'overlay fixed top-[0px] left-0 bottom-0 right-0 flex-col bg-background z-20 lg:z-10 flex flex-auto lg:left-[64px] lg:top-0 overflow-y-auto ' + (this.class || '');
    }

    /**
	 * This will setup and render the component.
	 *
	 * @param {object} container
	 * @returns {void}
	 */
	setup(container)
	{
		this.container = app.appShell.panel;
		this.initialize();
	}

    /**
     * This will setup the overlay states.
     *
     * @returns {object}
     */
    setupStates()
    {
        return {
            loading: false
        };
    }

    /**
     * This will set the loading state.= to true.
     *
     * @returns {void}
     */
    addLoading()
    {
        this.state.loading = true;
    }

    /**
     * This will set the loading state to false.
     *
     * @returns {void}
     */
    removeLoading()
    {
        this.state.loading = false;
    }

    /**
     * This will add the body of the overlay.
     *
     * @returns {object}
     */
    addBody()
    {
        return Div({ class: 'body fadeIn flex flex-auto flex-col' }, this.getContents());
    }

    /**
     * This will get the body contents.
     *
     * @returns {array|null}
     */
    getContents()
    {
        return this.children;
    }
}

export default Overlay;