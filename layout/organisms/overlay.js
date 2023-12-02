(function(global)
{
    "use strict";

    /**
     * This will create an overlay back button.
     *
     * @param {object} props
     * @return {object}
     */
    var BackButton = Tag.extend(function(props)
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

    var Overlay = base.Component.extend(
    {
        beforeSetup: function()
        {
            this.persist = false;
        },

        render: function()
        {
            var referralPath = this.getReferralPath();

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
        getReferralPath: function()
        {
            var route = this.route;
            if(!route)
            {
                return null;
            }

            return route.referralPath;
        },

        /**
         * This will get the overlay className.
         */
        getOverlayType: function()
        {
            return 'overlay ' + (this.type || '');
        },

        /**
         * This can be overriden to return routes.
         * @return {array|null}
         */
        getRoutes: function()
        {
            return null;
        },

        /**
         * This will setup the overlay states.
         * @return {object}
         */
        setupStates: function()
        {
            return {
                loading: false
            };
        },

        addLoading: function()
        {
            this.state.set('loading', true);
        },

        removeLoading: function()
        {
            this.state.set('loading', false);
        },

        addBody: function()
        {
            return {
                className: 'body fadeIn',
                children: this.getBodyContents()
            };
        },

        getBodyContents: function()
        {
            return this.children || null;
        }
    });

    global.Overlay = Overlay;

})(this);