/**
 * Mock invoice data for the invoice page.
 *
 * @type {Array<object>}
 */
export const FakeInvoices = [
    {
        id: 1001,
        invoiceNumber: "INV-2025-001",
        date: "2025-01-15 12:00:00",
        dueDate: "2025-01-30 12:00:00",
        amount: 1250.00,
        status: "Paid",
        items: [
            { description: "Monthly Service - Basic Package", quantity: 1, unitPrice: 1000.00 },
            { description: "Additional User Licenses", quantity: 5, unitPrice: 50.00 }
        ],
        paymentDate: "2025-01-20 15:32:00",
        paymentMethod: "Credit Card"
    },
    {
        id: 1002,
        invoiceNumber: "INV-2025-002",
        date: "2025-02-15 12:00:00",
        dueDate: "2025-02-28 12:00:00",
        amount: 1250.00,
        status: "Paid",
        items: [
            { description: "Monthly Service - Basic Package", quantity: 1, unitPrice: 1000.00 },
            { description: "Additional User Licenses", quantity: 5, unitPrice: 50.00 }
        ],
        paymentDate: "2025-02-20 10:15:00",
        paymentMethod: "Credit Card"
    },
    {
        id: 1003,
        invoiceNumber: "INV-2025-003",
        date: "2025-03-15 12:00:00",
        dueDate: "2025-03-30 12:00:00",
        amount: 1350.00,
        status: "Paid",
        items: [
            { description: "Monthly Service - Basic Package", quantity: 1, unitPrice: 1000.00 },
            { description: "Additional User Licenses", quantity: 5, unitPrice: 50.00 },
            { description: "Premium Support Add-on", quantity: 1, unitPrice: 100.00 }
        ],
        paymentDate: "2025-03-18 09:45:00",
        paymentMethod: "Bank Transfer"
    },
    {
        id: 1004,
        invoiceNumber: "INV-2025-004",
        date: "2025-04-15 12:00:00",
        dueDate: "2025-04-30 12:00:00",
        amount: 1350.00,
        status: "Paid",
        items: [
            { description: "Monthly Service - Basic Package", quantity: 1, unitPrice: 1000.00 },
            { description: "Additional User Licenses", quantity: 5, unitPrice: 50.00 },
            { description: "Premium Support Add-on", quantity: 1, unitPrice: 100.00 }
        ],
        paymentDate: "2025-04-25 14:20:00",
        paymentMethod: "Credit Card"
    },
    {
        id: 1005,
        invoiceNumber: "INV-2025-005",
        date: "2025-05-15 12:00:00",
        dueDate: "2025-05-30 12:00:00",
        amount: 1350.00,
        status: "Due",
        items: [
            { description: "Monthly Service - Basic Package", quantity: 1, unitPrice: 1000.00 },
            { description: "Additional User Licenses", quantity: 5, unitPrice: 50.00 },
            { description: "Premium Support Add-on", quantity: 1, unitPrice: 100.00 }
        ],
        paymentDate: null,
        paymentMethod: null
    },
    {
        id: 1006,
        invoiceNumber: "INV-2025-006",
        date: "2025-06-15 12:00:00",
        dueDate: "2025-06-30 12:00:00",
        amount: 1450.00,
        status: "Pending",
        items: [
            { description: "Monthly Service - Basic Package", quantity: 1, unitPrice: 1000.00 },
            { description: "Additional User Licenses", quantity: 7, unitPrice: 50.00 },
            { description: "Premium Support Add-on", quantity: 1, unitPrice: 100.00 }
        ],
        paymentDate: null,
        paymentMethod: null
    }
];
