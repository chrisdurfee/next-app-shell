import { Atom } from '@base-framework/base';

/* icons */
/* icon font: https://material.io/resources/icons/?style=baseline */
export const Icon = Atom((props, children) =>
{
	return {
		tag: 'i',
		...props,
		children
	};
});