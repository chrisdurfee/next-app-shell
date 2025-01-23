import { Div } from "@base-framework/atoms";
import { VideoContainer } from "./video-container.js";

/**
 * ParticipantsList
 *
 * Represents the sidebar list of participants
 *
 * @param {object} participants
 * @returns {object}
 */
export const ParticipantsList = ({ participants }) =>
{
	return Div({ class: "absolute flex flex-col gap-2 right-2 top-2 w-40 md:w-60" }, participants.map(participant =>
		Div({ class: "overflow-hidden rounded-lg shadow-sm" }, [
			VideoContainer({
				name: participant.name,
				isMuted: participant.isMuted
			})
		])
	));
};