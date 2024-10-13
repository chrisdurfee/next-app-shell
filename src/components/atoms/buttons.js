import { Atom } from '@base-framework/base';

/**
 * This will create a button.
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
export const Button = Atom((props, children) =>
{
	props.class = 'bttn ' + (props.class || '');
	return {
		tag: 'button',
		...props,
		children
	};
});

export const GrayButton = Atom((props, children) =>
{
	let className = props.class;
	className = (className) ? 'gray-bttn ' + className : 'gray-bttn';
	props.class = className;

	return Button(props, children);
});

export const OutlineButton = Atom((props, children) =>
{
	let className = props.class;
	className = (className) ? 'outlined-bttn ' + className : 'outlined-bttn';
	props.class = className;

	return Button(props, children);
});

export const TextButton = Atom((props, children) =>
{
	let className = props.class;
	className = (className) ? 'text-bttn ' + className : 'text-bttn';
	props.class = className;

	return Button(props, children);
});

/* submit button */
export const Submit = Atom((props, children) =>
{
	props.type = 'submit';
	return Button(props, children);
});