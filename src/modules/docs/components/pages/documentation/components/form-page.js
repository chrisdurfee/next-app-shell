import { Button } from "@components/atoms/buttons/buttons.js";
import { Input } from "@components/atoms/form/input.js";
import { Form, FormField } from "@components/molecules/form/form.js";
import { DocSection } from "../../../molecules/doc-section.js";
import { DocPage } from '../../doc-page.js';

/**
 * Example usage of the form with validation
 */
export const ProfileForm = () => (
    Form({ submit: (e) => { console.log("Form submitted"); } }, [
        new FormField({
            name: "username",
            label: "Username",
            description: "This is your public display name."
        }, [
            Input({ placeholder: "e.g. email@address.com", required: true })
        ]),

        Button({ type: "submit" }, "Submit")
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
                code: `import { Button } from "@components/atoms/buttons/buttons.js";
import { Input } from "@components/atoms/form/input.js";
import { Form, FormField } from "@components/molecules/form/form.js";

Form([
    new FormField({
        name: "username",
        label: "Username",
        description: "This is your public display name."
    }, [
        Input({ placeholder: "e.g. email@address.com", required: true })
    ]),

    Button({
        type: "submit",
        submit: (e) =>
        {
            e.preventDefault();
            // Handle form submission logic
            console.log("Form submitted");
        }
    }, "Submit")
])`
            })
        ]
    )
);

export default FormPage;