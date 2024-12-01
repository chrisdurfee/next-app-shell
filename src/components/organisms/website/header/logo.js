import { A, Img, Span } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';

/**
 * Logo
 *
 * This will create a logo for the website.
 *
 * @param {object} props
 * @returns {object}
 */
export const Logo = Atom(({ src = 'https://tailwindui.com/img/logos/mark.svg', name = 'Your Company' }) =>
{
    return A({ href: '/', class: '-m-1.5 p-1.5' }, [
        Span({ class: 'sr-only' }, name),
        Img({
            class: 'h-8 w-auto',
            src,
            alt: name,

            error: (e) => e.target.style.display = 'none',
        })
    ]);
});
