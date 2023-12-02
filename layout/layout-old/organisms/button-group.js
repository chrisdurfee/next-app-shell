"use strict";

var ButtonGroup = base.Component.extend(
{
    render: function()
    {
        return {
            className: 'button-group',
            children:
            [
                {
                    tag: 'p',
                    onState: ['performance', function(ele, state)
                    {
                        switch(state)
                        {
                            case 'fair':
                                return 'This is just Fair';
                            case 'good':
                                return 'So Good!';
                            case 'bad':
                                return 'This is bad';
                        }
                    }]
                },
                this.addButton('Bad', 'bad'),
                this.addButton('Good', 'good'),
                this.addButton('Fair', 'fair')
            ]
        }
    },

    addButton: function(label, value)
    {
        var self = this;
        return Button({
            className: 'gray-bttn',
            text: label,
            onState: ['performance', {
                'selected': value
            }],
            click: function()
            {
                self.state.set('performance', value);
            }
        });
    },

    setupStates: function()
    {
        return {
            performance: 'fair'
        };
    }
});