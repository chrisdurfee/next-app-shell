/**
 * @type {Array<object>} orders
 */
export const orders = [
	{
		id: 1,
		customerName: 'Liam Johnson',
		email: 'liam@example.com',
		type: 'Sale',
		status: 'Fulfilled',
		date: '2023-06-23',
		amount: 250
	},
	{
		id: 2,
		customerName: 'Olivia Smith',
		email: 'olivia@example.com',
		type: 'Refund',
		status: 'Declined',
		date: '2023-06-24',
		amount: 150
	},
	{
		id: 3,
		customerName: 'Noah Williams',
		email: 'noah@example.com',
		type: 'Subscription',
		status: 'Fulfilled',
		date: '2023-06-25',
		amount: 350
	},
	{
		id: 4,
		customerName: 'Emma Brown',
		email: 'emma@example.com',
		type: 'Sale',
		status: 'Fulfilled',
		date: '2023-06-26',
		amount: 450
	},
	{
		id: 5,
		customerName: 'Ava Davis',
		email: 'ava@example.com',
		type: 'Sale',
		status: 'Pending',
		date: '2023-06-27',
		amount: 120
	},
	{
		id: 6,
		customerName: 'William Garcia',
		email: 'williamg@example.com',
		type: 'Subscription',
		status: 'Fulfilled',
		date: '2023-06-28',
		amount: 399
	},
	{
		id: 7,
		customerName: 'Sophia Martinez',
		email: 'sophia@example.com',
		type: 'Refund',
		status: 'Declined',
		date: '2023-06-29',
		amount: 175
	},
	{
		id: 8,
		customerName: 'Mason Lee',
		email: 'mason@example.com',
		type: 'Sale',
		status: 'Pending',
		date: '2023-06-30',
		amount: 220
	},
	{
		id: 9,
		customerName: 'Amelia Taylor',
		email: 'amelia@example.com',
		type: 'Sale',
		status: 'Fulfilled',
		date: '2023-07-01',
		amount: 550
	},
	{
		id: 10,
		customerName: 'Benjamin Clark',
		email: 'benjamin@example.com',
		type: 'Subscription',
		status: 'Fulfilled',
		date: '2023-07-02',
		amount: 499
	},
	{
		id: 11,
		customerName: 'Charlotte Hall',
		email: 'charlotte@example.com',
		type: 'Refund',
		status: 'Declined',
		date: '2023-07-03',
		amount: 200
	},
	{
		id: 12,
		customerName: 'Ethan Adams',
		email: 'ethan@example.com',
		type: 'Sale',
		status: 'Fulfilled',
		date: '2023-07-04',
		amount: 275
	}
];

/**
 * This will return an order by the given id.
 *
 * @param {string|number|null} id
 * @returns {object|null}
 */
export const getOrderById = (id) => orders.find((order) => Number(order.id) === Number(id));