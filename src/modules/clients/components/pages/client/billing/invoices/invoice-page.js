import { Div, On } from "@base-framework/atoms";
import { Data } from "@base-framework/base";
import { Page } from "@base-framework/ui/pages";
import { FakeInvoices } from "./fake-invoices.js";
import { InvoiceList } from "./invoice-list.js";
import InvoiceSkeleton from "./invoice-skeleton.js";
import { PageHeader } from "./page-header.js";

/**
 * props for InvoicePage
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
     * @returns {object} Data instance with loaded and invoices.
     */
    setData()
    {
        return new Data({ loaded: false, invoices: [] });
    },

    /**
     * afterSetup
     *
     * Fetches invoice data after mount.
     *
     * @returns {void}
     */
    afterSetup()
    {
        const DELAY = 500;
        setTimeout(() => this.data.set({ invoices: FakeInvoices, loaded: true }), DELAY);
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
 * InvoicePage
 *
 * Page showing a client's invoice list.
 *
 * @returns {object} A Page component.
 */
export const InvoicePage = () =>
    new Page(props, [
        On("loaded", (loaded, ele, { data }) =>
        {
            if (!loaded)
            {
                return InvoiceSkeleton();
            }

            return Div({ class: "p-6 2xl:mx-auto w-full contained" }, [
                PageHeader(),
                InvoiceList({ invoices: data.invoices })
            ]);
        })
    ]);

export default InvoicePage;
