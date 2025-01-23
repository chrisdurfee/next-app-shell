import { Div, OnState } from "@base-framework/atoms";
import { Overlay } from "@base-framework/ui/organisms";
import { Calling } from "./calling.js";
import { Ended } from "./ended.js";
import { Error } from "./error.js";
import { STATES } from "./states.js";
import { VideoConnected } from "./video-connected.js";

// Dummy participants data
const participants = [
    { name: "Craig Press", isMuted: true },
    { name: "Makenna Bergson", isMuted: false },
    { name: "Allison Septimus", isMuted: false },
    { name: "You", isMuted: false },
];

/**
 * VideoChatPage
 *
 * Main layout for the video chat interface
 *
 * @returns {object}
 */
export const VideoChatPage = () =>
{
    /**
     * @type {object} Props
     */
    const Props =
    {
        /**
         * This will set up the state for the component.
         *
         * @returns {object} state
         */
        setupStates()
        {
            return {
                view: STATES.CALLING,
                errorMessage: ''
            };
        },

        /**
         * This will run after the component is created.
         *
         * @returns {void}
         */
        beforeDestroy()
        {
            this.state.view = STATES.CALLING;
        },

        /**
         * This will handle exiting the call.
         *
         * @returns {void}
         */
        handleExit()
        {
            if (window.history.length > 2)
            {
                window.history.back();
                return;
            }
            app.navigate('/messages/all');
        },

        /**
         * This will handle retrying the call.
         *
         * @returns {void}
         */
        handleRetry()
        {
            this.state.view = STATES.CALLING;
        }
    };

    return new Overlay(Props, [
        Div({ class: "flex flex-col w-full h-screen bg-background" }, [
            OnState("view", (view, ele, component) => {
                switch (view) {
                    case STATES.CALLING:
                        return Calling({
                            onCancel: Props.handleExit
                        });

                    case STATES.CONNECTED:
                        return VideoConnected({ participants });

                    case STATES.ENDED:
                        return Ended({
                            onRedial: () => component.handleRetry(),
                            onExit: Props.handleExit
                        });

                    case STATES.ERROR:
                        return Error({
                            errorMessage: component.state.errorMessage || 'Failed to connect to the call. Please check your connection and try again.',
                            onRetry: () => Props.handleRetry(component),
                            onExit: Props.handleExit
                        });
                }
            })
        ])
    ]);
};

export default VideoChatPage;