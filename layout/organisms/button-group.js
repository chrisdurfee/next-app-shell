"use strict";

const ButtonGroup = base.Component.extend(
{
    render()
    {
        return {
            className: 'button-group',
            children:
            [
                {
                    tag: 'p',
                    onState: ['performance', (ele, state) =>
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

    addButton(label, value)
    {
        let self = this;
        return Button({
            className: 'gray-bttn',
            text: label,
            onState: ['performance', {
                'selected': value
            }],
            click()
            {
                self.state.set('performance', value);
            }
        });
    },

    setupStates()
    {
        return {
            performance: 'fair'
        };
    }
});