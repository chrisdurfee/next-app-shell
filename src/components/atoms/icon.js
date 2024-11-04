import { I } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";

/**
 * This will create an icon atom.
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
export const Icon = Atom((prop, children) => (
    I({
        ...props,
        html: children
    })
));