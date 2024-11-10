import { Div, H2 } from "@base-framework/atoms";
import { Tooltip } from "@components/atoms/tooltip.js";
import { Button } from "@components/atoms/buttons/buttons.js";
import { Icons } from "@components/icons/icons.js";
import { CalendarGrid } from "./calendar-grid.js"; // Importing the calendar grid component
import { SidebarMenu } from "./sidebar-menu.js";
import { BlankPage } from "@components/pages/blank-page.js";

/**
 * CalendarHeader
 *
 * This will create a calendar header with a title, month navigation, and add event button.
 *
 * @returns {object}
 */
const CalendarHeader = () => (
    Div({ class: 'justify-between flex flex-auto items-center mb-4' }, [
        H2({ class: 'scroll-m-20 text-3xl font-bold tracking-tight' }, 'March 2023'), // Placeholder month/year
        Div({ class: 'flex items-center space-x-2' }, [
            Button({ variant: 'icon', icon: Icons.chevron.single.left, click: () => {} }),
            Button({ variant: 'icon', icon: Icons.chevron.single.right, click: () => {} }),
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
    Div({ class: 'col-span-4 p-0 px-2 md:px-6 md:py-6 lg:px-8' }, [
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
    new BlankPage([
        Div({ class: 'grid grid-cols-1 lg:grid-cols-5 h-full' }, [
            SidebarMenu(),
            CalendarSections()
        ])
    ])
);

export default CalendarPage;