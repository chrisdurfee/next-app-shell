import { Button } from "@components/atoms/buttons/buttons.js";
import { Input } from "@components/atoms/form/input.js";
import { Form, FormField } from "@components/molecules/form/form.js";
import { DocSection } from "../../../molecules/doc-section.js";
import { DocPage } from '../../doc-page.js';

const validateUsername = (value) =>
{
    if (value.length < 2) return "Username must be at least 2 characters.";
    return null;
};

/**
 * Example usage of the form with validation
 */
export const ProfileForm = () => (
    Form([
        new FormField({
            name: "username",
            label: "Username",
            required: true,
            description: "This is your public display name.",
            onValidate: validateUsername
        }, [
            Input({ placeholder: "shadcn" })
        ]),

        Button({
            type: "submit",
            click: (e) =>
            {
                e.preventDefault();
                // Handle form submission logic
                console.log("Form submitted");
            }
        }, "Submit")
    ])
);

/**
 * FormPage
 *
 * This will create a form page.
 *
 * @param {object} props
 * @param {object} children
 * @returns {DocPage}
 */
export const FormPage = () => (
	DocPage(
        {
            title: 'Forms',
            description: 'Forms are used to collect user data and submit it to the server.',
        },
        [
            DocSection({
                title: 'Usage',
                description: 'To use the form component, import it from the components library and use it in your application.',
                preview: [
                    ProfileForm()
                ],
                code: `@components/molecules/combobox/combobox.js';
import { Icons } from "@components/icons/icons.js";

new Combobox({
    items: [
    { value: 'next.js', label: 'Next.js', icon: Icons.home },,
    { value: 'sveltekit', label: 'SvelteKit' },
    { value: 'nuxt.js', label: 'Nuxt.js' },
    { value: 'remix', label: 'Remix' },
    { value: 'astro', label: 'Astro' },
],
})`
            })
        ]
    )
);

export default FormPage;