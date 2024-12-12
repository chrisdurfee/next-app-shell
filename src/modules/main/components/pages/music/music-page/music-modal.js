import { Div } from "@base-framework/atoms";
import { Fieldset } from "@components/atoms/form/fieldset.js";
import { Input } from "@components/atoms/form/input.js";
import { Icons } from "@components/icons/icons.js";
import { Counter } from "@components/molecules/counters/counter.js";
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
			description: "The music has been added.",
			icon: Icons.check
		})
	}, [
		Div({ class: 'flex flex-col lg:p-4 space-y-8' }, [
			// Row for Area and Security Level
			Div({ class: "flex flex-auto flex-col w-full gap-4" }, [
				Fieldset({ legend: "Artist Settings" }, [
					new FormField({ name: "artist", label: "Artists", description: "The name of the Artist." }, [
						Input({
							type: "text",
							placeholder: "Artist name",
							required: true
						})
					]),
				]),
				Fieldset({ legend: "Album Details" }, [
					new FormField({ name: "album", label: "Album", description: "The name of the Album." }, [
						Input({
							type: "text",
							placeholder: "Album name",
							required: true
						})
					]),
					new FormField({ name: "year", label: "Year", description: "The year the album was released." }, [
						Input({
							type: "text",
							placeholder: "Year released",
							required: true
						})
					]),
					new FormField({ name: "genre", label: "Genre", description: "The genre of the music." }, [
						Input({
							type: "text",
							placeholder: "Genre",
							required: true
						})
					]),
					new FormField({ name: "duration", label: "Duration", description: "The duration of the music." }, [
						Input({
							type: "text",
							placeholder: "Duration",
							required: true
						})
					]),
					new FormField({ name: "tracks", label: "Tracks", description: "The number of tracks in the album." }, [
						new Counter({
                            class: 'max-w-[300px]',
                            initialCount: 0,
                            min: 0,
                            max: 200,
                            readonly: false,
                            bind: 'tracks',
                            change: (value) => console.log(value)
                        })
					]),
				])
			])
		])
	]).open()
);