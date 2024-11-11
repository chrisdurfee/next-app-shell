import { Div, P } from "@base-framework/atoms";

/**
 * This will display an empty state when the album does not exist.
 *
 * @returns {object}
 */
export const EmptyState = () => (
    Div({ class: 'flex items-center justify-center h-full' }, [
        P('That album does not exist.')
    ])
);

export default EmptyState;