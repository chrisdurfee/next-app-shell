import { Button, Div, Span } from "@base-framework/atoms";
import { Overlay } from "@base-framework/ui/organisms";

/**
 * VideoContainer
 *
 * Represents a video container with gradient overlay and name display
 *
 * @param {object} props
 * @returns {object}
 */
export const VideoContainer = ({ name, isMuted, isMainParticipant = false }) =>
{
	return Div({
		class: `relative rounded-lg overflow-hidden ${
			isMainParticipant ? 'w-full h-full' : 'w-full h-32'
		}`
	}, [
		// Video placeholder
		Div({ class: "w-full h-full" }),

		// Gradient overlay with name
		Div({ class: "absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/50 to-transparent" }, [
			Div({
				class: "flex items-center justify-between"
			}, [
				Span({ class: "text-sm font-medium" }, name),
				isMuted && Span({ class: "flex items-center" }, [
					Div({
						class: "w-4 h-4",
						innerHTML: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 1l22 22M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path></svg>`
					})
				])
			])
		])
	]);
};

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
	return Div({ class: "p-4 flex items-center justify-between border-b" }, [
		Div({ class: "flex items-center gap-2" }, [
			Span({ class: "text-xl font-semibold" }, title),
			Span({ class: "text-sm text-gray-500" }, `${participantCount} participants`)
		])
	]);
};

/**
 * Controls
 *
 * Represents the video controls
 *
 * @param {object} actions
 * @returns {object}
 */
export const Controls = ({ actions }) =>
{
	return Div({
		class: "absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-4"
	}, [
		Button({
			class: "w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center",
			click: actions.toggleCamera,
			innerHTML: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 7l-7 5 7 5V7z"></path><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>`
		}),
		Button({
			class: "w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center",
			click: actions.toggleMute,
			innerHTML: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>`
		}),
		Button({
			class: "w-12 h-12 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center",
			click: actions.endCall,
			innerHTML: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
		}),
		Button({
			class: "w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center",
			click: actions.toggleFullscreen,
			innerHTML: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>`
		})
	]);
};

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
	return Div({
		class: "flex flex-col gap-2 w-60"
	}, participants.map(participant =>
		Div({
			class: "overflow-hidden rounded-lg shadow-sm"
		}, [
			VideoContainer({
				name: participant.name,
				isMuted: participant.isMuted
			})
		])
	));
};

/**
 * This will create the video content.
 *
 * @param {object} props
 * @param {Array<object>} props.participants
 * @returns {object}
 */
const VideoContent = ({ participants }) => (
    Div({ class: "flex-1 p-4 flex gap-4" }, [
        Div({
            class: "flex-1 relative"
        }, [
            VideoContainer({
                name: "You",
                isMuted: false,
                isMainParticipant: true
            }),
            Controls({
                actions: {
                    toggleMute: () => console.log("Toggle mute"),
                    toggleCamera: () => console.log("Toggle camera"),
                    endCall: () => {
                        console.log("End call");
                        app.navigate('/messages/all');
                    },
                    toggleFullscreen: () => console.log("Toggle fullscreen")
                }
            })
        ]),

        ParticipantsList({ participants })
    ])
);

/**
 * VideoChatPage
 *
 * Main layout for the video chat interface
 *
 * @returns {object}
 */
export const VideoChatPage = () =>
{
	const participants = [
		{ name: "Craig Press", isMuted: true },
		{ name: "Makenna Bergson", isMuted: false },
		{ name: "Allison Septimus", isMuted: false }
	];

	return new Overlay([
		Div({ class: "flex flex-col w-full h-screen bg-background" }, [
			Header({
				title: "Video Chat",
				participantCount: 4
			}),

			VideoContent({ participants })
		])
	]);
};

export default VideoChatPage;