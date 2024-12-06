import { Div } from "@base-framework/atoms";
import { Input } from "@components/atoms/form/input.js";
import { Icons } from "@components/icons/icons.js";
import { FormField } from "@components/molecules/form/form.js";
import { Modal } from "@components/molecules/modals/modal.js";

/**
 * This will create a modal for adding music.
 *
 * @param {object} props
 * @returns {object}
 */
export const ClientModal = (props) => (
    new Modal({
		title: 'Add Client',
		icon: Icons.user.plus,
		description: "Let's add a new client.",
		size: 'sm',
		type: 'right',
		onSubmit: () => app.notify({
			type: "success",
			title: "Client Added",
			description: "The client has been added.",
			icon: Icons.check
		})
	}, [
		Div({ class: 'flex flex-col max-w-lg lg:p-4 space-y-8' }, [
			// Row for Area and Security Level
			Div({ class: "flex flex-auto w-full gap-4" }, [
				new FormField({ name: "client", label: "Client", description: "The name of the client." }, [
					Input({
                        type: "text",
                        placeholder: "Client name",
						required: true
                    })
				])
			])
		])
	]).open()
);