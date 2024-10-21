import { DocPage } from "../../doc-page.js";

/**
 * IntroPage
 *
 * This will create an introduction page..
 *
 * @param {object} props
 * @param {object} children
 * @returns {DocPage}
 */
export const IntroPage = () => (
    DocPage(
        {
            title: 'Introduction',
            description: 'This app shell was created to showcase Base framework and its components and atoms. It is a simple app shell that can be used as a starting point for your project. It is built with Tailwind CSS and uses Shadcn as the inspiration for the theme and many of it\'s components. '
        }
    )
);

export default IntroPage;