(function(global)
{
    "use strict";

    /**
     * This will create an overlay back button.
     *
     * @param {object} props
     * @return {object}
     */
    const BackButton = Tag.extend((props) =>
    {
        return {
            className: 'back',
            a: A({
                href: props.href || '/',
                children: Img({
                    src: './images/back-arrow.svg'
                }),
                cache: 'backArrow'
            })
        };
    });

    const Overlay = base.Component.extend(
    {
        beforeSetup()
        {
            this.persist = false;
        },

        render()
        {
            let referralPath = this.getReferralPath();

            return {
                className: this.getOverlayType(),
                onSet: ['loading', {
                    loading: true
                }],
                children: [
                    BackButton({
                        href: referralPath || this.backHref
                    }),
                    this.addBody(),
                    this.getRoutes()
                ]
            };
        },

        /**
         * This will get the referral path if set by a route.
         * @return {string|null}
         */
        getReferralPath()
        {
            let route = this.route;
            if(!route)
            {
                return null;
            }

            return route.referralPath;
        },

        /**
         * This will get the overlay className.
         */
        getOverlayType()
        {
            return 'overlay ' + (this.type || '');
        },

        /**
         * This can be overriden to return routes.
         * @return {array|null}
         */
        getRoutes()
        {
            return null;
        },

        /**
         * This will setup the overlay states.
         * @return {object}
         */
        setupStates()
        {
            return {
                loading: false
            };
        },

        addLoading()
        {
            this.state.set('loading', true);
        },

        removeLoading()
        {
            this.state.set('loading', false);
        },

        addBody()
        {
            return {
                className: 'body fadeIn',
                children: this.getBodyContents()
            };
        },

        getBodyContents()
        {
            return this.children || null;
        }
    });

    global.Overlay = Overlay;

})(this);