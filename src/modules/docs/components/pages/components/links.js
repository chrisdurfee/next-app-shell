/**
 * This will create the aside links.
 *
 * @param {string} path
 * @returns {array}
 */
export const Links = (path) => ([
	{
		href: path,
		label: 'Introduction',
		exact: true
	},
	{
		group: 'Components',
		options:
		[
			{
				label: 'Buttons',
				href: path + '/buttons'
			}
		]
	}
]);