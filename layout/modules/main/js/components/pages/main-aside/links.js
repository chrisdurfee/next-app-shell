/**
 * This will create the aside links.
 *
 * @param {string} path
 * @returns {array}
 */
export const Links = (path) => ([
	{
		href: path,
		label: 'Aside',
		exact: true
	},
	{
		href: `${path}/overlay-test`,
		label: 'Overlay'
	},
	{
		label: 'Marketing',
		options: [
			{
				label: 'irure nostrud',
				href: path + '/marketing/irure-nostrud'
			},
			{
				label: 'ipsum dolore',
				href: path + '/marketing/ipsum-dolore'
			},
			{
				label: 'enim consectetur',
				options: [
					{
						label: 'irure nostrud',
						href: path + '/marketing/enim-consectetur/irure-nostrud'
					},
					{
						label: 'ipsum dolore',
						href: path + '/marketing/enim-consectetur/ipsum-dolore'
					},
					{
						label: 'enim consectetur',
						href: path + '/marketing/enim-consectetur/enim-consectetur'
					},
					{
						label: 'So many',
						options: [
							{
								label: 'irure nostrud',
								href: path + '/marketing/enim-consectetur/many/irure-nostrud'
							},
							{
								label: 'ipsum dolore',
								href: path + '/marketing/enim-consectetur/many/ipsum-dolore'
							},
							{
								label: 'enim consectetur',
								href: path + '/marketing/enim-consectetur/many/enim-consectetur'
							}
						]
					}
				]
			}
		]
	},
	{
		group: 'Group 1 name',
		options:
		[
			{
				label: 'Tempor nulla',
				href: path + '/tempor-nulla'
			},
			{
				label: 'Tempor esse',
				href: path + '/tempor-esse'
			},
			{
				label: 'Voluptate dolore',
				href: path + '/voluptate-dolore'
			},
			{
				label: 'Non Lorem',
				href: path + '/non-lorem'
			}
		]
	},
	{
		group: 'Group 2 name',
		options:
		[
			{
				label: 'Tempor nulla 1',
				href: path + '/tempor-nulla-1'
			},
			{
				label: 'Tempor esse 1',
				href: path + '/tempor-esse-1'
			},
			{
				label: 'Voluptate dolore 1',
				href: path + '/voluptate-dolore-1'
			},
			{
				label: 'Non Lorem 1',
				href: path + '/non-lorem-1'
			}
		]
	}
]);