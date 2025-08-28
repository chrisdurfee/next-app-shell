import { Div, P } from "@base-framework/atoms";
import { Button, Input } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";
import { FormCard, FormCardContent, FormCardGroup, FormField } from "@base-framework/ui/molecules";
import { Page } from "@base-framework/ui/pages";
import { SettingsSection } from "../atoms/settings-section.js";

/**
 * ApiSettings
 *
 * Settings layout styled like Supabase API panel.
 *
 * @returns {object}
 */
export const ApiSettings = () => (
	new Page([
		SettingsSection({
			title: 'API Settings',
			description: 'Manage your API settings and keys.',
			class: 'max-w-5xl mx-auto',
			submit: (data) => console.log("API Settings:", data)
		}, [

			// Project URL
			FormCard({ title: 'Project URL' }, [
				FormCardGroup({ label: 'URL', description: '', border: true }, [
					new FormField({
							name: "projectUrl",
							label: "",
							description: "A RESTful endpoint for querying and managing your database."
						}, [
							Div({ class: 'flex flex-auto gap-x-2' }, [
								Input({ placeholder: "e.g. https://example.supabase.co", required: true, value: 'https://fnvapfpqjfkb...supabase.co' }),
								Button({ variant: 'icon', class: 'outline', icon: Icons.clipboard.document.default })
						])
					])
				])
			]),

			// Project API keys
			FormCard({ title: 'Project API keys' }, [
				FormCardContent([
					P({ class: 'text-sm text-muted-foreground max-w-[700px]' },
						'Your API is secured behind an API gateway which requires an API Key for every request. You can use the keys below in the Supabase client libraries.'
					),
					Div({ class: 'flex-none' }, [
						Button({ variant: 'withIcon', class: 'outline', icon: Icons.bookOpen }, 'View Docs'),
					])
				]),

				// Public anon key
				FormCardGroup({ label: 'anon / public', description: '', border: true }, [
					new FormField({
						name: "anonKey",
						label: "",
						description: "This key is safe to use in a browser if you have enabled Row Level Security for your tables and configured policies."
					}, [
						Div({ class: 'flex flex-auto gap-x-2' }, [
							Input({ value: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...', readOnly: true }),
							Button({ variant: 'icon', class: 'outline', icon: Icons.clipboard.document.default })
						])
					])
				]),

				// Service role key
				FormCardGroup({ label: 'service_role / secret', description: '', border: true }, [
					new FormField({
						name: "serviceRoleKey",
						label: "",
						description: "This key has the ability to bypass Row Level Security. Never share it publicly."
					}, [
						Div({ class: 'flex flex-auto gap-x-2' }, [
							Input({ value: '**** **** **** ****', readOnly: true }),
							Button({ variant: 'icon', class: 'outline', icon: Icons.eye.default })
						])
					])
				])
			]),

			// JWT Settings
			FormCard({ title: 'JWT Settings' }, [
				FormCardGroup({ label: 'JWT Secret', description: '', border: true }, [
					new FormField({
						name: "jwtSecret",
						label: "",
						description: "Used to decode your JWTs. You can also use this to mint your own JWTs."
					}, [
						Div({ class: 'flex flex-auto gap-x-2' }, [
							Input({ value: '**** **** **** ****', readOnly: true }),
							Button({ variant: 'icon', class: 'outline', icon: Icons.eye.default })
						])
					])
				])
			])
		])
	])
);

export default ApiSettings;