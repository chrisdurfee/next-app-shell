import { A, Button, Div, Img, Nav, Span } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';

/**
 * Logo
 *
 * @param {object} props
 * @returns {object}
 */
const Logo = Atom(({ src = 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600', name = 'Your Company' }) =>
{
    return A({ href: '/', class: '-m-1.5 p-1.5' }, [
        Span({ class: 'sr-only' }, name),
        Img({
            class: 'h-8 w-auto',
            src,
            alt: name
        })
    ]);
});

/**
 * MobileMenuButton
 *
 * @param {object} props
 * @returns {object}
 */
const MobileMenuButton = Atom((props) =>
{
    const className = '-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700';
    return Button({ type: 'button', class: className }, [
        Span({ class: 'sr-only' }, 'Open main menu'),
        Div({
            html: `<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>`
        })
    ]);
});

const Link = (link) => A({
    href: '/' + link.toLowerCase(),
    class: 'text-sm font-semibold leading-6 text-gray-900'
}, link);

/**
 * DesktopMenuLinks
 *
 * @param {object} props
 * @returns {object}
 */
const DesktopMenuLinks = Atom(({ links = ['Product', 'Features', 'Marketplace', 'Company'] }) =>
{
    return Div({
        class: 'hidden lg:flex lg:gap-x-12' ,
        map: [links, Link]
    });
});

/**
 * DesktopLogIn
 *
 * @returns {object}
 */
const DesktopLogIn = Atom(() =>
{
    return Div({ class: 'hidden lg:flex lg:flex-1 lg:justify-end' }, [
        A({ href: '#', class: 'text-sm font-semibold leading-6 text-gray-900' }, [
            'Log in ',
            Span({ 'aria-hidden': 'true' }, '→')
        ])
    ]);
});

/**
 * Navigation
 *
 * @param {object} props
 * @returns {object}
 */
export const Navigation = Atom((props) =>
{
    return Nav({
            class: 'flex items-center justify-between p-6 lg:px-8',
            'aria-label': 'Global'
        }, [
        Div({ class: 'flex lg:flex-1' }, [
            Logo({
                src: props?.src,
                name: props?.name
            })
        ]),
        MobileMenuButton(),
        DesktopMenuLinks(),
        DesktopLogIn()
    ]);
});
