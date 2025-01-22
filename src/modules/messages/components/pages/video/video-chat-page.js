import { Button, Div, Span } from "@base-framework/atoms";
import { Icon } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";
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
		class: `relative rounded-lg overflow-hidden border ${
			isMainParticipant ? 'w-full h-full' : 'w-full h-32'
		}`
	}, [
		// Video placeholder
		Div({ class: "w-full h-full" }),

		// Gradient overlay with name
		Div({ class: "absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/50 to-transparent" }, [
			Div({ class: "flex items-center justify-between" }, [
				Span({ class: "text-sm font-medium" }, name),
				isMuted && Span({ class: "flex items-center" }, [
					Icon({ size: 'xs' }, Icons.microphone)
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
	return Div({ class: "p-4 pt-6 pb-0 flex items-center justify-between" }, [
		Div({ class: "flex items-center gap-2" }, [
			Span({ class: "text-xl font-semibold pl-2" }, title),
			Span({ class: "text-sm text-muted-foreground" }, `${participantCount} participants`)
		])
	]);
};

/**
 * This will create a control button.
 *
 * @param {object} props
 * @returns {object}
 */
const ControlButton = ({ action, className, icon }) => (
    Button({ class: className, click: action }, [
        Icon({ size: 'sm' }, icon)
    ])
)

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
		class: "absolute bottom-6 left-0 right-0 flex items-center gap-4 w-60 mx-auto"
	}, [
        ControlButton({
            action: actions.toggleCamera,
            className: "w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center",
            icon: Icons.videoCamera.default
        }),
        ControlButton({
            action: actions.toggleMute,
            className: "w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center",
            icon: Icons.microphone
        }),
        ControlButton({
            action: actions.endCall,
            className: "w-12 h-12 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center",
            icon: Icons.x
        }),
        ControlButton({
            action: actions.toggleFullscreen,
            className: "w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center",
            icon: Icons.expand
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
	return Div({ class: "flex flex-col gap-2 w-60" }, participants.map(participant =>
		Div({ class: "overflow-hidden rounded-lg shadow-sm" }, [
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
        Div({ class: "flex-1 relative" }, [
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

                        if (window.history.length > 2)
                        {
                            window.history.back();
                            return;
                        }
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