import { Div } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";
import { Panel } from "@components/organisms/panel.js";
import { ButtonTab } from "@components/organisms/tabs/button-tab.js";
import { Tab } from "@components/organisms/tabs/tab.js";
import { DocSection } from "../../../molecules/doc-section.js";
import { DocPage } from '../../doc-page.js';

/**
 * This will create a tab content.
 *
 * @param {object} props
 * @param {object} children
 * @returns {object}
 */
const TabContent = Atom((props, children) => (
    Div({ class: 'py-4' }, children)
));

/**
 * TabPage
 *
 * This will create a tab page.
 *
 * @param {object} props
 * @param {object} children
 * @returns {DocPage}
 */
export const TabPage = () => (
	DocPage(
        {
            title: 'Tabs',
            description: 'Displays a tab or a component that looks like a tab.'
        },
        [
            DocSection({
                title: 'Button Tab',
                description: 'This is a button tab. The buttons to not route.',
                preview: [
                    new ButtonTab({
                        class: 'mt-4 max-w-[400px]',
                        options: [
                            {
                                label: 'Preview',
                                value: 'preview',
                                layout: TabContent([])
                            },
                            {
                                label: 'Code',
                                value: 'code',
                                layout: TabContent([])
                            }
                        ]
                    })
                ],
                code: `
import { ButtonTab } from "@components/organisms/tabs/button-tab.js";

/**
 * This will create a tab content.
 *
 * @param {object} props
 * @param {object} children
 * @returns {object}
 */
const TabContent = Atom((props, children) => (
    Div({ class: 'py-4' }, children)
));

/**
 * This will create a preview tab.
 *
 * @param {object} props
 * @returns {object}
 */
export const PreviewTab = (props) => (
    new ButtonTab({
        class: 'mt-4 max-w-[400px]',
        options: [
            {
                label: 'Preview',
                value: 'preview',
                layout: TabContent([

                ])
            },
            {
                label: 'Code',
                value: 'code',
                layout: TabContent([

                ])
            }
        ]
    })
);`
            }),

            DocSection({
                title: 'Link Tab',
                description: 'This is a link tab. The buttons route to a different page.',
                preview: [
                    new Tab({
                        class: 'max-w-[400px]',
                        options: [
                            {
                                label: 'Example 1',
                                href: 'docs/components/tabs/example-1',
                                component: new Panel({ class: 'p-8' }, 'This is an example 1 tab panel.')
                            },
                            {
                                label: 'Example 2',
                                href: 'docs/components/tabs/example-2',
                                component: new Panel({ class: 'p-8' }, 'This is an example 2 tab panel.')
                            },
                            {
                                label: 'Example 3',
                                href: 'docs/components/tabs/example-3',
                                component: new Panel({ class: 'p-8' }, 'This is an example 3 tab panel.')
                            }
                        ]
                    })
                ],
                code: `
import { LinkTab } from "@components/organisms/tabs/link-tab.js";
import { Panel } from "@components/organisms/panel.js";

/**
 * ExampleTab
 *
 * This will create an example tab.
 *
 * @returns {object}
 */
export const ExampleTab = () => (
	new Tab({
        class: 'max-w-[400px]',
        options: [
            {
                label: 'Example 1',
                href: 'docs/components/tabs/example-1',
                component: new Panel({ class: 'p-8' }, 'This is an example 1 tab panel.')
            },
            {
                label: 'Example 2',
                href: 'docs/components/tabs/example-2',
                component: new Panel({ class: 'p-8' }, 'This is an example 2 tab panel.')
            },
            {
                label: 'Example 3',
                href: 'docs/components/tabs/example-3',
                component: new Panel({ class: 'p-8' }, 'This is an example 3 tab panel.')
            }
        ]
    })
);`
            })
        ]
    )
);

export default DocPage;