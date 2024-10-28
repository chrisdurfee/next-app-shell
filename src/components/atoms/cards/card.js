import { Div } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';

/**
 * This will create a card.
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
export const Card = Atom((props, children) =>
{
	return Div({
        ...props,
        class: `rounded-lg border bg-card text-card-foreground shadow-md my-5 mx-5 p-4 ${props.class || ''}`,
        children
    });
});