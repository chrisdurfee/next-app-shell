import { Input } from '@base-framework/atoms';
import { Atom, Html } from '@base-framework/base';

export const DefaultSelect = Atom((props, children) =>
{
	return {
		tag: 'select',
		...props,
		onCreated(ele)
		{
			if (props.options)
			{
				Html.setupSelectOptions(ele, props.options);
			}
		},
		children
	};
});

export const TelInput = Atom((props, children) =>
{
	return Input({
		...props,
		type: 'tel',
		name: 'Phone',
		label: 'Phone',
		required: true,
		pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}',
		keyup(e)
		{
			let target = e.target || e.srcElement,
			pattern = /(\d{0,3})(\d{0,3})(\d{0,4})/,
			patternNumber = /\D/g,
			x = target.value.replace(patternNumber, '').match(pattern);

			target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
		}
	});
});