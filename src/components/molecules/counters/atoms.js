import { Input } from '@base-framework/atoms';
import { Button } from '../../atoms/buttons/buttons.js';
import { Icons } from '../../icons/icons.js';

/**
 * This will create an icon button.
 *
 * @param {object} props - The properties of the component.
 * @returns {object} - The icon button component.
 */
const IconButton = ({ icon, click, ariaLabel }) => Button({
    variant: 'icon',
    class: 'flex flex-none',
    click,
    icon,
    'aria-label': ariaLabel
});

/**
 * Button for decrementing the counter.
 *
 * @param {object} props
 * @returns {object}
 */
export const MinusButton = ({ click }) => (
    IconButton({
        icon: Icons.circleMinus,
        click,
        ariaLabel: 'Decrement'
    })
);

/**
 * Button for incrementing the counter.
 *
 * @param {object} props
 * @returns {object}
 */
export const PlusButton = ({ click }) => (
    IconButton({
        icon: Icons.circlePlus,
        click,
        ariaLabel: 'Increment'
    })
);

/**
 * Display input for the current counter value.
 *
 * @param {object} props
 * @returns {object}
 */
export const CountDisplay = ({ bind, min, max, readonly = false }) => (
    Input({
        value: '[[count]]',
        bind,
        blur: (e, {state}) =>
        {
            let newValue = parseInt(e.target.value, 10);
            if (isNaN(newValue)) newValue = min ?? 0;
            if (min !== undefined) newValue = Math.max(newValue, min);
            if (max !== undefined) newValue = Math.min(newValue, max);

            state.count = newValue;
        },
        class: 'flex flex-auto text-lg font-medium bg-transparent text-center border min-w-0',
        readonly,
        min,
        max,
        type: 'number',
        'aria-label': 'Counter'
    })
);