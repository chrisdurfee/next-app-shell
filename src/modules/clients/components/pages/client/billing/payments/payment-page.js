import { Div, On } from "@base-framework/atoms";
import { Data } from "@base-framework/base";
import { Page } from "@base-framework/ui/pages";
import { FakePayments } from "./fake-payments.js";
import { PageHeader } from "./page-header.js";
import { PaymentList } from "./payment-list.js";
import PaymentSkeleton from "./payment-skeleton.js";

/**
 * props for PaymentPage
 *
 * @type {object} props
 */
const props =
{
    class: "flex flex-auto flex-col w-full",

    /**
     * setData
     *
     * Initializes component state.
     *
     * @returns {object} Data instance with loaded and payments.
     */
    setData()
    {
        return new Data({ loaded: false, payments: [] });
    },

    /**
     * afterSetup
     *
     * Fetches payment data after mount.
     *
     * @returns {void}
     */
    afterSetup()
    {
        const DELAY = 500;
        setTimeout(() => this.data.set({ payments: FakePayments, loaded: true }), DELAY);
    },

    /**
     * beforeDestroy
     *
     * Cleans up component state.
     *
     * @returns {void}
     */
    beforeDestroy()
    {
        this.data.delete();
        this.data.loaded = false;
    }
};

/**
 * PaymentPage
 *
 * Page showing a client's payment history.
 *
 * @returns {object} A Page component.
 */
export const PaymentPage = () =>
    new Page(props, [
        On("loaded", (loaded, ele, { data }) =>
        {
            if (!loaded)
            {
                return PaymentSkeleton();
            }

            return Div({ class: "p-6 2xl:mx-auto w-full contained" }, [
                PageHeader(),
                PaymentList({ payments: data.payments })
            ]);
        })
    ]);

export default PaymentPage;
