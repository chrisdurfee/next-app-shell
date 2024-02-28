import { Atom, Component } from '@base-framework/base';
import { Button, P } from '../atoms/atoms.js';

/**
 * This will create a button group.
 *
 * @param {object} props
 * @param {array} children
 * @return {object}
 */
const Buttons = Atom((props, children) =>
{
	return {
		class: 'button-group',
		...props,
		children
	};
});

/**
 * This will create a state button.
 *
 * @param {object} props
 * @param {array} children
 * @return {object}
 */
const StateButton = Atom((props, children) =>
{
	return Button({
		click: (e, {state}) => state.set('performance', props.value),
	}, props.label);
});

/**
 * ButtonGroup
 *
 * This will create a button group.
 *
 * @class
 * @extends Component
 */
export default class ButtonGroup extends Component
{
    /**
     * This will render the component.
     *
     * @return {object}
     */
	render()
	{
		return Buttons([
			P({
				onState: ['performance', (state) =>
				{
					switch (state)
					{
						case 'fair':
							return 'This is just Fair';
						case 'good':
							return 'So Good!';
						case 'bad':
							return 'This is bad';
					}
				}]
			}),
			StateButton({
				label: 'Bad',
				value: 'bad'
			}),
			StateButton({
				label: 'Good',
				value: 'good'
			}),
			StateButton({
				label: 'Fair',
				value: 'fair'
			})
		]);
	}

    /**
     * This will setup the states.
     *
     * @return {object}
     */
	setupStates()
	{
		return {
			performance: 'fair'
		};
	}
}