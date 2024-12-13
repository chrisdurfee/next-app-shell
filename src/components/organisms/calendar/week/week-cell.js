import { Button } from '@base-framework/atoms';

/**
 * WeekCell
 *
 * A single button representing a week.
 *
 * @param {object} props
 * @returns {object}
 */
export const WeekCell = ({ index, week, currentWeek, currentDate, selectWeek }) => {
    const isCurrentWeek = week.includes(currentDate);

    return Button({
        text: `Week ${index + 1}`,
        class: `
            px-4 py-2 rounded-md
            ${currentWeek === index ? 'bg-primary text-white' : ''}
            ${isCurrentWeek && currentWeek !== index ? 'border border-accent text-accent' : ''}
            hover:bg-primary hover:text-white
        `,
        click: () => selectWeek(index),
    });
};