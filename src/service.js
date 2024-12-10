import { State } from "@base-framework/base";
import { Configs } from "./configs.js";

/**
 * @type {string} protocol
 */
const protocol = window.location.protocol.replace(':', '');

/**
 * This will check if the service worker is supported.
 *
 * @returns {boolean}
 */
const isSupported = () => ('serviceWorker' in navigator) && protocol !== 'http';

/**
 * This will setup the service worker messages.
 *
 * @param {object} serviceWorker
 */
const setupServiceMessages = (serviceWorker) =>
{
    serviceWorker.addEventListener('message', (e) =>
    {
        const data = e.data;

        // this will check to route the push notifiction to the page url
        if (data.url)
        {
            app.navigate(data.url);
        }

        // this will set the app to notify there is an updated version
        if (data.update)
        {
            State.set('app', 'update', true);
        }
    });
};

/**
 * This will setup the push notifications.
 *
 * @param {object} serviceWorker
 * @param {string} pushId
 * @returns {object}
 */
const setupPush = (serviceWorker, pushId) =>
{
    return new Push(pushId, serviceWorker);
};

/**
 * This will setup the service worker.
 *
 * @returns {void}
 */
export const setupServiceWorker = () =>
{
    if (isSupported() === false)
    {
        return;
    }

    const sw = navigator.serviceWorker;
    sw.register('./sw.js', {
        scope: './'
    }).then((serviceWorker) =>
    {
        setupServiceMessages(serviceWorker)

        if (Configs.push && Configs.push.publicId)
        {
            setupPush(serviceWorker, Configs.push.publicId);
        }
    });
}