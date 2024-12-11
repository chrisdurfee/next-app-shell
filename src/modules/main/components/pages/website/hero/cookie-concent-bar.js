import { Div, OnState, Span } from '@base-framework/atoms';
import { Jot } from '@base-framework/base';
import { Button } from '@components/atoms/buttons/buttons.js';
import { Icons } from '@components/icons/icons.js';
import { CookieDialog } from './cookie-dialog.js';

/**
 * CookieConsentBar
 *
 * Displays a bottom bar for cookie consent with options to accept or manage cookies.
 *
 * @returns {object} - The cookie consent bar element.
 */
export const CookieConsentBar = Jot(
{
    /**
     * This will set the initial state of the cookie consent bar.
     *
     * @returns {object}
     */
    state()
    {
        return {
            show: true
        };
    },

    /**
     * This will render the cookie consent bar.
     *
     * @returns {object}
     */
    render()
    {
        return OnState('show', (show) => (!show)
            ? null
            : Div({ class: 'fixed bottom-0 left-0 sm:left-[64px] right-0 bg-background text-inherit py-4 px-6 flex flex-col md:flex-row md:justify-between items-center shadow-lg z-50 border-t' }, [
                // Cookie Consent Text
                Span({ class: 'text-sm mb-8 md:mb-0' },
                    'We use cookies to enhance your experience. By clicking "Accept," you agree to our use of cookies. You can also manage your preferences.'
                ),

                // Action Buttons
                Div({ class: 'flex space-x-4' }, [
                    // Accept Cookies Button
                    Button({
                        variant: 'primary',
                        click: () =>
                        {
                            this.state.show = false;
                            app.notify({
                                type: 'success',
                                title: 'Cookies Accepted',
                                description: 'You have accepted the use of cookies.',
                                icon: Icons.check
                            });
                        }
                    }, 'Accept'),

                    // Manage Cookies Button
                    Button({
                        variant: 'secondary',
                        click: () => CookieDialog({
                            onClose: () => this.state.show = false
                        }).open()
                    }, 'Manage Cookies')
                ])
            ])
        );
    },

    /**
     * This will add the cookie bar to the app shell panel.
     *
     * @param {object} container
     */
    setup(container)
    {
        this.container = app.appShell.panel;
        this.initialize();
    }
});