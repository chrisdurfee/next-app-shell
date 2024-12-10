import { Atom } from "@base-framework/base";

/**
 * This will create a main section.
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
export const MainSection = Atom((props, children) =>
{
    props.class = 'basic-page pt-[80px] sm:pt-0 flex flex-auto flex-col ' + (props.class || '');

    return {
        tag: 'section',
        ...props,
        children
    };
});