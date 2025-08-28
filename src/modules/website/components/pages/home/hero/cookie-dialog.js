import { Div, Form, Span } from '@base-framework/atoms';
import { Button } from "@base-framework/ui/atoms";
import { Dialog, Toggle } from "@base-framework/ui/molecules";

/**
 * CookieToggle
 *
 * Creates a row for each cookie setting with a toggle.
 *
 * @param {object} props - The title of the cookie setting.
 * @returns {object} - A toggle row element.
 */
const CookieToggle = ({ title, description, defaultState, onChange }) => (
    Div({ class: "flex items-start justify-between gap-2" }, [
        // Cookie Information
        Div({ class: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-col gap-y-1" }, [
            Span({ class: "font-medium text-foreground" }, title),
            Span({ class: "font-normal leading-snug text-muted-foreground" }, description),
        ]),
        // Toggle Switch
        new Toggle({
            active: defaultState,
            change: onChange
        })
    ])
);

/**
 * This will submit the form.
 *
 * @param {object} props
 * @returns {function}
 */
const onSubmit = (props) =>
{
    return (e, parent) =>
    {
        e.preventDefault();
        e.stopPropagation();

        parent.close();
        props.onClose();
    };
};

/**
 * This will create the cookie form.
 *
 * @param {object} props
 * @returns {object}
 */
const CookieForm = (props) => (
    Form({ class: 'flex flex-auto flex-col gap-y-8 mt-8', submit: onSubmit(props) }, [
        Div({ class: 'pt-0 grid gap-6' }, [
            // Cookie Settings Options
            CookieToggle({
                title: "Strictly Necessary",
                description: "These cookies are essential in order to use the website and use its features.",
                defaultState: true,
                onChange: (active) => console.log("Strictly Necessary:", active)
            }),
            CookieToggle({
                title: "Functional Cookies",
                description: "These cookies allow the website to provide personalized functionality.",
                defaultState: false,
                onChange: (active) => console.log("Functional Cookies:", active)
            }),
            CookieToggle({
                title: "Performance Cookies",
                description: "These cookies help to improve the performance of the website.",
                defaultState: false,
                onChange: (active) => console.log("Performance Cookies:", active)
            })
        ]),

        // Save Preferences Button
        Button({
            variant: 'outline',
            type: "submit",
            class: "w-full",
        }, "Save preferences")
    ])
);

/**
 * This will create a cookie dialog.
 *
 * @param {object} props
 * @returns {object}
 */
export const CookieDialog = (props) => (
    new Dialog({
        hideFooter: true,
        title: "Cookie Settings",
        description: "Manage your cookie settings here.",
    }, [
        CookieForm(props)
    ])
);