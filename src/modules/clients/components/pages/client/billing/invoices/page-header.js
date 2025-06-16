import { Div, H1 } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";

/**
 * Header for the invoice page.
 *
 * @returns {object}
 */
export const PageHeader = Atom(() =>
    Div({ class: "space-y-2 mb-8" }, [
        H1({ class: "text-3xl font-bold tracking-tight" }, "Billing Invoices")
    ])
);
