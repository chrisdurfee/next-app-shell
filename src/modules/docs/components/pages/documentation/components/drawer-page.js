import { Button as BaseButton, Div, Input, P, Textarea } from "@base-framework/atoms";
import { Button } from "@base-framework/ui/atoms";
import { Drawer } from "@base-framework/ui/molecules";
import { DocSection } from "../../../molecules/doc-section.js";
import { DocPage } from '../../doc-page.js';

/**
 * Example 1: Feedback Drawer
 * Slides up from bottom on mobile, centered on desktop
 * Swipe down to close on mobile
 */
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
            // @ts-ignore
			Button({ variant: 'outline', click: () => this.destroy() }, 'Cancel'),
			Button({ variant: 'primary', type: 'submit' }, 'Submit Feedback')
		];
	}
}

// Content for the feedback drawer
const FeedbackDrawerContent = () => [
	// Info Alert
	Div({ class: 'bg-muted/50 border border-muted rounded-lg p-4 mb-4' }, [
		Div({ class: 'flex items-start gap-2' }, [
			Div({ class: 'text-blue-500 text-xl' }, '💡'),
			Div({ class: 'flex-1' }, [
				P({ class: 'font-semibold text-sm mb-1' }, 'We value your input'),
				P({ class: 'text-sm text-muted-foreground' },
					'Your feedback helps us improve. Please be as detailed as possible so we can better understand your experience.'
				)
			])
		])
	]),

	// Category Selection
	Div({ class: 'mb-4' }, [
		Div({ class: 'text-sm font-medium mb-2' }, 'Category'),
		Div({ class: 'flex gap-2 flex-wrap' }, [
			BaseButton({
				type: 'button',
				class: 'px-4 py-2 rounded-lg border border-border hover:bg-muted/50 text-sm'
			}, '🐛 Bug Report'),
			BaseButton({
				type: 'button',
				class: 'px-4 py-2 rounded-lg border border-border hover:bg-muted/50 text-sm'
			}, '✨ Feature Request'),
			BaseButton({
				type: 'button',
				class: 'px-4 py-2 rounded-lg border border-border hover:bg-muted/50 text-sm'
			}, '💬 General')
		])
	]),

	// Feedback Message
	Div({ class: 'mb-4' }, [
		Div({ class: 'text-sm font-medium mb-2' }, 'Your Feedback'),
		Textarea({
			placeholder: 'Tell us what you think...',
			rows: 6,
			class: 'w-full p-4 bg-muted/30 border border-border rounded-lg resize-none'
		})
	]),

	// Email Input (Optional)
	Div({ class: 'mb-4' }, [
		Div({ class: 'text-sm font-medium mb-2' }, 'Email (Optional)'),
		Input({
			type: 'email',
			placeholder: 'your.email@example.com',
			class: 'w-full px-4 py-3 bg-muted/30 border border-border rounded-lg'
		})
	]),

	// Tips
	Div({ class: 'bg-blue-500/10 border border-blue-500/20 rounded-lg p-4' }, [
		Div({ class: 'flex items-start gap-2 mb-3' }, [
			Div({ class: 'text-blue-500 mt-0.5' }, 'ℹ️'),
			Div({ class: 'font-semibold text-sm' }, 'Helpful Tips')
		]),
		Div({ class: 'space-y-2 text-sm text-muted-foreground ml-6' }, [
			Div('• Include specific details about your experience'),
			Div('• Mention what browser or device you\'re using'),
			Div('• Screenshots are always helpful (attach via email)')
		])
	])
];

/**
 * Example 2: Notifications Drawer
 * Similar to social media notifications that slide up on mobile
 * Swipe down to close
 */
class NotificationsDrawer extends Drawer
{
	declareProps()
	{
		super.declareProps();
		this.title = 'Notifications';
		this.description = '12 unread notifications';
		this.size = 'md';
		this.back = true;
		this.hideFooter = true; // No footer buttons for notification view
	}
}

