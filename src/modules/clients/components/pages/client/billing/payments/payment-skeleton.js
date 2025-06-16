import { Div } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";
import { Card, Skeleton } from "@base-framework/ui/atoms";

/**
 * PaymentSkeleton
 *
 * Skeleton loading state for the payment page.
 *
 * @returns {object}
 */
const PaymentSkeleton = Atom(() => {
    // Create 5 skeleton items to show while loading
    const skeletonItems = Array(5).fill().map((_, i) => (
        Card({ class: "flex items-center p-4 my-2" }, [
            Div({ class: "flex flex-1 flex-col md:flex-row md:items-center md:justify-between w-full" }, [
                // Left column
                Div({ class: "flex flex-col mb-2 md:mb-0" }, [
                    Skeleton({ class: "h-5 w-32 mb-1" }),
                    Skeleton({ class: "h-4 w-28 mb-1" }),
                    Skeleton({ class: "h-4 w-48" })
                ]),

                // Middle column
                Div({ class: "flex flex-col mb-2 md:mb-0 md:ml-8" }, [
                    Skeleton({ class: "h-5 w-24 mb-1" }),
                    Skeleton({ class: "h-4 w-32 mb-1" }),
                    Skeleton({ class: "h-4 w-40" })
                ]),

                // Right column
                Div({ class: "flex items-center" }, [
                    Skeleton({ class: "h-6 w-20" })
                ])
            ])
        ])
    ));

    return Div({ class: "p-6 2xl:mx-auto w-full contained" }, [
        // Header skeleton
        Div({ class: "space-y-2 mb-8" }, [
            Skeleton({ class: "h-8 w-48 mb-2" }),
            Skeleton({ class: "h-4 w-72" })
        ]),

        // Payment list skeletons
        Div({ class: "space-y-6 mt-12" }, skeletonItems)
    ]);
});

export default PaymentSkeleton;
