import { Atom, Component, NavLink } from '@base-framework/base';
import { Label, Span } from '../../atoms/atoms.js';
import { NavButtonLink } from './nav-button-link.js';


/**
 * This will create a navigation option.
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
const Option = Atom(({ options, click }, children) =>
{
	const settings = {
		class: `option${options ? ' sub' : ''}`,
		click
	};

	return {
		tag: 'li',
		...settings,
		children
	};
});

/**
 * MainLink
 *
 * This will setup a navigation link.
 * @class
 */
export class MainLink extends Component
{
	/**
	 * This will render the component.
	 *
	 * @override
	 * @protected
	 * @returns {object}
	 */
	render()
	{
		return Option(
			{
				options: this.options,
				click: !this.options && this.callBack
			},
			[
				this.addLink()
			]
		);
	}

	/**
	 * This will get the children.
	 *
	 * @returns {array}
	 * @protected
	 */
	getLinkChildren()
	{
		return [
			this.icon && Span({
				class: 'icon ' + this.icon
			}),
			Label({ class: 'label' }, this.label)
		];
	}

	/**
	 * This will add the link.
	 *
	 * @returns {object}
	 * @protected
	 */
	addLink()
	{
		const children = this.getLinkChildren();

		if (this.href)
		{
			return new NavLink(
			{
				cache: 'link',
				href: this.href,
				activeClass: 'selected',
				exact: this.exact || false,
				children
			});
		}

		return new NavButtonLink({
			cache: 'link',
			children,
			checkCallBack: this.checkCallBack
		});
	}

	/**
	 * This will check if the link is selected.
	 *
	 * @returns {boolean}
	 */
	isSelected()
	{
		return this.link.state.get('selected');
	}

	update(selected)
	{
		this.link.update(selected);
	}
}