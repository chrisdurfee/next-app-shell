import { Atom, Component } from "@base-framework/base";
import { MainNavigation } from "./main-navigation.js";

/**
 * This will create the app container.
 *
 * @param {object} props
 * @param {array} children
 * @return {object}
 */
const AppContainer = Atom((props, children) =>
{
    return {
        class: 'app-nav-container',
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
     * This will set up the timer.
     *
     * @override
     * @protected
     * @return {void}
     */
    onCreated()
    {
        /**
         * @member {number|null} timer
         */
        this.timer = null;
    }

    /**
     * This will render the component.
     *
     * @override
     * @return {object}
     */
	render()
	{
		return AppContainer(
            {
                onState: ['ignoreHover', { ignoreHover: true }],
                mouseleave: this.removeIgnore.bind(this)
            },
            new MainNavigation({
                options: this.options
            })
        );
    }

    /**
     * This will remove the ignore.
     *
     * @return {void}
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
     * @return {object}
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