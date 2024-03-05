import { Data } from "@base-framework/base";
import { Button, P } from "../../../../../components/atoms/atoms.js";
import { Modal } from '../../../../../components/molecules/modal.js';
import { GridContainer } from '../../../../../components/molecules/molecules.js';
import { FullPage } from '../../../../../components/pages/full-page.js';

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
 * @return {void}
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
			P('This will test the deep data binding [[other.name]]'),
			Button({
				text: 'Test Modal',
				click: () =>
				{
					new Modal().open();
				}
			}),
			GridContainer()
		]
	)
);