import { Atom, Component } from "@base-framework/base";
import { MainNavigation } from "./main-navigation.js";

/**
 * This will create the app container.
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
const AppContainer = Atom((props, children) =>
{
    return {
        class: 'app-nav-container fixed sm:top-0 bottom-0 left-0 w-full h-[56px] base-sub sm:w-[64px] sm:hover:w-[330px] sm:h-full z-10 sm:overflow-y-auto sm:overflow-x-hidden drop-shadow',
        ...props,
        children
    };
});

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
     * This will render the component.
     *
     * @returns {object}
     */
	render()
	{
		return AppContainer(
            {
                onState: ['ignoreHover', { ignoreHover: true }],
                mouseleave: this.removeIgnore.bind(this)
            },
            new MainNavigation({ options: this.options })
        );
    }

    /**
     * This will remove the ignore.
     *
     * @returns {void}
     */
    removeIgnore()
    {
        window.clearTimeout(this.timer);

        const DURATION = 400;
        this.timer = window.setTimeout(() =>
        {
            this.state.set({
                ignoreHover: false
            });
        }, DURATION);
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
            pinned: false
		};
	}
}