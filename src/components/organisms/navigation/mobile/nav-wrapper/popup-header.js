import { Div, H3 } from "@base-framework/atoms";
import { Button } from "../../../../atoms/buttons/buttons.js";
import { Icons } from "../../../../icons/icons.js";

/**
 * This will create a title element.
 *
 * @param {string} title
 * @returns {object}
 */
const Title = (title) => H3({ class: 'text-lg ml-2' }, title);

/**
 * This will create a popup header for the mobile navigation.
 *
 * @param {object} props
 * @returns {object}
 */
export const PopupHeader = (props) => (
    Div({ class: 'sticky flex flex-row items-center bg-popover lg:hidden top-0 z-10 border-0 border-b' }, [
        Button({
			variant: 'icon',
			class: 'm-2',
			click: (e, { state }) => state.toggle('open'),
			icon: Icons.arrows.left,
		}),
        props.title && Title(props.title)
    ])
);