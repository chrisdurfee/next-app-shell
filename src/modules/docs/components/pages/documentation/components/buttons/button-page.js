import { Div, H2, Header } from "@base-framework/atoms";
import { Button, CircleButton, CircleToggleButton, LoadingButton, ToggleButton } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";
import { DocSection } from "../../../../molecules/doc-section.js";
import { DocPage } from '../../../doc-page.js';

/**
 * ButtonPage
 *
 * This will create a button page.
 *
 * @returns {object}
 */
export const ButtonPage = () => (
	DocPage(
        {
            title: 'Button',
            description: 'Displays a button or a component that looks like a button.'
        },
        [
            DocSection({
                title: 'Usage',
                description: 'Import the button atom and use it in your components. This platform has variants for different use cases. The variant can be set using the `variant` prop.',
                preview: [
                    Button({ variant: 'primary' }, 'Click Me')
                ],
                code: `import {  Button  } from "@base-framework/ui/atoms";

Button({ variant: 'primary', click: () => console.log('clicked') }, 'Click Me')`
            }),

            Header({ class: 'flex flex-col py-8' }, [
                H2({ class: 'text-3xl font-bold tracking-tight border-b pb-2' }, 'Variants'),
            ]),

            DocSection({
                title: 'Primary Button',
                description: 'This is a primary button.',
                preview: [
                    Button({ variant: 'primary' }, 'Click Me')
                ],
                code: `
import {  Button  } from "@base-framework/ui/atoms";
import { Atom } from '@base-framework/base';

export const PrimaryButton = Atom((props, children) => (
    Button({ ...props, variant: 'primary' }, children)
);`
            }),

            DocSection({
                title: 'Secondary Button',
                preview: [
                    Button({ variant: 'secondary' }, 'Secondary')
                ],
                code: `
import {  Button  } from "@base-framework/ui/atoms";
import { Atom } from '@base-framework/base';

export const SecondaryButton = Atom((props, children) => (
    Button({ ...props, variant: 'secondary' }, children)
);`
            }),

            DocSection({
                title: 'Destructive Button',
                preview: [
                    Button({ variant: 'destructive' }, 'Destructive')
                ],
                code: `
import {  Button  } from "@base-framework/ui/atoms";
import { Atom } from '@base-framework/base';

export const DestructiveButton = Atom((props, children) => (
    Button({ ...props, variant: 'destructive' }, children)
);`
            }),

            DocSection({
                title: 'Warning Button',
                preview: [
                    Button({ variant: 'warning' }, 'Warning')
                ],
                code: `import {  Button  } from "@base-framework/ui/atoms";
import { Atom } from '@base-framework/base';

export const WarningButton = Atom((props, children) => (
    Button({ ...props, variant: 'warning' }, children)
);`
            }),

            DocSection({
                title: 'Outline Button',
                preview: [
                    Button({ variant: 'outline' }, 'Outline')
                ],
                code: `
import {  Button  } from "@base-framework/ui/atoms";
import { Atom } from '@base-framework/base';

export const OutlineButton = Atom((props, children) => (
    Button({ ...props, variant: 'outline' }, children)
);`
            }),

            DocSection({
                title: 'Ghost Button',
                preview: [
                    Button({ variant: 'ghost' }, 'Ghost')
                ],
                code: `
import {  Button  } from "@base-framework/ui/atoms";
import { Atom } from '@base-framework/base';

export const GhostButton = Atom((props, children) => (
    Button({ ...props, variant: 'ghost' }, children)
);`
            }),

            DocSection({
                title: 'Link Button',
                preview: [
                    Button({ variant: 'link' }, 'Link')
                ],
                code: `
import {  Button  } from "@base-framework/ui/atoms";
import { Atom } from '@base-framework/base';

export const LinkButton = Atom((props, children) => (
    Button({ ...props, variant: 'link' }, children)
);`
            }),

            DocSection({
                title: 'Icon Button',
                description: 'Displays a button with an icon.',
                preview: [
                    Button({ variant: 'icon', icon: Icons.home })
                ],
                code: `import {  Button  } from "@base-framework/ui/atoms";
import {  Icons  } from "@base-framework/ui/icons";
import { Atom } from '@base-framework/base';

export const IconButton = Atom((props) => (
    Button({ ...props, variant: 'icon', icon: Icons.home })
);`
            }),

            DocSection({
                title: 'With Icon Button',
                preview: [
                    Button({ variant: 'withIcon', icon: Icons.home }, 'With Icon')
                ],
                code: `import {  Button  } from "@base-framework/ui/atoms";
import {  Icons  } from "@base-framework/ui/icons";

Button({ variant: 'withIcon', icon: Icons.home }, 'With Icon')`
            }),

            DocSection({
                title: 'Loading Button',
                preview: [
                    LoadingButton('With Icon')
                ],
                code: `import {  LoadingButton  } from "@base-framework/ui/atoms";

LoadingButton('With Icon')`
            }),

            DocSection({
                title: 'Back Button',
                preview: [
                    Button({ variant: 'back', class: 'ghost', allowHistory: false })
                ],
                code: `import {  Button  } from "@base-framework/ui/atoms";

Button({ variant: 'back', class: 'ghost', allowHistory: false })`
            }),

            DocSection({
                title: 'Circle Icon Button',
                description: 'Displays a circular icon button with a semi-transparent background. Supports multiple sizes: xs, sm, md, lg, xl.',
                preview: [
                    Button({ variant: 'circleIcon', icon: Icons.home, size: 'md' })
                ],
                code: `import { Button } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";

// Default size (md)
Button({ variant: 'circleIcon', icon: Icons.home })

// With custom size
Button({ variant: 'circleIcon', icon: Icons.home, size: 'lg' })`
            }),

            Header({ class: 'flex flex-col py-8' }, [
                H2({ class: 'text-3xl font-bold tracking-tight border-b pb-2' }, 'Toggle & Circle Buttons'),
            ]),

            DocSection({
                title: 'Toggle Button',
                description: 'A social-action style button with an active/inactive state, an optional count, and a toggle callback. Use activeIcon to swap the icon when toggled.',
                preview: [
                    Div({ class: 'flex gap-4 items-center' }, [
                        new ToggleButton({ icon: Icons.heart, value: 234 }),
                        new ToggleButton({ icon: Icons.heart, active: true, value: 234 }),
                        new ToggleButton({ icon: Icons.thumbsUp, value: 18 }),
                        new ToggleButton({ icon: Icons.bookmark }),
                    ])
                ],
                code: `import { ToggleButton } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";

// With a static count
new ToggleButton({ icon: Icons.heart, value: 234, toggle: (active) => console.log(active) })

// Starts active
new ToggleButton({ icon: Icons.heart, active: true, value: 234 })

// Swap icon when active
new ToggleButton({ icon: Icons.bookmark, activeIcon: Icons.bookmarkSolid })

// Reactive count from a parent data key
new ToggleButton({ icon: Icons.heart, dataKey: 'likeCount', toggle: (active) => {} })`
            }),

            DocSection({
                title: 'Circle Button',
                description: 'A non-toggling circular frosted-glass button for actions like back, share, or menu. Supports sizes: xs, sm, md, lg, xl, 2xl.',
                preview: [
                    Div({ class: 'flex gap-3 items-center p-6 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' }, [
                        CircleButton({ icon: Icons.arrows.left, size: 'sm' }),
                        CircleButton({ icon: Icons.arrows.left, size: 'md' }),
                        CircleButton({ icon: Icons.arrows.left, size: 'lg' }),
                        CircleButton({ icon: Icons.share, size: 'md' }),
                        CircleButton({ icon: Icons.ellipsis.horizontal, size: 'md' }),
                    ])
                ],
                code: `import { CircleButton } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";

CircleButton({ icon: Icons.arrows.left, size: 'sm' })
CircleButton({ icon: Icons.arrows.left, size: 'md' })
CircleButton({ icon: Icons.arrows.left, size: 'lg' })
CircleButton({ icon: Icons.share, size: 'md', click: () => {} })`
            }),

            DocSection({
                title: 'Circle Toggle Button',
                description: 'A circular frosted-glass button with an active/inactive toggle state. Supply activeClass to override the active appearance.',
                preview: [
                    Div({ class: 'flex gap-3 items-center p-6 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' }, [
                        new CircleToggleButton({ icon: Icons.heart, size: 'sm' }),
                        new CircleToggleButton({ icon: Icons.heart, size: 'md', active: true }),
                        new CircleToggleButton({ icon: Icons.star, size: 'md', activeClass: 'bg-yellow-400 text-white' }),
                        new CircleToggleButton({ icon: Icons.bookmark, size: 'lg' }),
                    ])
                ],
                code: `import { CircleToggleButton } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";

// Default — starts inactive
new CircleToggleButton({ icon: Icons.heart, size: 'md', toggle: (active) => console.log(active) })

// Starts active
new CircleToggleButton({ icon: Icons.heart, size: 'md', active: true })

// Custom active appearance
new CircleToggleButton({
    icon: Icons.star,
    size: 'md',
    activeClass: 'bg-yellow-400 text-white'
})

// Swap icon on toggle
new CircleToggleButton({ icon: Icons.bookmark, activeIcon: Icons.bookmarkSolid, size: 'md' })`
            })
        ]
    )
);

export default ButtonPage;