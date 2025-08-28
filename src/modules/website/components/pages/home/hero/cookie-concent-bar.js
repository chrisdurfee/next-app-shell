import { Div, OnState, Span } from '@base-framework/atoms';
import { Component, Jot } from '@base-framework/base';
import { Button } from "@base-framework/ui/atoms";
import { CookieDialog } from './cookie-dialog.js';

/**
 * @type {string} STORAGE_KEY
 * @constant
 */
const STORAGE_KEY = 'cookieConsent';

/**
 * CookieConsentBar
 *
 * Displays a bottom bar for cookie consent with options to accept or manage cookies.
 *
 * @type {typeof Component}
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
            show: {
                state: !localStorage.getItem(STORAGE_KEY),
                callBack: (value) => localStorage.setItem(STORAGE_KEY, value)
            }
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
            : Div({ class: 'fixed bottom-0 rounded-md m-1 left-0 sm:left-[64px] right-0 bg-background/80 backdrop-blur-md text-inherit py-4 px-6 flex flex-col md:flex-row md:justify-between items-center text-center md:text-left shadow-lg z-50 border-t' }, [
                // Cookie Consent Text
                Span({ class: 'text-sm mb-8 md:mb-0' },
                    'We use cookies to enhance your experience. By clicking "Accept," you agree to our use of cookies. You can also manage your preferences.'
                ),

                // Action Buttons
                Div({ class: 'flex flex-auto md:flex-none w-full md:w-auto gap-x-4' }, [
                    // Accept Cookies Button
                    Button({
                        variant: 'primary',
                        class: 'flex-auto',
                        click: () =>
                        {
                            // @ts-ignore
                            this.state.show = false;
                        }
                    }, 'Accept'),

                    // Manage Cookies Button
                    Button({
                        variant: 'secondary',
                        class: 'flex-auto',
                        click: () => CookieDialog({
                            // @ts-ignore
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
    setContainer(container)
    {
        // @ts-ignore
        this.container = app.root;
    }
});