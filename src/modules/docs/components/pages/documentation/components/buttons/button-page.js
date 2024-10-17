import { Code, Div, Pre } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";
import { ButtonTab } from "../../../../../../../components/organisms/tabs/button-tab.js";
import { DocPage } from '../../../doc-page.js';

const TabContent = Atom((props, children) => (
    Div({ class: 'p-4' }, children)
));

/**
 * DocPage
 *
 * This will create a full page.
 *
 * @param {object} props
 * @param {object} children
 * @returns {DocPage}
 */
export const ButtonPage = () => (
	DocPage(
        {
            title: 'Button',
            description: 'Displays a button or a component that looks like a button.'
        },
        [
            new ButtonTab({
                class: 'max-w-[400px]',
                options: [
                    {
                        label: 'Preview',
                        value: 'preview',
                        layout: TabContent([
                            Div('This is a preview of the page.')
                        ])
                    },
                    {
                        label: 'Code',
                        value: 'code',
                        layout: TabContent([
                            Div('This is a code of the page.'),
                            Pre({ class: 'mb-4 mt-6 p-8 max-h-[650px] overflow-x-auto rounded-lg border' }, [
                                Code(`<Button>Click Me</Button>`)
                            ])
                        ])
                    }
                ]
            })
        ]
    )
);

export default DocPage;