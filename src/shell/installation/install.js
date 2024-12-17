import { InstallPrompt } from "../prompts/installation-prompt.js";

let deferredPrompt = null;

/**
 * This will add the install event listener to the window.
 */
window.addEventListener('beforeinstallprompt', (e) =>
{
    // Prevent the default mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so we can use it later.
    deferredPrompt = e;
});

/**
 * This will open the install prompt.
 *
 * @returns {void}
 */
export const openInstallPrompt = () =>
{
    InstallPrompt({
        promptEvent: deferredPrompt,
        onInstall: () => console.log("User accepted the prompt"),
        onCancel: () => console.log("User dismissed the prompt")
    }).open();
};