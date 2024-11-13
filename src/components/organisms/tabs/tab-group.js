import { Button, Li, Nav, Ul } from '@base-framework/atoms';
import { Component } from '@base-framework/base';

/**
 * This will create a tab button atom.
 *
 * @param {object} props
 * @returns {object}
 */
const TabButton = (props) => (
    Li(
        {
            class: 'inline-flex flex-auto items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm',
            dataSet: ['selected', ['state', props.value, 'active']],
        },
        [
            Button({
                class: 'flex flex-auto justify-center items-center px-3 py-1.5 disabled:opacity-50 disabled:cursor-not-allowed',
                onSet: ['selected', { selected: props.value }],
                click: (e) => props.callBack(props.value),
                disabled: props.disabled
            }, props.label)
        ]
    )
);

/**
 * This will add an option.
 *
 * @param {object} option
 * @param {function} callBack
 * @returns {object}
 */
const addOption = (option, callBack) =>
{
    option.callBack = callBack;
    return TabButton(option);
};

/**
 * Navigation
 *
 * This will create a tab navigation component.
 *
 * @param {object} props
 * @returns {object}
 */
const Navigation = (props) => (
    Nav({ class: `tab items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${props.class}` }, [
        Ul({ class: 'flex flex-auto flex-row', map: [props.options, (option) => addOption(option, props.callBack)] })
    ])
);

/**
 * TabGroup
 *
 * This will create a tab group.
 *
 * @class
 * @extends Component
 */
export class TabGroup extends Component
{
    /**
     * This will render the component.
     *
     * @returns {object}
     */
	render()
	{
        const callBack = this.select.bind(this);

		return Navigation({
            class: this.class,
            options: this.options,
            callBack
        });
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

        if (typeof this.onSelect === 'function')
        {
            this.onSelect(value, this.parent);
        }
    }

    /**
     * This will setup the states.
     *
     * @returns {object}
     */
	setupStates()
	{
		return {
			selected: this.options[0]?.value || null
		};
	}
}

export default TabGroup;