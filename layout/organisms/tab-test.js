"use strict";

var TabLink = base.Component.extend(
{
	render: function()
	{
		return {
			tag: 'li',
			className: 'option',
			a: this.cache('link', new NavLink(
			{
				href: this.href,
				text: this.label,
				activeClass: 'selected'
			}))
		};
	}
});

var TabContent = base.Component.extend(
{
	render: function()
	{
		var link = this.link.link,
		component = this.child;

		if(typeof component === 'object')
		{
			component.route = this.route;
		}
		else
		{
			component = new component({
				route: this.route
			});
		}

		return {
			className: 'content',
			watch:
			{
				value: ['[[active]]', this.route],
				callBack: function(ele, value)
				{
					if(value)
					{
						link.state.set('selected', true);
					}
				}
			},
			child: component
		};
	}
});

var Tab = base.Component.extend(
{
	createLinks: function(options)
	{
		var links = [];

		for(var i = 0, length = options.length; i < length; i++)
		{
			links.push(this.addLink(options[i]));
		}
		return links;
	},

	addLink: function(option)
	{
		return new TabLink({
			label: option.label,
			href: option.href
		});
    },

    addGroup: function(links)
    {
        var switches = [];
        var options = this.options;
		var option;

		for(var i = 0, length = options.length; i < length; i++)
		{
            option = options[i];
			switches.push(
            {
                uri: option.uri || option.href,
                component: new TabContent(
				{
					link: links[i],
					child: option.component
				}),
                title: option.title || null
            });
		}
		return switches;
    },

	addLinks: function()
	{
		var options = this.options || [];
		return this.createLinks(options);
	},

	render: function()
	{
		var links = this.addLinks();

		return {
            className: 'tab-panel',
            children:
            [
                {
                    tag: 'nav',
                    className: 'tab',
                    ul:
                    {
                        tag: 'ul',
                        children: links
                    }
                },
                {
					tag: 'section',
					className: 'tab-content',
                    switch: this.addGroup(links)
                }
            ]
        };
	}
});