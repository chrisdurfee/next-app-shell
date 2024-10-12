import { Atom } from "@base-framework/base";
import { A, Div } from "../../components/atoms/atoms.js";
import { Icons } from "../../components/icons.js";

/**
 * This will create a logo.
 *
 * @param {object} props
 * @returns {object}
 */
const Logo = Atom((props, children) =>
{
    return A(
    {
        class: 'logo w-[32px] h-[32px] m-[16px] block',
        href: './',
        ...props,
        children
    });
});

/**
 * This will create a pin icon.
 *
 * @param {object} props
 * @returns {object}
 */
const PinIcon = (pinned) => (pinned)? Icons.unlocked : Icons.locked;

/**
 * This will create a pin button
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
const PinButton = Atom((props, children) =>
{
    return {
        class: 'pin w-[32px] h-[32px] m-[16px] block cursor-pointer',
        onState: ['pinned', (val) => (PinIcon(val))],
        ...props,
        children
    };
});

/**
 * This will create the main header.
 *
 * @param {object} props
 * @returns {object}
 */
export const MainHeader = (props) => (
    Div({ class: 'flex flex-row justify-between min-w-[330px]'}, [
        Logo({ src: props.src || '/images/logo.svg' }),
        PinButton({ click: props.callBack })
    ])
);