import{s as l,Y as n}from"./index-DIUYtXnZ.js";import{h as p,f as i,e as a,u as m,Q as r}from"./signature-panel-CuUlwQzE-DGu8jnaH.js";import{D as e}from"./doc-section-B_G2Qh9x.js";import{D as c}from"./doc-page-C5bJpH3y.js";import"./tooltip-DcnXGw52-DVN2otpj.js";import"./sidebar-menu-page-B1YSAs3o-CN2gZ2pp.js";import"./mobile-nav-wrapper-m9eu2YJR-97EM-oP7.js";const t=l((o,s)=>n({class:"py-4"},s)),f=()=>c({title:"Tabs",description:"Displays a tab or a component that looks like a tab."},[e({title:"Button Tab",description:"This is a button tab. The buttons to not route.",preview:[new p({class:"mt-4 max-w-[400px]",options:[{label:"Preview",value:"preview",layout:t([])},{label:"Code",value:"code",layout:t([])}]})],code:`
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
})`})]);export{f as TabPage,f as default};
