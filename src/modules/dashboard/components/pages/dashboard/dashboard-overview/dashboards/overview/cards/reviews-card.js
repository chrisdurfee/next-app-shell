import { Div, H3, P, Span } from "@base-framework/atoms";
import { Card } from "@base-framework/ui/atoms";

/**
 * A single rating‐breakdown row.
 *
 * @param {object} props
 * @returns {object}
 */
const ReviewItem = ({ stars, count, maxCount, colorClass }) =>
    Div({ class: "flex items-center gap-x-4" }, [
        // “5★” label
        Span({ class: "w-10 text-sm font-medium" }, `${stars}★`),

        // bar track + fill
        Div({ class: "flex-1 h-2 bg-muted rounded-full overflow-hidden" }, [
            Span({
                class: `block h-full ${colorClass}`,
                style: `width: ${(count / maxCount) * 100}%`,
            }),
        ]),

        // count label
        Span({ class: "w-12 text-sm font-medium text-right" }, `${count}`),
    ]);

/**
 * ReviewsCard
 *
 * “Customer Reviews” with average + breakdown bars.
 *
 * @param {object} props
 * @returns {object}
 */
export const ReviewsCard = ({
    total = 5500,
    average = 4.5,
    breakdown = [
        { stars: 5, count: 4000, colorClass: "bg-green-500" },
        { stars: 4, count: 2100, colorClass: "bg-lime-500" },
        { stars: 3, count: 800, colorClass: "bg-yellow-500" },
        { stars: 2, count: 631, colorClass: "bg-orange-500" },
        { stars: 1, count: 344, colorClass: "bg-red-500" },
    ],
} = {}) => {
    const maxCount = Math.max(...breakdown.map((d) => d.count));

    return Card({ padding: "p-0", margin: "m-0", class: "col-span-4" }, [
        // Header row
        Div({ class: "flex flex-col md:flex-row md:justify-between md:items-end gap-y-1.5 md:gap-y-0 p-6" }, [
                Div({ class: "flex flex-col gap-y-1" }, [
                    H3({ class: "font-semibold leading-none tracking-tight" }, "Customer Reviews"),
                    P({ class: "text-sm text-muted-foreground" }, `Based on ${total.toLocaleString()} verified purchases`),
                ])
            ]
        ),

        // Content: average + breakdown
        Div({ class: "flex flex-col lg:flex-row px-6 pb-6 gap-y-6 lg:gap-y-0 lg:gap-x-8" },
            [
                // Average summary
                Div({ class: "flex flex-col items-center lg:items-start gap-y-2 w-full lg:w-1/3" }, [
                    // Stars
                    Div({ class: "flex gap-x-1" },
                        Array.from({ length: 5 }).map((_, i) =>
                                Span({ class: i < Math.floor(average) ? "text-yellow-400" : "text-yellow-200" }, "★")
                            )
                        ),
                        // Numeric average
                        Span({ class: "text-4xl font-bold" }, average.toFixed(1)),
                        P({ class: "text-sm text-muted-foreground" }, "out of 5"),
                    ]
                ),

                // Breakdown bars
                Div({ class: "flex-1 flex flex-col gap-y-4" },
                    breakdown.map((item) =>
                        ReviewItem({ ...item, maxCount })
                    )
                ),
            ]
        ),
    ]);
};

export default ReviewsCard;