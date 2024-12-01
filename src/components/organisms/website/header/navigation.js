import { A, Button, Div, Img, Nav, Span } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';

/**
 * Logo
 *
 * This will create a logo for the website.
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
 * This will create a mobile menu button.
 *
 * @param {object} props
 * @returns {object}
 */
const MobileMenuButton = Atom((props) =>
{
    const className = '-m-2.5 inline-flex items-center justify-center rounded-md p-2.5';
    return Button({ variant: 'primary', class: className }, [
        Span({ class: 'sr-only' }, 'Open main menu'),
        Div({
            html: `<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>`
        })
    ]);
});

/**
 * This will create a link.
 *
 * @param {string} link
 * @returns {object}
 */
const Link = (link) => A({
    href: '/' + link.toLowerCase(),
    class: 'text-sm font-semibold leading-6'
}, link);

/**
 * This will create a list of links.
 *
 * @param {object} props
 * @returns {object}
 */
const DesktopMenuLinks = Atom(({ links = ['Product', 'Features', 'Marketplace', 'Company'] }) => (
    Ul({
        class: 'hidden lg:flex lg:gap-x-12' ,
        map: [links, Link]
    })
));

/**
 * This will create a log in link.
 *
 * @returns {object}
 */
const DesktopLogIn = Atom(() => (
    Div({ class: 'hidden lg:flex lg:flex-1 lg:justify-end' }, [
        A({ href: '#', class: 'text-sm font-semibold leading-6' }, [
            'Log in ',
            Span({ 'aria-hidden': 'true' }, '→')
        ])
    ])
));

/**
 * THis will create a navigation molecule.
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
