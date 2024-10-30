import { A, Div, Nav, Span } from '@base-framework/atoms';
import { Data, Jot } from '@base-framework/base';

/**
 * BreadcrumbLink Atom
 *
 * @param {string} href
 * @param {string} label
 * @returns {object}
 */
const BreadcrumbLink = (href, label) => (
    A(
        {
            href,
            'aria-current': label === 'Breadcrumb' ? 'page' : null, // Only set aria-current on the last item
            class: 'text-muted-foreground hover:text-foreground'
        },
        [Span(label)]
    )
);

/**
 * BreadcrumbSeparator Atom
 *
 * @returns {object}
 */
const BreadcrumbSeparator = () => (
    Span({
        class: 'mx-2 text-muted-foreground',
        'aria-hidden': true,
        html: '>'
    })
);

/**
 * BreadcrumbItem Atom
 *
 * @param {object} item
 * @returns {object}
 */
const BreadcrumbItem = (item) => {
    return Div({ class: 'flex items-center' }, [
        (item.href) ? BreadcrumbLink(item.href, item.label) : Span(item.label),
        item.separator && BreadcrumbSeparator()
    ]);
};

/**
 * Breadcrumb Component
 *
 * @param {object} props
 * @returns {object}
 */
export const Breadcrumb = Jot(
{
    /**
     * Set initial data
     *
     * @returns {Data}
     */
    setData()
    {
        return new Data({
            items: this.items || []
        });
    },

    /**
     * Render Breadcrumb Component
     *
     * @returns {object}
     */
    render()
    {
        return Nav(
            {
                'aria-label': 'Breadcrumb',
                class: 'flex items-center space-x-1 text-sm'
            },
            [
                Div({
                    role: 'list',
                    class: 'flex items-center',
                    for: ['items', (item, index) => (
                        BreadcrumbItem({
                            href: item.href,
                            label: item.label,
                            separator: index < this.data.items.length - 1
                        })
                    )]
                })
            ]
        );
    }
});
