import { Input, OnState } from '@base-framework/atoms';
import { Button } from '../../atoms/buttons/buttons.js';
import { Icons } from '../../icons/icons.js';

/**
 * This will create an icon button.
 *
 * @param {object} props - The properties of the component.
 * @returns {object} - The icon button component.
 */
const IconButton = ({ icon, click }) => Button({
    variant: 'icon',
    class: 'flex flex-none',
    click,
    icon
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
        click
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
        click
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