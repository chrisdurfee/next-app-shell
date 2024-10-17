import { Button, Div, Li, Nav, Section, Ul } from "@base-framework/atoms";
import { Component } from "@base-framework/base";

/**
 * This will create a tab button atom.
 *
 * @param {object} props
 * @returns {object}
 */
const TabButton = (props) =>
{
    return Li(
        {
            class: 'inline-flex flex-auto items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm',
            dataSet: ['selected', ['state', props.value, 'active']],
        },
        [
            Button({
                class: props.class,
                onSet: ['selected', {
                    selected: props.value
                }],
                click: (e) => props.callBack(props.value),
                text: props.label
            }, props.children)
        ]
    );
};

/**
 * Navigation
 *
 * This will create a tab navigation component.
 *
 * @class
 */
class Navigation extends Component
{
    /**
     * This will render the component.
     *
     * @returns {object}
     */
    render()
    {
        return Nav({ class: `tab items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${this.class}` }, [
            Ul({ class: 'flex flex-auto flex-row', map: [this.options, (option) => this.addOption(option)] })
        ]);
    }

    /**
     * This will add an option.
     *
     * @param {object} option
     * @returns {object}
     */
    addOption(option)
    {
        option.callBack = this.callBack;
        return TabButton(option);
    }
}

/**
 * ButtonTab
 *
 * This will create a button tabs component.
 *
 * @class
 */
export class ButtonTab extends Component
{
    /**
     * This will render the component.
     *
     * @returns {object}
     */
    render()
    {
        let callBack = this.select.bind(this);

        return Div({ class: '' }, [
            new Navigation({
                class: this.class,
                data: this.state,
                options: this.options,
                callBack
            }),
            Section({
                class: 'tab-content',
                onState: ['selected', this.updateContent.bind(this)]
            })
        ]);
    }

    /**
     * This will select the first value after setup.
     *
     * @returns {void}
     */
    afterSetup()
    {
        const firstValue = this.options[0].value;
        this.select(firstValue);
    }

    /**
     * This will update the component.
     *
     * @returns {void}
     */
    update()
    {
        const selected = this.state.get('selected');
        this.select(null);
        this.select(selected);
    }

    /**
     * This will select a value.
     *
     * @param {*} value
     * @returns {void}
     */
    select(value)
    {
        this.state.selected = value;
    }

    /**
     * This will update the content.
     *
     * @param {*} value
     * @returns {object}
     */
    updateContent(value)
    {
        const options = this.options;
        if (!options || options.length < 1)
        {
            return;
        }

        const firstOption = options[0];
        for (const option of options)
        {
            if (option.value === value)
            {
                return option.layout;
            }
        }

        return firstOption.layout;
    }

    /**
     * This will setup the states.
     *
     * @returns {object}
     */
    setupStates()
    {
        let callBack = this.callBack,
        type = typeof callBack;

        return {
            selected: {
                state: null,
                callBack(value)
                {
                    if (type === 'function')
                    {
                        callBack(value);
                    }
                }
            }
        };
    }
}