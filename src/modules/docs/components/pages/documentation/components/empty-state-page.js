import { Button } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";
import { EmptyState } from "@base-framework/ui/molecules";
import { DocSection } from "../../../molecules/doc-section.js";
import { DocPage } from '../../doc-page.js';

/**
 * EmptyStatePage
 *
 * This will create a badge page.
 *
 * @returns {object}
 */
export const EmptyStatePage = () => (
	DocPage(
        {
            title: 'Empty State',
            description: 'An empty state is a placeholder for when there is no content to display.'
        },
        [
            DocSection({
                title: 'Empty State',
                description: 'This is an empty state.',
                preview: [
                    EmptyState({
                        title: 'No Data Available',
                        description: 'There is no data to display at the moment.',
                        icon: Icons.photo
                    })
                ],
                code: `
import { Button } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";
import { EmptyState } from "@base-framework/ui/molecules";

EmptyState({
    title: 'No Data Available',
    description: 'There is no data to display at the moment.',
    icon: Icons.photo
});`
            }),

            DocSection({
                title: 'Empty State With Action',
                description: 'This is an empty state with an action.',
                preview: [
                    EmptyState({
                        title: 'No Data Available',
                        description: 'There is no data to display at the moment.',
                        icon: Icons.circleX
                    }, [
                        Button({ variant: 'withIcon', icon: Icons.plus }, 'Create New')
                    ])
                ],
                code: `
import { Button } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";
import { EmptyState } from "@base-framework/ui/molecules";

EmptyState({
    title: 'No Data Available',
    description: 'There is no data to display at the moment.',
    icon: Icons.circleX
}, [
    Button({ type: 'primary' }, 'Create New')
]);`
            }),

            DocSection({
                title: 'Empty State Without Icon',
                description: 'This is an empty state without an icon.',
                preview: [
                    EmptyState({
                        title: 'No Data Available',
                        description: 'There is no data to display at the moment.',
                    }, [
                        Button({ variant: 'withIcon', icon: Icons.plus }, 'Create New')
                    ])
                ],
                code: `
import { Button } from "@base-framework/ui/atoms";
import { EmptyState } from "@base-framework/ui/molecules";

EmptyState({
    title: 'No Data Available',
    description: 'There is no data to display at the moment.',
}, [
    Button({ type: 'primary' }, 'Create New')
]);`
            })
        ]
    )
);

export default EmptyStatePage;