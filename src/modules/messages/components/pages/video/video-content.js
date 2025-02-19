import { Div } from "@base-framework/atoms";
import { Controls } from "./controls.js";
import { ParticipantsList } from "./participants-list.js";
import { STATES } from "./states.js";
import { VideoContainer } from "./video-container.js";

/**
 * This will create the video content.
 *
 * @param {object} props
 * @param {Array<object>} props.participants
 * @returns {object}
 */
export const VideoContent = ({ participants }) => (
	Div({ class: "flex-1 p-4 flex gap-4" }, [
		Div({ class: "flex-1 relative" }, [
			VideoContainer({
				...participants[0],
				isMainParticipant: true
			}, [
				ParticipantsList({ participants: participants.slice(1) })
			])
		]),

		Controls({
			actions: {
				toggleMute: () => console.log("Toggle mute"),
				toggleCamera: () => console.log("Toggle camera"),
				endCall: (e, parent) =>
				{
					console.log("End call");
					parent.state.view = STATES.ENDED;
				},
				toggleFullscreen: () => console.log("Toggle fullscreen")
			}
		})
	])
);