// Content for notifications drawer
const NotificationsContent = () => [
	Div({ class: 'space-y-3' }, [
		// Notification Item 1
		Div({ class: 'flex items-start gap-3 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20' }, [
			Div({ class: 'w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold' }, 'JD'),
			Div({ class: 'flex-1' }, [
				P({ class: 'text-sm font-semibold mb-1' }, 'John Doe mentioned you'),
				P({ class: 'text-sm text-muted-foreground mb-2' }, '"Great work on the new feature! @you"'),
				P({ class: 'text-xs text-muted-foreground' }, '5 minutes ago')
			])
		]),

		// Notification Item 2
		Div({ class: 'flex items-start gap-3 p-4 hover:bg-muted/30 rounded-lg' }, [
			Div({ class: 'w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold' }, 'SC'),
			Div({ class: 'flex-1' }, [
				P({ class: 'text-sm font-semibold mb-1' }, 'Sarah Chen liked your post'),
				P({ class: 'text-sm text-muted-foreground mb-2' }, 'Your post about best practices'),
				P({ class: 'text-xs text-muted-foreground' }, '2 hours ago')
			])
		]),

		// Notification Item 3
		Div({ class: 'flex items-start gap-3 p-4 hover:bg-muted/30 rounded-lg' }, [
			Div({ class: 'w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold' }, 'MK'),
			Div({ class: 'flex-1' }, [
				P({ class: 'text-sm font-semibold mb-1' }, 'Mike Kim started following you'),
				P({ class: 'text-sm text-muted-foreground mb-2' }, 'Say hello to your new follower!'),
				P({ class: 'text-xs text-muted-foreground' }, 'Yesterday')
			])
		])
	])
];

/**
 * Example 3: Quick Settings Drawer
 * For displaying app settings or preferences
 * Pull up to expand, swipe down to close
 */
class QuickSettingsDrawer extends Drawer
{
	declareProps()
	{
		super.declareProps();
		this.title = 'Quick Settings';
		this.description = 'Adjust your preferences';
		this.size = 'lg';
		this.back = true;
		this.hideFooter = true;
	}
}

// Content for quick settings drawer
const QuickSettingsContent = () => [
	// Description
	P({ class: 'text-sm text-muted-foreground mb-6' },
		'Customize your experience with these quick settings. Changes are saved automatically.'
	),

	// Settings List
	Div({ class: 'space-y-3 mb-6' }, [
		// Setting Item 1
		Div({ class: 'flex items-center justify-between p-4 bg-muted/30 rounded-lg' }, [
			Div({ class: 'flex items-center gap-3' }, [
				Div({ class: 'w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white' }, '🔔'),
				Div([
					Div({ class: 'font-semibold text-sm' }, 'Push Notifications'),
					Div({ class: 'text-xs text-muted-foreground' }, 'Receive alerts and updates')
				])
			]),
			Div({ class: 'relative inline-block w-12 h-6 bg-primary rounded-full' }, [
				Div({ class: 'absolute top-1 right-1 w-4 h-4 bg-white rounded-full' })
			])
		]),

		// Setting Item 2
		Div({ class: 'flex items-center justify-between p-4 bg-muted/30 rounded-lg' }, [
			Div({ class: 'flex items-center gap-3' }, [
				Div({ class: 'w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center text-white' }, '🌙'),
				Div([
					Div({ class: 'font-semibold text-sm' }, 'Dark Mode'),
					Div({ class: 'text-xs text-muted-foreground' }, 'Use dark theme')
				])
			]),
			Div({ class: 'relative inline-block w-12 h-6 bg-muted rounded-full' }, [
				Div({ class: 'absolute top-1 left-1 w-4 h-4 bg-white rounded-full' })
			])
		]),

		// Setting Item 3
		Div({ class: 'flex items-center justify-between p-4 bg-muted/30 rounded-lg' }, [
			Div({ class: 'flex items-center gap-3' }, [
				Div({ class: 'w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white' }, '📧'),
				Div([
					Div({ class: 'font-semibold text-sm' }, 'Email Notifications'),
					Div({ class: 'text-xs text-muted-foreground' }, 'Weekly digest and updates')
				])
			]),
			Div({ class: 'relative inline-block w-12 h-6 bg-primary rounded-full' }, [
				Div({ class: 'absolute top-1 right-1 w-4 h-4 bg-white rounded-full' })
			])
		])
	]),

	// Preferences Section
	Div({ class: 'mb-6' }, [
		Div({ class: 'text-sm font-medium mb-3' }, 'Display Preferences'),
		Div({ class: 'space-y-2' }, [
			Div({ class: 'flex items-center justify-between p-3 hover:bg-muted/50 rounded-lg' }, [
				P({ class: 'text-sm' }, 'Font Size'),
				P({ class: 'text-sm text-muted-foreground' }, 'Medium')
			]),
			Div({ class: 'flex items-center justify-between p-3 hover:bg-muted/50 rounded-lg' }, [
				P({ class: 'text-sm' }, 'Language'),
				P({ class: 'text-sm text-muted-foreground' }, 'English')
			])
		])
	]),

	// Privacy Note
	Div({ class: 'bg-muted/50 border border-muted rounded-lg p-4' }, [
		Div({ class: 'flex items-start gap-2' }, [
			Div({ class: 'text-muted-foreground mt-0.5' }, '🔒'),
			Div({ class: 'flex-1' }, [
				P({ class: 'text-sm font-semibold mb-1' }, 'Privacy & Security'),
				P({ class: 'text-xs text-muted-foreground' },
					'Your preferences are stored securely and never shared with third parties.'
				)
			])
		])
	])
];

