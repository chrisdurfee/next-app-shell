import { DateTime } from "@base-framework/base";
import { DynamicTime } from "@base-framework/organisms";
import { Calendar } from "@components/organisms/calendar/calendar.js";
import { DocSection } from "../../../molecules/doc-section.js";
import { DocPage } from '../../doc-page.js';

/**
 * This will get the current time.
 *
 * @returns {string}
 */
const getCurrentTime = () => DateTime.formatTime('', 24);

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
            }),

            DocSection({
                title: 'Dynamic Time',
                description: 'This is how you can use the calendar component.',
                preview: [
                    new DynamicTime({
                        filter: () =>
                        {
                            let message = 'Morning';

                            const current = getCurrentTime();
                            if (current >= '18:00:00')
                            {
                                message = 'Evening';
                            }
                            else if (current >= '12:00:00')
                            {
                                message = 'Afternoon';
                            }

                            return `Good ${message}`;
                        }
                    })
                ],
                code: `import { DateTime } from "@base-framework/base";
import { DynamicTime } from "@base-framework/organisms";

new DynamicTime({
    filter: () =>
    {
        let message = 'Morning';

        const current = DateTime.formatTime('', 24);
        if (current >= '18:00:00')
        {
            message = 'Evening';
        }
        else if (current >= '12:00:00')
        {
            message = 'Afternoon';
        }

        return \`Good \${message}\`;
    }
})`
            }),

            DocSection({
                title: 'Dynamic Local Time by Time Frame',
                description: 'This will show the time frame based on the local time. This will update the time frame every minute to keep the time frame updated.',
                preview: [
                    new DynamicTime({
                        dateTime: '2024-11-04T18:00:00',
                        filter(date)
                        {
                            // convert to local time
                            const localTime = DateTime.getLocalTime(date, true);
                            return DateTime.getTimeFrame(localTime);
                        }
                    })
                ],
                code: `import { DateTime } from "@base-framework/base";
import { DynamicTime } from "@base-framework/organisms";

new DynamicTime({
    dateTime: '2024-11-04T18:00:00',
    filter(date)
    {
        // convert to local time
        const localTime = DateTime.getLocalTime(date, true);
        return DateTime.getTimeFrame(localTime);
    }
})`
            })
        ]
    )
);

export default CalendarPage;