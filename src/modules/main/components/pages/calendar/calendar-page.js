import { Button, Div, H2 } from "@base-framework/atoms";
import { Tooltip } from "@components/atoms/tooltip.js";
import { Icons } from "@components/icons/icons.js";
import { FullPage } from "@components/pages/full-page.js";
import { CalendarGrid } from "./calendar-grid.js"; // Importing the calendar grid component
import { SidebarMenu } from "./sidebar-menu.js";

/**
 * CalendarHeader
 *
 * This will create a calendar header with a title, month navigation, and add event button.
 *
 * @returns {object}
 */
const CalendarHeader = () => (
    Div({ class: 'justify-between flex flex-auto items-center mb-4' }, [
        H2({ class: 'text-2xl font-semibold tracking-tight' }, 'March 2023'), // Placeholder month/year
        Div({ class: 'flex items-center space-x-2' }, [
            Button({ variant: 'icon', icon: Icons.chevron.single.left, click: () => {/* Navigate to previous month */} }),
            Button({ variant: 'icon', icon: Icons.chevron.single.right, click: () => {/* Navigate to next month */} }),
            Tooltip({ content: 'Add Event', position: 'left' }, Button({ variant: 'icon', icon: Icons.circlePlus }))
        ])
    ])
);

/**
 * CalendarSections
 *
 * This will display the main content for the calendar page with the header and the month view grid.
 *
 * @returns {object}
 */
const CalendarSections = () => (
    Div({ class: 'col-span-4 2xl:mx-auto 2xl:max-w-[1600px] p-6 px-6 pr-0 md:pr-4 py-6 lg:px-8' }, [
        CalendarHeader(),
        CalendarGrid() // Month view grid
    ])
);

/**
 * CalendarPage
 *
 * The main page layout combining sidebar and calendar content sections.
 *
 * @returns {object}
 */
export const CalendarPage = () => (
    new FullPage({ title: 'Calendar' }, [
        Div({ class: 'grid grid-cols-1 lg:grid-cols-5 h-full lg:border-t' }, [
            SidebarMenu(),
            CalendarSections()
        ])
    ])
);

export default CalendarPage;