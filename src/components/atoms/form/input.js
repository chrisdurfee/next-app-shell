import { Checkbox as BaseCheckbox, Input as BaseInput, Textarea as BaseTextarea, Div, Label } from '@base-framework/atoms';
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
 * This will create a radio input.
 *
 * @param {object} props
 * @returns {object}
 */
export const Radio = (props = {}) =>
{
    return Div({ class: 'flex items-center space-x-2' }, [
        BaseInput({
            ...props,
            type: 'radio',
            class: `cursor-pointer appearance-none h-4 w-4 border rounded-full
                checked:border-primary checked:bg-primary
                focus:ring focus:ring-primary`
        }),
        props.label && Label({ forHTML: props.value, class: 'cursor-pointer' }, props.label)
    ]);
};

/**
 * This will create a date input.
 *
 * @param {object} props
 * @returns {object}
 */
export const DateInput = Atom((props) => (
    BaseInput({
        ...props,
        type: 'date',
        class: `rounded-md border px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${props.class || ''}`,
    })
));

/**
 * This will create a time input.
 *
 * @param {object} props
 * @returns {object}
 */
export const TimeInput = Atom((props) => (
    BaseInput({
        ...props,
        type: 'time',
        class: `rounded-md border px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${props.class || ''}`,
    })
));

/**
 * This will create a datetime input.
 *
 * @param {object} props
 * @returns {object}
 */
export const DateTimeInput = Atom((props) => (
    BaseInput({
        ...props,
        type: 'datetime-local',
        class: `rounded-md border px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${props.class || ''}`,
    })
));

/**
 * This will create a month input.
 *
 * @param {object} props
 * @returns {object}
 */
export const MonthInput = Atom((props) => (
    BaseInput({
        ...props,
        type: 'month',
        class: `rounded-md border px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${props.class || ''}`,
    })
));

/**
 * This will create a week input.
 *
 * @param {object} props
 * @returns {object}
 */
export const WeekInput = Atom((props) => (
    BaseInput({
        ...props,
        type: 'week',
        class: `rounded-md border px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${props.class || ''}`,
    })
));

/**
 * This will create a number input.
 *
 * @param {object} props
 * @returns {object}
 */
export const NumberInput = Atom((props) => (
    Input({
        ...props,
        type: 'number',
    })
));

/**
 * This will create a password input.
 *
 * @param {object} props
 * @returns {object}
 */
export const PasswordInput = Atom((props) => (
    Input({
        ...props,
        type: 'password',
    })
));

/**
 * This will create a search input.
 *
 * @param {object} props
 * @returns {object}
 */
export const SearchInput = Atom((props) => (
    Input({
        ...props,
        type: 'search',
    })
));

/**
 * This will create a url input.
 *
 * @param {object} props
 * @returns {object}
 */
export const UrlInput = Atom((props) => (
    Input({
        ...props,
        type: 'url',
    })
));

/**
 * This will create a hidden input.
 *
 * @param {object} props
 * @returns {object}
 */
export const HiddenInput = Atom((props) => (
    Input({
        ...props,
        type: 'hidden',
    })
));

/**
 * This will create a color input.
 *
 * @param {object} props
 * @returns {object}
 */
export const ColorInput = Atom((props) => (
    BaseInput({
        ...props,
        type: 'color',
        class: `border rounded-md border-input bg-background text-foreground p-0 disabled:cursor-not-allowed disabled:opacity-50 ${props.class || ''}`,
    })
));

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

/**
 * This will create a file input.
 *
 * @param {object} props
 * @returns {object}
 */
export const FileInput = Atom((props) => (
    BaseInput({
        ...props,
        type: 'file',
        class: `flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`,
    })
));
