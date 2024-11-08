import { Div, P, Span } from "@base-framework/atoms";
import { Avatar } from "@components/molecules/avatar.js";
import { DocSection } from "../../../molecules/doc-section.js";
import { DocPage } from '../../doc-page.js';

/**
 * AvatarPage
 *
 * This will create an avatar page.
 *
 * @param {object} props
 * @param {object} children
 * @returns {DocPage}
 */
export const AvatarPage = () => (
    DocPage(
        {
            title: 'Avatars',
            description: 'Avatars are used to represent users or objects visually, with customizable sizes and optional status indicators.',
        },
        [
            // Basic Avatars by Size
            DocSection({
                title: 'Extra Small Avatar (xs)',
                description: 'An extra small avatar for compact spaces.',
                preview: [
                    Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'xs' })
                ],
                code: `Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'xs' })`
            }),

            DocSection({
                title: 'Small Avatar (sm)',
                description: 'A small avatar suitable for lists and compact layouts.',
                preview: [
                    Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'sm' })
                ],
                code: `Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'sm' })`
            }),

            DocSection({
                title: 'Medium Avatar (md)',
                description: 'A medium-sized avatar, often used for standard profile images.',
                preview: [
                    Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'md' })
                ],
                code: `Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'md' })`
            }),

            DocSection({
                title: 'Large Avatar (lg)',
                description: 'A large avatar for prominent profile displays.',
                preview: [
                    Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'lg' })
                ],
                code: `Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'lg' })`
            }),

            DocSection({
                title: 'Extra Large Avatar (xl)',
                description: 'An extra-large avatar for detailed user profile sections.',
                preview: [
                    Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'xl' })
                ],
                code: `Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'xl' })`
            }),

            DocSection({
                title: '2x Extra Large Avatar (2xl)',
                description: 'A double extra-large avatar for large displays.',
                preview: [
                    Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: '2xl' })
                ],
                code: `Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: '2xl' })`
            }),

            DocSection({
                title: '3x Extra Large Avatar (3xl)',
                description: 'A triple extra-large avatar for the largest profile displays.',
                preview: [
                    Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: '3xl' })
                ],
                code: `Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: '3xl' })`
            }),

            // Avatar with Name and Subtitle
            DocSection({
                title: 'Avatar with Name and Subtitle',
                description: 'Display an avatar alongside a name and subtitle for user identification.',
                preview: [
                    Div({ class: 'flex items-center gap-4 p-4 bg-card rounded-md border shadow-md' }, [
                        Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'lg' }),
                        Div({}, [
                            Span({ class: 'text-lg font-semibold text-foreground' }, 'Leslie Alexander'),
                            P({ class: 'text-sm text-muted-foreground' }, 'leslie.alexander@example.com')
                        ])
                    ])
                ],
                code: `Div({ class: 'flex items-center gap-4 p-4 bg-card rounded-md border shadow-md' }, [
    Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'lg' }),
    Div({}, [
        Span({ class: 'text-lg font-semibold text-foreground' }, 'Leslie Alexander'),
        P({ class: 'text-sm text-muted-foreground' }, 'leslie.alexander@example.com')
    ])
])`
            }),

            // Avatar with Online Status Indicator
            DocSection({
                title: 'Avatar with Online Status',
                description: 'Displays an avatar with a small online status indicator.',
                preview: [
                    Div({ class: 'relative flex items-center gap-4 p-4 bg-card rounded-md border shadow-md' }, [
                        Div({ class: 'relative' }, [
                            Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'lg' }),
                            Div({ class: 'absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 rounded-full' }) // Online indicator
                        ]),
                        Div({}, [
                            Span({ class: 'text-lg font-semibold text-foreground' }, 'Leslie Alexander'),
                            P({ class: 'text-sm text-muted-foreground' }, 'leslie.alexander@example.com')
                        ])
                    ])
                ],
                code: `Div({ class: 'relative flex items-center gap-4 p-4 bg-card rounded-md border shadow-md' }, [
    Div({ class: 'relative' }, [
        Avatar({ src: 'https://github.com/shadcn.png', alt: '@shadcn', fallbackText: 'CN', size: 'lg' }),
        Div({ class: 'absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 rounded-full' }) // Online indicator
    ]),
    Div({}, [
        Span({ class: 'text-lg font-semibold text-foreground' }, 'Leslie Alexander'),
        P({ class: 'text-sm text-muted-foreground' }, 'leslie.alexander@example.com')
    ])
])`
            })
        ]
    )
);

export default AvatarPage;