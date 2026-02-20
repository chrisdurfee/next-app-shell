import{z as e,M as h,$ as f,H as t,a as s,aG as u,x as n,s as o,aH as d,aI as y,aJ as I,aK as a,k as S,d as r,an as z}from"./index-CAtlfimY.js";import{D as l}from"./doc-section-BmwD-w3i.js";import{D as k}from"./doc-page-Cs2adT5a.js";import"./signature-panel-Dwnm79Sg-BWEGvBjL.js";import"./sidebar-menu-page-DFRJL944-BtEPb0m7.js";import"./full-page-CgVI1G7F-DJ0Pcr5g.js";import"./mobile-nav-wrapper-9VRCW4oA-DNLUn6P_.js";import"./sidebar-menu-DLGBb0-I-Bf4tpJkn.js";const w=(c,m,i=null)=>(i="Icons"+(i?"."+i:""),e({class:"flex flex-auto flex-col items-center gap-2 w-full max-w-[150px] h-34 cursor-pointer"},[e({class:"flex flex-auto w-full h-full justify-center items-center flex-wrap rounded-lg border bg-card text-base shadow-sm hover:bg-muted/50",click:()=>{navigator.clipboard.writeText(`${i}.${m}`),app.notify({title:"Icon copied",description:`The icon '${i}.${m}' has been copied to your clipboard.`,icon:o.clipboard.checked})}},[r(c)]),e({class:"text-muted-foreground"},m)])),v=(c,m,i)=>{const x=typeof c=="object";x&&m.push(t({class:"text-muted-foreground"},"path: "+i+".{icon}"));const p=[];if(m.push(e({class:"flex flex-auto flex-wrap gap-2 my-8"},p)),x===!1)p.push(w(c,i));else for(var g in c){if(c.hasOwnProperty(g)===!1)continue;const b=c[g];if(typeof b!="object"){p.push(w(b,g,i));continue}const M=`${i}.${g}`;v(b,m,M)}},H=c=>{if(!c||typeof c!="object")return;const m=[];for(let[i,x]of Object.entries(c)){if(i==="parse")continue;m.push(u({id:i.toLowerCase(),class:"text-2xl font-bold"},z.titleCase(i))),v(x,m,i)}return m},W=()=>k({title:"Icons",description:"Base UI features a universal icon handler that seamlessly supports both Heroicons (SVG-based) and Material Symbols (font-based). All components automatically detect and render the appropriate icon type - just pass your icon and it works!"},[e({class:"flex gap-4 mb-8"},[h({href:"https://heroicons.com/",target:"_blank",class:"bttn link"},"Heroicons Library"),h({href:"https://fonts.google.com/icons",target:"_blank",class:"bttn link"},"Material Symbols Browser")]),e({class:"my-8 p-6 bg-primary/10 rounded-lg border-2 border-primary/30"},[f({class:"text-xl font-bold mb-3"},"✨ Universal Icon Handler"),t({class:"text-muted-foreground mb-3"},"All icon-using components (Button, Alert, Modal, Navigation, etc.) now automatically detect and render both icon systems. No configuration needed!"),e({class:"space-y-2 text-sm"},[e([s({class:"font-semibold"},"✅ No Breaking Changes: "),s({class:"text-muted-foreground"},"Existing Heroicons code works as-is")]),e([s({class:"font-semibold"},"✅ Automatic Detection: "),s({class:"text-muted-foreground"},"Pass any icon type - it just works")]),e([s({class:"font-semibold"},"✅ Consistent Sizes: "),s({class:"text-muted-foreground"},"Same size props (xs-3xl) work for both systems")]),e([s({class:"font-semibold"},"✅ Mix & Match: "),s({class:"text-muted-foreground"},"Use both icon systems in the same project")])])]),e({class:"my-8"},[f({class:"text-xl font-bold mb-3"},"Icon Systems Overview"),e({class:"grid md:grid-cols-2 gap-4"},[e({class:"p-4 bg-muted/30 rounded-lg border"},[u({class:"font-semibold mb-2"},"Heroicons (SVG)"),e({class:"space-y-1 text-sm text-muted-foreground"},[t("• SVG-based icons"),t("• Curated, smaller set"),t("• Precise SVG control"),t("• Perfect for customization")])]),e({class:"p-4 bg-muted/30 rounded-lg border"},[u({class:"font-semibold mb-2"},"Material Symbols (Font)"),e({class:"space-y-1 text-sm text-muted-foreground"},[t("• Font-based icons"),t("• 11,000+ icons available"),t("• 4 style variants (outlined/filled/rounded/sharp)"),t("• Great for Material Design")])])])]),e({class:"my-20"},[f({class:"text-3xl font-bold mb-2"},"UniversalIcon - The Recommended Way"),t({class:"text-muted-foreground mb-8"},"UniversalIcon automatically detects whether you're using Heroicons (SVG) or Material Symbols and renders the appropriate component. All Base UI components use this internally.")]),l({title:"Universal Icon Usage",description:"Pass any icon type to UniversalIcon and it automatically detects and renders correctly. Works with Heroicons SVG strings, Material Symbol names, or Material Symbol objects.",preview:[e({class:"flex gap-4 items-center"},[e({class:"flex flex-col items-center gap-2"},[n({size:"lg"},o.home),s({class:"text-xs text-muted-foreground"},"Heroicon")]),e({class:"flex flex-col items-center gap-2"},[n({size:"lg"},d.home),s({class:"text-xs text-muted-foreground"},"Material Symbol")]),e({class:"flex flex-col items-center gap-2"},[n({size:"lg"},"home"),s({class:"text-xs text-muted-foreground"},"String name")]),e({class:"flex flex-col items-center gap-2"},[n({size:"lg"},{name:"favorite",variant:"filled"}),s({class:"text-xs text-muted-foreground"},"With variant")])])],code:`
import { UniversalIcon } from "@base-framework/ui/atoms";
import { Icons, MaterialSymbols } from "@base-framework/ui/icons";

// All of these work with UniversalIcon:
UniversalIcon({ size: 'lg' }, Icons.home)                          // Heroicon SVG
UniversalIcon({ size: 'lg' }, MaterialSymbols.home)                // Material Symbol
UniversalIcon({ size: 'lg' }, 'home')                              // Material Symbol name
UniversalIcon({ size: 'lg' }, { name: 'favorite', variant: 'filled' }) // With variant`}),l({title:"Consistent Sizes Across Both Systems",description:"MaterialIcon now uses the exact same pixel sizes as Icon (Heroicons), so size props work identically across both systems.",preview:[e({class:"flex flex-wrap gap-6"},[e({class:"flex flex-col items-center gap-2"},[e({class:"flex gap-2 items-center"},[n({size:"sm"},o.home),n({size:"sm"},d.home)]),s({class:"text-xs text-muted-foreground"},"sm: 24px")]),e({class:"flex flex-col items-center gap-2"},[e({class:"flex gap-2 items-center"},[n({size:"md"},o.home),n({size:"md"},d.home)]),s({class:"text-xs text-muted-foreground"},"md: 32px")]),e({class:"flex flex-col items-center gap-2"},[e({class:"flex gap-2 items-center"},[n({size:"lg"},o.home),n({size:"lg"},d.home)]),s({class:"text-xs text-muted-foreground"},"lg: 40px")])])],code:`
// Both systems use identical sizes:
// xs: 16px (w-4 h-4)
// sm: 24px (w-6 h-6) - default
// md: 32px (w-8 h-8)
// lg: 40px (w-10 h-10)
// xl: 48px (w-12 h-12)
// 2xl: 56px (w-14 h-14)
// 3xl: 64px (w-16 h-16)

UniversalIcon({ size: 'sm' }, Icons.home)           // 24px
UniversalIcon({ size: 'sm' }, MaterialSymbols.home) // 24px (same!)`}),l({title:"Using in Components",description:"All Base UI components (Button, Alert, Modal, etc.) automatically support both icon systems through UniversalIcon. Just pass your icon!",preview:[e({class:"flex flex-col gap-4"},[e({class:"flex gap-2"},[e({class:"bttn primary flex items-center gap-2"},[n({size:"sm"},o.plus),s("Heroicon")]),e({class:"bttn primary flex items-center gap-2"},[n({size:"sm"},d.add),s("Material Symbol")])]),t({class:"text-sm text-muted-foreground"},"Both buttons work identically - the component automatically detects the icon type!")])],code:`
import { Button } from '@base-framework/ui/atoms';
import { Icons, MaterialSymbols } from '@base-framework/ui/icons';

// Both work automatically:
Button({ variant: 'withIcon', icon: Icons.plus }, 'Add Item')
Button({ variant: 'withIcon', icon: MaterialSymbols.add }, 'Add Item')
Button({ variant: 'withIcon', icon: 'add' }, 'Add Item')

// Works in Alert:
Alert({ type: 'success', icon: Icons.check, title: 'Success!' })
Alert({ type: 'success', icon: MaterialSymbols.status.success, title: 'Success!' })

// Works in Modal:
new Modal({ title: 'Edit', icon: Icons.pencil }).open()
new Modal({ title: 'Edit', icon: MaterialSymbols.actions.edit }).open()`}),l({title:"Helper Functions",description:"Two helper functions are available for checking icon types in your own components.",preview:[e({class:"p-4 bg-muted/30 rounded-lg font-mono text-sm space-y-1"},[e({class:"text-muted-foreground"},[s("isMaterialIcon(Icons.home) → "),s({class:"text-red-500 font-semibold"},String(y(o.home)))]),e({class:"text-muted-foreground"},[s('isMaterialIcon("home") → '),s({class:"text-green-500 font-semibold"},String(y("home")))]),e({class:"text-muted-foreground"},[s("isHeroicon(Icons.home) → "),s({class:"text-green-500 font-semibold"},String(I(o.home)))]),e({class:"text-muted-foreground"},[s('isHeroicon("home") → '),s({class:"text-red-500 font-semibold"},String(I("home")))])])],code:`
import { isMaterialIcon, isHeroicon } from '@base-framework/ui/atoms';

// Check if icon is Material Symbol
isMaterialIcon('home')              // true
isMaterialIcon(MaterialSymbols.add) // true (object with name)
isMaterialIcon(Icons.home)          // false (SVG string)

// Check if icon is Heroicon (SVG)
isHeroicon(Icons.home)              // true
isHeroicon('home')                  // false`}),e({class:"my-20"},[f({class:"text-3xl font-bold mb-2"},"Material Symbols"),t({class:"text-muted-foreground mb-8"},"Font-based icons from Google Material Symbols with support for multiple variants and sizes. All fonts are automatically loaded from Google Fonts CDN.")]),l({title:"Basic Material Icon",description:"Material Symbols use font ligatures and come in four style variants: outlined (default), filled, rounded, and sharp.",preview:[e({class:"flex gap-4 items-center"},[a({name:"home",size:"md"})])],code:`
import { MaterialIcon } from "@base-framework/ui/atoms";
import { MaterialSymbols } from "@base-framework/ui/icons";

// Using predefined symbol names
MaterialIcon({ name: MaterialSymbols.home, size: 'md' })

// Using any Material Symbol name directly
MaterialIcon({ name: 'home', size: 'md' })`}),l({title:"Material Icon Sizes (Now Consistent!)",description:"Material icons now use the EXACT same pixel sizes as Heroicons for perfect consistency across both systems.",preview:[e({class:"flex flex-wrap gap-4 items-center"},[e({class:"flex flex-col items-center justify-center"},[a({name:"home",size:"xs"}),s({class:"text-sm text-muted-foreground"},"xs: 16px")]),e({class:"flex flex-col items-center justify-center"},[a({name:"home",size:"sm"}),s({class:"text-sm text-muted-foreground"},"sm: 24px")]),e({class:"flex flex-col items-center justify-center"},[a({name:"home",size:"md"}),s({class:"text-sm text-muted-foreground"},"md: 32px")]),e({class:"flex flex-col items-center justify-center"},[a({name:"home",size:"lg"}),s({class:"text-sm text-muted-foreground"},"lg: 40px")]),e({class:"flex flex-col items-center justify-center"},[a({name:"home",size:"xl"}),s({class:"text-sm text-muted-foreground"},"xl: 48px")]),e({class:"flex flex-col items-center justify-center"},[a({name:"home",size:"2xl"}),s({class:"text-sm text-muted-foreground"},"2xl: 56px")]),e({class:"flex flex-col items-center justify-center"},[a({name:"home",size:"3xl"}),s({class:"text-sm text-muted-foreground"},"3xl: 64px")])])],code:`
import { MaterialIcon } from "@base-framework/ui/atoms";

// Sizes now match Heroicons exactly:
MaterialIcon({ name: 'home', size: 'xs' })  // 16px (w-4 h-4)
MaterialIcon({ name: 'home', size: 'sm' })  // 24px (w-6 h-6) - default
MaterialIcon({ name: 'home', size: 'md' })  // 32px (w-8 h-8)
MaterialIcon({ name: 'home', size: 'lg' })  // 40px (w-10 h-10)
MaterialIcon({ name: 'home', size: 'xl' })  // 48px (w-12 h-12)
MaterialIcon({ name: 'home', size: '2xl' }) // 56px (w-14 h-14)
MaterialIcon({ name: 'home', size: '3xl' }) // 64px (w-16 h-16)`}),l({title:"Material Icon Variants",description:"Material Symbols come in four visual styles: outlined (default), filled, rounded, and sharp.",preview:[e({class:"flex flex-wrap gap-6 items-center"},[e({class:"flex flex-col items-center justify-center gap-2"},[a({name:"favorite",variant:"outlined",size:"lg"}),s({class:"text-sm text-muted-foreground"},"outlined")]),e({class:"flex flex-col items-center justify-center gap-2"},[a({name:"favorite",variant:"filled",size:"lg"}),s({class:"text-sm text-muted-foreground"},"filled")]),e({class:"flex flex-col items-center justify-center gap-2"},[a({name:"favorite",variant:"rounded",size:"lg"}),s({class:"text-sm text-muted-foreground"},"rounded")]),e({class:"flex flex-col items-center justify-center gap-2"},[a({name:"favorite",variant:"sharp",size:"lg"}),s({class:"text-sm text-muted-foreground"},"sharp")])])],code:`
import { MaterialIcon } from "@base-framework/ui/atoms";

MaterialIcon({ name: 'favorite', variant: 'outlined' })  // Default
MaterialIcon({ name: 'favorite', variant: 'filled' })    // Solid
MaterialIcon({ name: 'favorite', variant: 'rounded' })   // Rounded edges
MaterialIcon({ name: 'favorite', variant: 'sharp' })     // Sharp angles`}),l({title:"Material Icon Colors",description:"Material icons can be colored using Tailwind CSS classes, just like Heroicons.",preview:[e({class:"flex flex-wrap gap-4 items-center"},[a({name:"star",variant:"filled",size:"lg",class:"text-yellow-500"}),a({name:"favorite",variant:"filled",size:"lg",class:"text-red-500"}),a({name:"check_circle",variant:"filled",size:"lg",class:"text-green-500"}),a({name:"info",variant:"filled",size:"lg",class:"text-blue-500"})])],code:`
import { MaterialIcon } from "@base-framework/ui/atoms";

MaterialIcon({ name: 'star', variant: 'filled', class: 'text-yellow-500' })
MaterialIcon({ name: 'favorite', variant: 'filled', class: 'text-red-500' })
MaterialIcon({ name: 'check_circle', variant: 'filled', class: 'text-green-500' })
MaterialIcon({ name: 'info', variant: 'filled', class: 'text-blue-500' })`}),l({title:"Using MaterialSymbols Object",description:"The MaterialSymbols object provides organized access to common icon names. Browse all 11,000+ icons at fonts.google.com/icons.",preview:[e({class:"flex flex-wrap gap-4 items-center"},[a({name:d.home,size:"md"}),a({name:d.search,size:"md"}),a({name:d.settings,size:"md"}),a({name:d.favorite,size:"md"})])],code:`
import { MaterialIcon } from "@base-framework/ui/atoms";
import { MaterialSymbols } from "@base-framework/ui/icons";

// Top-level access
MaterialIcon({ name: MaterialSymbols.home })
MaterialIcon({ name: MaterialSymbols.search })
MaterialIcon({ name: MaterialSymbols.settings })

// Nested categories (if available)
MaterialIcon({ name: MaterialSymbols.actions?.add })
MaterialIcon({ name: MaterialSymbols.status?.success })`}),l({title:"Material Symbol Objects with Variants",description:"You can pass Material Symbols as objects with variant information. This works in all components that accept icons.",preview:[e({class:"flex gap-2"},[e({class:"bttn primary flex items-center gap-2"},[n({size:"sm"},{name:"add",variant:"outlined"}),s("Outlined")]),e({class:"bttn secondary flex items-center gap-2"},[n({size:"sm"},{name:"favorite",variant:"filled"}),s("Filled")]),e({class:"bttn success flex items-center gap-2"},[n({size:"sm"},{name:"check_circle",variant:"rounded"}),s("Rounded")])])],code:`
import { UniversalIcon } from "@base-framework/ui/atoms";
import { Button } from "@base-framework/ui/atoms";

// Pass as object with variant:
Button({
  variant: 'withIcon',
  icon: { name: 'favorite', variant: 'filled' }
}, 'Like')

// Works with UniversalIcon directly:
UniversalIcon({ size: 'sm' }, { name: 'star', variant: 'filled' })`}),e({class:"my-16 p-6 bg-muted/30 rounded-lg border"},[f({class:"text-xl font-bold mb-4"},"Migration & Mixing Icon Systems"),e({class:"space-y-4 text-sm"},[e([u({class:"font-semibold text-base mb-2"},"✅ Existing Code Still Works"),t({class:"text-muted-foreground mb-2"},"All existing Heroicons code continues to work without any changes:"),e({class:"p-3 bg-background rounded font-mono text-xs"},[e('Button({ icon: Icons.plus }, "Add") // ✅ Still works'),e("Alert({ icon: Icons.check }) // ✅ Still works")])]),e([u({class:"font-semibold text-base mb-2"},"🔄 Easy Migration"),t({class:"text-muted-foreground mb-2"},"Simply substitute Material Symbols where desired:"),e({class:"p-3 bg-background rounded font-mono text-xs"},[e({class:"text-muted-foreground"},"// Before:"),e('Button({ icon: Icons.plus }, "Add")'),e({class:"text-muted-foreground mt-2"},"// After:"),e('Button({ icon: MaterialSymbols.add }, "Add")')])]),e([u({class:"font-semibold text-base mb-2"},"🎨 Mix Both Systems"),t({class:"text-muted-foreground mb-2"},"Use both icon systems in the same project:"),e({class:"p-3 bg-background rounded font-mono text-xs"},[e('Button({ icon: Icons.pencil }, "Edit")'),e('Button({ icon: MaterialSymbols.delete }, "Delete")'),e({class:"text-green-500 mt-1"},"// No configuration needed!")])])])]),e({class:"my-8 p-6 bg-muted/30 rounded-lg border"},[f({class:"text-xl font-bold mb-4"},"When to Use Which Icon System"),e({class:"grid md:grid-cols-2 gap-6 text-sm"},[e({class:"space-y-2"},[u({class:"font-semibold text-base"},"Use Material Symbols When:"),e({class:"space-y-1 text-muted-foreground"},[t("• You need a large variety of icons (11,000+)"),t("• Building Material Design interfaces"),t("• You want multiple style variants (outlined/filled/rounded/sharp)"),t("• Font-based rendering is preferred"),t("• Need consistent icon weights and fills")])]),e({class:"space-y-2"},[u({class:"font-semibold text-base"},"Use Heroicons When:"),e({class:"space-y-1 text-muted-foreground"},[t("• You need SVG-based icons for advanced styling"),t("• Already using Heroicons in your project"),t("• Prefer a curated, smaller icon set"),t("• SVG precision is important"),t("• Need direct SVG manipulation")])])])]),e({class:"my-20"},[f({class:"text-3xl font-bold mb-2"},"Heroicons (SVG-based)"),t({class:"text-muted-foreground mb-8"},"SVG icons from Heroicons library. These use the outline style and provide precise control over SVG properties.")]),l({title:"Basic Heroicon (SVG)",description:"Heroicons are SVG-based and can be used directly in HTML elements or with the Icon component.",preview:[S({html:o.home})],code:`
import { Icons } from "@base-framework/ui/icons";
import { I } from '@base-framework/atoms';

export const HomeIcon = () => (
	I({ html: Icons.home })
);`}),l({title:"Heroicon Atom",description:"The Icon atom is a helper that makes it easier to use Heroicons with consistent sizing and styling.",preview:[r(o.home)],code:`
import { Icon } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";

Icon(Icons.home);`}),l({title:"Heroicon Sizes",description:"Heroicons can be rendered in various sizes using the Icon component with the size property.",preview:[e({class:"flex flex-wrap gap-4 items-center"},[e({class:"flex flex-col items-center justify-center"},[r({size:"xs"},o.home),s({class:"text-sm text-muted-foreground"},"xs")]),e({class:"flex flex-col items-center justify-center"},[r({size:"sm"},o.home),s({class:"text-sm text-muted-foreground"},"sm")]),e({class:"flex flex-col items-center justify-center"},[r({size:"md"},o.home),s({class:"text-sm text-muted-foreground"},"md")]),e({class:"flex flex-col items-center justify-center"},[r({size:"lg"},o.home),s({class:"text-sm text-muted-foreground"},"lg")]),e({class:"flex flex-col items-center justify-center"},[r({size:"xl"},o.home),s({class:"text-sm text-muted-foreground"},"xl")]),e({class:"flex flex-col items-center justify-center"},[r({size:"2xl"},o.home),s({class:"text-sm text-muted-foreground"},"2xl")]),e({class:"flex flex-col items-center justify-center"},[r({size:"3xl"},o.home),s({class:"text-sm text-muted-foreground"},"3xl")])])],code:`
import { Icon } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";

Icon({ size: 'xs' }, Icons.home)   // Extra Small
Icon({ size: 'sm' }, Icons.home)   // Small
Icon({ size: 'md' }, Icons.home)   // Medium
Icon({ size: 'lg' }, Icons.home)   // Large
Icon({ size: 'xl' }, Icons.home)   // Extra Large
Icon({ size: '2xl' }, Icons.home)  // 2X Large
Icon({ size: '3xl' }, Icons.home)  // 3X Large`}),l({title:"Heroicon Colors",description:"Heroicons can be styled with colors using Tailwind CSS classes.",preview:[e({class:"flex flex-wrap gap-4 items-center"},[r({class:"text-red-500"},o.phone.missed),r({class:"text-blue-500"},o.phone.inbound),r({class:"text-yellow-500"},o.phone.outbound)])],code:`
import { Icon } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";

Icon({ class: 'text-red-500' }, Icons.phone.missed)
Icon({ class: 'text-blue-500' }, Icons.phone.inbound)
Icon({ class: 'text-yellow-500' }, Icons.phone.outbound)`}),e({class:"my-20"},[f({class:"text-2xl font-bold"},"Available Heroicons"),t({class:"text-muted-foreground"},"Below is a curated collection of Heroicons available in the Icons object. Click any icon to copy its path to your clipboard.")]),H(o)]);export{W as IconPage,W as default};
