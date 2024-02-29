import { Data } from "@base-framework/base";
import { P } from "../../../../../components/atoms/atoms.js";
import { GridContainer } from '../../../../../components/molecules/molecules.js';
import { FullPage } from '../../../../../components/pages/full-page.js';

/**
 * This will get the data for the test.
 *
 * @returns {object}
 */
const getData = () =>
{
	return {
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
	};
};

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
		console.log(data.get())
	}, DURATION);
};

/**
 * MainFullPage
 *
 * This will create a main full page.
 *
 * @class
 * @extends FullPage
 */
export class MainFullPage extends FullPage
{
	/**
	 * @member {string} title
	 */
	title = 'Title [[name]]';

	/**
	 * This will create the data.
	 *
	 * @override
	 * @protected
	 * @return {void}
	 */
	onCreated()
	{
		const settings = getData();
		this.data = new Data(settings);
	}

	/**
	 * This will run after the setup.
	 *
	 * @override
	 * @protected
	 * @return {void}
	 */
	afterSetup()
	{
		const data = this.data;
		testData(data);

		//new Modal().open();
	}

	/**
	 * This will add the body of the page.
	 *
	 * @return {array}
	 */
	addBody()
	{
		return [
			P('This will test the deep data binding [[other.name]]'),
			GridContainer()
		];
	}
}