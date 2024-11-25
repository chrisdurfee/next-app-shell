import { Button, Div } from "@base-framework/atoms";
import { Skeleton } from "@components/atoms/skeleton.js";

/**
 * This will create the EmailDetail organism.
 *
 * @param {object} props
 * @param {object} children
 */
export const EmailDetail = ({ message }) => (
    Div({ class: "w-full flex flex-col p-4 space-y-4" }, [
        Div({ class: "flex justify-between items-center border-b pb-4" }, [
            Skeleton({ shape: "rectangle", width: "w-40", height: "h-6" }), // Replace with actual title
            Div({ class: "flex space-x-2" }, [
                Button({ class: "bg-muted text-base px-3 py-1 rounded" }, "Reply"),
                Button({ class: "bg-muted text-base px-3 py-1 rounded" }, "Forward"),
            ]),
        ]),
        Skeleton({ shape: "rectangle", width: "w-full", height: "h-32" }), // Replace with message content
    ])
);