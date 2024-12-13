import { Div, Span } from '@base-framework/atoms';
import { Button } from '@components/atoms/buttons/buttons.js';
import { Icons } from '@components/icons/icons.js';

/**
 * This will create a navigation button for the calendar.
 *
 * @param {object} props
 * @returns {object}
 */
export const NavigationButton = ({ label, click }) => (
    Button(
        {
            class: `
            inline-flex items-center justify-center h-7 w-7 bg-transparent p-0
            opacity-50 hover:opacity-100 text-muted-foreground absolute
            ${label === 'Previous' ? 'left-1' : 'right-1'}
            focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
          `,
            click,
            'aria-label': `${label} month`,
            variant: 'icon',
            icon: (label === 'Previous' ? Icons.chevron.single.left : Icons.chevron.single.right),
        }
    )
);

/**
 * WeekHeader
 *
 * A reusable header for the week calendar with navigation.
 *
 * @param {object} props
 * @returns {object}
 */
export const WeekHeader = ({ next, previous }) => (
    Div({ class: 'flex flex-auto min-h-12 text-sm font-medium relative justify-center items-center' }, [
        Span('[[monthName]] [[year]]'),
        NavigationButton({
            label: 'Previous',
            click: previous
        }),
        NavigationButton({
            label: 'Next',
            click: next
        })
    ])
);