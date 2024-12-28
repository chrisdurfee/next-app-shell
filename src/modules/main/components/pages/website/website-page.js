import { BlankPage } from "@base-framework/ui/pages";
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