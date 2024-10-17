import { Div, H1, P } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";
import { ButtonTab } from "../../../../components/organisms/tabs/button-tab.js";
import { FullContainPage } from '../../../../components/pages/full-contain-page.js';

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
export const DocPage = Atom((props, children) => (
	new FullContainPage([
		Div({ class: 'contained py-8' }, [
            H1({ class: 'scroll-m-20 text-3xl font-bold tracking-tight' }, props.title),
            P({ class: 'text-base text-muted-foreground' }, props.description),

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
                            Div('This is a code of the page.')
                        ])
                    }
                ]
            })
		])
	])
));

export default DocPage;