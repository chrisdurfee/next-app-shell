import { Div, Fieldset, Form, H4, P } from "@base-framework/atoms";
import { Alert, Avatar, Badge, Icons } from "@base-framework/ui";
import { Button, EmailInput, Select, Textarea } from "@base-framework/ui/atoms";
import { Drawer, FormField, Toggle } from "@base-framework/ui/molecules";
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
	Form({ class: 'flex flex-col gap-6 p-6 my-auto' }, [
		Fieldset([
			// Info Alert using Alert component
			Alert({
				title: 'We value your input',
				description: 'Your feedback helps us improve. Please be as detailed as possible so we can better understand your experience.',
				// @ts-ignore
                icon: Icons.information,
				type: 'info'
			}),

			// Category Selection
			new FormField({
				name: "category",
				label: "Category",
				description: "Select the type of feedback you want to share."
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
				label: "Your Feedback",
				description: "Tell us what you think..."
			}, [
				Textarea({
					placeholder: 'Share your thoughts with us...',
					rows: 6,
					required: true
				})
			]),

			// Email Input (Optional)
			new FormField({
				name: "email",
				label: "Email (Optional)",
				description: "We'll use this to follow up if needed."
			}, [
				EmailInput({
					placeholder: 'your.email@example.com'
				})
			])
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
	Div({ class: 'space-y-3 p-6 my-auto' }, [
		// Notification Item 1 with Avatar and Badge
		Div({ class: 'flex items-start gap-3 p-4 rounded-lg border bg-card text-card-foreground shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors' }, [
			Avatar({
				src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
				alt: 'John Doe',
				fallbackText: 'JD',
				size: 'sm'
			}),
			Div({ class: 'flex-1 space-y-1' }, [
				Div({ class: 'flex items-center gap-2' }, [
					P({ class: 'text-sm font-medium leading-none' }, 'John Doe mentioned you'),
					Badge({ type: 'blue' }, 'New')
				]),
				P({ class: 'text-sm text-muted-foreground' }, '"Great work on the new feature! @you"'),
				P({ class: 'text-xs text-muted-foreground mt-1' }, '5 minutes ago')
			])
		]),

		// Notification Item 2 with Avatar
		Div({ class: 'flex items-start gap-3 p-4 rounded-lg border bg-card text-card-foreground shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors' }, [
			Avatar({
				src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
				alt: 'Sarah Chen',
				fallbackText: 'SC',
				size: 'sm'
			}),
			Div({ class: 'flex-1 space-y-1' }, [
				P({ class: 'text-sm font-medium leading-none' }, 'Sarah Chen liked your post'),
				P({ class: 'text-sm text-muted-foreground' }, 'Your post about best practices'),
				P({ class: 'text-xs text-muted-foreground mt-1' }, '2 hours ago')
			])
		]),

		// Notification Item 3 with Avatar and Badge
		Div({ class: 'flex items-start gap-3 p-4 rounded-lg border bg-card text-card-foreground shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors' }, [
			Avatar({
				src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
				alt: 'Mike Kim',
				fallbackText: 'MK',
				size: 'sm'
			}),
			Div({ class: 'flex-1 space-y-1' }, [
				Div({ class: 'flex items-center gap-2' }, [
					P({ class: 'text-sm font-medium leading-none' }, 'Mike Kim started following you'),
					Badge({ type: 'purple' }, 'Follower')
				]),
				P({ class: 'text-sm text-muted-foreground' }, 'Say hello to your new follower!'),
				P({ class: 'text-xs text-muted-foreground mt-1' }, 'Yesterday')
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
	Div({ class: 'space-y-6 p-6 my-auto' }, [
		// Description
		P({ class: 'text-sm text-muted-foreground' },
			'Customize your experience with these quick settings. Changes are saved automatically.'
		),

		// Settings List
		Div({ class: 'space-y-4' }, [
			// Setting Item 1 - Push Notifications
			Div({ class: 'flex items-center justify-between p-4 rounded-lg border bg-card text-card-foreground shadow-sm' }, [
				Div({ class: 'flex items-center gap-3 flex-1' }, [
					Div({ class: 'flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground' }, '🔔'),
					Div({ class: 'space-y-0.5' }, [
						H4({ class: 'text-sm font-semibold' }, 'Push Notifications'),
						P({ class: 'text-xs text-muted-foreground' }, 'Receive alerts and updates')
					])
				]),
				new Toggle({
					active: true,
					change: (checked) => console.log('Push notifications:', checked)
				})
			]),

			// Setting Item 2 - Dark Mode
			Div({ class: 'flex items-center justify-between p-4 rounded-lg border bg-card text-card-foreground shadow-sm' }, [
				Div({ class: 'flex items-center gap-3 flex-1' }, [
					Div({ class: 'flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500 text-white' }, '🌙'),
					Div({ class: 'space-y-0.5' }, [
						H4({ class: 'text-sm font-semibold' }, 'Dark Mode'),
						P({ class: 'text-xs text-muted-foreground' }, 'Use dark theme')
					])
				]),
				new Toggle({
					active: false,
					change: (checked) => console.log('Dark mode:', checked)
				})
			]),

			// Setting Item 3 - Email Notifications
			Div({ class: 'flex items-center justify-between p-4 rounded-lg border bg-card text-card-foreground shadow-sm' }, [
				Div({ class: 'flex items-center gap-3 flex-1' }, [
					Div({ class: 'flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500 text-white' }, '📧'),
					Div({ class: 'space-y-0.5' }, [
						H4({ class: 'text-sm font-semibold' }, 'Email Notifications'),
						P({ class: 'text-xs text-muted-foreground' }, 'Weekly digest and updates')
					])
				]),
				new Toggle({
					active: true,
					change: (checked) => console.log('Email notifications:', checked)
				})
			])
		]),

		// Preferences Section
		Div({ class: 'space-y-4 pt-2' }, [
			H4({ class: 'text-sm font-semibold' }, 'Display Preferences'),
			Div({ class: 'space-y-2' }, [
				Div({ class: 'flex items-center justify-between p-3 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors' }, [
					P({ class: 'text-sm font-medium' }, 'Font Size'),
					P({ class: 'text-sm text-muted-foreground' }, 'Medium')
				]),
				Div({ class: 'flex items-center justify-between p-3 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors' }, [
					P({ class: 'text-sm font-medium' }, 'Language'),
					P({ class: 'text-sm text-muted-foreground' }, 'English')
				])
			])
		]),

		// Privacy Note with Alert
		Alert({
			title: 'Privacy & Security',
			description: 'Your preferences are stored securely and never shared with third parties.',
            // @ts-ignore
			icon: Icons.locked,
			type: 'default'
		})
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
                        // @ts-ignore
						const drawer = new FeedbackDrawer(FeedbackDrawerContent());
                        // @ts-ignore
						drawer.open();
					}
				})
			],
			code: `
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
                        // @ts-ignore
						const drawer = new NotificationsDrawer(NotificationsContent());
                        // @ts-ignore
						drawer.open();
					}
				})
			],
			code: `
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
                        // @ts-ignore
						const drawer = new QuickSettingsDrawer(QuickSettingsContent());
                        // @ts-ignore
						drawer.open();
					}
				})
			],
			code: `
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
`
		}),

		// Swipe Behavior Section
		DocSection({
			title: 'Swipe Behavior',
			description: 'Drawers support swipe-to-close gestures on mobile devices. You can customize the swipe threshold and toggle swipe functionality.',
			preview: [
				Div({ class: 'space-y-3' }, [
					P({ class: 'text-sm text-muted-foreground mb-6' },
						'On mobile, try swiping down to close the drawer. The gesture requires minimal drag distance to trigger.'
					),
					Button({
						text: 'Default Swipe Behavior',
						variant: 'primary',
						click: () => {
                            // @ts-ignore
							const drawer = new FeedbackDrawer([
								P({ class: 'p-6 my-auto' }, 'Swipe down to close this drawer.')
							]);
                            // @ts-ignore
							drawer.open();
						}
					}),
					Button({
						text: 'Custom Threshold',
						variant: 'secondary',
						click: () => {
                            // @ts-ignore
							const drawer = new FeedbackDrawer([
								P({ class: 'p-6 my-auto' }, 'This drawer requires a longer swipe to close (200px).')
							]);
                            // @ts-ignore
							drawer.closeThreshold = 200; // Requires more drag distance
                            // @ts-ignore
							drawer.open();
						}
					}),
					Button({
						text: 'Swipe Disabled',
						variant: 'outline',
						click: () => {
                            // @ts-ignore
							const drawer = new FeedbackDrawer([
								P({ class: 'p-6 my-auto' }, 'Swipe gesture is disabled. Use the buttons to close.')
							]);
                            // @ts-ignore
							drawer.swipeToClose = false; // Disable swipe gesture
                            // @ts-ignore
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
				Div({ class: 'flex flex-wrap gap-3' }, [
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
                                // @ts-ignore
							}([P({ class: 'p-4' }, 'This is a small drawer.')]);
                            // @ts-ignore
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
                                // @ts-ignore
							}([P({ class: 'p-4' }, 'This is a medium drawer (default size).')]);
                            // @ts-ignore
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
                                // @ts-ignore
							}([P({ class: 'p-4' }, 'This is a large drawer.')]);
                            // @ts-ignore
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
                                // @ts-ignore
							}([P({ class: 'p-4' }, 'This is an extra large drawer.')]);
                            // @ts-ignore
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
