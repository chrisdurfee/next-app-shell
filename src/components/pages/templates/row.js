import { Atom } from "@base-framework/base";

/**
 * This will create a row.
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
export const Row = Atom((props, children) =>
{
    props.class = 'row ' + (props.class || '');

    return {
        ...props,
        children
    };
});