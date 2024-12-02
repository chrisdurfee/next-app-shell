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
export const MusicModal = (props) => (
    new Modal({
		title: 'Add Music',
		icon: Icons.pencil.square,
		description: "What album would you like to add?",
		size: 'sm',
		type: 'right',
		onSubmit: () => app.notify({
			type: "success",
			title: "Music Added",
			description: "The code has been copied to your clipboard.",
			icon: Icons.check
		})
	}, [
		Div({ class: 'flex flex-col max-w-lg lg:p-4 space-y-8' }, [
			// Row for Area and Security Level
			Div({ class: "flex flex-auto w-full gap-4" }, [
				new FormField({ name: "artist", label: "Artists", description: "The name of the Artist." }, [
					Input({
                        type: "text",
                        placeholder: "Artist name",
						required: true
                    })
				])
			])
		])
	]).open()
);