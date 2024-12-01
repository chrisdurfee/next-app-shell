import { A, Button, Div, Span } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';
import NavigationMenu from '@components/organisms/navigation/navigation-menu/navigation-menu.js';
import { Logo } from './logo.js';

/**
 * This will create a mobile menu button.
 *
 * @param {object} props
 * @returns {object}
 */
const MobileMenuButton = Atom((props) =>
{
    const className = '-m-2.5 inline-flex lg:hidden items-center justify-center rounded-md p-2.5';
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
 * This will create a list of links.
 *
 * @returns {object}
 */
const DesktopMenuLinks = Atom(() => (
    new NavigationMenu({
        options: [
            { href: '/website/about', label: 'About' },
            { href: '/website/services', label: 'Services' },
            { href: '/website/contact', label: 'Contact' },
            { href: '/website/blog', label: 'Blog' }
        ]
    })
));

/**
 * This will create a log in link.
 *
 * @returns {object}
 */
const DesktopLogIn = Atom(() => (
    Div({ class: 'hidden lg:flex lg:flex-1 lg:justify-end' }, [
        A({ href: '/website#', class: 'text-sm font-semibold leading-6' }, [
            Span('Log in '),
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
    return Div({
            class: 'relative flex items-center justify-between p-6 lg:px-8 z-40',
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
