import { Div, H3 } from "@base-framework/atoms";
import { Button } from "../../../../atoms/buttons/buttons.js";
import { Icon } from "../../../../atoms/icon.js";
import { Icons } from "../../../../icons/icons.js";

/**
 * This will create a navigation button.
 *
 * @returns {object}
 */
export const NavButton = () => (
    Button({ class: 'm-2', variant: 'ghost', addState()
		{
			return {
				open: false
			};
		}, click: (e, { state }) => state.toggle('open') }, [
        Icon(Icons.bar.three)
    ])
);

/**
 * This will create a title element.
 *
 * @param {string} title
 * @returns {object}
 */
const Title = (title) => H3({ class: 'text-lg ml-2' }, title);

/**
 * This will create a header for the mobile navigation.
 *
 * @param {object} props
 * @returns {object}
 */
export const TitleHeader = (props) => (
    Div({ class: 'flex flex-auto flex-row items-center lg:hidden' }, [
        NavButton(),
        props.title && Title(props.title)
    ])
);