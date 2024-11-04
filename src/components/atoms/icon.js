import { I } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";

/**
 * This will create an icon atom.
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
export const Icon = Atom((props, children) => (
    I({
        ...props,
        html: children[0].textContent
    })
));