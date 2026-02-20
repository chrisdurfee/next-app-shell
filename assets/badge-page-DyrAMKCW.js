import{z as o,aw as e,s as r}from"./index-CAtlfimY.js";import{D as t}from"./doc-section-BmwD-w3i.js";import{D as a}from"./doc-page-Cs2adT5a.js";import"./signature-panel-Dwnm79Sg-BWEGvBjL.js";import"./sidebar-menu-page-DFRJL944-BtEPb0m7.js";import"./full-page-CgVI1G7F-DJ0Pcr5g.js";import"./mobile-nav-wrapper-9VRCW4oA-DNLUn6P_.js";import"./sidebar-menu-DLGBb0-I-Bf4tpJkn.js";const y=()=>a({title:"Badges",description:"Badges can be used to display a status or a count."},[t({title:"Badge",description:"The full set of built-in badge types.",preview:[o({class:"flex gap-2 flex-wrap"},[e({type:"gray"},"Gray"),e({type:"red"},"Red"),e({type:"yellow"},"Yellow"),e({type:"green"},"Green"),e({type:"blue"},"Blue"),e({type:"indigo"},"Indigo"),e({type:"purple"},"Purple"),e({type:"pink"},"Pink"),e({type:"primary"},"Primary"),e({type:"secondary"},"Secondary"),e({type:"destructive"},"Destructive"),e({type:"warning"},"Warning"),e({type:"outline"},"Outline"),e({type:"ghost"},"Ghost"),e({type:"link"},"Link")])],code:`import { Badge } from "@base-framework/ui/atoms";

Badge({ type: 'gray' }, 'Gray')
Badge({ type: 'primary' }, 'Primary')
Badge({ type: 'destructive' }, 'Destructive')`}),t({title:"Blur",description:"The blur type renders a frosted-glass badge, useful over images or coloured backgrounds.",preview:[o({class:"flex gap-2 flex-wrap items-center p-6 rounded-lg bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500"},[e({type:"blur"},"Blur"),e({type:"blur"},"New"),e({type:"blur"},"Featured")])],code:`import { Badge } from "@base-framework/ui/atoms";

Badge({ type: 'blur' }, 'Blur')`}),t({title:"Custom Styles",description:"Override individual colour tokens — backgroundColor, textColor, and ringColor — to create one-off badges without adding a new type.",preview:[o({class:"flex gap-2 flex-wrap"},[e({type:"gray",backgroundColor:"bg-orange-50",textColor:"text-orange-700",ringColor:"ring-orange-600/20"},"Orange"),e({type:"gray",backgroundColor:"bg-teal-50",textColor:"text-teal-700",ringColor:"ring-teal-600/20"},"Teal"),e({type:"gray",backgroundColor:"bg-rose-100",textColor:"text-rose-800",ringColor:"ring-rose-500/30"},"Rose")])],code:`import { Badge } from "@base-framework/ui/atoms";

Badge({
    type: 'gray',
    backgroundColor: 'bg-orange-50',
    textColor: 'text-orange-700',
    ringColor: 'ring-orange-600/20'
}, 'Orange')`}),t({title:"With Icon",description:"Pass any Heroicon or Material Symbol via the icon prop. Use the size prop to control the icon size (defaults to xs).",preview:[o({class:"flex gap-2 flex-wrap"},[e({type:"green",icon:r.check},"Verified"),e({type:"red",icon:r.x},"Rejected"),e({type:"yellow",icon:r.warning},"Warning"),e({type:"blue",icon:r.bell},"Alerts"),e({type:"primary",icon:r.star},"Featured"),e({type:"blur",icon:r.sparkles},"New")])],code:`import { Badge } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";

Badge({ type: 'green', icon: Icons.check }, 'Verified')
Badge({ type: 'red',   icon: Icons.x     }, 'Rejected')
Badge({ type: 'blue',  icon: Icons.bell  }, 'Alerts')

// Control icon size (xs | sm | md | lg | xl | 2xl)
Badge({ type: 'primary', icon: Icons.star, size: 'sm' }, 'Featured')`})]);export{y as BadgePage,y as default};
