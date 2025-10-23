import { Button, Div, Span } from "@base-framework/atoms";
import { Icon } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";

/**
 * This will create the ended view.
 *
 * @param {object} props
 * @param {Function} props.onRedial - Handler for redialing
 * @param {Function} props.onExit - Handler for exiting
 * @returns {object}
 */
export const Ended = ({ onRedial, onExit }) => (
	Div({
		class: 'flex flex-auto flex-col items-center justify-center gap-y-6 bg-background/95',

		/**
		 * This will close the overlay after 3 seconds
		 * after the component is created.
		 *
		 * @param {object} e
		 * @param {object} parent
		 */
		onCreated(e, parent)
		{
			const DURATION = 2000;
			window.setTimeout(() => {
				parent.handleExit();
			}, DURATION);
		}
	}, [
		// Status icon
		Div({ class: 'w-24 h-24 rounded-full bg-muted flex items-center justify-center' }, [
			//Icon({ size: 'lg', class: 'text-muted-foreground' }, Icons.phone.missed)
		]),

		// Status text
		Div({ class: 'flex flex-col gap-y-2 text-center' }, [
			Span({ class: 'text-xl font-semibold' }, 'Call Ended'),
			Span({ class: 'text-sm text-muted-foreground block' }, 'Duration: 45:23')
		]),

		// Action buttons
		Div({ class: 'flex gap-x-4' }, [
			Button({
				class: 'w-12 h-12 rounded-full bg-primary hover:bg-primary text-primary-foreground flex items-center justify-center mt-8',
				click: onRedial
			}, [
				Icon({ size: 'sm' }, Icons.phone.outbound)
			]),
			Button({
				class: 'w-12 h-12 rounded-full bg-muted hover:bg-muted text-muted-foreground flex items-center justify-center mt-8',
				click: onExit
			}, [
				Icon({ size: 'sm' }, Icons.x)
			])
		])
	])
);