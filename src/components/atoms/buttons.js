import { Atom } from '@base-framework/base';
import { Icon } from './icons';

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

export const IconButton = Atom((props, children) =>
{
	let icon = props.icon;
	return Button({ class: icon + '-icon icon-bttn outlined-bttn' }, [Icon(icon)]);
});

export const ToggleButton = IconButton({
	icon: 'more_vert'
});

export const BackButton = IconButton({
	icon: 'arrow_back'
});

export const CloseButton = IconButton({
	icon: 'close'
});

/* submit button */
export const Submit = Atom((props, children) =>
{
	props.type = 'submit';
	return Button(props, children);
});