import { Div, Input, Span } from "@base-framework/atoms";
import { Button } from "@components/atoms/buttons/buttons.js";
import { Card } from "@components/atoms/cards/card.js";
import { Icon } from "@components/atoms/icon.js";
import { Icons } from "@components/icons/icons.js";
import { Form, FormField } from "@components/molecules/form/form.js";
import { CardHeader } from "./card-atoms.js";

/**
 * This will create the social sign-in buttons.
 *
 * @returns {object}
 */
const SocialSignIn = () => (
    Div({ class: "flex items-center justify-center gap-4" }, [
        Button({
            variant: 'outline',
            class: "gap-2 w-full",
            click: () => console.log("Sign in with Github")
        }, [
            Icon({ class: "w-4 h-4" }, Icons.companies.gitHub || ''),
            Span("Github")
        ]),
        Button({
            variant: 'outline',
            class: "gap-2 w-full",
            click: () => console.log("Sign in with Google")
        }, [
            Icon({ class: "w-4 h-4" }, Icons.companies.google || ''),
            Span("Google")
        ])
    ])
);

/**
 * This will create a form for account creation.
 *
 * @returns {object}
 */
const AccountForm = () => (
    // Form for Email and Password
    Form({ submit: (e) => { e.preventDefault(); console.log("Account created"); } }, [
        // Email field
        new FormField({
            name: "email",
            label: "Email",
        }, [
            Input({
                type: "email",
                placeholder: "m@example.com",
                required: true,
                class: "border p-2 rounded-md w-full bg-background placeholder-muted-foreground text-foreground"
            })
        ]),

        // Password field
        new FormField({
            name: "password",
            label: "Password",
        }, [
            Input({
                type: "password",
                placeholder: "Your password",
                required: true,
                class: "border p-2 rounded-md w-full bg-background placeholder-muted-foreground text-foreground"
            })
        ]),

        // Submit button
        Button({
            type: "submit",
            class: "w-full mt-4 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition"
        }, "Create account")
    ])
);

/**
 * Account Card
 *
 * This component creates a card for account creation, including social sign-in options.
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
export const AccountCard = () => (
    Card({ class: "w-full max-w-md mx-auto p-8 bg-card space-y-6" }, [
        CardHeader({ title: "Create an account", description: "Enter your email below to create your account" }),
        SocialSignIn(),

        Div({ class: "relative" }, [
            Div({ class: "absolute inset-0 flex items-center" }, [
                Span({ class: "flex-grow border-t" })
            ]),
            Div({ class: 'relative flex justify-center text-xs uppercase' }, [
                Span({ class: 'bg-background px-2 text-muted-foreground' }, "or continue with")
            ]),

        ]),

        AccountForm()
    ])
);

export default AccountCard;