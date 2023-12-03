
export class AsidePage extends BasicPage
{
	render()
	{
		return MainSection(
		{
			children:
			[
				AsideTemplate({
					left: this.addAside(),
					right: this.addBody()
				})
			],
			route: {
				uri: 'aside/overlay-test',
				component: new Overlay({
					backHref: 'aside/',
					children: [
						new Panel({
							children: [
								{
									title: Header({
										children: [
											H1({
												text: 'Overlay',
											})
										]
									}),
									panels: {
										className: 'contained',
										panels: GridContainer()
									}
								}
							]
						})
					]
				})
			}
		});
	}

	addAside()
	{
		return {
			title: H1({
				text: 'Active Primary Title'
			}),
			nav: this.addNavigation()
		};
	}

	addBody()
	{
		let path = 'aside';

		return [
			{
				className: 'contained',
				switch: [
					{
						uri: path,
						component: new Panel({
							children: [
								{
									title: Header({
										children: [
											H1({
												text: 'Aside',
											})
										]
									}),
									label: {
										className: 'card',
										children: [
											new Loader({
												src: 'layout/atoms/atom-test.js',
												callBack()
												{
													return LabelText();
												}
											})
										]
									},
									panels: GridContainer()
								}
							]
						})
					},
					{
						uri: path + '/marketing*',
						component: new Panel({
							children: [
								{
									switch: [
										{
											uri: 'aside/marketing/irure-nostrud/:id',
											component: new InlineOverlay({
												backHref: 'aside/marketing/',
												children: [
													new Panel({
														children: [
															{
																title: Header({
																	children: [
																		H1({
																			text: 'Overlay',
																		})
																	]
																}),
																panels: GridContainer()
															}
														]
													})
												]
											})
										},
										{
											uri: 'aside/marketing/*',
											component: new Panel({
												children: [
													{
														tag: 'a',
														href: 'aside/marketing/irure-nostrud/1',
														title: Header({
															children: [
																H1({
																	text: 'Marketing',
																})
															]
														}),
														panels: GridContainer()
													}
												]
											})
										}
									]
								}
							]
						})
					},
					{
						uri: path + '/tempor-nulla',
						component: new Panel({
							children: [
								{
									title: Header({
										children: [
											H1({
												text: 'Tempor nulla',
											})
										]
									}),
									panels: GridContainer()
								}
							]
						})
					},
					{
						uri: path + '/tempor-esse',
						component: new Panel({
							children: [
								{
									title: Header({
										children: [
											H1({
												text: 'Tempor esse',
											})
										]
									}),
									panels: GridContainer()
								}
							]
						})
					},
					{
						uri: path + '/voluptate-dolore',
						component: new Panel({
							children: [
								{
									title: Header({
										children: [
											H1({
												text: 'Voluptate dolore',
											})
										]
									}),
									panels: GridContainer()
								}
							]
						})
					},
					{
						uri: path + '/non-lorem',
						component: new Panel({
							children: [
								{
									title: Header({
										children: [
											H1({
												text: 'Non Lorem',
											})
										]
									}),
									panels: GridContainer()
								}
							]
						})
					},
					{
						uri: path + '/tempor-nulla-1',
						component: new Panel({
							children: [
								{
									title: Header({
										children: [
											H1({
												text: 'Tempor nulla 1',
											})
										]
									}),
									panels: GridContainer()
								}
							]
						})
					},
					{
						uri: path + '/tempor-esse-1',
						component: new Panel({
							children: [
								{
									title: Header({
										children: [
											H1({
												text: 'Tempor esse 1',
											})
										]
									}),
									panels: GridContainer()
								}
							]
						})
					},
					{
						uri: path + '/voluptate-dolore-1',
						component: new Panel({
							children: [
								{
									title: Header({
										children: [
											H1({
												text: 'Voluptate dolore 1',
											})
										]
									}),
									panels: GridContainer()
								}
							]
						})
					},
					{
						uri: path + '/non-lorem-1',
						component: new Panel({
							children: [
								{
									title: Header({
										children: [
											H1({
												text: 'Non Lorem 1',
											})
										]
									}),
									panels: GridContainer()
								}
							]
						})
					}
				]
			}
		];
	}

	addNavigation()
	{
		return new InlineNavigation(
		{
			options: this.getLinks()
		});
	}

	getLinks()
	{
		let path = 'aside';

		return [
			{
				href: 'aside',
				label: 'Aside',
				exact: true
			},
			{
				href: 'aside/overlay-test',
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
		]
	}
}