/**
 * This will create the aside links.
 *
 * @param {string} path
 * @returns {array}
 */
export const Links = (path) => ([
	{
		href: `${path}`,
		label: 'Introduction',
		exact: true
	},
	{
		href: `${path}/theme`,
		label: 'Theme',
		exact: true
	},
	{
		href: `${path}/icons`,
		label: 'Icons'
	},
	{
		group: 'Components',
		options:
		[
			{
				label: 'Buttons',
				href: `${path}/components/buttons`
			},
			{
				label: 'Badges',
				href: `${path}/components/badges`
			},
			{
				label: 'Tabs',
				href: `${path}/components/tabs`
			},
			{
				label: 'Modals',
				href: `${path}/components/modals`
			},
			{
				label: 'Notifications',
				href: `${path}/components/notifications`
			},
			{
				label: 'Dialogs',
				href: `${path}/components/dialogs`
			},
			{
				label: 'Cards',
				href: `${path}/components/cards`
			}
		]
	}
]);