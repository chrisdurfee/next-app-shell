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
 * Creates the footer row with Cancel/Install buttons.
 *
 * @param {object} props
 * @returns {object}
 */
function PWAInstallFooter({ onCancel, onInstall, isIOSFallback, promptEvent })
{
    return Div({ class: 'flex justify-end gap-2' }, [
        Button({
            variant: 'outline',
            click: () => {
                onCancel();
            }
        }, 'Cancel'),
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
    ]);
}

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
        description: isIOSFallback
            ? "Install this app to your Home Screen for better access."
            : "Install this app on your device for quick and easy access.",
        hideFooter: true,
        size: 'sm',
        closeOnOutsideClick: true,
        onClose
    },
    [
        PWAInstallBody(isIOSFallback),

        PWAInstallFooter({
            onCancel,
            onInstall,
            isIOSFallback,
            promptEvent
        })
    ]);
}