import { BlankPage } from "@components/pages/blank-page.js";
import { MainLayout } from "./main-layout.js";

/**
 * WebsitePage
 *
 * This will create the website page.
 *
 * @returns {object}
 */
export const WebsitePage = () => (
    new BlankPage([
        MainLayout()
    ])
);

export default WebsitePage;