import { Div, H1, P } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";
import { Panel } from '../../../../components/organisms/panel.js';
import { Tab } from "../../../../components/organisms/tab.js";
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

            new Tab({
                class: 'max-w-[400px]',
                options: [
                    TabPanel({
                        label: 'Preview',
                        link: 'full-contain/synopsis/story',
                        children: 'this would tell about the story'
                    }),
                    TabPanel({
                        label: 'Book',
                        link: 'full-contain/synopsis/book',
                        children: 'dud this come from a book?'
                    })
                ]
            })
		])
	])
));

export default DocPage;