import { I } from "@base-framework/atoms";
import { Atom, Component } from "@base-framework/base";
import { A, Div } from "../atoms/atoms.js";
import { Icons } from "../icons/icons.js";

/**
 * This will create an overlay back button.
 *
 * @param {object} props
 * @returns {object}
 */
const BackButton = Atom((props) =>
{
    return Div({ class: 'back' }, [
        A({ href: props.href || '/', cache: 'backArrow' }, [
            I({ html: Icons.arrows.left})
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
        const route = this.route;
        if (!route)
        {
            return null;
        }

        return route.referralPath;
    }

    /**
     * This will get the overlay className.
     *
     * @returns {string}
     */
    getOverlayType()
    {
        return 'overlay flex flex-auto absolute top-[60px] left-0 bottom-0 right-0 flex-col bg-background z-20 overscroll-none lg:left-[64px] lg:top-0 ' + (this.type || '');
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
        return this.children || null;
    }
}