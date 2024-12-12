import { Div } from "@base-framework/atoms";
import { Button } from "@components/atoms/buttons/buttons.js";
import { Fieldset } from "@components/atoms/form/fieldset.js";
import { Input, Textarea } from "@components/atoms/form/input.js";
import { Select } from "@components/atoms/form/select.js";
import { Icons } from "@components/icons/icons.js";
import DatePicker from "@components/molecules/date-time/date-picker.js";
import { Confirmation } from "@components/molecules/dialogs/confirmation.js";
import { FormField } from "@components/molecules/form/form.js";
import { Modal } from "@components/molecules/modals/modal.js";
import { DocSection } from "../../../molecules/doc-section.js";
import { DocPage } from '../../doc-page.js';

const Modals = [
	{
		label: 'Large',
		buttonStyle: 'primary',
		size: 'lg'
	},
	{
		label: 'Small',
		buttonStyle: 'secondary',
		size: 'sm'
	},
	{
		label: 'Medium',
		buttonStyle: 'destructive',
		size: 'md'
	},
	{
		label: 'XL',
		buttonStyle: 'primary',
		size: 'xl'
	},
	{
		label: 'Right',
		buttonStyle: 'ghost',
		type: 'right'
	},
	{
		label: 'Left',
		buttonStyle: 'link',
		type: 'left'
	}
];

/**
 * This will create a modal button.
 *
 * @param {object} props
 * @returns {object}
 */
const ModalButton = ({ label, buttonStyle, size, type }) => Button({
	text: label,
	class: `m-1 ${buttonStyle}`,
	click: () => new Modal({
		title: 'Are you absolutely sure?',
		size,
		type
	}, [
		Div({ class: 'flex flex-col max-w-lg lg:p-4 space-y-8' }, [
			new FormField({
				name: "popover-test",
				label: "Popover Test",
			}, [
				new DatePicker()
			]),
			new FormField({
				name: "dialog-test",
				label: "Dialog Test",
			}, [
				Button({
					click: () =>
					{
						new Confirmation({
							title: 'Are you absoultely sure?',
							description: 'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
							confirmTextLabel: 'Save',
							confirmed: () =>
							{
								app.notify({
									icon: Icons.trash,
									title: 'Account deleted',
									description: 'Your account has been successfully deleted.',
									type: 'destructive'
								})
							}
						}).open()
					}
				}, 'Confirm')
			])
		])
	]).open()
});

/**
 * This will create a modal form.
 *
 * @returns {object}
 */
const ModalForm = ({
	size = 'md',
	type = 'center'
}) => (
	new Modal({
		title: 'Report an Issue',
		icon: Icons.warning,
		description: "What area are you having problems with?",
		size,
		type,
		onSubmit: () => console.log('Form submitted')
	}, [
		Div({ class: 'flex flex-col lg:p-4 space-y-8' }, [
			Fieldset({ legend: 'Issue Details', border: 'top' }, [
				// Row for Area and Security Level
				Div({ class: "flex flex-auto w-full gap-4" }, [
					// Area field
					new FormField({ name: "area", label: "Area" }, [
						Select({
							required: true,
							class: "border p-2 rounded-md w-full bg-background text-foreground",
							options: [
								{ value: "billing", label: "Billing" },
								{ value: "technical", label: "Technical" },
								{ value: "account", label: "Account" },
								{ value: "other", label: "Other" }
							],
							defaultValue: "billing",
							change: (e) => console.log(`Area selected: ${e.target.value}`)
						})
					]),

					// Security Level field
					new FormField({ name: "security_level", label: "Security Level" }, [
						Select({
							required: true,
							class: "border p-2 rounded-md w-full bg-background text-foreground",
							options: [
								{ value: "severity_1", label: "Severity 1" },
								{ value: "severity_2", label: "Severity 2" },
								{ value: "severity_3", label: "Severity 3" }
							],
							defaultValue: "severity_2",
							change: (e) => console.log(`Security Level selected: ${e.target.value}`)
						})
					])
				]),

				// Subject field
				new FormField({
					name: "subject",
					label: "Subject",
				}, [
					Input({
						type: "text",
						placeholder: "I need help with...",
						required: true,
						class: "border p-2 rounded-md w-full bg-background text-foreground placeholder-muted-foreground"
					})
				]),

				// Description field
				new FormField({
					name: "description",
					label: "Description",
				}, [
					Textarea({
						placeholder: "Please include all information relevant to your issue.",
						required: true,
						class: "border p-2 rounded-md w-full bg-background text-foreground placeholder-muted-foreground"
					})
				])
			])
		])
	])
);

