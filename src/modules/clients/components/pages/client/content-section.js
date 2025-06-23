import { Div } from "@base-framework/atoms";

/**
 * Helper function to create a page that uses dynamic imports.
 *
 * @param {string} uri The URI (route) for this page
 * @param {Function} importCallback A function returning the dynamic import
 * @returns {object}
 */
const Page = (uri, importCallback) => ({
	uri,
	import: importCallback,
});

/**
 * This will create a dockable page.
 *
 * @returns {object}
 */
const ContentPage = () => (
	Div({
		class: 'flex flex-auto flex-col',
		switch: [
			Page(`/clients/client/:clientId/communication/notes`, () => import('./communication/notes/notes-page.js')),
			Page(`/clients/client/:clientId/communication/contacts/:contactId?`, () => import('./communication/contacts/contact-page.js')),
			Page(`/clients/client/:clientId/communication/calls/:callId?`, () => import('./communication/calls/call-page.js')),
			Page(`/clients/client/:clientId/billing/invoices/:invoiceId?`, () => import('./billing/invoices/invoice-page.js')),
			Page(`/clients/client/:clientId/billing/payments/:paymentId?`, () => import('./billing/payments/payment-page.js')),
			Page(`/clients/client/:clientId/billing/orders/:orderId?`, () => import('./billing/orders/orders-page.js')),
			Page(`/clients/client/:clientId*`, () => import('./summary/summary-page.js'))
		]
	})
);

/**
 * This will create the Content Section.
 *
 * @param {object} props
 * @returns {object}
 */
export const ContentSection = (props) => (
	Div({ class: 'flex flex-auto flex-col' }, [
		ContentPage()
	])
);