import { SidebarMenu as BaseSidebarMenu } from "@base-framework/ui/organisms";

/**
 * SidebarMenu for the Settings Page
 *
 * @param {object} props
 * @returns {object}
 */
export const SidebarMenu = (props) => (
	BaseSidebarMenu({
		topNav: props.topNav,
		mobileBorder: true,
		title: props.title,
		options: props.options,
		class: 'hidden lg:block w-full flex-none'
	})
);

export default SidebarMenu;