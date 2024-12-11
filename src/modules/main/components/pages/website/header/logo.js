import { A, Img } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';

/**
 * This will create a logo.
 *
 * @param {object} props
 * @returns {object}
 */
export const Logo = Atom((props) => (
    A({
        class: 'logo w-[32px] h-[32px] m-[8px] block',
        href: 'website',
        ...props
    }, [
        /**
         * This will create the logo image.
         */
        props.src && Img({
            src: props.src,
            alt: 'Logo',
            class: 'w-[32px] h-[32px]',

            /**
             * This will hide the image if there is an error.
             */
            error: (e) => e.target.style.display = 'none'
        })
    ])
));