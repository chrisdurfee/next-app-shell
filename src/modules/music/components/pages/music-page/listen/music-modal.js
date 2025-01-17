import { Div } from "@base-framework/atoms";
import { Fieldset, Input } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";
import { Counter, FormField, Modal } from "@base-framework/ui/molecules";

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
		// @ts-ignore
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
					new FormField({ name: "location", label: "Location", description: "The location of the artist." }, [
						Input({
							type: "text",
							placeholder: "Location",
							required: true
						})
					]),
					new FormField({ name: "website", label: "Website", description: "The website of the artist." }, [
						Input({
							type: "text",
							placeholder: "Website",
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