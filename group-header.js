import { Div, P, Span } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';
import { Button } from '@base-framework/ui/atoms';
import { BackButton } from '@base-framework/ui/organisms';

/**
 * GorupHeader - A sticky header component for group detail view, providing navigation and actions.
 *
 * @param {object} props - Component properties
 * @param {Array<any>} children - Child components
 * @returns {object} Group header component
 */
export const GroupHeader = Atom(({ backUrl }, children = []) => (
	Div({ class: 'sticky top-safe z-50 flex items-center justify-between px-4 pt-2 pb-2' }, [
		BackButton({
			margin: 'm-0',
			icon: 'arrow_back',
			class: 'w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center',
			backUrl
		}),
		...children
	])
));

export default GroupHeader;
