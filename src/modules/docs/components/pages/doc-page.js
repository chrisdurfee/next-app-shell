import { Div, H1, P } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";
import { Panel } from '../../../../components/organisms/panel.js';
import { ButtonTab } from "../../../../components/organisms/tabs/button-tab.js";
import { FullContainPage } from '../../../../components/pages/full-contain-page.js';

/**
 * This will create a tab panel.
 *
 * @param {object} props
 * @returns {object}
 */
const TabPanel = (props) =>
{
    return {
        label: props.label,
        href: props.link,
        component: new Panel({ class: 'p-8' }, props.children)
    };
};

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
                    TabPanel({
                        label: 'Preview',
                        value: 'preview',
                        layout: Div('This is a preview of the page.')
                    }),
                    TabPanel({
                        label: 'Code',
                        value: 'code',
                        children: Div('This is a code of the page.')
                    })
                ]
            })
		])
	])
));

export default DocPage;