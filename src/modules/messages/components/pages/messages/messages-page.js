import { Div, OnRoute, OnXs, UseParent } from "@base-framework/atoms";
import { Data } from "@base-framework/base";
import { BlankPage } from "@base-framework/ui/pages";
import { MessagesSidebar } from "./messages-sidebar.js";
import { MESSAGES_THREADS } from "./messages-threads.js";
import { ThreadList } from "./thread/list/thread-list.js";
import { ThreadContentSwitch } from "./thread/thread-content-switch.js";

/**
 * MessagesPage
 *
 * A chat-like page that shows a thread of messages (like your inbox example).
 *
 * @returns {object}
 */
export const MessagesPage = () =>
{
	/**
	 * @type {object} Props
	 *
	 * This sets up the page props. Similar structure to the inbox example.
	 */
	const Props =
	{
		/**
		 * Sets up the page data.
		 *
		 * @returns {Data}
		 */
		setData()
		{
			return new Data({
				items: MESSAGES_THREADS
			});
		},

		/**
		 * Called after setup to ensure we have a default route or something.
		 *
		 * @returns {void}
		 */
		afterSetup()
		{
			if (!this.route.page)
			{
				// @ts-ignore
				app.navigate("messages/all", null, true);
			}
		},

		/**
		 * Setup states for the messages page.
		 *
		 * @returns {object}
		 */
		setupStates()
		{
			return {
				filter: 'all' // e.g. could filter by unread, etc.
			};
		}
	};

	return new BlankPage(Props, [
		Div({ class: "flex w-full flex-col lg:flex-row h-full" }, [

			// Left: Thread List
			OnXs((size) =>
			{
				if (size === "sm" || size === "xs")
				{
					/**
					 * Tracks the route to add or remove the thread list
					 * based on the selected message on small devices.
					 */
					return OnRoute('messageId', (messageId) =>
					{
						/**
						 * If a message is selected, remove the thread list.
						 */
						return (typeof messageId !== "undefined")
							? null
							: Div({ class: "flex flex-auto w-full lg:max-w-[460px] lg:border-r" }, [
								ThreadList()
							]);
					});
				}

				/**
				 * Large displays always show the thread list.
				 */
				return Div({ class: "flex flex-auto w-full lg:max-w-[460px] lg:border-r" }, [
					ThreadList()
				]);
			}),

			// Right: Content Switch for actual chat messages
			UseParent(({ list, route }) => (
				ThreadContentSwitch({
					delete: (id) =>
					{
						list.delete(id);
						app.navigate(`messages/${route.page}`);

						app.notify({
							type: "success",
							title: "Message Deleted",
							description: "The message has been deleted.",
						});
					},
					mingle(row)
					{
						list.mingle(row);
					}
				})
			)),

			MessagesSidebar()
		])
	]);
};

export default MessagesPage;