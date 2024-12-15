import { Div } from '@base-framework/atoms';
import { BlankPage } from '@components/pages/blank-page.js';
import { DashboardContent } from './dashboard-content.js';

/**
 * Orders Dashboard Page
 *
 * This is the main orders dashboard page.
 *
 * @returns {object}
 */
export const OrdersDashboard = () => (
    new BlankPage([
        Div({ class: 'grid grid-cols-1 relative w-full max-w-7xl mx-auto' }, [
            DashboardContent()
        ])
    ])
);

export default OrdersDashboard;