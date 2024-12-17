import { Div, P } from "@base-framework/atoms";
import { Component } from "@base-framework/base";
import { Button } from "@components/atoms/buttons/buttons.js";
import { Icons } from "@components/icons/icons.js";
import { Dialog } from "@components/molecules/dialogs/dialog.js";

/**
 * Creates the main body content for the PWA install prompt.
 *
 * @param {boolean} isIOSFallback
 * @returns {object}
 */
function PWAInstallBody(isIOSFallback)
{
    const instructionText = isIOSFallback
        ? "On iOS, tap the share icon in Safari, then choose 'Add to Home Screen.'"
        : "Would you like to install this app and add it to your home screen?";

    return Div({ class: 'space-y-4 py-6 text-foreground' }, [
        P({ class: 'text-sm' }, instructionText)
    ]);
}

/**
 * This will get the description for the install prompt.
 *
 * @param {boolean} isIOSFallback
 * @returns {string}
 */
const getDescription = (isIOSFallback) =>
{
    return isIOSFallback
        ? "Install this app to your Home Screen for better access."
        : "Install this app on your device for quick and easy access.";
};

/**
 * InstallPrompt
 *
 * A dialog that handles both Android/Chrome/Windows “Install App” (via `beforeinstallprompt`)
 * and iOS fallback instructions.
 *
 * @class
 * @extends Component
 */
export const InstallPrompt = (props) =>
{
    const { onCancel, onInstall, onClose } = props;
    const promptEvent = props.promptEvent || null;
    const isIOSFallback = promptEvent;

    return new Dialog({
        icon: Icons.download,
        title: "Install App",
        description: getDescription(isIOSFallback),
        size: 'sm',

        /**
         * This will get the buttons for the modal.
         *
         * @returns {array}
         */
        getButtons()
        {
            return [
                Button({ variant: 'outline', click: () => this.close() }, 'Cancel'),
                Button({
                    variant: 'primary',
                    disabled: isIOSFallback,  // iOS fallback can't trigger a prompt
                    click: () =>
                    {
                        if (!isIOSFallback && promptEvent)
                        {
                            // If we have a real promptEvent, show install prompt
                            promptEvent.prompt();
                            promptEvent.userChoice.then((choiceResult) =>
                            {
                                if (choiceResult.outcome === 'accepted')
                                {
                                    onInstall();
                                }
                                else
                                {
                                    onCancel();
                                }
                            });
                        }
                    }
                }, isIOSFallback ? 'OK' : 'Install')
            ];
        },
        onClose
    },
    [
        PWAInstallBody(isIOSFallback)
    ]);
}