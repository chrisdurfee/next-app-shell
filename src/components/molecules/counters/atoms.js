import { Button, Div, Input, OnState } from '@base-framework/atoms';
import { Icon } from '../../atoms/icon.js';
import { Icons } from '../../icons/icons.js';

/**
 * Button for decrementing the counter.
 *
 * @param {object} props
 * @returns {object}
 */
export const MinusButton = ({ click }) => (
    Button({
        class: 'flex items-center justify-center w-10 h-10 bg-muted rounded-full hover:bg-accent',
        click
    }, [
        Icon(Icons.circleMinus)
    ])
);

/**
 * Button for incrementing the counter.
 *
 * @param {object} props
 * @returns {object}
 */
export const PlusButton = ({ click }) => (
    Button({
        class: 'flex items-center justify-center w-10 h-10 bg-muted rounded-full hover:bg-accent',
        click
    }, [
        Icon(Icons.circlePlus)
    ])
);

/**
 * Display input for the current counter value.
 *
 * @param {object} props
 * @returns {object}
 */
export const CountDisplay = ({ bind }) => (
    Div({ class: 'flex-grow text-center' }, [
        OnState('count', (value) =>
            Input({
                value,
                bind,
                class: 'text-lg font-medium bg-transparent text-center border-none pointer-events-none',
                readonly: true
            })
        )
    ])
);