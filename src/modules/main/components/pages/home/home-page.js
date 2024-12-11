import { A, Div, H1, Header, P } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';
import { BlankPage } from '@components/pages/blank-page.js';

/**
 * This will create a main button container.
 *
 * @returns {object}
 */
const MainButtonContainer = Atom(() => (
    Div({ class: 'mt-10 flex items-center justify-start gap-x-4' }, [
		A({
			href: '/docs',
			class: 'bttn primary'
		}, 'Get started'),
		A({
			href: 'https://github.com/chrisdurfee/base',
			target: '_blank',
			class: 'bttn ghost gap-2'
		}, 'Github')
	])
));

/**
 * This will create a header for the documentation.
 *
 * @param {object} props
 * @returns {object}
 */
const PageHeader = Atom(({ title, description}) => (
	Header({ class: 'flex flex-col' }, [
		H1({ class: 'text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]' }, title),
		description && P({ class: 'max-w-2xl text-lg font-light text-foreground' }, description),
	])
));

/**
 * This will create a main section.
 *
 * @param {object} props
 * @returns {object}
 */
const MainSection = Atom((props) => (
	Div({ class: 'flex flex-auto flex-col' }, [
		Div({
			class: 'contained sm:pt-8'
		}, [
			PageHeader({
				title: 'Build faster with Base and Tailwind CSS',
				description: 'Beautifully designed components inpired by the genius at Shadcn and tailored to work with Base. Base is easy to use and open source.'
			}),
			MainButtonContainer()
		])
	])
));

/**
 * HomePage
 *
 * This will create a home page.
 *
 * @returns {BlankPage}
 */
export const HomePage = () => (
	new BlankPage([
		MainSection([

		])
	])
);