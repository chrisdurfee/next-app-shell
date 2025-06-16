// src/pages/clients/call-page.js
import { Div, On } from "@base-framework/atoms";
import { Data } from "@base-framework/base";
import { Page } from "@base-framework/ui/pages";
import { CallList } from "./call-list.js";
import CallSkeleton from "./call-skeleton.js";
import { FakeCalls } from "./fake-calls.js";
import { PageHeader } from "./page-header.js";

/**
 * props for ClientCallsPage
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
	 * @returns {object} Data instance with loaded and calls.
	 */
	setData()
	{
		return new Data({ loaded: false, calls: [] });
	},

	/**
	 * afterSetup
	 *
	 * Fetches call data after mount.
	 *
	 * @returns {void}
	 */
	afterSetup()
	{
		const DELAY = 500;
		setTimeout(() => this.data.set({ calls: FakeCalls, loaded: true }), DELAY);
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
 * CallPage
 *
 * Page showing a client's call list.
 *
 * @returns {object} A Page component.
 */
export const CallPage = () =>
	new Page(props, [
		On("loaded", (loaded, ele, { data }) =>
		{
			if (!loaded)
			{
				return CallSkeleton();
			}

			return Div({ class: "p-6 2xl:mx-auto w-full contained" }, [
				PageHeader(),
				CallList({ calls: data.calls })
			]);
		})
	]);

export default CallPage;
