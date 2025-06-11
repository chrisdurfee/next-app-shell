import{a7 as l,G as s,j as a,Y as e,z as r,S as i,am as o}from"./index-mkY9-16H.js";import{D as t}from"./doc-section-DuhD_0Ge.js";import{D as c}from"./doc-page-Dt_fJ2bP.js";import"./signature-panel-Dl_Tkisq-B2Fx9DlD.js";import"./tooltip-DcnXGw52-CRtsMafl.js";import"./sidebar-menu-page-D_2zNFuZ-BV1oyFyn.js";import"./mobile-nav-wrapper-BWeAn5lg-CMuu47pb.js";const b=()=>c({title:"Avatars",description:"Avatars are used to represent users or objects visually, with customizable sizes and optional status indicators."},[t({title:"Extra Small Avatar (xs)",description:"An extra small avatar for compact spaces.",preview:[a({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"xs"})],code:"Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'xs' })"}),l({class:"text-2xl font-semibold text-foreground mt-8"},"Avatar Fallbacks"),s({class:"text-sm text-muted-foreground mb-4"},"The avatar fallback can be bound to a watcher for dynamic content using the 'watcherFallback' property. The fallback and watcher fallback will convert a name to initials if not set as a two letter string."),t({title:"Small Avatar (sm)",description:"A small avatar suitable for lists and compact layouts.",preview:[a({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"sm"})],code:"Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'sm' })"}),t({title:"Medium Avatar (md)",description:"A medium-sized avatar, often used for standard profile images.",preview:[a({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"md"})],code:"Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'md' })"}),t({title:"Large Avatar (lg)",description:"A large avatar for prominent profile displays.",preview:[a({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"lg"})],code:"Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'lg' })"}),t({title:"Extra Large Avatar (xl)",description:"An extra-large avatar for detailed user profile sections.",preview:[a({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"xl"})],code:"Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'xl' })"}),t({title:"2x Extra Large Avatar (2xl)",description:"A double extra-large avatar for large displays.",preview:[a({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"2xl"})],code:"Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: '2xl' })"}),t({title:"3x Extra Large Avatar (3xl)",description:"A triple extra-large avatar for the largest profile displays.",preview:[a({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"3xl"})],code:"Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: '3xl' })"}),t({title:"Avatar with Name and Subtitle",description:"Display an avatar alongside a name and subtitle for user identification.",preview:[e({class:"flex items-center gap-4 p-4 bg-card rounded-md border shadow-md"},[a({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"lg"}),e({},[r({class:"text-lg font-semibold text-foreground"},"Leslie Alexander"),s({class:"text-sm text-muted-foreground"},"leslie.alexander@example.com")])])],code:`Div({ class: 'flex items-center gap-4 p-4 bg-card rounded-md border shadow-md' }, [
    Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'lg' }),
    Div({}, [
        Span({ class: 'text-lg font-semibold text-foreground' }, 'Leslie Alexander'),
        P({ class: 'text-sm text-muted-foreground' }, 'leslie.alexander@example.com')
    ])
])`}),t({title:"Avatar with Online Status",description:"Displays an avatar with a small online status indicator.",preview:[e({class:"relative flex items-center gap-4 p-4 bg-card rounded-md border shadow-md"},[e({class:"relative"},[a({src:"https://github.com/shadcn.png",alt:"@shadcn",fallbackText:"CN",size:"lg"}),e({class:"absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 rounded-full"})]),e({},[r({class:"text-lg font-semibold text-foreground"},"Leslie Alexander"),s({class:"text-sm text-muted-foreground"},"leslie.alexander@example.com")])])],code:`Div({ class: 'relative flex items-center gap-4 p-4 bg-card rounded-md border shadow-md' }, [
    Div({ class: 'relative' }, [
        Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'lg' }),
        Div({ class: 'absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 rounded-full' }) // Online indicator
    ]),
    Div({}, [
        Span({ class: 'text-lg font-semibold text-foreground' }, 'Leslie Alexander'),
        P({ class: 'text-sm text-muted-foreground' }, 'leslie.alexander@example.com')
    ])
])`}),t({title:"Status Indicator",description:"A small status indicator for online, offline, busy, or away statuses. This will bind to the data or state status of the parent component.",preview:[e({class:"relative",addState(){return{status:"online"}}},[i()])],code:`import { Div, H4, P, Span } from "@base-framework/atoms";
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
])`}),t({title:"Static Status Indicator",description:"A small status indicator for online, offline, busy, or away statuses.",preview:[e({class:"relative"},[o("online")])],code:`import { Div, H4, P, Span } from "@base-framework/atoms";
import {  StaticStatusIndicator  } from "@base-framework/ui/molecules";

Div({ class: 'relative' }, [
    StaticStatusIndicator('online')
])`})]);export{b as AvatarPage,b as default};