/**
 * DrawerPage
 *
 * Provides documentation and examples for drawers.
 * Drawers are bottom-up sheets on mobile that become centered modals on desktop.
 * They support swipe-to-close gestures on touch devices.
 *
 * @returns {DocPage}
 */
export const DrawerPage = () =>
	DocPage(
	{
		title: 'Drawers',
		description: 'Bottom sheets on mobile that slide up and support swipe-to-close gestures. Automatically become centered modals on desktop.'
	},
	[
		// Basic Drawer Section
		DocSection({
			title: 'Basic Drawer',
			description: 'A simple drawer that slides up from the bottom on mobile. Swipe down to close or use the back button.',
			preview: [
				Button({
					text: 'Open Basic Drawer',
					variant: 'primary',
					click: () => {
						const drawer = new FeedbackDrawer();
						drawer.children = FeedbackDrawerContent();
						drawer.open();
					}
				})
			],
			code: `
import { Drawer } from "@base-framework/ui/molecules";
import { Button } from "@base-framework/ui/atoms";
import { Div, P, Textarea, Input } from "@base-framework/atoms";

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
	Div({ class: 'mb-4' }, [
		Div({ class: 'text-sm font-medium mb-2' }, 'Your Feedback'),
		Textarea({
			placeholder: 'Tell us what you think...',
			rows: 6,
			class: 'w-full p-4 bg-muted/30 border border-border rounded-lg'
		})
	])
];

// Open the drawer
const drawer = new FeedbackDrawer();
drawer.children = FeedbackDrawerContent();
drawer.open();
`
		}),

		// Notifications Drawer Section
		DocSection({
			title: 'Notifications Drawer',
			description: 'A drawer without footer buttons, ideal for displaying lists like notifications or comments. The hideFooter option removes the bottom action buttons.',
			preview: [
				Button({
					text: 'Open Notifications',
					variant: 'secondary',
					click: () => {
						const drawer = new NotificationsDrawer();
						drawer.children = NotificationsContent();
						drawer.open();
					}
				})
			],
			code: `
import { Drawer } from "@base-framework/ui/molecules";
import { Button } from "@base-framework/ui/atoms";
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
	Div({ class: 'space-y-3' }, [
		Div({ class: 'flex items-start gap-3 p-4 bg-blue-500/10 rounded-lg' }, [
			Div({ class: 'w-10 h-10 bg-blue-500 rounded-full' }),
			Div({ class: 'flex-1' }, [
				P({ class: 'text-sm font-semibold mb-1' }, 'John Doe mentioned you'),
				P({ class: 'text-xs text-muted-foreground' }, '5 minutes ago')
			])
		])
	])
];

const drawer = new NotificationsDrawer();
drawer.children = NotificationsContent();
drawer.open();
`
		}),

		// Large Drawer Section
		DocSection({
			title: 'Large Drawer',
			description: 'A larger drawer for more complex content like settings panels or detailed forms. Use size="lg" for extra space.',
			preview: [
				Button({
					text: 'Open Settings',
					variant: 'outline',
					click: () => {
						const drawer = new QuickSettingsDrawer();
						drawer.children = QuickSettingsContent();
						drawer.open();
					}
				})
			],
			code: `
import { Drawer } from "@base-framework/ui/molecules";
import { Button } from "@base-framework/ui/atoms";
import { Div, P } from "@base-framework/atoms";

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

const drawer = new QuickSettingsDrawer();
drawer.children = QuickSettingsContent();
drawer.open();
`
		}),

		// Swipe Behavior Section
		DocSection({
			title: 'Swipe Behavior',
			description: 'Drawers support swipe-to-close gestures on mobile devices. You can customize the swipe threshold and toggle swipe functionality.',
			preview: [
				Div({ class: 'space-y-2' }, [
					P({ class: 'text-sm text-muted-foreground mb-4' },
						'On mobile, try swiping down to close the drawer. The gesture requires minimal drag distance to trigger.'
					),
					Button({
						text: 'Default Swipe Behavior',
						variant: 'primary',
						click: () => {
							const drawer = new FeedbackDrawer();
							drawer.children = [
								P({ class: 'p-4' }, 'Swipe down to close this drawer.')
							];
							drawer.open();
						}
					}),
					Button({
						text: 'Custom Threshold',
						variant: 'secondary',
						click: () => {
							const drawer = new FeedbackDrawer();
							drawer.closeThreshold = 200; // Requires more drag distance
							drawer.children = [
								P({ class: 'p-4' }, 'This drawer requires a longer swipe to close (200px).')
							];
							drawer.open();
						}
					}),
					Button({
						text: 'Swipe Disabled',
						variant: 'outline',
						click: () => {
							const drawer = new FeedbackDrawer();
							drawer.swipeToClose = false; // Disable swipe gesture
							drawer.children = [
								P({ class: 'p-4' }, 'Swipe gesture is disabled. Use the buttons to close.')
							];
							drawer.open();
						}
					})
				])
			],
			code: `
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
`
		}),

		// Size Options Section
		DocSection({
			title: 'Size Options',
			description: 'Drawers support multiple sizes: sm, md (default), lg, and xl. The size affects the drawer width on desktop and height on mobile.',
			preview: [
				Div({ class: 'flex flex-wrap gap-2' }, [
					Button({
						text: 'Small',
						variant: 'outline',
						click: () => {
							const drawer = new class extends Drawer {
								declareProps() {
									super.declareProps();
									this.title = 'Small Drawer';
									this.size = 'sm';
									this.back = true;
									this.hideFooter = true;
								}
							};
							drawer.children = [P({ class: 'p-4' }, 'This is a small drawer.')];
							drawer.open();
						}
					}),
					Button({
						text: 'Medium',
						variant: 'outline',
						click: () => {
							const drawer = new class extends Drawer {
								declareProps() {
									super.declareProps();
									this.title = 'Medium Drawer';
									this.size = 'md';
									this.back = true;
									this.hideFooter = true;
								}
							};
							drawer.children = [P({ class: 'p-4' }, 'This is a medium drawer (default size).')];
							drawer.open();
						}
					}),
					Button({
						text: 'Large',
						variant: 'outline',
						click: () => {
							const drawer = new class extends Drawer {
								declareProps() {
									super.declareProps();
									this.title = 'Large Drawer';
									this.size = 'lg';
									this.back = true;
									this.hideFooter = true;
								}
							};
							drawer.children = [P({ class: 'p-4' }, 'This is a large drawer.')];
							drawer.open();
						}
					}),
					Button({
						text: 'Extra Large',
						variant: 'outline',
						click: () => {
							const drawer = new class extends Drawer {
								declareProps() {
									super.declareProps();
									this.title = 'Extra Large Drawer';
									this.size = 'xl';
									this.back = true;
									this.hideFooter = true;
								}
							};
							drawer.children = [P({ class: 'p-4' }, 'This is an extra large drawer.')];
							drawer.open();
						}
					})
				])
			],
			code: `
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
`
		})
	]
);

export default DrawerPage;
