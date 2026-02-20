import { Div } from "@base-framework/atoms";
import { Badge } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";
import { DocSection } from "../../../molecules/doc-section.js";
import { DocPage } from '../../doc-page.js';

/**
 * BadgePage
 *
 * This will create a badge page.
 *
 * @returns {object}
 */
export const BadgePage = () => (
	DocPage(
        {
            title: 'Badges',
            description: 'Badges can be used to display a status or a count.'
        },
        [
            DocSection({
                title: 'Badge',
                description: 'The full set of built-in badge types.',
                preview: [
                    Div({ class: 'flex gap-2 flex-wrap' }, [
                        Badge({ type: 'gray' }, 'Gray'),
                        Badge({ type: 'red' }, 'Red'),
                        Badge({ type: 'yellow' }, 'Yellow'),
                        Badge({ type: 'green' }, 'Green'),
                        Badge({ type: 'blue' }, 'Blue'),
                        Badge({ type: 'indigo' }, 'Indigo'),
                        Badge({ type: 'purple' }, 'Purple'),
                        Badge({ type: 'pink' }, 'Pink'),
                        Badge({ type: 'primary' }, 'Primary'),
                        Badge({ type: 'secondary' }, 'Secondary'),
                        Badge({ type: 'destructive' }, 'Destructive'),
                        Badge({ type: 'warning' }, 'Warning'),
                        Badge({ type: 'outline' }, 'Outline'),
                        Badge({ type: 'ghost' }, 'Ghost'),
                        Badge({ type: 'link' }, 'Link')
                    ])
                ],
                code: `import { Badge } from "@base-framework/ui/atoms";

Badge({ type: 'gray' }, 'Gray')
Badge({ type: 'primary' }, 'Primary')
Badge({ type: 'destructive' }, 'Destructive')`
            }),

            DocSection({
                title: 'Blur',
                description: 'The blur type renders a frosted-glass badge, useful over images or coloured backgrounds.',
                preview: [
                    Div({ class: 'flex gap-2 flex-wrap items-center p-6 rounded-lg bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500' }, [
                        Badge({ type: 'blur' }, 'Blur'),
                        Badge({ type: 'blur' }, 'New'),
                        Badge({ type: 'blur' }, 'Featured')
                    ])
                ],
                code: `import { Badge } from "@base-framework/ui/atoms";

Badge({ type: 'blur' }, 'Blur')`
            }),

            DocSection({
                title: 'Custom Styles',
                description: 'Override individual colour tokens — backgroundColor, textColor, and ringColor — to create one-off badges without adding a new type.',
                preview: [
                    Div({ class: 'flex gap-2 flex-wrap' }, [
                        Badge({
                            type: 'gray',
                            backgroundColor: 'bg-orange-50',
                            textColor: 'text-orange-700',
                            ringColor: 'ring-orange-600/20'
                        }, 'Orange'),
                        Badge({
                            type: 'gray',
                            backgroundColor: 'bg-teal-50',
                            textColor: 'text-teal-700',
                            ringColor: 'ring-teal-600/20'
                        }, 'Teal'),
                        Badge({
                            type: 'gray',
                            backgroundColor: 'bg-rose-100',
                            textColor: 'text-rose-800',
                            ringColor: 'ring-rose-500/30'
                        }, 'Rose')
                    ])
                ],
                code: `import { Badge } from "@base-framework/ui/atoms";

Badge({
    type: 'gray',
    backgroundColor: 'bg-orange-50',
    textColor: 'text-orange-700',
    ringColor: 'ring-orange-600/20'
}, 'Orange')`
            }),

            DocSection({
                title: 'With Icon',
                description: 'Pass any Heroicon or Material Symbol via the icon prop. Use the size prop to control the icon size (defaults to xs).',
                preview: [
                    Div({ class: 'flex gap-2 flex-wrap' }, [
                        Badge({ type: 'green', icon: Icons.check }, 'Verified'),
                        Badge({ type: 'red', icon: Icons.x }, 'Rejected'),
                        Badge({ type: 'yellow', icon: Icons.warning }, 'Warning'),
                        Badge({ type: 'blue', icon: Icons.bell }, 'Alerts'),
                        Badge({ type: 'primary', icon: Icons.star }, 'Featured'),
                        Badge({ type: 'blur', icon: Icons.sparkles }, 'New')
                    ])
                ],
                code: `import { Badge } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";

Badge({ type: 'green', icon: Icons.check }, 'Verified')
Badge({ type: 'red',   icon: Icons.x     }, 'Rejected')
Badge({ type: 'blue',  icon: Icons.bell  }, 'Alerts')

// Control icon size (xs | sm | md | lg | xl | 2xl)
Badge({ type: 'primary', icon: Icons.star, size: 'sm' }, 'Featured')`
            })
        ]
    )
);

export default BadgePage;