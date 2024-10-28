import { Calendar } from "@components/organisms/calendar/calendar.js";
import { DocSection } from "../../../../molecules/doc-section.js";
import { DocPage } from '../../../doc-page.js';

/**
 * CalendarPage
 *
 * This will create a calendar page.
 *
 * @param {object} props
 * @param {object} children
 * @returns {DocPage}
 */
export const CalendarPage = () => (
	DocPage(
        {
            title: 'Calendars',
            description: 'This is the calendar component documentation.',
        },
        [
            DocSection({
                title: 'Usage',
                description: 'This is how you can use the calendar component.',
                preview: [
                    new Calendar()
                ],
                code: `@components/organisms/calendar/calendar.js';

new Calendar()`
            })
        ]
    )
);

export default CalendarPage;