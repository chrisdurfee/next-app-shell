import { Div, H1 } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";

/**
 * Header for the payment page.
 *
 * @returns {object}
 */
export const PageHeader = Atom(() =>
    Div({ class: "flex flex-col gap-y-2" }, [
        H1({ class: "text-3xl font-bold tracking-tight" }, "Payment History")
    ])
);
