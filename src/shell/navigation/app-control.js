import { Atom, Component, Data } from "@base-framework/base";
import { MainNavigation } from "./main-navigation.js";
import { MobileNavigation } from "./mobile-navigation.js";
import { getMobileOptions } from "./mobile-options.js";

/**
 * This will create the app container.
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
const AppContainer = Atom((props, children) => ({
    ...props,
    class: 'app-nav-container bg-background/80 backdrop-blur-md fixed sm:top-0 bottom-0 left-0 w-full lg:w-[64px] lg:hover:w-[330px] sm:h-full z-10 lg:z-20 lg:overflow-y-auto overflow-x-hidden shadow-md border-t sm:border-r sm:border-t-0 lg:border-r',
    children
}));

/**
 * AppControl
 *
 * This will create the app control.
 *
 * @class
 * @extends Component
 */
export class AppControl extends Component
{
    /**
     * @member {number|null} timer
     */
    timer = null;

    /**
     * This will set the app controll state to be stored in the local storage.
     *
     * @returns {Data}
     */
    afterSetup()
    {
        /**
         * This will set up the pinned data to allow it to
         * be stored in the local storage.
         */
        const storageKey = 'pinned';
        const data = this.state;
        data.setKey(storageKey);

        /**
         * This will resume the data from the local storage.
         */
        data.resume();
        return data;
    }

    /**
     * This will render the component.
     *
     * @returns {object}
     */
	render()
	{
        const callBack = this.ignoreHover.bind(this);
        const mobileOptions = getMobileOptions(this.options, callBack);

		return AppContainer(
            {
                onState: [
                    ['ignoreHover', {
                        ignoreHover: true
                    }],
                    ['pinned', {
                        pinned: true
                    }]
                ],
                mouseleave: this.removeIgnore.bind(this)
            },
            [
                /**
                 * This will create a navigation for the main and mobile navigation.
                 */
                new MainNavigation({ options: this.options }),
                MobileNavigation({ options: mobileOptions })
            ]
        );
    }

    /**
     * This will ignore the hover.
     *
     * @returns {void}
     */
    ignoreHover()
    {
        this.state.ignoreHover = true;

        const DELAY_MILLISECONDS = 100;
        window.setTimeout(() => this.removeIgnore(), DELAY_MILLISECONDS);
    }

    /**
     * This will remove the ignore.
     *
     * @returns {void}
     */
    removeIgnore()
    {
        window.clearTimeout(this.timer);

        const DELAY_MILLISECONDS = 400;
        const callBack = () => this.state.ignoreHover = false;
        this.timer = window.setTimeout(callBack, DELAY_MILLISECONDS);
    }

    /**
     * This will setup the states.
     *
     * @returns {object}
     */
	setupStates()
	{
        /**
         * This will set a global state id for the app control.
         */
		this.stateTargetId = 'app-control';

		return {
            ignoreHover: false,

            /**
             * This will add a callback to store the pinned state
             * in the local storage when it changes.
             */
            pinned: {
                state: false,
                callBack: () => this.state.store()
            }
		};
	}
}