import { A, Button, Div, H1, Img, Nav, P, Span } from '@base-framework/atoms';
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

// Desktop Log In Atom
const DesktopLogIn = Atom(() => {
    return Div({ class: 'hidden lg:flex lg:flex-1 lg:justify-end' }, [
        A({ href: '#', class: 'text-sm font-semibold leading-6 text-gray-900' }, [
            'Log in ',
            Span({ 'aria-hidden': 'true' }, '→')
        ])
    ]);
});

// Navigation Atom
const Navigation = Atom(() => {
    return Nav({
        class: 'flex items-center justify-between p-6 lg:px-8',
        'aria-label': 'Global'
    }, [
        Div({ class: 'flex lg:flex-1' }, [Logo()]),
        MobileMenuButton(),
        DesktopMenuLinks(),
        DesktopLogIn()
    ]);
});

// Header Atom
const Header = Atom(() => {
    return Div({ class: 'absolute inset-x-0 top-0 z-50' }, [Navigation()]);
});

// Hero Section Atom
const HeroSection = Atom(() => {
    return Div({ class: 'relative isolate px-6 pt-14 lg:px-8' }, [
        // Top gradient decoration
        Div({
            class: 'absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80',
            'aria-hidden': 'true'
        }, [
            Div({
                class: 'relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]',
                style: {
                    clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                }
            })
        ]),

        // Content section
        Div({ class: 'mx-auto max-w-2xl py-32 sm:py-48 lg:py-56' }, [
            Div({ class: 'text-center' }, [
                H1({ class: 'text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl' }, 'Data to enrich your online business'),
                P({ class: 'mt-6 text-lg leading-8 text-gray-600' }, 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.'),
                Div({ class: 'mt-10 flex items-center justify-center gap-x-6' }, [
                    A({
                        href: '#',
                        class: 'rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                    }, 'Get started'),
                    A({
                        href: '#',
                        class: 'text-sm font-semibold leading-6 text-gray-900'
                    }, ['Learn more ', Span({ 'aria-hidden': 'true' }, '→')])
                ])
            ])
        ]),

        // Bottom gradient decoration
        Div({
            class: 'absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]',
            'aria-hidden': 'true'
        }, [
            Div({
                class: 'relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]',
                style: {
                    clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                }
            })
        ])
    ]);
});

// Main Layout Atom
const MainLayout = Atom(() => {
    return Div({ class: 'bg-white' }, [Header(), HeroSection()]);
});

export default MainLayout;
