import { A, Header } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";
/**
 * This will create a logo.
 *
 * @param {object} props
 * @returns {object}
 */
const Logo = Atom((props, children) => (
    A({
        class: 'logo w-[24px] h-[24px] block',
        href: './',
        ...props,
        children
    })
));

/**
 * This will create the mobile header.
 *
 * @param {object} props
 * @returns {object}
 */
export const MobileHeader = (props = {}) => (
    Header({ class: 'mobile-header flex flex-row justify-between sm:hidden pb-3 px-3 fixed top-0 left-0 right-0 z-10 base-primary transition-all duration-200', onState: ['hideHeader', { 'hide-header': true }]}, [
        Logo({
            src: props.src || '/images/logo.svg'
        })
    ])
);