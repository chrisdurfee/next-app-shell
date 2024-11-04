import { ProgressBar } from "@components/atoms/progress-bar.js";
import { DocSection } from "../../../molecules/doc-section.js";
import { DocPage } from '../../doc-page.js';

/**
 * ProgressBarPage
 *
 * This will create a dialog page.
 *
 * @param {object} props
 * @param {object} children
 * @returns {DocPage}
 */
export const ProgressBarPage = () => (
	DocPage(
        {
            title: 'Progress Bars',
            description: 'Progress bars are a great way to show the progress of a task or process.',
        },
        [
            DocSection({
                title: 'Usage',
                description: 'Import the progress bar atom and use it in your components. The progress bar can be used to show the progress of a task or process.',
                preview: [
                    new ProgressBar({ cache: 'progress', progress: 20 })
                ],
                code: `import { ProgressBar } from "@components/atoms/progress-bar.js";

new ProgressBar({ cache: 'progress', progress: 20 })`
            })
        ]
    )
);

export default ProgressBarPage;