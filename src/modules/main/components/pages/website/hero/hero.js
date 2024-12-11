import { A, Div, H1, P, Span } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';

/**
 * This will create the top gradient decoration atom.
 *
 * @returns {object}
 */
const TopGadientDecoration = Atom(() => (
    Div({
        class: 'absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80',
        'aria-hidden': 'true'
    }, [
        Div({
            class: 'relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]',
            style: "clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        })
    ])
));

/**
 * This will create the content section atom.
 *
 * @returns {object}
 */
const ContentSection = Atom(() => (
    Div({ class: 'mx-auto max-w-2xl py-32 sm:py-48 lg:py-56' }, [
        Div({ class: 'text-center' }, [
            H1({ class: 'text-4xl font-bold tracking-tight sm:text-6xl' }, 'Data to enrich your online business'),
            P({ class: 'mt-6 text-lg leading-8 text-muted-foreground' }, 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.'),
            Div({ class: 'mt-10 flex items-center justify-center gap-x-4' }, [
                A({
                    href: '/website#',
                    class: 'bttn primary'
                }, 'Get started'),
                A({
                    href: '/website#',
                    class: 'bttn ghost gap-2'
                }, [Span('Learn more'), Span({ 'aria-hidden': 'true' }, ' →')])
            ])
        ])
    ])
));

/**
 * This will create the bottom gradient decoration atom.
 *
 * @returns {object}
 */
const BottomGadientDecoration = Atom(() => (
    Div({
        class: 'absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]',
        'aria-hidden': 'true'
    }, [
        Div({
            class: 'relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]',
            style: `clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)`
        })
    ])
));

/**
 * This will create the hero section atom.
 *
 * @returns {object}
 */
export const HeroSection = Atom(() => (
    Div({ class: 'relative isolate px-6 pt-14 lg:px-8' }, [
        TopGadientDecoration(),
        ContentSection(),
        BottomGadientDecoration(),
    ])
));