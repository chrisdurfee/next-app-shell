import { Label } from '../../atoms/atoms.js';
import { Atom, Component, NavLink } from '../../libs/base/base.js';
import { NavButtonLink } from './nav-button-link.js';


/**
 * This will create a navigation option.
 *
 * @param {object} props
 * @param {array} children
 * @return {object}
 */
const Option = Atom((props, children) =>
{
	return {
		tag: 'li',
		class: 'option' + (props.options? ' sub' : ''),
		...props,
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
	 * @return {object}
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
	 * @return {array}
	 * @protected
	 */
	getLinkChildren()
	{
		return [
			(this.icon) && Span({
				class: 'icon ' + this.icon
			}),
			Label({ class: 'label' }, this.label)
		];
	}

	/**
	 * This will add the link.
	 *
	 * @return {object}
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