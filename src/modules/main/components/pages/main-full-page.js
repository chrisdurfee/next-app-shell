import { Button, Div, H2, P } from "@base-framework/atoms";
import { Data, DateTime } from "@base-framework/base";
import { DynamicTime } from "@base-framework/organisms";
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

/**
 * This will get the current time.
 *
 * @returns {string}
 */
const getCurrentTime = () => DateTime.formatTime('', 24);

/**
 * This will get the greeting message.
 *
 * @returns {string}
 */
const getGreetingMessage = () =>
{
	let message = 'Morning';

	const current = getCurrentTime();
	if (current >= '18:00:00')
	{
		message = 'Evening';
	}
	else if (current >= '12:00:00')
	{
		message = 'Afternoon';
	}

	return `Good ${message}`;
};

/**
 * This will create a greeting card.
 *
 * @returns {object}
 */
const GreetingCard = () => (
	Div({ class: 'flex flex-col rounded-lg border bg-card text-card-foreground shadow-sm my-4 mx-5 p-4' }, [
		new DynamicTime({
			filter: () => getGreetingMessage()
		})
	])
);

/**
 * This will create a bind card.
 *
 * @returns {object}
 */
const BindCard = () => (
	Div({ class: 'flex flex-col rounded-lg border bg-card text-card-foreground shadow-sm my-4 mx-5 p-4' }, [
		H2({ class: 'scroll-m-20 text-2xl font-bold tracking-tight' }, 'Binding Test'),
		P('This will test the deep data binding [[other.name]]')
	])
);

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
 * This will create a modal card.
 *
 * @param {object} props
 * @returns {object}
 */
const ModalCard = () => (
	Div({ class: 'flex flex-row justify-center items-center rounded-lg border bg-card text-card-foreground shadow-sm my-4 mx-5 p-4' }, [
		P({ class: 'whitespace-nowrap m-0' }, 'Modal Test'),
		Div({
			class: 'flex flex-auto flex-row p-1 flex-wrap',
			map: [Buttons, (button) => ModalButton(button)]
		})
	])
);

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
			GreetingCard(),
			BindCard(),
			ModalCard(),
			GridContainer()
		]
	)
);