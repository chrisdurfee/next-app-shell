import{Y as e,o}from"./index-DA2FGZN4.js";import{o as n}from"./signature-panel-CrKk8upb-CHkLyiLv.js";import{c as s,F as i}from"./mobile-nav-wrapper-BE_hr65B-B97p8BEy.js";import{D as a}from"./doc-section-Ct-IP-C9.js";import{D as t}from"./doc-page-C8Ew1AmG.js";import"./tooltip-Cy5agtG6-BcJKSIuZ.js";import"./sidebar-menu-page-nCAVFk3R-BtKr2xIG.js";const b=()=>t({title:"Navigations",description:"Navigations are components that help users move around the website or application."},[a({title:"Navigation Menu",description:"The navigation menu component is a simple navigation component that will create a horizontal menu.",preview:[e({class:"flex flex-auto flex-col w-full"},[new n({options:[{label:"Examples",href:"docs/components/navigations/examples"},{label:"Mail",href:"docs/components/navigations/mail"},{label:"Dashboard",href:"docs/components/navigations/dashboard"},{label:"Tasks",href:"docs/components/navigations/tasks"},{label:"Playground",href:"docs/components/navigations/playground"},{label:"Forms",href:"docs/components/navigations/forms"},{label:"Music",href:"docs/components/navigations/music"},{label:"Authentication",href:"docs/components/navigations/authentication"}]})])],code:`import {  Button  } from "@base-framework/ui/organisms";
import {  Icons  } from "@base-framework/ui/icons";

new NavigationMenu({
    options: [
        { label: 'Examples', href: '/examples' },
        { label: 'Mail', href: '/mail' },
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Tasks', href: '/tasks' },
        { label: 'Playground', href: '/playground' },
        { label: 'Forms', href: '/forms' },
        { label: 'Music', href: '/music' },
        { label: 'Authentication', href: '/authentication' }
    ]
})`}),a({title:"Inline Navigation",description:"The inline navigation component is a simple navigation component that can be used in a sidebar or app shell.",preview:[e({class:"flex flex-auto flex-col w-full border rounded-md max-w-[300px]"},[new s({options:[{label:"Listen Now",href:"docs/components/navigations",icon:o.playing,exact:!0},{label:"Browse",href:"docs/components/navigations/browse",icon:o.square.grid},{label:"Radio",href:"docs/components/navigations/radio",icon:o.signal},{label:"Playlists",icon:o.list.down,options:[{label:"Recently Added",href:"docs/components/navigations/recently-added"},{label:"Recently Played",href:"docs/components/navigations/recently-played"},{label:"Top Songs",href:"docs/components/navigations/top-songs"},{label:"Top Albums",href:"docs/components/navigations/top-albums"}]},{group:"Frameworks",options:[{label:"Next.js",href:"docs/components/navigations/next"},{label:"SvelteKit",href:"docs/components/navigations/sveltekit"},{label:"Nuxt.js",href:"docs/components/navigations/nuxt"},{label:"Remix",href:"docs/components/navigations/remix"},{label:"Astro",href:"docs/components/navigations/astro"}]}]})])],code:`import {  Button  } from "@base-framework/ui/organisms";
import {  Icons  } from "@base-framework/ui/icons";

new InlineNavigation({
    options: [
        { label: 'Home', href: '/', icon: Icons.home },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
        {
            label: 'Services',
            options: [
                { label: 'Web Development', href: '/web-development' },
            ]
        },
        {
            group: 'Frameworks',
            options: [
                { label: 'Next.js', href: '/next' },
                { label: 'SvelteKit', href: '/sveltekit' },
                { label: 'Nuxt.js', href: '/nuxt' },
                { label: 'Remix', href: '/remix' },
                { label: 'Astro', href: '/astro' }
            ]
        }
    ]
})`}),a({title:"Sidebar Menu",description:"The sidebar menu component is a navigation component that can be used in a sidebar or app shell.",preview:[e({class:"flex flex-auto flex-col w-full border rounded-md max-w-[300px]"},[i({title:"Discover",options:[{label:"Listen Now",href:"docs/components/navigations",icon:o.playing,exact:!0},{label:"Browse",href:"docs/components/navigations/browse",icon:o.square.grid},{label:"Radio",href:"docs/components/navigations/radio",icon:o.signal},{group:"Library",options:[{label:"Playlists",href:"docs/components/navigations/playlists",icon:o.list.down},{label:"Songs",href:"docs/components/navigations/songs",icon:o.music},{label:"Made for You",href:"docs/components/navigations/made-for-you",icon:o.user.default},{label:"Artists",href:"docs/components/navigations/artists",icon:o.speaker.default},{label:"Albums",href:"docs/components/navigations/albums",icon:o.square.stack}]}]})])],code:`import {  Icons  } from "@base-framework/ui/icons";
import {  SidebarMenu  } from "@base-framework/ui/organisms";

const PAGE_URL = 'music';

SidebarMenu({
    title: 'Discover',
    options: [
        { label: 'Listen Now', href: \`\${PAGE_URL}\`, icon: Icons.playing, exact: true },
        { label: 'Browse', href: \`\${PAGE_URL}/browse\`, icon: Icons.square.grid },
        { label: 'Radio', href: \`\${PAGE_URL}/radio\`, icon: Icons.signal },
        {
            group: 'Library',
            options: [
                { label: 'Playlists', href: \`\${PAGE_URL}/playlists\`, icon: Icons.list.down },
                { label: 'Songs', href: \`\${PAGE_URL}/songs\`, icon: Icons.music },
                { label: 'Made for You', href: \`\${PAGE_URL}/made-for-you\`, icon: Icons.user.default },
                { label: 'Artists', href: \`\${PAGE_URL}/artists\`, icon: Icons.speaker.default },
                { label: 'Albums', href: \`\${PAGE_URL}/albums\`, icon: Icons.square.stack }
            ]
        }
    ]
})
`})]);export{b as NavigationPage,b as default};
