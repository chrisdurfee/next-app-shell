import { Button, Div, Span } from "@base-framework/atoms";
import { Avatar } from "@base-framework/ui";
import { Icon } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";
import { STATES } from "./states.js";

/**
 * This will create the calling view.
 *
 * @param {object} props
 * @param {Function} props.onCancel - Handler for canceling the call
 * @returns {object}
 */
export const Calling = ({ onCancel }) => (
	Div({
		class: 'flex flex-auto flex-col items-center justify-center space-y-6 bg-background/95',

		/**
		 * This will chnage the state to connected
		 * after 3 seconds.
		 *
		 * @param {object} e
		 * @param {object} parent
		 */
		onCreated(e, parent)
		{
			const DURATION = 2000;
			window.setTimeout(() => {
				parent.state.view = STATES.CONNECTED;
			}, DURATION);
		}
	}, [
		// Avatar or placeholder for the person being called
		Div({ class: 'w-24 h-24 rounded-full bg-muted flex items-center justify-center animate-pulse' }, [
			Avatar({
				src: '',
				size: 'lg',
				fallbackText: 'User Name',
			})
		]),

		// Status text
		Div({ class: 'space-y-2 text-center' }, [
			Span({ class: 'text-xl font-semibold' }, 'Calling...'),
			Span({ class: 'text-sm text-muted-foreground block' }, 'Waiting for others to join')
		]),

		// Cancel button
		Button({
			class: 'w-12 h-12 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center mt-8',
			click: onCancel
		}, [
			Icon({ size: 'sm' }, Icons.x)
		])
	])
);