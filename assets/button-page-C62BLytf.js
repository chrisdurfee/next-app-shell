import{l as i,w as o,b as e,o as r,as as n}from"./index-M-6RzAdf.js";import"./tooltip-DcnXGw52-DkqMS6Bo.js";import{D as t}from"./doc-section-CTdkwvM0.js";import{D as a}from"./doc-page-71w1JHT-.js";import"./signature-panel-Dl_Tkisq-Cc7oYuJe.js";import"./sidebar-menu-page-DyIwNFwe-Y2hoC7z6.js";import"./mobile-nav-wrapper-CuATTfqK-DYlKXSTS.js";const d=()=>a({title:"Button",description:"Displays a button or a component that looks like a button."},[t({title:"Usage",description:"Import the button atom and use it in your components. This platform has variants for different use cases. The variant can be set using the `variant` prop.",preview:[o({variant:"primary"},"Click Me")],code:`import {  Button  } from "@base-framework/ui/atoms";

Button({ variant: 'primary', click: () => console.log('clicked') }, 'Click Me')`}),i({class:"flex flex-col py-8"},[e({class:"text-3xl font-bold tracking-tight border-b pb-2"},"Variants")]),t({title:"Primary Button",description:"This is a primary button.",preview:[o({variant:"primary"},"Click Me")],code:`
import {  Button  } from "@base-framework/ui/atoms";
import { Atom } from '@base-framework/base';

export const PrimaryButton = Atom((props, children) => (
    Button({ ...props, variant: 'primary' }, children)
);`}),t({title:"Secondary Button",preview:[o({variant:"secondary"},"Secondary")],code:`
import {  Button  } from "@base-framework/ui/atoms";
import { Atom } from '@base-framework/base';

export const SecondaryButton = Atom((props, children) => (
    Button({ ...props, variant: 'secondary' }, children)
);`}),t({title:"Destructive Button",preview:[o({variant:"destructive"},"Destructive")],code:`
import {  Button  } from "@base-framework/ui/atoms";
import { Atom } from '@base-framework/base';

export const DestructiveButton = Atom((props, children) => (
    Button({ ...props, variant: 'destructive' }, children)
);`}),t({title:"Warning Button",preview:[o({variant:"warning"},"Warning")],code:`import {  Button  } from "@base-framework/ui/atoms";
import { Atom } from '@base-framework/base';

export const WarningButton = Atom((props, children) => (
    Button({ ...props, variant: 'warning' }, children)
);`}),t({title:"Outline Button",preview:[o({variant:"outline"},"Outline")],code:`
import {  Button  } from "@base-framework/ui/atoms";
import { Atom } from '@base-framework/base';

export const OutlineButton = Atom((props, children) => (
    Button({ ...props, variant: 'outline' }, children)
);`}),t({title:"Ghost Button",preview:[o({variant:"ghost"},"Ghost")],code:`
import {  Button  } from "@base-framework/ui/atoms";
import { Atom } from '@base-framework/base';

export const GhostButton = Atom((props, children) => (
    Button({ ...props, variant: 'ghost' }, children)
);`}),t({title:"Link Button",preview:[o({variant:"link"},"Link")],code:`
import {  Button  } from "@base-framework/ui/atoms";
import { Atom } from '@base-framework/base';

export const LinkButton = Atom((props, children) => (
    Button({ ...props, variant: 'link' }, children)
);`}),t({title:"Icon Button",description:"Displays a button with an icon.",preview:[o({variant:"icon",icon:r.home})],code:`import {  Button  } from "@base-framework/ui/atoms";
import {  Icons  } from "@base-framework/ui/icons";
import { Atom } from '@base-framework/base';

export const IconButton = Atom((props) => (
    Button({ ...props, variant: 'icon', icon: Icons.home })
);`}),t({title:"With Icon Button",preview:[o({variant:"withIcon",icon:r.home},"With Icon")],code:`import {  Button  } from "@base-framework/ui/atoms";
import {  Icons  } from "@base-framework/ui/icons";

Button({ variant: 'withIcon', icon: Icons.home }, 'With Icon')`}),t({title:"Loading Button",preview:[n("With Icon")],code:`import {  LoadingButton  } from "@base-framework/ui/atoms";

LoadingButton('With Icon')`})]);export{d as ButtonPage,d as default};
