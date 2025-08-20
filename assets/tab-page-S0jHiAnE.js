import{n as l,J as n}from"./index-BSKoUHHs.js";import{m as p,w as i,a,p as m,K as r}from"./signature-panel-DinWoiKr-CI9Xj1Lf.js";import{D as e}from"./doc-section-BqdoZK9N.js";import{D as c}from"./doc-page-DjiahZ2e.js";import"./tooltip-Cok_NM7z-DpC3Cjuf.js";import"./sidebar-menu-page-BtUJdw-T-CyT-B_I8.js";import"./mobile-nav-wrapper-C7RyGC5a-Cw9bNqws.js";const t=l((o,s)=>n({class:"py-4"},s)),v=()=>c({title:"Tabs",description:"Displays a tab or a component that looks like a tab."},[e({title:"Button Tab",description:"This is a button tab. The buttons to not route.",preview:[new p({class:"mt-4 max-w-[400px]",options:[{label:"Preview",value:"preview",layout:t([])},{label:"Code",value:"code",layout:t([])}]})],code:`
import {  ButtonTab  } from "@base-framework/ui/organisms";

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
);`}),e({title:"Link Tab",description:"This is a link tab. The buttons route to a different page.",preview:[new i({class:"max-w-[400px]",options:[{label:"Example 1",href:"docs/components/tabs/example-1",component:new a({class:"p-8"},"This is an example 1 tab panel.")},{label:"Example 2",href:"docs/components/tabs/example-2",component:new a({class:"p-8"},"This is an example 2 tab panel.")},{label:"Example 3",href:"docs/components/tabs/example-3",component:new a({class:"p-8"},"This is an example 3 tab panel.")}]})],code:`
import {  LinkTab  } from "@base-framework/ui/organisms";
import {  Panel  } from "@base-framework/ui/organisms";

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
);`}),e({title:"Tab Group",description:"This is a tab group. The buttons update the state.",preview:[new m({options:[{label:"Music",value:"music"},{label:"Podcasts",value:"podcasts"},{label:"Live",value:"live"}],onSelect:o=>console.log(o)})],code:`import {  TabGroup  } from "@base-framework/ui/organisms";

new TabGroup({
    options: [
        { label: 'Music', value: 'music' },
        { label: 'Podcasts', value: 'podcasts' },
        { label: 'Live', value: 'live' }
    ],
    onSelect: (value) => console.log(value)
})`}),e({title:"Tab Navigation",description:"This is a tab navigation. The buttons update the state.",preview:[new r({options:[{label:"Example 1",href:"docs/components/tabs/example-1"},{label:"Example 2",href:"docs/components/tabs/example-2"},{label:"Example 3",href:"docs/components/tabs/example-3"}]})],code:`import {  TabNavigation  } from "@base-framework/ui/organisms";

new TabNavigation({
    options: [
        {
            label: 'Example 1',
            href: 'docs/components/tabs/example-1'
        },
        {
            label: 'Example 2',
            href: 'docs/components/tabs/example-2'
        },
        {
            label: 'Example 3',
            href: 'docs/components/tabs/example-3'
        }
    ]
})`})]);export{v as TabPage,v as default};
