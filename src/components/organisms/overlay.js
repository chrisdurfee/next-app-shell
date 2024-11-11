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
const BackButton = Atom((props) =>
{
    return Div({ class: 'bttn icon m-4' }, [
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
     * This will stop presistence.
     *
     * @returns {void}
     */
    beforeSetup()
    {
        this.persist = false;
    }

    /**
     * This will render the component.
     *
     * @returns {object}
     */
    render()
    {
        const referralPath = this.getReferralPath();

        return Div(
            {
                class: this.getOverlayType(),
                onSet: ['loading', {
                    loading: true
                }]
            },
            [
                BackButton({
                    href: referralPath || this.backHref
                }),
                this.addBody(),
                this.getRoutes()
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
    getOverlayType()
    {
        return 'overlay absolute top-[0px] left-0 bottom-0 right-0 flex-col bg-background z-20 lg:left-[64px] lg:top-0 ' + (this.class || '');
    }

    /**
	 * This will setup and render the component.
	 *
	 * @param {object} container
	 * @returns {void}
	 */
	setup(container)
	{
		this.container = document.body;
		this.initialize();
	}

    /**
     * This can be overriden to return routes.
     *
     * @returns {array|null}
     */
    getRoutes()
    {
        return null;
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
        this.state.set('loading', true);
    }

    /**
     * This will set the loading state to false.
     *
     * @returns {void}
     */
    removeLoading()
    {
        this.state.set('loading', false);
    }

    /**
     * This will add the body of the overlay.
     *
     * @returns {object}
     */
    addBody()
    {
        return Div({ class: 'body fadeIn' }, [
            this.getBodyContents()
        ]);
    }

    /**
     * This will get the body contents.
     *
     * @returns {array|null}
     */
    getBodyContents()
    {
        return this.children;
    }
}

export default Overlay;