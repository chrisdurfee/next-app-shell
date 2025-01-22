import { Button, Div, OnState, Span } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";
import { Avatar } from "@base-framework/ui";
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
		Div({ class: "absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/50 to-transparent" }, [
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
	return Div({ class: "absolute flex flex-col gap-2 right-0 top-0 w-60" }, participants.map(participant =>
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
            }, [
                ParticipantsList({ participants })
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

/**
 * @type {object} STATES
 */
const STATES = {
    CALLING: 'calling',
    CONNECTED: 'connected',
    ENDED: 'ended',
    ERROR: 'Error connecting'
};

// Dummy participants data
const participants = [
    { name: "Craig Press", isMuted: true },
    { name: "Makenna Bergson", isMuted: false },
    { name: "Allison Septimus", isMuted: false }
];

/**
 * This will create the video connected view.
 *
 * @param {object} props
 * @returns {object}
 */
const VideoConnected = ({ participants }) => (
    Div({ class: 'flex flex-auto flex-col' }, [
        Header({
            title: "Video Chat",
            participantCount: 4
        }),

        VideoContent({ participants })
    ])
);

/**
 * This will create the calling view.
 *
 * @param {object} props
 * @param {Function} props.onCancel - Handler for canceling the call
 * @returns {object}
 */
const Calling = ({ onCancel }) => (
    Div({
        class: 'flex flex-auto flex-col items-center justify-center space-y-6 bg-background/95',

        /**
         * This will chnage the state to connected
         * after 3 seconds.
         *
         * @param {object} e
         * @param {object} parent
         */
        onCreated(e, parent)
        {
            const DURATION = 2000;
            window.setTimeout(() => {
                parent.state.view = STATES.CONNECTED;
            }, DURATION);
        }
    }, [
        // Avatar or placeholder for the person being called
        Div({ class: 'w-24 h-24 rounded-full bg-muted flex items-center justify-center animate-pulse' }, [
            Avatar({
                src: '',
                size: 'lg',
                fallbackText: 'User Name',
            })
        ]),

        // Status text
        Div({ class: 'space-y-2 text-center' }, [
            Span({ class: 'text-xl font-semibold' }, 'Calling...'),
            Span({ class: 'text-sm text-muted-foreground block' }, 'Waiting for others to join')
        ]),

        // Cancel button
        Button({
            class: 'w-12 h-12 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center mt-8',
            click: onCancel
        }, [
            Icon({ size: 'sm' }, Icons.x)
        ])
    ])
);

/**
 * This will create the ended view.
 *
 * @param {object} props
 * @param {Function} props.onRedial - Handler for redialing
 * @param {Function} props.onExit - Handler for exiting
 * @returns {object}
 */
const Ended = ({ onRedial, onExit }) => (
    Div({
        class: 'flex flex-auto flex-col items-center justify-center space-y-6 bg-background/95',

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
            Icon({ size: 'lg', class: 'text-muted-foreground' }, Icons.phone.missed)
        ]),

        // Status text
        Div({ class: 'space-y-2 text-center' }, [
            Span({ class: 'text-xl font-semibold' }, 'Call Ended'),
            Span({ class: 'text-sm text-muted-foreground block' }, 'Duration: 45:23')
        ]),

        // Action buttons
        Div({ class: 'flex space-x-4' }, [
            Button({
                class: 'w-12 h-12 rounded-full bg-primary hover:bg-primary text-primary-foreground flex items-center justify-center mt-8',
                click: onRedial
            }, [
                Icon({ size: 'sm' }, Icons.phone.oubound)
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

/**
 * This will create the error view.
 *
 * @param {object} props
 * @param {string} props.errorMessage - The error message to display
 * @param {Function} props.onRetry - Handler for retry
 * @param {Function} props.onExit - Handler for exiting
 * @returns {object}
 */
const Error = ({ errorMessage, onRetry, onExit }) => (
    Div({
        class: 'flex flex-auto flex-col items-center justify-center space-y-6 bg-background/95'
    }, [
        // Error icon
        Div({
            class: 'w-16 h-16 rounded-full bg-red-100 flex items-center justify-center'
        }, [
            Icon({ size: 'lg', class: 'text-red-500' }, Icons.warning)
        ]),

        // Error message
        Div({ class: 'space-y-2 text-center max-w-md' }, [
            Span({ class: 'text-xl font-semibold text-red-500' }, 'Connection Error'),
            Span({ class: 'text-sm text-muted-foreground block' }, errorMessage)
        ]),

        // Action buttons
        Div({ class: 'flex space-x-4' }, [
            Button({
                class: 'px-6 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90',
                click: onRetry
            }, [
                Icon({ size: 'sm', class: 'mr-2' }, Icons.refresh),
                Span({}, 'Retry')
            ]),
            Button({
                class: 'px-6 py-2 rounded-full bg-muted hover:bg-muted/90',
                click: onExit
            }, [
                Icon({ size: 'sm', class: 'mr-2' }, Icons.x),
                Span({}, 'Exit')
            ])
        ])
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