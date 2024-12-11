import { A, Div, Span } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';
import { MobileNavButton } from '@components/organisms/navigation/mobile/nav-wrapper/mobile-nav-wrapper.js';
import NavigationMenu from '@components/organisms/navigation/navigation-menu/navigation-menu.js';
import { Logo } from './logo.js';

/**
 * This will create a list of options.
 *
 * @constant
 * @type {array}
 */
const Options = [
    { href: 'website', label: 'Home', exact: true, hidden: true },
    { href: 'website/about', label: 'About' },
    { href: 'website/services', label: 'Services' },
    { href: 'website/contact', label: 'Contact' },
    { href: 'website/blog', label: 'Blog' }
];

/**
 * This will create a mobile menu button.
 *
 * @param {object} props
 * @returns {object}
 */
const MobileMenuButton = Atom((props) =>
{
    return MobileNavButton({
        title: 'Menu',
        options: Options
    });
});

/**
 * This will create a list of links.
 *
 * @returns {object}
 */
const DesktopMenuLinks = Atom(() => (
    Div({ class: 'hidden lg:flex lg:flex-1 lg:justify-center' }, [
        new NavigationMenu({
            options: Options
        })
    ])
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
            class: 'relative flex items-center justify-between px-4 md:p-6 lg:px-8 z-40',
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
