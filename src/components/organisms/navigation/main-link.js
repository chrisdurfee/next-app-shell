import { I } from '@base-framework/atoms';
import { Atom, Component, NavLink } from '@base-framework/base';
import { Label } from '../../atoms/atoms.js';
import { NavButtonLink } from './nav-button-link.js';

/**
 * This will create a navigation option.
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
const Li = Atom(({ options, click }, children) =>
{
	const settings = {
		class: `relative flex flex-row w-auto text-left border-none p-0 overflow-hidden transition-all cursor-pointer min-w-[48px] rounded-md option${options ? ' sub' : ''}`,
		click
	};

	return {
		tag: 'li',
		...settings,
		children
	};
});

/**
 * This will get the link content.
 *
 * @param {string} label
 * @param {string} icon
 * @returns {array}
 */
const LinkContent = (label, icon = null) => [
	icon && I({
		class: 'icon w-12 h-12 rounded-md flex items-center justify-center',
		onState: ['selected', {
			selected: true
		}],
		html: icon
	}),
	Label({ class: 'label flex flex-auto text-sm items-center' }, label)
];

/**
 * MainLink
 *
 * This will setup a navigation link.
 *
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
		const click = !this.options && this.callBack;
		return Li({ options: this.options, click }, [
				this.addLink()
			]
		);
	}

	/**
	 * This will add the link.
	 *
	 * @returns {object}
	 * @protected
	 */
	addLink()
	{
		const children = LinkContent(this.label, this.icon);

		if (this.href)
		{
			return new NavLink(
			{
				class: 'flex flex-auto flex-row',
				cache: 'link',
				href: this.href,
				activeClass: 'selected',
				exact: this.exact || false,
				children
			});
		}

		return new NavButtonLink({
			class: 'flex flex-auto flex-row',
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