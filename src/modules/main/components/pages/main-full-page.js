import { Div } from "@base-framework/atoms";
import { Data } from "@base-framework/base";
import { Button, P } from "../../../../components/atoms/atoms.js";
import { Modal } from '../../../../components/molecules/modal.js';
import { GridContainer } from '../../../../components/molecules/molecules.js';
import { FullPage } from '../../../../components/pages/full-page.js';

/**
 * This will get the data for the test.
 *
 * @returns {object}
 */
const getData = () => ({
	name: 'name',
	class: 'active',
	other: {
		name: 'name',
		class: 'active'
	},
	items: [
		{
			name: 'name',
		}
	]
});

/**
 * This will test the deep data binding [[other.name]]
 *
 * @param {object} data
 * @returns {void}
 */
const testData = (data) =>
{
	// test setter
	data.set('name', 'something long here');

	const DURATION = 5000; // five seconds

	/**
	 * This will test the deep data binding [[other.name]]
	 * for five seconds to see if it updates.
	 */
	setTimeout(() =>
	{
		// test first level
		data.name = 'someting else';
		data.class = 'inactive';

		// test deep level
		data.other.name = 'test';
		data.other.class = 'inactive';

		// test array level
		data.items[0].name = 'test';
		data.items[0].class = 'inactive';
		console.log(data)
	}, DURATION);
};

/**
 * 	This will set up the component props.
 *
 * @returns {object}
 */
const FullProps = () => (
{
	/**
	 * @member {string} title
	 */
	title: 'Title [[name]]',

	/**
	 * This will create the data.
	 *
	 * @override
	 * @returns {void}
	 */
	onCreated()
	{
		const settings = getData();
		this.data = new Data(settings);
	},

	/**
	 * This will run after the setup.
	 *
	 * @override
	 * @returns {void}
	 */
	afterSetup()
	{
		const data = this.data;
		testData(data);
	}
});

/**
 * This will create a modal button.
 *
 * @param {object} props
 * @returns {object}
 */
const ModalButton = ({ label, buttonStyle, size, type }) => Button({
	text: label,
	class: `m-1 ${buttonStyle}`,
	click: () => new Modal({
		size,
		type
	}).open()
});

const Buttons = [
	{
		label: 'Large',
		buttonStyle: 'primary',
		size: 'lg'
	},
	{
		label: 'Small',
		buttonStyle: 'secondary',
		size: 'sm'
	},
	{
		label: 'Medium',
		buttonStyle: 'destructive',
		size: 'md'
	},
	{
		label: 'Extra Large',
		buttonStyle: 'outline',
		size: 'xl'
	},
	{
		label: 'Right',
		buttonStyle: 'ghost',
		type: 'right'
	},
	{
		label: 'Left',
		buttonStyle: 'link',
		type: 'left'
	}
];

/**
 * MainFullPage
 *
 * This will create a main full page.
 *
 * @returns {FullPage}
 */
export const MainFullPage = () => (
	new FullPage(
		FullProps(),
		[
			P({ class: 'px-4' }, 'This will test the deep data binding [[other.name]]'),

			Div({ class: 'flex flex-row justify-center items-center rounded-lg border bg-card text-card-foreground shadow-sm my-5 mx-5' }, [
				P({ class: 'px-4 whitespace-nowrap m-0' }, 'Modal Test'),
				Div({
					class: 'flex flex-auto flex-row p-1 flex-wrap',
					map: [Buttons, (button) => ModalButton(button)]
				})
			]),
			GridContainer()
		]
	)
);