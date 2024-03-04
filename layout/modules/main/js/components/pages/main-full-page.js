import { Data, SimpleData } from "@base-framework/base";
import { Button, P } from "../../../../../components/atoms/atoms.js";
import { Modal } from '../../../../../components/molecules/modal.js';
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
 * This will get hte path of the prop.
 *
 * @param {string} path
 * @param {string} prop
 * @return {string}
 */
function getNewPath(path, prop)
{
    const propPath = isNaN(Number(prop)) ? `.${prop}` : `[${prop}]`;
    return path === '' ? propPath : `${path}${propPath}`;
}

/**
 * This will create a handler for the proxy.
 *
 * @param {object} data
 * @param {string} path
 * @param {string} root
 * @return {object}
 */
function createHandler(data, path = '', dataRoot = '')
{
    return {

        /**
         * This will get the value of the prop.
         *
         * @param {object} target
         * @param {string} prop
         * @param {object} receiver
         * @return {mixed}
         */
        get(target, prop, receiver)
        {
            // Directly return the property if it's on the root level and we're at the root path
            if (path === '' && prop in target)
            {
                return target[prop];
            }

            // Access the property within the dataRoot
            const dataTarget = target[dataRoot] || target;
            const value = Reflect.get(dataTarget, prop, receiver);

            // Return the value directly if it's not an object
            if (!value || (Object.prototype.toString.call(value) !== '[object Object]' && !Array.isArray(value)))
            {
                return value;
            }

            // Create a new handler for nested properties
            const newPath = getNewPath(path, prop);
            return new Proxy(value, createHandler(data, newPath, dataRoot));
        },

        /**
         * This will set the value of the prop.
         *
         * @param {object} target
         * @param {string} prop
         * @param {mixed} value
         * @param {object} receiver
         * @return {mixed}
         */
        set(target, prop, value, receiver)
        {
			console.log(target, prop, value, receiver)
			// Set the property at the root level if we're at the root path
            if (path === '' && prop in target)
            {
                target[prop] = value;
                return true;
            }

            if (prop in target)
			{
				//target[prop] = value;
				Reflect.set(target, prop, value, receiver);
			}
			else if (target[dataRoot] && typeof target[dataRoot] === 'object')
			{
				// Check if the "stage" child property exists and is an object
				//target[dataRoot][prop] = value;
				//receiver[dataRoot][prop] = value;
				Reflect.set(target, prop, value, receiver);
			}
			return true;
        }
    };
}

/**
 * This will create a data proxy.
 *
 * @param {object} data
 * @return {Proxy}
 */
const DataProxy = (data, root = 'stage') => new Proxy(data, createHandler(data, '', root));


const data = {
    class: 'active',
	regExp: new RegExp('test', 'i'),
	name: 'test 1',
	stage: {
		state: true,
		name: 'test',
		other: { name: 'test', class: 'active' },
		values: [
			{ name: 'test', class: 'active' }
		]
	},
    on(name)
	{
		console.log(name);
	},
	get(key)
	{
		this.stage[key];
	},
	component: {
		type: {
			data: 'test'
		}
	}
};

const clone = DataProxy(data);

// get
const name = clone.other.name;
// console.log(name)

const patern = clone.regExp;
clone.state;

clone.component.type.data;

// get stage
const state = clone.state;
// console.log(state)

// set
clone.other.name = 'test';
// console.log(clone.other.name)

clone.name = 'test 1';
// console.log(clone);
clone.class = 'new class';

clone.name = 'test 2';
console.log(clone);

// set array
clone.values[0].name = 'test first';
// console.log(clone.values[0].name)

// set stage
clone.testProp = 'test';
// console.log(clone.testProp)

// methods
clone.on('Test')
clone.get('state')

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

	const flatDat = new SimpleData({
		name: 'name'
	});

	/**
	 * This will test the deep data binding [[other.name]]
	 * for five seconds to see if it updates.
	 */
	setTimeout(() =>
	{
		// test first level
		data.name = 'someting else';
		data.class = 'inactive';

		flatDat.name = 'test';
		flatDat.name = 'test 1';
		console.log(flatDat);

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
			Button({
				text: 'Test Modal',
				click: () =>
				{
					new Modal().open();
				}
			}),
			GridContainer()
		];
	}
}