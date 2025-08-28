import { Div, Span } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";
import { Icon } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";

/**
 * VideoContainer
 *
 * Represents a video container with gradient overlay and name display
 *
 * @param {object} props
 * @returns {object}
 */
export const VideoContainer = Atom(({ name, isMuted, isMainParticipant = false }, children) =>
{
	return Div({
		class: `relative rounded-lg overflow-hidden border ${
			isMainParticipant ? 'w-full h-full' : 'w-full h-32'
		}`
	}, [
		// Video placeholder
		Div({ class: "w-full h-full" }),

		// Gradient overlay with name
		Div({ class: "absolute bottom-0 left-0 right-0 p-2 bg-linear-to-t from-black/50 to-transparent" }, [
			Div({ class: "flex items-center justify-between" }, [
				Span({ class: "text-sm font-medium" }, name),
				isMuted && Span({ class: "flex items-center" }, [
					Icon({ size: 'xs' }, Icons.microphone)
				])
			])
		]),

        children
	]);
});