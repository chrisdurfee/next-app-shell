import { Button } from '@base-framework/atoms';

/**
 * WeekCell
 *
 * A single button representing a day in the week.
 *
 * @param {object} props
 * @returns {object}
 */
export const WeekCell = ({ day, week, currentWeek, currentDate, selectWeek }) => {
    const isCurrentDay = day === currentDate;
    const isCurrentWeek = week.some((date) => date?.getDate() === currentDate);

    return Button({
        text: day || '',
        disabled: !day,
        class: `
            px-2 py-1 text-center rounded-md
            ${isCurrentDay ? 'bg-accent text-accent-foreground' : ''}
            ${isCurrentWeek && !isCurrentDay ? 'border border-accent' : ''}
            hover:bg-primary hover:text-primary-foreground
        `,
        click: () => selectWeek(day),
    });
};
