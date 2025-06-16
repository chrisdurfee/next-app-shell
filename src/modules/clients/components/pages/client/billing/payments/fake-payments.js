/**
 * Mock payment data for the payments page.
 *
 * @type {Array<object>}
 */
export const FakePayments = [
	{
		id: 2001,
		paymentNumber: "PMT-2025-001",
		date: "2025-01-20 15:32:00",
		amount: 1250.00,
		status: "Completed",
		method: "Credit Card",
		cardType: "Visa",
		last4: "4242",
		relatedInvoices: ["INV-2025-001"],
		description: "Payment for January services"
	},
	{
		id: 2002,
		paymentNumber: "PMT-2025-002",
		date: "2025-02-20 10:15:00",
		amount: 1250.00,
		status: "Completed",
		method: "Credit Card",
		cardType: "Mastercard",
		last4: "5678",
		relatedInvoices: ["INV-2025-002"],
		description: "Payment for February services"
	},
	{
		id: 2003,
		paymentNumber: "PMT-2025-003",
		date: "2025-03-18 09:45:00",
		amount: 1350.00,
		status: "Completed",
		method: "Bank Transfer",
		accountName: "Client Business Account",
		last4: "9876",
		relatedInvoices: ["INV-2025-003"],
		description: "Payment for March services"
	},
	{
		id: 2004,
		paymentNumber: "PMT-2025-004",
		date: "2025-04-25 14:20:00",
		amount: 1350.00,
		status: "Completed",
		method: "Credit Card",
		cardType: "Visa",
		last4: "4242",
		relatedInvoices: ["INV-2025-004"],
		description: "Payment for April services"
	},
	{
		id: 2005,
		paymentNumber: "PMT-2025-005",
		date: "2025-05-18 11:20:00",
		amount: 500.00,
		status: "Partial",
		method: "Credit Card",
		cardType: "Visa",
		last4: "4242",
		relatedInvoices: ["INV-2025-005"],
		description: "Partial payment for May services"
	},
	{
		id: 2006,
		paymentNumber: "PMT-2025-006",
		date: "2025-05-30 16:45:00",
		amount: 50.00,
		status: "Failed",
		method: "Credit Card",
		cardType: "Visa",
		last4: "4242",
		relatedInvoices: ["INV-2025-005"],
		description: "Failed payment attempt"
	},
	{
		id: 2007,
		paymentNumber: "PMT-2025-007",
		date: "2025-06-10 08:30:00",
		amount: 800.00,
		status: "Completed",
		method: "PayPal",
		email: "client@example.com",
		relatedInvoices: ["INV-2025-005"],
		description: "Remaining payment for May services"
	}
];
