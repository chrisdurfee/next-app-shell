import { Button, Div, Span } from "@base-framework/atoms";
import { Avatar } from "@base-framework/ui/molecules";
import { Overlay } from "@base-framework/ui/organisms";

/**
 * ParticipantTile
 *
 * Represents a single participant in the video chat.
 *
 * @param {object} props
 * @returns {object}
 */
export const ParticipantTile = ({ name, avatarUrl, isSpeaking, muted }) => (
	Div({
		class: `relative flex items-center justify-center rounded-lg overflow-hidden shadow-md ${
			isSpeaking ? "ring-2 ring-blue-500" : ""
		}`
	}, [
		Avatar({ src: avatarUrl, alt: name, size: "xl" }),
		Span({
			class: "absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded",
		}, name),
		muted &&
			Div({
				class: "absolute bottom-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded",
			}, "Muted")
	])
);

/**
 * Header
 *
 * Represents the header of the video chat.
 *
 * @param {object} props
 * @returns {object}
 */
export const Header = ({ title, participantCount }) => (
	Div({ class: "flex justify-between items-center p-4 border-b shadow-sm" }, [
		Span({ class: "text-lg font-semibold" }, title),
		Span({ class: "text-sm text-gray-500" }, `${participantCount} participants`)
	])
);

/**
 * FooterControls
 *
 * Represents the footer controls for the video chat.
 *
 * @param {object} actions
 * @returns {object}
 */
export const FooterControls = ({ actions }) => (
	Div({ class: "flex justify-center items-center p-4 border-t shadow-sm space-x-4" }, [
		Button({
			class: "bg-red-500 text-white rounded-full p-4 hover:bg-red-600",
			icon: "mic-off",
			onClick: actions.toggleMute
		}),
		Button({
			class: "bg-gray-200 rounded-full p-4 hover:bg-gray-300",
			icon: "camera",
			onClick: actions.toggleCamera
		}),
		Button({
			class: "bg-gray-200 rounded-full p-4 hover:bg-gray-300",
			icon: "phone",
			onClick: actions.endCall
		})
	])
);

/**
 * VideoChatPage
 *
 * Main layout for the video chat interface.
 *
 * @returns {object}
 */
export const VideoChatPage = () => (
	new Overlay([
		Div({ class: "flex flex-col w-full h-full bg-background" }, [
			// Header
			Header({ title: "Onboarding Meeting", participantCount: 4 }),

			// Main video area
			Div({ class: "flex flex-auto flex-col lg:flex-row p-4 gap-4" }, [
				// Main participant video
				Div({ class: "flex flex-auto rounded-lg shadow-md relative" }, [
					ParticipantTile({
						name: "You",
						avatarUrl: "https://example.com/your-avatar.jpg",
						isSpeaking: true,
						muted: false
					})
				]),

				// Sidebar for participants
				Div({ class: "flex flex-col w-full lg:w-1/4 rounded-lg shadow-md overflow-y-auto space-y-4" }, [
					ParticipantTile({
						name: "Craig Press",
						avatarUrl: "https://example.com/craig-avatar.jpg",
						isSpeaking: false,
						muted: true
					}),
					ParticipantTile({
						name: "Makenna Bergson",
						avatarUrl: "https://example.com/makenna-avatar.jpg",
						isSpeaking: false,
						muted: false
					}),
					ParticipantTile({
						name: "Alison Septimus",
						avatarUrl: "https://example.com/alison-avatar.jpg",
						isSpeaking: false,
						muted: false
					})
				])
			]),

			// Footer controls
			FooterControls({
				actions: {
					toggleMute: () => console.log("Toggle mute"),
					toggleCamera: () => console.log("Toggle camera"),
					endCall: () => console.log("End call")
				}
			})
		])
	])
);

export default VideoChatPage;