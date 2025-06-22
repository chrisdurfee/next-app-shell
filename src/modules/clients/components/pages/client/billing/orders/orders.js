/**
 * Mock order data for the orders page.
 *
 * @type {Array<object>}
 */
export const ORDERS = [
	{
		id: 5001,
		orderNumber: "ORD-2025-001",
		date: "2025-01-10 09:15:00",
		amount: 1350.00,
		status: "Completed",
		items: [
			{ id: 1, name: "Basic CRM Package", quantity: 1, unitPrice: 1000.00 },
			{ id: 2, name: "User Licenses", quantity: 5, unitPrice: 50.00 },
			{ id: 3, name: "Support Package", quantity: 1, unitPrice: 100.00 }
		],
		customer: {
			name: "Acme Corporation",
			contactPerson: "John Smith",
			email: "john.smith@acme.com"
		},
		shippingAddress: "123 Business Ave, Suite 100, San Francisco, CA 94107",
		billingAddress: "123 Business Ave, Suite 100, San Francisco, CA 94107",
		paymentMethod: "Credit Card",
		trackingNumber: "TRK123456789"
	},
	{
		id: 5002,
		orderNumber: "ORD-2025-002",
		date: "2025-02-05 14:30:00",
		amount: 2500.00,
		status: "Completed",
		items: [
			{ id: 1, name: "Premium CRM Package", quantity: 1, unitPrice: 2000.00 },
			{ id: 2, name: "User Licenses", quantity: 8, unitPrice: 50.00 },
			{ id: 3, name: "Support Package", quantity: 1, unitPrice: 100.00 }
		],
		customer: {
			name: "TechStart Inc.",
			contactPerson: "Emma Johnson",
			email: "emma@techstart.com"
		},
		shippingAddress: "456 Innovation Road, Austin, TX 78701",
		billingAddress: "456 Innovation Road, Austin, TX 78701",
		paymentMethod: "Bank Transfer",
		trackingNumber: "TRK987654321"
	},
	{
		id: 5003,
		orderNumber: "ORD-2025-003",
		date: "2025-03-12 10:45:00",
		amount: 3200.00,
		status: "Completed",
		items: [
			{ id: 1, name: "Enterprise CRM Package", quantity: 1, unitPrice: 3000.00 },
			{ id: 2, name: "User Licenses", quantity: 4, unitPrice: 50.00 }
		],
		customer: {
			name: "Global Solutions Ltd.",
			contactPerson: "Michael Chen",
			email: "mchen@globalsolutions.com"
		},
		shippingAddress: "789 Corporate Drive, Chicago, IL 60611",
		billingAddress: "789 Corporate Drive, Chicago, IL 60611",
		paymentMethod: "Credit Card",
		trackingNumber: "TRK456789123"
	},
	{
		id: 5004,
		orderNumber: "ORD-2025-004",
		date: "2025-04-20 16:20:00",
		amount: 1750.00,
		status: "In Progress",
		items: [
			{ id: 1, name: "Basic CRM Package", quantity: 1, unitPrice: 1000.00 },
			{ id: 2, name: "User Licenses", quantity: 10, unitPrice: 50.00 },
			{ id: 3, name: "Premium Support Package", quantity: 1, unitPrice: 250.00 }
		],
		customer: {
			name: "Innovative Designs",
			contactPerson: "Sarah Williams",
			email: "sarah@innovativedesigns.com"
		},
		shippingAddress: "321 Design Street, Seattle, WA 98101",
		billingAddress: "321 Design Street, Seattle, WA 98101",
		paymentMethod: "Credit Card",
		trackingNumber: null
	},
	{
		id: 5005,
		orderNumber: "ORD-2025-005",
		date: "2025-05-08 11:10:00",
		amount: 4500.00,
		status: "Processing",
		items: [
			{ id: 1, name: "Enterprise CRM Package", quantity: 1, unitPrice: 3000.00 },
			{ id: 2, name: "User Licenses", quantity: 20, unitPrice: 50.00 },
			{ id: 3, name: "Premium Support Package", quantity: 1, unitPrice: 500.00 },
			{ id: 4, name: "Data Migration Service", quantity: 1, unitPrice: 500.00 }
		],
		customer: {
			name: "Mega Industries",
			contactPerson: "Robert Brown",
			email: "robert@megaindustries.com"
		},
		shippingAddress: "555 Industrial Parkway, Detroit, MI 48226",
		billingAddress: "555 Industrial Parkway, Detroit, MI 48226",
		paymentMethod: "Bank Transfer",
		trackingNumber: null
	},
	{
		id: 5006,
		orderNumber: "ORD-2025-006",
		date: "2025-06-15 09:30:00",
		amount: 1200.00,
		status: "Pending",
		items: [
			{ id: 1, name: "Basic CRM Package", quantity: 1, unitPrice: 1000.00 },
			{ id: 2, name: "User Licenses", quantity: 4, unitPrice: 50.00 }
		],
		customer: {
			name: "Small Business Solutions",
			contactPerson: "Jennifer Davis",
			email: "jennifer@sbsolutions.com"
		},
		shippingAddress: "123 Small Business Ave, Denver, CO 80202",
		billingAddress: "123 Small Business Ave, Denver, CO 80202",
		paymentMethod: "Pending",
		trackingNumber: null
	},
	{
		id: 5007,
		orderNumber: "ORD-2025-007",
		date: "2025-06-18 14:15:00",
		amount: 2100.00,
		status: "Cancelled",
		items: [
			{ id: 1, name: "Premium CRM Package", quantity: 1, unitPrice: 2000.00 },
			{ id: 2, name: "User Licenses", quantity: 2, unitPrice: 50.00 }
		],
		customer: {
			name: "Creative Enterprises",
			contactPerson: "David Wilson",
			email: "david@creativeent.com"
		},
		shippingAddress: "456 Creative Lane, Portland, OR 97201",
		billingAddress: "456 Creative Lane, Portland, OR 97201",
		paymentMethod: "Credit Card (Refunded)",
		trackingNumber: null
	}
];
