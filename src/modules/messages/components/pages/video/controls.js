import { Button, Div } from "@base-framework/atoms";
import { Icon } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";

/**
 * This will create a control button.
 *
 * @param {object} props
 * @returns {object}
 */
const ControlButton = ({ action, className, icon }) => (
    Button({ class: className, click: (e, parent) =>
    {
        action(e, parent);
    }
     }, [
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