import{a5 as l,G as s,K as t,Y as e,z as r,aA as i,a9 as c}from"./index-CM1IEHgP.js";import{D as a}from"./doc-section-1HDPv0lU.js";import{D as o}from"./doc-page-Cjx708Nb.js";import"./sidebar-menu-page-nCAVFk3R-Di2_rNMK.js";const h=()=>o({title:"Avatars",description:"Avatars are used to represent users or objects visually, with customizable sizes and optional status indicators."},[a({title:"Extra Small Avatar (xs)",description:"An extra small avatar for compact spaces.",preview:[t({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"xs"})],code:"Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'xs' })"}),l({class:"text-2xl font-semibold text-foreground mt-8"},"Avatar Fallbacks"),s({class:"text-sm text-muted-foreground mb-4"},"The avatar fallback can be bound to a watcher for dynamic content using the 'watcherFallback' property. The fallback and watcher fallback will convert a name to initials if not set as a two letter string."),a({title:"Small Avatar (sm)",description:"A small avatar suitable for lists and compact layouts.",preview:[t({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"sm"})],code:"Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'sm' })"}),a({title:"Medium Avatar (md)",description:"A medium-sized avatar, often used for standard profile images.",preview:[t({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"md"})],code:"Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'md' })"}),a({title:"Large Avatar (lg)",description:"A large avatar for prominent profile displays.",preview:[t({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"lg"})],code:"Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'lg' })"}),a({title:"Extra Large Avatar (xl)",description:"An extra-large avatar for detailed user profile sections.",preview:[t({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"xl"})],code:"Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'xl' })"}),a({title:"2x Extra Large Avatar (2xl)",description:"A double extra-large avatar for large displays.",preview:[t({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"2xl"})],code:"Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: '2xl' })"}),a({title:"3x Extra Large Avatar (3xl)",description:"A triple extra-large avatar for the largest profile displays.",preview:[t({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"3xl"})],code:"Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: '3xl' })"}),a({title:"Avatar with Name and Subtitle",description:"Display an avatar alongside a name and subtitle for user identification.",preview:[e({class:"flex items-center gap-4 p-4 bg-card rounded-md border shadow-md"},[t({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"lg"}),e({},[r({class:"text-lg font-semibold text-foreground"},"Leslie Alexander"),s({class:"text-sm text-muted-foreground"},"leslie.alexander@example.com")])])],code:`Div({ class: 'flex items-center gap-4 p-4 bg-card rounded-md border shadow-md' }, [
    Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'lg' }),
    Div({}, [
        Span({ class: 'text-lg font-semibold text-foreground' }, 'Leslie Alexander'),
        P({ class: 'text-sm text-muted-foreground' }, 'leslie.alexander@example.com')
    ])
])`}),a({title:"Avatar with Online Status",description:"Displays an avatar with a small online status indicator.",preview:[e({class:"relative flex items-center gap-4 p-4 bg-card rounded-md border shadow-md"},[e({class:"relative"},[t({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"lg"}),e({class:"absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 rounded-full"})]),e({},[r({class:"text-lg font-semibold text-foreground"},"Leslie Alexander"),s({class:"text-sm text-muted-foreground"},"leslie.alexander@example.com")])])],code:`Div({ class: 'relative flex items-center gap-4 p-4 bg-card rounded-md border shadow-md' }, [
    Div({ class: 'relative' }, [
        Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'lg' }),
        Div({ class: 'absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 rounded-full' }) // Online indicator
    ]),
    Div({}, [
        Span({ class: 'text-lg font-semibold text-foreground' }, 'Leslie Alexander'),
        P({ class: 'text-sm text-muted-foreground' }, 'leslie.alexander@example.com')
    ])
])`}),a({title:"Status Indicator",description:"A small status indicator for online, offline, busy, or away statuses. This will bind to the data or state status of the parent component.",preview:[e({class:"relative",addState(){return{status:"online"}}},[i()])],code:`import { Div, H4, P, Span } from "@base-framework/atoms";
import {  StatusIndicator  } from "@base-framework/ui/molecules";

Div({
    class: 'relative',
    addState()
    {
        return {
            status: 'online'
        };
    }
}, [
    StatusIndicator()
])`}),a({title:"Static Status Indicator",description:"A small status indicator for online, offline, busy, or away statuses.",preview:[e({class:"relative"},[c("online")])],code:`import { Div, H4, P, Span } from "@base-framework/atoms";
import {  StaticStatusIndicator  } from "@base-framework/ui/molecules";

Div({ class: 'relative' }, [
    StaticStatusIndicator('online')
])`})]);export{h as AvatarPage,h as default};
