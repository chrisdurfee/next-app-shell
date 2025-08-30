import{n,a as l}from"./index-DMFoXY_p.js";import{C as i,I as r,f as e,L as p,q as c,M as b,B as m,T as u}from"./signature-panel-DWBWqY8V-pVQuySjw.js";import{D as t}from"./doc-section-CL_K30xD.js";import{D as d}from"./doc-page-BFfupZWS.js";import"./tooltip-B5hKQNZQ-CqdiWwBx.js";import"./sidebar-menu-page-UmKsAvjb-5lOsvg8D.js";import"./mobile-nav-wrapper-CWqhZ0qz-DLYFZ33f.js";const a=n((o,s)=>l({class:"py-4"},s)),P=()=>d({title:"Tabs",description:"Displays a tab or a component that looks like a tab."},[t({title:"Button Tab",description:"This is a button tab. The buttons to not route.",preview:[new i({class:"mt-4 max-w-[400px]",options:[{label:"Preview",value:"preview",layout:a([])},{label:"Code",value:"code",layout:a([])}]})],code:`
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
);`}),t({title:"Link Tab",description:"This is a link tab. The buttons route to a different page.",preview:[new r({class:"max-w-[400px]",options:[{label:"Example 1",href:"docs/components/tabs/example-1",component:new e({class:"p-8"},"This is an example 1 tab panel.")},{label:"Example 2",href:"docs/components/tabs/example-2",component:new e({class:"p-8"},"This is an example 2 tab panel.")},{label:"Example 3",href:"docs/components/tabs/example-3",component:new e({class:"p-8"},"This is an example 3 tab panel.")}]})],code:`
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
);`}),t({title:"Tab Group",description:"This is a tab group. The buttons update the state.",preview:[new p({options:[{label:"Music",value:"music"},{label:"Podcasts",value:"podcasts"},{label:"Live",value:"live"}],onSelect:o=>console.log(o)})],code:`import {  TabGroup  } from "@base-framework/ui/organisms";

new TabGroup({
    options: [
        { label: 'Music', value: 'music' },
        { label: 'Podcasts', value: 'podcasts' },
        { label: 'Live', value: 'live' }
    ],
    onSelect: (value) => console.log(value)
})`}),t({title:"Tab Navigation",description:"This is a tab navigation. The buttons update the state.",preview:[new c({options:[{label:"Example 1",href:"docs/components/tabs/example-1"},{label:"Example 2",href:"docs/components/tabs/example-2"},{label:"Example 3",href:"docs/components/tabs/example-3"}]})],code:`import {  TabNavigation  } from "@base-framework/ui/organisms";

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
})`}),t({title:"Underlined Tab (Routing)",description:"This is an underlined tab with routing capability. Features an active bottom border indicator and modern styling.",preview:[new b({class:"max-w-[400px]",options:[{label:"Posts",href:"docs/components/tabs/posts",exact:!0,component:new e({class:"p-8"},"This is the Posts tab content.")},{label:"Stories",href:"docs/components/tabs/stories",exact:!0,component:new e({class:"p-8"},"This is the Stories tab content.")},{label:"Reels",href:"docs/components/tabs/reels",exact:!0,component:new e({class:"p-8"},"This is the Reels tab content.")},{label:"Photos",href:"docs/components/tabs/photos",exact:!0,component:new e({class:"p-8"},"This is the Photos tab content.")}]})],code:`import { UnderlinedTab } from "@base-framework/ui/organisms";
import { Panel } from "@base-framework/ui/organisms";

/**
 * UnderlinedRoutingTab
 *
 * This will create an underlined tab with routing.
 *
 * @returns {object}
 */
export const UnderlinedRoutingTab = () => (
    new UnderlinedTab({
        class: 'max-w-[400px]',
        options: [
            {
                label: 'Posts',
                href: '/posts',
                exact: true,
                component: new Panel({ class: 'p-8' }, 'Posts content'),
                uri: 'posts'
            },
            {
                label: 'Stories',
                href: '/stories',
                exact: true,
                component: new Panel({ class: 'p-8' }, 'Stories content'),
                uri: 'stories'
            },
            {
                label: 'Reels',
                href: '/reels',
                exact: true,
                component: new Panel({ class: 'p-8' }, 'Reels content'),
                uri: 'reels'
            },
            {
                label: 'Photos',
                href: '/photos',
                exact: true,
                component: new Panel({ class: 'p-8' }, 'Photos content'),
                uri: 'photos'
            }
        ]
    })
);`}),t({title:"Underlined Button Tab",description:"This is an underlined button tab for content switching without routing. Features smooth bottom border animation.",preview:[new m({class:"max-w-[400px]",onSelect:(o,s)=>{console.log("Selected tab:",o,"at index:",s)},options:[{label:"Posts",value:"posts",selected:!0,component:a(["Posts content goes here"])},{label:"Stories",value:"stories",component:a(["Stories content goes here"])},{label:"Reels",value:"reels",component:a(["Reels content goes here"])},{label:"Photos",value:"photos",component:a(["Photos content goes here"])}]})],code:`import { UnderlinedButtonTab } from "@base-framework/ui/organisms";

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
 * UnderlinedContentTab
 *
 * This will create an underlined button tab.
 *
 * @returns {object}
 */
export const UnderlinedContentTab = () => (
    new UnderlinedButtonTab({
        class: 'max-w-[400px]',
        onSelect: (value, index) => {
            console.log('Selected tab:', value, 'at index:', index);
        },
        options: [
            {
                label: 'Posts',
                value: 'posts',
                selected: true,
                component: TabContent(['Posts content'])
            },
            {
                label: 'Stories',
                value: 'stories',
                component: TabContent(['Stories content'])
            },
            {
                label: 'Reels',
                value: 'reels',
                component: TabContent(['Reels content'])
            },
            {
                label: 'Photos',
                value: 'photos',
                component: TabContent(['Photos content'])
            }
        ]
    })
);`}),t({title:"Underlined Tab Group",description:"This is an underlined tab group for navigation only. No content switching, just visual feedback.",preview:[new u({class:"max-w-[400px]",onSelect:(o,s)=>{console.log("Selected tab:",o,"at index:",s)},options:[{label:"Posts",value:"posts",selected:!0},{label:"Stories",value:"stories"},{label:"Reels",value:"reels"},{label:"Photos",value:"photos"}]})],code:`import { UnderlinedTabGroup } from "@base-framework/ui/organisms";

/**
 * UnderlinedNavigationTab
 *
 * This will create an underlined tab group for navigation.
 *
 * @returns {object}
 */
export const UnderlinedNavigationTab = () => (
    new UnderlinedTabGroup({
        class: 'max-w-[400px]',
        onSelect: (value, index) => {
            console.log('Selected tab:', value, 'at index:', index);
        },
        options: [
            {
                label: 'Posts',
                value: 'posts',
                selected: true
            },
            {
                label: 'Stories',
                value: 'stories'
            },
            {
                label: 'Reels',
                value: 'reels'
            },
            {
                label: 'Photos',
                value: 'photos'
            }
        ]
    })
);`})]);export{P as TabPage,P as default};
