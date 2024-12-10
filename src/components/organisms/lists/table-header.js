import { Thead, Tr } from '@base-framework/atoms';
import { CheckboxCol } from './checkbox-col.js';
import { HeaderCol } from './header-col.js';
export { CheckboxCol, HeaderCol };

/**
 * TableHeader Atom
 *
 * Renders the table headers with sorting capability.
 *
 * @param {object} props
 * @returns {object}
 */
export const TableHeader = (props) =>
{
    return Thead([
        Tr({ class: 'text-muted-foreground border-b', map: [props.headers, header =>
            {
                if (header.label === 'checkbox')
                {
                    return CheckboxCol({ toggle: props.toggle });
                }

                return HeaderCol({
                    align: header.align,
                    sortable: header.sortable,
                    key: header.key,
                    label: header.label,
                    sort: props.sort
                });
            }]
        })
    ]);
};
