import { Input, OnState } from '@base-framework/atoms';
import { Button } from '../../atoms/buttons/buttons.js';
import { Icons } from '../../icons/icons.js';

/**
 * Button for decrementing the counter.
 *
 * @param {object} props
 * @returns {object}
 */
export const MinusButton = ({ click }) => (
    Button({
        variant: 'icon',
        class: 'flex flex-none',
        click,
        icon: Icons.circleMinus
    })
);

/**
 * Button for incrementing the counter.
 *
 * @param {object} props
 * @returns {object}
 */
export const PlusButton = ({ click }) => (
    Button({
        variant: 'icon',
        class: 'flex flex-none',
        click,
        icon: Icons.circlePlus
    })
);

/**
 * Display input for the current counter value.
 *
 * @param {object} props
 * @returns {object}
 */
export const CountDisplay = ({ bind, readonly = false }) => (
    OnState('count', (value) =>
        Input({
            value,
            bind,
            blur: (e, {state}) => state.count = e.target.value,
            class: 'flex flex-auto text-lg font-medium bg-transparent text-center border-none min-w-0',
            readonly
        })
    )
);