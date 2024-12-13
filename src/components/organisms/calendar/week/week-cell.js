import { Button } from '@base-framework/atoms';

/**
 * WeekCell
 *
 * A single button representing a week.
 *
 * @param {object} props
 * @returns {object}
 */
export const WeekCell = ({ index, currentWeek, selectWeek }) => {
    return Button({
        text: `Week ${index + 1}`,
        class: `
            px-4 py-2 rounded-md
            ${currentWeek === index ? 'bg-primary text-white' : 'bg-muted text-foreground'}
            hover:bg-primary hover:text-white
        `,
        click: () => selectWeek(index),
    });
};