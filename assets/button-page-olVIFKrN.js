import{K as e,n as s,Y as c,s as t,aL as m,z as n,aM as r,aN as i,aO as a}from"./index-CJnrX494.js";import{D as o}from"./doc-section-Db3WSn-1.js";import{D as l}from"./doc-page-L49zK9-d.js";import"./signature-panel-h1ranAet-MInGxwdh.js";import"./sidebar-menu-page-BImgFKeY-Cx7z5SsA.js";import"./full-page-CgVI1G7F-CdDt1lPX.js";import"./mobile-nav-wrapper-C7cKTxaV-C6uLGK7P.js";import"./sidebar-menu-Dz2oh95a-BJu2S9D5.js";const h=()=>l({title:"Button",description:"Displays a button or a component that looks like a button."},[o({title:"Usage",description:"Import the button atom and use it in your components. This platform has variants for different use cases. The variant can be set using the `variant` prop.",preview:[e({variant:"primary"},"Click Me")],code:`import {  Button  } from "@base-framework/ui/atoms";

Button({ variant: 'primary', click: () => console.log('clicked') }, 'Click Me')`}),s({class:"flex flex-col py-8"},[c({class:"text-3xl font-bold tracking-tight border-b pb-2"},"Variants")]),o({title:"Primary Button",description:"This is a primary button.",preview:[e({variant:"primary"},"Click Me")],code:`
import {  Button  } from "@base-framework/ui/atoms";
import { Atom } from '@base-framework/base';

export const PrimaryButton = Atom((props, children) => (
    Button({ ...props, variant: 'primary' }, children)
);`}),o({title:"Secondary Button",preview:[e({variant:"secondary"},"Secondary")],code:`
import {  Button  } from "@base-framework/ui/atoms";
import { Atom } from '@base-framework/base';

export const SecondaryButton = Atom((props, children) => (
    Button({ ...props, variant: 'secondary' }, children)
);`}),o({title:"Destructive Button",preview:[e({variant:"destructive"},"Destructive")],code:`
import {  Button  } from "@base-framework/ui/atoms";
import { Atom } from '@base-framework/base';

export const DestructiveButton = Atom((props, children) => (
    Button({ ...props, variant: 'destructive' }, children)
);`}),o({title:"Warning Button",preview:[e({variant:"warning"},"Warning")],code:`import {  Button  } from "@base-framework/ui/atoms";
import { Atom } from '@base-framework/base';

export const WarningButton = Atom((props, children) => (
    Button({ ...props, variant: 'warning' }, children)
);`}),o({title:"Outline Button",preview:[e({variant:"outline"},"Outline")],code:`
import {  Button  } from "@base-framework/ui/atoms";
import { Atom } from '@base-framework/base';

export const OutlineButton = Atom((props, children) => (
    Button({ ...props, variant: 'outline' }, children)
);`}),o({title:"Ghost Button",preview:[e({variant:"ghost"},"Ghost")],code:`
import {  Button  } from "@base-framework/ui/atoms";
import { Atom } from '@base-framework/base';

export const GhostButton = Atom((props, children) => (
    Button({ ...props, variant: 'ghost' }, children)
);`}),o({title:"Link Button",preview:[e({variant:"link"},"Link")],code:`
import {  Button  } from "@base-framework/ui/atoms";
import { Atom } from '@base-framework/base';

export const LinkButton = Atom((props, children) => (
    Button({ ...props, variant: 'link' }, children)
);`}),o({title:"Icon Button",description:"Displays a button with an icon.",preview:[e({variant:"icon",icon:t.home})],code:`import {  Button  } from "@base-framework/ui/atoms";
import {  Icons  } from "@base-framework/ui/icons";
import { Atom } from '@base-framework/base';

export const IconButton = Atom((props) => (
    Button({ ...props, variant: 'icon', icon: Icons.home })
);`}),o({title:"With Icon Button",preview:[e({variant:"withIcon",icon:t.home},"With Icon")],code:`import {  Button  } from "@base-framework/ui/atoms";
import {  Icons  } from "@base-framework/ui/icons";

Button({ variant: 'withIcon', icon: Icons.home }, 'With Icon')`}),o({title:"Loading Button",preview:[m("With Icon")],code:`import {  LoadingButton  } from "@base-framework/ui/atoms";

LoadingButton('With Icon')`}),o({title:"Back Button",preview:[e({variant:"back",class:"ghost",allowHistory:!1})],code:`import {  Button  } from "@base-framework/ui/atoms";

Button({ variant: 'back', class: 'ghost', allowHistory: false })`}),o({title:"Circle Icon Button",description:"Displays a circular icon button with a semi-transparent background. Supports multiple sizes: xs, sm, md, lg, xl.",preview:[e({variant:"circleIcon",icon:t.home,size:"md"})],code:`import { Button } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";

// Default size (md)
Button({ variant: 'circleIcon', icon: Icons.home })

// With custom size
Button({ variant: 'circleIcon', icon: Icons.home, size: 'lg' })`}),s({class:"flex flex-col py-8"},[c({class:"text-3xl font-bold tracking-tight border-b pb-2"},"Toggle & Circle Buttons")]),o({title:"Toggle Button",description:"A social-action style button with an active/inactive state, an optional count, and a toggle callback. Use activeIcon to swap the icon when toggled.",preview:[n({class:"flex gap-4 items-center"},[new r({icon:t.heart,value:234}),new r({icon:t.heart,active:!0,value:234}),new r({icon:t.thumbsUp,value:18}),new r({icon:"bookmark"})])],code:`import { ToggleButton } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";

// With a static count
new ToggleButton({ icon: Icons.heart, value: 234, toggle: (active) => console.log(active) })

// Starts active
new ToggleButton({ icon: Icons.heart, active: true, value: 234 })

// Swap icon when active
new ToggleButton({ icon: 'bookmark', activeIcon: 'bookmarkSolid' })

// Reactive count from a parent data key
new ToggleButton({ icon: Icons.heart, dataKey: 'likeCount', toggle: (active) => {} })`}),o({title:"Circle Button",description:"A non-toggling circular frosted-glass button for actions like back, share, or menu. Supports sizes: xs, sm, md, lg, xl, 2xl.",preview:[n({class:"flex gap-3 items-center p-6 rounded-lg"},[i({icon:t.arrows.left,size:"sm"}),i({icon:t.arrows.left,size:"md"}),i({icon:t.arrows.left,size:"lg"}),i({icon:t.share,size:"md"}),i({icon:t.ellipsis.horizontal,size:"md"})])],code:`import { CircleButton } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";

CircleButton({ icon: Icons.arrows.left, size: 'sm' })
CircleButton({ icon: Icons.arrows.left, size: 'md' })
CircleButton({ icon: Icons.arrows.left, size: 'lg' })
CircleButton({ icon: Icons.share, size: 'md', click: () => {} })`}),o({title:"Circle Toggle Button",description:"A circular frosted-glass button with an active/inactive toggle state. Supply activeClass to override the active appearance.",preview:[n({class:"flex gap-3 items-center p-6 rounded-lg"},[new a({icon:t.heart,size:"sm"}),new a({icon:t.heart,size:"md",active:!0}),new a({icon:t.star,size:"md",activeClass:"text-yellow-400"}),new a({icon:"bookmark",size:"lg"})])],code:`import { CircleToggleButton } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";

// Default — starts inactive
new CircleToggleButton({ icon: Icons.heart, size: 'md', toggle: (active) => console.log(active) })

// Starts active
new CircleToggleButton({ icon: Icons.heart, size: 'md', active: true })

// Custom active appearance
new CircleToggleButton({
    icon: Icons.star,
    size: 'md',
    activeClass: 'bg-yellow-400 text-white'
})

// Swap icon on toggle
new CircleToggleButton({ icon: Icons.bookmark, activeIcon: Icons.bookmarkSolid, size: 'md' })`})]);export{h as ButtonPage,h as default};
