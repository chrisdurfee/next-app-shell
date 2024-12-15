import { Div } from '@base-framework/atoms';
import { Button } from '@components/atoms/buttons/buttons.js';
import { Icons } from '@components/icons/icons.js';
import { TabGroup } from '@components/organisms/tabs/tab-group.js';

/**
 * This will create the DashboardTabs molecule.
 *
 * @returns {object}
 */
export const DashboardTabs = () => (
    Div({ class: 'flex justify-between items-center w-full md:w-auto' }, [
        new TabGroup({
			class: 'w-full md:w-auto',
            options: [
                { label: 'Week', value: 'week', exact: true },
                { label: 'Month', value: 'month' },
                { label: 'Year', value: 'year' }
            ],
            onSelect: (value) => console.log("Selected tab:", value)
        }),
    ])
);

/**
 * This will create the OrderOptions molecule.
 *
 * @returns {object}
 */
export const OrderOptions = () => (
	Div({ class: 'flex flex-auto flex-row justify-between items-center' }, [
		DashboardTabs(),
		Div({ class: 'hidden md:flex gap-2'}, [
			Button({ variant: 'withIcon', class: 'outline', icon: Icons.download }, 'Download'),
			Button({ variant: 'withIcon', class: 'outline', icon: Icons.funnel }, 'Filter'),
		])
	])
);