import { A, Div, Img } from "../atoms/atoms.js";
import { Atom, Component } from "../libs/base/base.js";

/**
 * This will create an overlay back button.
 *
 * @param {object} props
 * @param {array} children
 * @return {object}
 */
const BackButton = Atom((props, children) =>
{
    return Div({ class: 'back' }, [
        A({ href: props.href || '/', cache: 'backArrow' }, [
            Img({
                src: './images/back-arrow.svg'
            })
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
     * @return {void}
     */
    beforeSetup()
    {
        this.persist = false;
    }

    /**
     * This will render the component.
     *
     * @return {object}
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
     * @return {string|null}
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
     * @return {string}
     */
    getOverlayType()
    {
        return 'overlay ' + (this.type || '');
    }

    /**
     * This can be overriden to return routes.
     *
     * @return {array|null}
     */
    getRoutes()
    {
        return null;
    }

    /**
     * This will setup the overlay states.
     *
     * @return {object}
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
     * @return {void}
     */
    addLoading()
    {
        this.state.set('loading', true);
    }

    /**
     * This will set the loading state to false.
     *
     * @return {void}
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
     * @return {array|null}
     */
    getBodyContents()
    {
        return this.children || null;
    }
}