/**
 * This will create a modal button.
 *
 * @param {object} props
 * @returns {object}
 */
const ModalFormButton = ({ label, buttonStyle, size, type }) => Button({
	text: label,
	class: `m-1 ${buttonStyle}`,
	click: () => ModalForm({ size, type }).open()
});

/**
 * ModalPage
 *
 * This will create a modal page.
 *
 * @param {object} props
 * @param {object} children
 * @returns {DocPage}
 */
export const ModalPage = () => (
	DocPage(
        {
            title: 'Modals',
            description: 'Displays a modal or a component that looks like a modal.'
        },
        [
			DocSection({
                title: 'Extra Large Modal',
                description: 'This is an extra large modal.',
                preview: [
                    ModalButton(Modals[3])
                ],
                code: `
import { Modal } from "@components/molecules/modals/modal.js";
import { Button } from "@components/atoms/buttons/buttons.js";

/**
 * This will create a modal button.
 *
 * @param {object} props
 * @returns {object}
 */
const ModalButton = (props, children) => Button({
	text: label,
    variant: 'primary',
	click: () => new Modal({
		size: 'xl',
		title: 'Are you absolutely sure?'
	}).open()
});`
            }),

            DocSection({
                title: 'Large Modal',
                description: 'This is a large modal.',
                preview: [
                    ModalButton(Modals[0])
                ],
                code: `
import { Modal } from "@components/molecules/modals/modal.js";
import { Button } from "@components/buttons/buttons.js";

/**
 * This will create a modal button.
 *
 * @param {object} props
 * @returns {object}
 */
const ModalButton = (props, children) => Button({
	text: label,
    variant: 'primary',
	click: () => new Modal({
		size: 'lg',
		title: 'Are you absolutely sure?'
	}).open()
});`
            }),

//             DocSection({
//                 title: 'Small Modal',
//                 preview: [
//                     ModalButton(Modals[1])
//                 ],
//                 code: `
// import { Modal } from "@components/molecules/modals/modal.js";
// import { Button } from "@components/atoms/atoms.js";

// /**
//  * This will create a modal button.
//  *
//  * @param {object} props
//  * @returns {object}
//  */
// const ModalButton = (props, children) => Button({
// 	text: label,
//     variant: 'primary',
// 	click: () => new Modal({
// 		size: 'sm',
// 		title: 'Are you absolutely sure?'
// 	}).open()
// });`
//             }),

            DocSection({
                title: 'Medium Modal',
                preview: [
                    ModalButton(Modals[2])
                ],
                code: `
import { Modal } from "@components/molecules/modals/modal.js";
import { Button } from "@components/atoms/buttons/buttons.js";

/**
 * This will create a modal button.
 *
 * @param {object} props
 * @returns {object}
 */
const ModalButton = (props, children) => Button({
	text: label,
    variant: 'primary',
	click: () => new Modal({
		size: 'md',
		title: 'Are you absolutely sure?'
	}).open()
});`
            }),

			DocSection({
                title: 'Right Modal',
                preview: [
                    ModalButton(Modals[4])
                ],
                code: `
import { Modal } from "@components/molecules/modals/modal.js";
import { Button } from "@components/buttons/buttons.js";

/**
 * This will create a modal button.
 *
 * @param {object} props
 * @returns {object}
 */
const ModalButton = (props, children) => Button({
	text: label,
    variant: 'primary',
	click: () => new Modal({
	    size: 'lg',
		type: 'right',
		title: 'Are you absolutely sure?'
	}).open()
});`
            }),

			DocSection({
				title: 'Form Modal',
				preview: [
					ModalFormButton({
						label: 'Form Modal',
						buttonStyle: 'primary'
					})
				],
				code: `
import { Modal } from "@components/molecules/modals/modal.js";
import { Button } from "@components/atoms/buttons/buttons.js";
import { Icons } from "@components/icons/icons.js";
import { Fieldset } from "@components/atoms/form/fieldset.js";
import { Div } from "@base-framework/atoms";
import { Input, Textarea } from "@components/atoms/form/input.js";

/**
 * This will create a modal form.
 *
 * @returns {object}
 */
const ModalForm = ({
	size = 'lg',
	type = 'center'
}) => (
	new Modal({
		title: 'Report an Issue',
		description: "What area are you having problems with?",
		size,
		type,
		onSubmit: () => console.log('Form submitted')
	}, [
		Div({ class: 'flex flex-col max-w-lg p-4 space-y-8' }, [
			Fieldset({ legend: 'Issue Details' }, [
				// Row for Area and Security Level
				Div({ class: "flex flex-auto w-full gap-4" }, [
					// Area field
					new FormField({ name: "area", label: "Area" }, [
						Select({
							required: true,
							class: "border p-2 rounded-md w-full bg-background text-foreground",
							options: [
								{ value: "billing", label: "Billing" },
								{ value: "technical", label: "Technical" },
								{ value: "account", label: "Account" },
								{ value: "other", label: "Other" }
							],
							defaultValue: "billing",
							change: (e) => console.log(\`Area selected: \${e.target.value}\`)
						})
					]),

					// Security Level field
					new FormField({ name: "security_level", label: "Security Level" }, [
						Select({
							required: true,
							class: "border p-2 rounded-md w-full bg-background text-foreground",
							options: [
								{ value: "severity_1", label: "Severity 1" },
								{ value: "severity_2", label: "Severity 2" },
								{ value: "severity_3", label: "Severity 3" }
							],
							defaultValue: "severity_2",
							change: (e) => console.log(\`Security Level selected: \${e.target.value}\`)
						})
					])
				]),

				// Subject field
				new FormField({
					name: "subject",
					label: "Subject",
				}, [
					Input({
						type: "text",
						placeholder: "I need help with...",
						required: true,
						class: "border p-2 rounded-md w-full bg-background text-foreground placeholder-muted-foreground"
					})
				]),

				// Description field
				new FormField({
					name: "description",
					label: "Description",
				}, [
					Textarea({
						placeholder: "Please include all information relevant to your issue.",
						required: true,
						class: "border p-2 rounded-md w-full bg-background text-foreground placeholder-muted-foreground"
					})
				])
			])
		])
	])
);`
			}),

			DocSection({
				title: 'Right Form Modal',
				preview: [
					ModalFormButton({
						label: 'Form Modal',
						buttonStyle: 'primary',
						size: 'md',
						type: 'right'
					})
				],
				code: `
import { Modal } from "@components/molecules/modals/modal.js";
import { Button } from "@components/atoms/buttons/buttons.js";
import { Icons } from "@components/icons/icons.js";
import { Fieldset } from "@components/atoms/form/fieldset.js";
import { Div } from "@base-framework/atoms";
import { Input, Textarea } from "@components/atoms/form/input.js";

/**
 * This will create a modal form.
 *
 * @returns {object}
 */
const ModalForm = ({
	type = 'right'
}) => (
	new Modal({
		title: 'Report an Issue',
		icon: Icons.warning,
		description: "What area are you having problems with?",
		size,
		type,
		onSubmit: () => console.log('Form submitted')
	}, [
		Div({ class: 'flex flex-col max-w-lg p-4 space-y-8' }, [
			Fieldset({ legend: 'Issue Details' }, [
				// Row for Area and Security Level
				Div({ class: "flex flex-auto w-full gap-4" }, [
					// Area field
					new FormField({ name: "area", label: "Area" }, [
						Select({
							required: true,
							class: "border p-2 rounded-md w-full bg-background text-foreground",
							options: [
								{ value: "billing", label: "Billing" },
								{ value: "technical", label: "Technical" },
								{ value: "account", label: "Account" },
								{ value: "other", label: "Other" }
							],
							defaultValue: "billing",
							change: (e) => console.log(\`Area selected: \${e.target.value}\`)
						})
					]),

					// Security Level field
					new FormField({ name: "security_level", label: "Security Level" }, [
						Select({
							required: true,
							class: "border p-2 rounded-md w-full bg-background text-foreground",
							options: [
								{ value: "severity_1", label: "Severity 1" },
								{ value: "severity_2", label: "Severity 2" },
								{ value: "severity_3", label: "Severity 3" }
							],
							defaultValue: "severity_2",
							change: (e) => console.log(\`Security Level selected: \${e.target.value}\`)
						})
					])
				]),

				// Subject field
				new FormField({
					name: "subject",
					label: "Subject",
				}, [
					Input({
						type: "text",
						placeholder: "I need help with...",
						required: true,
						class: "border p-2 rounded-md w-full bg-background text-foreground placeholder-muted-foreground"
					})
				]),

				// Description field
				new FormField({
					name: "description",
					label: "Description",
				}, [
					Textarea({
						placeholder: "Please include all information relevant to your issue.",
						required: true,
						class: "border p-2 rounded-md w-full bg-background text-foreground placeholder-muted-foreground"
					})
				])
			])
		])
	])
);`
			})
        ]
    )
);

export default DocPage;