import { I, Li, Span } from "@base-framework/atoms";
import { NavLink } from "@base-framework/base";

/**
 * This will create a mobile link.
 *
 * @param {object} props
 * @returns {object}
 */
export const MobileLink = (props) => (
    Li({ class: 'flex flex-auto items-center justify-center max-h-[80px]' }, [
        new NavLink({
            class: 'p-[4px] flex flex-col items-center justify-center',
            href: props.href,
            exact: props.exact || false,
        },
        [
            I({ class: 'flex items-center justify-center py-[2px] px-3 rounded-md', html: props.icon }),
            Span({ class: 'text-[10px]' }, props.label)
        ])
    ])
);