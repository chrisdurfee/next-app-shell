import { Checkbox as BaseCheckbox, Input as BaseInput, Textarea as BaseTextarea } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';

/**
 * This will create a button by variant or default.
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
export const Input = Atom((props) => (
    BaseInput({
        ...props,
        class: `flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${props.class || ''}`,
    })
));

/**
 * This will format the telephone number.
 *
 * @param {string} number
 * @returns {string}
 */
const formatTel = (number) =>
{
    if (!number || 0 === number.length) return '';

    const cleaned = number.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    if (!match)
    {
        return number;
    }

    if (!match[2])
    {
        return match[1] || '';
    }

    return`(${match[1]}) ${match[2]}${match[3] ? '-' + match[3] : ''}`;
};

/**
 * This will format the telephone number on keyup event.
 *
 * @param {object} e
 * @returns {void}
 */
const formatPhoneNumber = (e) =>
{
    const target = e.target;
    const formattedNumber = formatTel(target.value);
    if (formattedNumber)
    {
        target.value = formattedNumber;
    }
};

/**
 * This will create a telephone input.
 *
 * @param {object} props
 * @returns {object}
 */
export const TelInput = Atom((props) =>
{
    return Input({
        ...props,
        type: 'tel',
        name: props.name || 'Phone',
        label: props.label || 'Phone',
        placeholder: '(555) 555-5555',
        required: true,
        pattern: props.pattern || '\\(\\d{3}\\) \\d{3}-\\d{4}', // Updated pattern for flexibility
        keyup: formatPhoneNumber,
    });
});

/**
 * This will create an email input.
 *
 * @param {object} props
 * @returns {object}
 */
export const EmailInput = Atom((props) =>
{
    return Input({
        ...props,
        type: 'email',
        name: props.name || 'Email',
        label: props.label || 'Email',
        placeholder: 'Email address',
    });
});

/**
 * This will create a textarea.
 *
 * @param {object} props
 * @returns {object}
 */
export const Textarea = Atom((props) =>
{
    return BaseTextarea({
        ...props,
        as: 'textarea',
        class: `flex h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${props.class || ''}`,
    });
});

/**
 * This will create a checkbox.
 *
 * @param {object} props
 * @returns {object}
 */
export const Checkbox = Atom((props) => (
    BaseCheckbox({
        ...props,
        class: `flex h-4 w-4 rounded-md border border-input bg-background text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${props.class || ''}`,
    })
));