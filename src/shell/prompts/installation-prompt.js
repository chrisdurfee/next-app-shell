import { Component } from "@base-framework/base";
import { Button } from "@components/atoms/buttons/buttons.js";
import { Icons } from "@components/icons/icons.js";
import { Dialog } from "@components/molecules/dialogs/dialog.js";

/**
 * This will get the description for the install prompt.
 *
 * @param {boolean} isIOSFallback
 * @returns {string}
 */
const getDescription = (isIOSFallback) =>
{
    return isIOSFallback
        ? "On iOS, tap the share icon in Safari, then choose 'Add to Home Screen.'"
        : "Would you like to install this app and add it to your home screen?";
};

/**
 * This will get the buttons for the install prompt.
 *
 * @param {object} props
 * @returns {array}
 */
const PromptButtons = (props) =>
{
    const { promptEvent, onCancel, onInstall } = props;
    const isIOSFallback = !promptEvent;

    return [
        Button({ variant: 'outline', click: (e, parent) => parent.close() }, 'Not Now'),
        Button({
            variant: 'primary',
            click: (e, parent) =>
            {
                if (isIOSFallback)
                {
                    parent.close();
                    return;
                }

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
                    parent.close();
                });
            }
        }, isIOSFallback ? 'OK' : 'Install')
    ];
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
    const { onClose } = props;
    const promptEvent = props.promptEvent || null;
    const isIOSFallback = !promptEvent;

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
            return PromptButtons(props);
        },
        onClose
    });
}