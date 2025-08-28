import { Div } from "@base-framework/atoms";
import { Fieldset, Input } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";
import { FormField, Modal } from "@base-framework/ui/molecules";

/**
 * This will create a modal for adding and editing an employee.
 *
 * @param {object} props
 * @returns {object}
 */
export const EmployeeModal = (props) => (
	new Modal({
		title: 'Edit Employee',
		icon: Icons.pencil.square,
		description: "What employee would you like to edit?",
		size: 'sm',
		type: 'right',
		// @ts-ignore
		onSubmit: () => app.notify({
			type: "success",
			title: "Employee Edited",
			description: "The employee has been edited.",
			icon: Icons.check
		})
	}, [
		Div({ class: 'flex flex-col lg:p-4 gap-y-8' }, [
			// Row for Area and Security Level
			Div({ class: "flex flex-auto flex-col w-full gap-4" }, [
				Fieldset({ legend: "Employee Details" }, [
					new FormField({ name: "name", label: "Name", description: "The name of the employee." }, [
						Input({
							type: "text",
							placeholder: "Employee name",
							required: true
						})
					]),
					new FormField({ name: "location", label: "Location", description: "The location of the employee." }, [
						Input({
							type: "text",
							placeholder: "Location",
							required: true
						})
					])
				])
			])
		])
	]).open()
);