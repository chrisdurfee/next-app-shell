import { Div, H2, P } from "@base-framework/atoms";
import { Data } from "@base-framework/base";
import { Icons } from "../../../../../components/icons/icons.js";
import { GridContainer } from '../../../../../components/molecules/molecules.js';
import { FullPage } from '../../../../../components/pages/full-page.js';
import { Calendar } from "../../../../../css/components/organisms/calendar/calendar.js";
import { GreetingCard } from './greeting-card.js';

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
	data.set('name', 'Home');

	const DURATION = 5000; // five seconds

	/**
	 * This will test the deep data binding [[other.name]]
	 * for five seconds to see if it updates.
	 */
	setTimeout(() =>
	{
		// test first level
		data.name = 'Update';
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
	title: 'Main Page [[name]]',

	/**
	 * @member {string} title
	 */
	description: 'This is the main page.',

	/**
	 * This will add the data to the component.
	 *
	 * @override
	 * @returns {void}
	 */
	setData()
	{
		const settings = getData();
		return new Data(settings);
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

		window.setTimeout(() => (
			app.addNotification({
				title: 'Notification Title',
				description: 'This is a notification.',
				icon: Icons.warning
			})
		), 2000);
	}
});

/**
 * This will create a bind card.
 *
 * @returns {object}
 */
const BindCard = () => (
	Div({ class: 'flex flex-col rounded-lg border bg-card text-card-foreground shadow-sm my-4 mx-5 p-4' }, [
		H2({ cache: 'header', class: 'scroll-m-20 text-2xl font-bold tracking-tight' }, 'Binding Test'),
		P('This will test the deep data binding [[other.name]]'),
		new Calendar()
	])
);

/**
 * HomePage
 *
 * This will create a home page.
 *
 * @returns {FullPage}
 */
export const HomePage = () => (
	new FullPage(
		FullProps(),
		[
			GreetingCard(),
			BindCard(),
			GridContainer()
		]
	)
);