import { Div, Span } from "@base-framework/atoms";
import { VideoContent } from "./video-content.js";

/**
 * Header
 *
 * Represents the header of the video chat
 *
 * @param {object} props
 * @returns {object}
 */
export const Header = ({ title, participantCount }) =>
{
	return Div({ class: "p-4 pt-6 pb-0 flex items-center justify-between" }, [
		Div({ class: "flex items-center gap-2" }, [
			Span({ class: "text-xl font-semibold pl-2" }, title),
			Span({ class: "text-sm text-muted-foreground" }, `${participantCount} participants`)
		])
	]);
};

/**
 * This will create the video connected view.
 *
 * @param {object} props
 * @returns {object}
 */
export const VideoConnected = ({ participants }) => (
	Div({ class: 'flex flex-auto flex-col' }, [
		Header({
			title: "Video Chat",
			participantCount: 4
		}),

		VideoContent({ participants })
	])
);