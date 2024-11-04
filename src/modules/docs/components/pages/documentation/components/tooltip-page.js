import { Div, P } from "@base-framework/atoms";
import { Button } from "@components/atoms/buttons/buttons.js";
import { Tooltip } from "@components/atoms/tooltip.js";
import { DocSection } from "../../../molecules/doc-section.js";
import { DocPage } from '../../doc-page.js';

/**
 * TooltipPage
 *
 * This will create a tooltip page.
 *
 * @param {object} props
 * @param {object} children
 * @returns {DocPage}
 */
export const TooltipPage = () => (
	DocPage(
        {
            title: 'Tooltips',
            description: 'This is a tooltip.',
        },
        [
            DocSection({
                title: 'Usage',
                description: 'Import the card atom and use it in your components.',
                preview: [
                    Div({ class: 'flex gap-2 flex-wrap' }, [
                        Tooltip({ content: 'This is a tooltip.' }, [
                            Button('Hover me')
                        ])
                    ])
                ],
                code: `import { Button } from "@components/atoms/buttons/buttons.js";
import { Tooltip } from "@components/atoms/tooltip.js";

Tooltip({ content: 'This is a tooltip.' }, [
    Button('Hover me')
])`
            }),

            DocSection({
                title: 'Bottom Tooltip',
                description: 'This will show the tooltip at the bottom of the target element.',
                preview: [
                    Div({ class: 'flex gap-2 flex-wrap' }, [
                        Tooltip({ content: 'This is a tooltip.', position: 'bottom' }, [
                            Button('Hover me')
                        ])
                    ])
                ],
                code: `import { Button } from "@components/atoms/buttons/buttons.js";
import { Tooltip } from "@components/atoms/tooltip.js";

Tooltip({ content: 'This is a tooltip.', position: 'bottom' }, [
    Button('Hover me')
])`
            }),

            P({ class: 'text-muted-foreground text-sm mt-4' }, 'The tooltip position can be set to: top, top-right, top-left, bottom, bottom-right, bottom-left, left, right.')
        ]
    )
);

export default TooltipPage;