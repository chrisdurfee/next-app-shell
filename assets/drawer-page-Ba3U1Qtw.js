import{U as s,z as e,H as t,aR as a,T as w,aS as f,q as c,j as m,s as p,aB as h,aA as g,f as x,S as n,aw as u,am as d,w as i}from"./index-CAtlfimY.js";import{D as o}from"./doc-section-BmwD-w3i.js";import{D as b}from"./doc-page-Cs2adT5a.js";import"./signature-panel-Dwnm79Sg-BWEGvBjL.js";import"./sidebar-menu-page-DFRJL944-BtEPb0m7.js";import"./full-page-CgVI1G7F-DJ0Pcr5g.js";import"./mobile-nav-wrapper-9VRCW4oA-DNLUn6P_.js";import"./sidebar-menu-DLGBb0-I-Bf4tpJkn.js";class l extends a{declareProps(){super.declareProps(),this.title="Send Feedback",this.size="md",this.back=!0}getButtons(){return[s({variant:"outline",click:()=>this.destroy()},"Cancel"),s({variant:"primary",type:"submit"},"Submit Feedback")]}}const y=()=>[w({class:"flex flex-col gap-6 p-6 my-auto"},[f({class:"flex flex-col gap-6"},[m({title:"We value your input",description:"Your feedback helps us improve. Please be as detailed as possible so we can better understand your experience.",icon:p.information,type:"info"}),new c({name:"category",label:"Category",description:"Select the type of feedback you want to share."},[h({required:!0,options:[{value:"bug",label:"🐛 Bug Report"},{value:"feature",label:"✨ Feature Request"},{value:"general",label:"💬 General"}]})]),new c({name:"feedback",label:"Your Feedback",description:"Tell us what you think..."},[g({placeholder:"Share your thoughts with us...",rows:6,required:!0})]),new c({name:"email",label:"Email (Optional)",description:"We'll use this to follow up if needed."},[x({placeholder:"your.email@example.com"})])])])];class k extends a{declareProps(){super.declareProps(),this.title="Notifications",this.description="12 unread notifications",this.size="md",this.back=!0,this.hideFooter=!0}}const D=()=>[e({class:"space-y-3 p-6 my-auto"},[e({class:"flex items-start gap-3 p-4 rounded-lg border bg-card text-card-foreground shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"},[n({src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",alt:"John Doe",fallbackText:"JD",size:"sm"}),e({class:"flex-1 space-y-1"},[e({class:"flex items-center gap-2"},[t({class:"text-sm font-medium leading-none"},"John Doe mentioned you"),u({type:"blue"},"New")]),t({class:"text-sm text-muted-foreground"},'"Great work on the new feature! @you"'),t({class:"text-xs text-muted-foreground mt-1"},"5 minutes ago")])]),e({class:"flex items-start gap-3 p-4 rounded-lg border bg-card text-card-foreground shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"},[n({src:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",alt:"Sarah Chen",fallbackText:"SC",size:"sm"}),e({class:"flex-1 space-y-1"},[t({class:"text-sm font-medium leading-none"},"Sarah Chen liked your post"),t({class:"text-sm text-muted-foreground"},"Your post about best practices"),t({class:"text-xs text-muted-foreground mt-1"},"2 hours ago")])]),e({class:"flex items-start gap-3 p-4 rounded-lg border bg-card text-card-foreground shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"},[n({src:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",alt:"Mike Kim",fallbackText:"MK",size:"sm"}),e({class:"flex-1 space-y-1"},[e({class:"flex items-center gap-2"},[t({class:"text-sm font-medium leading-none"},"Mike Kim started following you"),u({type:"purple"},"Follower")]),t({class:"text-sm text-muted-foreground"},"Say hello to your new follower!"),t({class:"text-xs text-muted-foreground mt-1"},"Yesterday")])])])];class v extends a{declareProps(){super.declareProps(),this.title="Quick Settings",this.description="Adjust your preferences",this.size="lg",this.back=!0,this.hideFooter=!0}}const P=()=>[e({class:"space-y-6 p-6"},[t({class:"text-sm text-muted-foreground"},"Customize your experience with these quick settings. Changes are saved automatically."),e({class:"space-y-4"},[e({class:"flex items-center justify-between p-4 rounded-lg border bg-card text-card-foreground shadow-sm"},[e({class:"flex items-center gap-3 flex-1"},[e({class:"flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground"},"🔔"),e({class:"space-y-0.5"},[i({class:"text-sm font-semibold"},"Push Notifications"),t({class:"text-xs text-muted-foreground"},"Receive alerts and updates")])]),new d({active:!0,change:r=>console.log("Push notifications:",r)})]),e({class:"flex items-center justify-between p-4 rounded-lg border bg-card text-card-foreground shadow-sm"},[e({class:"flex items-center gap-3 flex-1"},[e({class:"flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500 text-white"},"🌙"),e({class:"space-y-0.5"},[i({class:"text-sm font-semibold"},"Dark Mode"),t({class:"text-xs text-muted-foreground"},"Use dark theme")])]),new d({active:!1,change:r=>console.log("Dark mode:",r)})]),e({class:"flex items-center justify-between p-4 rounded-lg border bg-card text-card-foreground shadow-sm"},[e({class:"flex items-center gap-3 flex-1"},[e({class:"flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500 text-white"},"📧"),e({class:"space-y-0.5"},[i({class:"text-sm font-semibold"},"Email Notifications"),t({class:"text-xs text-muted-foreground"},"Weekly digest and updates")])]),new d({active:!0,change:r=>console.log("Email notifications:",r)})])]),e({class:"space-y-4 pt-2"},[i({class:"text-sm font-semibold"},"Display Preferences"),e({class:"space-y-2"},[e({class:"flex items-center justify-between p-3 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"},[t({class:"text-sm font-medium"},"Font Size"),t({class:"text-sm text-muted-foreground"},"Medium")]),e({class:"flex items-center justify-between p-3 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"},[t({class:"text-sm font-medium"},"Language"),t({class:"text-sm text-muted-foreground"},"English")])])]),m({title:"Privacy & Security",description:"Your preferences are stored securely and never shared with third parties.",icon:p.locked,type:"default"})])],j=()=>b({title:"Drawers",description:"Bottom sheets on mobile that slide up and support swipe-to-close gestures. Automatically become centered modals on desktop."},[o({title:"Basic Drawer",description:"A simple drawer that slides up from the bottom on mobile. Swipe down to close or use the back button.",preview:[s({text:"Open Basic Drawer",variant:"primary",click:()=>{new l(y()).open()}})],code:`
import { Drawer } from "@base-framework/ui/molecules";
import { Button, EmailInput, Select, Textarea } from "@base-framework/ui/atoms";
import { Alert, FormField } from "@base-framework/ui/molecules";
import { Icons } from "@base-framework/ui/icons";
import { Div, P, Span, Form, Fieldset } from "@base-framework/atoms";

// Define a custom drawer class
class FeedbackDrawer extends Drawer
{
	declareProps()
	{
		super.declareProps();
		this.title = 'Send Feedback';
		this.size = 'md';
		this.back = true; // Shows back button on mobile
	}

	getButtons()
	{
		return [
			Button({ variant: 'outline', click: () => this.destroy() }, 'Cancel'),
			Button({ variant: 'primary', type: 'submit' }, 'Submit Feedback')
		];
	}
}

// Create content for the drawer
const FeedbackDrawerContent = () => [
	Form({ class: 'flex flex-col gap-6 p-6 my-auto' }, [
		Fieldset([
			// Info Alert using Alert component
			Alert({
				title: 'We value your input',
				description: 'Your feedback helps us improve.',
				icon: Icons.information,
				type: 'info'
			}),

			// Category Selection
			new FormField({
				name: "category",
				label: "Category",
				description: "Select the type of feedback."
			}, [
				Select({
					required: true,
					options: [
						{ value: 'bug', label: '🐛 Bug Report' },
						{ value: 'feature', label: '✨ Feature Request' },
						{ value: 'general', label: '💬 General' }
					]
				})
			]),

			// Feedback Message
			new FormField({
				name: "feedback",
				label: "Your Feedback"
			}, [
				Textarea({
					placeholder: 'Share your thoughts...',
					rows: 6,
					required: true
				})
			]),

			// Email Input
			new FormField({
				name: "email",
				label: "Email (Optional)"
			}, [
				EmailInput({
					placeholder: 'your.email@example.com'
				})
			])
		])
	])
];

// Open the drawer by passing children in constructor
const drawer = new FeedbackDrawer(FeedbackDrawerContent());
drawer.open();
`}),o({title:"Notifications Drawer",description:"A drawer without footer buttons, ideal for displaying lists like notifications or comments. The hideFooter option removes the bottom action buttons.",preview:[s({text:"Open Notifications",variant:"secondary",click:()=>{new k(D()).open()}})],code:`
import { Drawer } from "@base-framework/ui/molecules";
import { Badge, Button } from "@base-framework/ui/atoms";
import { Avatar } from "@base-framework/ui/molecules";
import { Div, P } from "@base-framework/atoms";

class NotificationsDrawer extends Drawer
{
	declareProps()
	{
		super.declareProps();
		this.title = 'Notifications';
		this.description = '12 unread notifications';
		this.size = 'md';
		this.back = true;
		this.hideFooter = true; // No footer buttons
	}
}

const NotificationsContent = () => [
	Div({ class: 'space-y-3 p-6 my-auto' }, [
		Div({ class: 'flex items-start gap-3 p-4 rounded-lg border bg-card shadow-sm hover:bg-accent transition-colors' }, [
			Avatar({
				src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
				alt: 'John Doe',
				fallbackText: 'JD',
				size: 'sm'
			}),
			Div({ class: 'flex-1 space-y-1' }, [
				Div({ class: 'flex items-center gap-2' }, [
					P({ class: 'text-sm font-medium' }, 'John Doe mentioned you'),
					Badge({ type: 'blue' }, 'New')
				]),
				P({ class: 'text-xs text-muted-foreground' }, '5 minutes ago')
			])
		])
	])
];

const drawer = new NotificationsDrawer(NotificationsContent());
drawer.open();
`}),o({title:"Large Drawer",description:'A larger drawer for more complex content like settings panels or detailed forms. Use size="lg" for extra space.',preview:[s({text:"Open Settings",variant:"outline",click:()=>{new v(P()).open()}})],code:`
import { Drawer } from "@base-framework/ui/molecules";
import { Button } from "@base-framework/ui/atoms";
import { Alert, Toggle } from "@base-framework/ui/molecules";
import { Icons } from "@base-framework/ui/icons";
import { Div, P, H4, Span } from "@base-framework/atoms";

class QuickSettingsDrawer extends Drawer
{
	declareProps()
	{
		super.declareProps();
		this.title = 'Quick Settings';
		this.description = 'Adjust your preferences';
		this.size = 'lg'; // Large size for more content
		this.back = true;
		this.hideFooter = true;
	}
}

const QuickSettingsContent = () => [
	Div({ class: 'space-y-6 p-6 my-auto' }, [
		P({ class: 'text-sm text-muted-foreground' },
			'Customize your experience. Changes are saved automatically.'
		),

		Div({ class: 'space-y-4' }, [
			// Setting with Toggle
			Div({ class: 'flex items-center justify-between p-4 rounded-lg border bg-card shadow-sm' }, [
				Div({ class: 'flex items-center gap-3 flex-1' }, [
					Div({ class: 'flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground' }, '🔔'),
					Div({ class: 'space-y-0.5' }, [
						H4({ class: 'text-sm font-semibold' }, 'Push Notifications'),
						P({ class: 'text-xs text-muted-foreground' }, 'Receive alerts')
					])
				]),
				new Toggle({
					active: true,
					change: (checked) => console.log('Toggle:', checked)
				})
			])
		]),

		// Privacy Alert
		Alert({
			title: 'Privacy & Security',
			description: 'Your preferences are stored securely.',
			icon: Icons.locked,
			type: 'default'
		})
	])
];

const drawer = new QuickSettingsDrawer(QuickSettingsContent());
drawer.open();
`}),o({title:"Swipe Behavior",description:"Drawers support swipe-to-close gestures on mobile devices. You can customize the swipe threshold and toggle swipe functionality.",preview:[e({class:"flex flex-col gap-y-3"},[t({class:"text-sm text-muted-foreground mb-6"},"On mobile, try swiping down to close the drawer. The gesture requires minimal drag distance to trigger."),s({text:"Default Swipe Behavior",variant:"primary",click:()=>{new l([t({class:"p-6 my-auto"},"Swipe down to close this drawer.")]).open()}}),s({text:"Custom Threshold",variant:"secondary",click:()=>{const r=new l([t({class:"p-6 my-auto"},"This drawer requires a longer swipe to close (200px).")]);r.closeThreshold=200,r.open()}}),s({text:"Swipe Disabled",variant:"outline",click:()=>{const r=new l([t({class:"p-6 my-auto"},"Swipe gesture is disabled. Use the buttons to close.")]);r.swipeToClose=!1,r.open()}})])],code:`
import { Drawer } from "@base-framework/ui/molecules";

// Default swipe behavior (enabled)
const drawer1 = new FeedbackDrawer();
drawer1.open();

// Custom swipe threshold (requires 200px drag)
const drawer2 = new FeedbackDrawer();
drawer2.closeThreshold = 200;
drawer2.open();

// Disable swipe gesture
const drawer3 = new FeedbackDrawer();
drawer3.swipeToClose = false;
drawer3.open();
`}),o({title:"Size Options",description:"Drawers support multiple sizes: sm, md (default), lg, and xl. The size affects the drawer width on desktop and height on mobile.",preview:[e({class:"flex flex-wrap gap-3"},[s({text:"Small",variant:"outline",click:()=>{new class extends a{declareProps(){super.declareProps(),this.title="Small Drawer",this.size="sm",this.back=!0,this.hideFooter=!0}}([t({class:"p-6 my-auto"},"This is a small drawer.")]).open()}}),s({text:"Medium",variant:"outline",click:()=>{new class extends a{declareProps(){super.declareProps(),this.title="Medium Drawer",this.size="md",this.back=!0,this.hideFooter=!0}}([t({class:"p-6 my-auto"},"This is a medium drawer (default size).")]).open()}}),s({text:"Large",variant:"outline",click:()=>{new class extends a{declareProps(){super.declareProps(),this.title="Large Drawer",this.size="lg",this.back=!0,this.hideFooter=!0}}([t({class:"p-6 my-auto"},"This is a large drawer.")]).open()}}),s({text:"Extra Large",variant:"outline",click:()=>{new class extends a{declareProps(){super.declareProps(),this.title="Extra Large Drawer",this.size="xl",this.back=!0,this.hideFooter=!0}}([t({class:"p-6 my-auto"},"This is an extra large drawer.")]).open()}})])],code:`
import { Drawer } from "@base-framework/ui/molecules";

// Small drawer
const smallDrawer = new class extends Drawer {
	declareProps() {
		super.declareProps();
		this.size = 'sm';
	}
};

// Medium drawer (default)
const mediumDrawer = new class extends Drawer {
	declareProps() {
		super.declareProps();
		this.size = 'md';
	}
};

// Large drawer
const largeDrawer = new class extends Drawer {
	declareProps() {
		super.declareProps();
		this.size = 'lg';
	}
};

// Extra large drawer
const xlDrawer = new class extends Drawer {
	declareProps() {
		super.declareProps();
		this.size = 'xl';
	}
};
`})]);export{j as DrawerPage,j as default};
