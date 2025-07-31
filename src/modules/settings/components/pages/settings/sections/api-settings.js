import { Div, H2, Label, P } from "@base-framework/atoms";
import { Button, Card, FormGroup, Input } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";
import { FormField } from "@base-framework/ui/molecules";
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
			description: '',
			class: 'max-w-5xl mx-auto space-y-6',
			submit: (data) => console.log("API Settings:", data)
		}, [

			// Project URL
			Card({ class: 'space-y-4' }, [
				H2({ class: 'text-lg font-semibold border-b pb-4' }, 'Project URL'),
				FormGroup({ label: 'URL', description: '' }, [
                    Div({ class: 'space-y-6 md:pr-8' }, [
                        new FormField({
                            name: "projectUrl",
                            label: "",
                            description: "A RESTful endpoint for querying and managing your database."
                        }, [
                            Div({ class: 'flex flex-auto space-x-2' }, [
                                Input({ placeholder: "e.g. https.example.com", required: true, value: 'https://fnvapfpqjfkb...supabase.co' }),
                                Button({ variant: 'icon', class: 'outline', icon: Icons.clipboard.document.default })
                            ])
                        ])
                    ])
                ])
			]),

			// API Keys
			Card({ class: 'p-6 bg-muted border rounded-xl space-y-6' }, [
				H2({ class: 'text-lg font-semibold' }, 'Project API keys'),
				P({ class: 'text-sm text-muted-foreground' }, 'Your API is secured behind an API gateway which requires an API Key for every request. You can use the keys below in the Supabase client libraries.'),

				// Public anon key
				Div({ class: 'space-y-1' }, [
					Div({ class: 'flex items-center space-x-2' }, [
						Button({ size: 'sm', variant: 'outline' }, 'anon'),
						Button({ size: 'sm', variant: 'secondary' }, 'public')
					]),
					Div({ class: 'flex items-center mt-2' }, [
						Input({
							value: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
							readOnly: true,
							class: 'w-full font-mono text-xs'
						}),
						Button({ variant: 'ghost', class: 'ml-2 text-xs' }, 'Copy')
					]),
					P({ class: 'text-xs text-muted-foreground mt-1' }, 'This key is safe to use in a browser if you have enabled Row Level Security for your tables and configured policies.')
				]),

				// Service role key
				Div({ class: 'space-y-1' }, [
					Div({ class: 'flex items-center space-x-2' }, [
						Button({ size: 'sm', variant: 'destructive' }, 'service_role'),
						Button({ size: 'sm', variant: 'outline' }, 'secret')
					]),
					Div({ class: 'flex items-center mt-2' }, [
						Input({
							value: '**** **** **** ****',
							readOnly: true,
							class: 'w-full font-mono text-xs'
						}),
						Button({ variant: 'secondary', class: 'ml-2 text-xs' }, 'Reveal')
					]),
					P({ class: 'text-xs text-muted-foreground mt-1' }, 'This key has the ability to bypass Row Level Security. Never share it publicly.')
				])
			]),

			// JWT Secret
			Card({ class: 'p-6 bg-muted border rounded-xl space-y-6' }, [
				H2({ class: 'text-lg font-semibold' }, 'JWT Settings'),
				Div({ class: 'space-y-1' }, [
					Label({ class: 'text-sm font-medium text-muted-foreground' }, 'JWT Secret'),
					Div({ class: 'flex items-center mt-2' }, [
						Input({
							value: '**** **** **** ****',
							readOnly: true,
							class: 'w-full font-mono text-xs'
						}),
						Button({ variant: 'secondary', class: 'ml-2 text-xs' }, 'Reveal')
					]),
					P({ class: 'text-xs text-muted-foreground mt-1' }, 'Used to decode your JWTs. You can also use this to mint your own JWTs.')
				])
			])
		])
	])
);

export default ApiSettings;