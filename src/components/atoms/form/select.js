import { Atom, Html } from '@base-framework/base';

/**
 * This will create a select component.
 *
 * @param {object} props
 * @returns {object}
 */
export const Select = Atom((props) =>
{
    return {
        tag: 'select',
        ...props,
        class: `flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${props.class || ''}`,
        onCreated(ele)
        {
            if (props.options)
            {
                Html.setupSelectOptions(ele, props.options);
            }
        }
    };
});
