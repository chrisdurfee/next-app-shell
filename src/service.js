/**
 * @type {string} protocol
 */
const protocol = window.location.protocol.replace(':', '');

/**
 * This will check if the service worker is supported.
 *
 * @returns {boolean}
 */
const isSupported = () => !('serviceWorker' in navigator) || protocol === 'http';

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

    });
}