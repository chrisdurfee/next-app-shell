import { Div } from '@base-framework/atoms';
import { Skeleton } from "@components/atoms/skeleton.js";
import { DocSection } from "../../../molecules/doc-section.js";
import { DocPage } from '../../doc-page.js';

/**
 * SkeletonPage
 *
 * This will create a dialog page.
 *
 * @param {object} props
 * @param {object} children
 * @returns {DocPage}
 */
export const SkeletonPage = () => (
	DocPage(
        {
            title: 'Skeletons',
            description: 'Skeletons are components that are used to show a placeholder for content that is loading.',
        },
        [
            DocSection({
                title: 'Usage',
                description: 'The skeleton component is used to show a placeholder for content that is loading.',
                preview: [
                    Div({ class: 'flex flex-auto space-x-4 w-full max-w-64' }, [
                        Skeleton({ shape: 'circle', width: 'w-10', height: 'h-10' }), // Circle skeleton for avatar
                        Div({ class: 'flex flex-auto flex-col space-y-2' }, [
                            Skeleton({ width: 'w-3/4', height: 'h-4' }), // Long rectangle for main text
                            Skeleton({ width: 'w-1/2', height: 'h-4' })  // Shorter rectangle for subtext
                        ])
                    ])
                ],
                code: `import { Skeleton } from "@components/atoms/skeleton.js";
import { Div } from '@base-framework/atoms';

Div({ class: 'flex flex-auto space-x-4 w-full max-w-64' }, [
    Skeleton({ shape: 'circle', width: 'w-10', height: 'h-10' }), // Circle skeleton for avatar
    Div({ class: 'flex flex-auto flex-col space-y-2' }, [
        Skeleton({ width: 'w-3/4', height: 'h-4' }), // Long rectangle for main text
        Skeleton({ width: 'w-1/2', height: 'h-4' })  // Shorter rectangle for subtext
    ])
])`
            }),

            DocSection({
                title: 'Skeleton Post',
                description: 'This is a skeleton post.',
                preview: [
                    Div({ class: 'space-y-4 flex flex-auto flex-col w-full max-w-64' }, [
                        // Large rectangle for image or main content
                        Skeleton({ width: 'w-full', height: 'h-32', shape: 'rectangle' }),

                        // Text line placeholders
                        Div({ class: 'space-y-2' }, [
                            Skeleton({ width: 'w-3/4', height: 'h-4' }), // Longer text line
                            Skeleton({ width: 'w-1/2', height: 'h-4' })  // Shorter text line
                        ])
                    ])
                ],
                code: `import { Skeleton } from "@components/atoms/skeleton.js";
import { Div } from '@base-framework/atoms';

Div({ class: 'space-y-4 flex flex-auto flex-col space-x-4 w-full max-w-64' }, [
    // Large rectangle for image or main content
    Skeleton({ width: 'w-full', height: 'h-32', shape: 'rectangle' }),

    // Text line placeholders
    Div({ class: 'space-y-2' }, [
        Skeleton({ width: 'w-3/4', height: 'h-4' }), // Longer text line
        Skeleton({ width: 'w-1/2', height: 'h-4' })  // Shorter text line
    ])
])`
            })
        ]
    )
);

export default SkeletonPage;