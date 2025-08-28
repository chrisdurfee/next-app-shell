import { Div, H2, H3, P, Span, UseParent } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";
import { Button, Card, Icon } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";
import { BlankPage } from "@base-framework/ui/pages";
import { getMeetingById } from "./meetings.js";

/**
 * This will create an overlay back button.
 *
 * @param {object} props
 * @returns {object}
 */
export const BackButton = Atom((props) =>
{
	const margin = props.margin || 'mx-4 ml-0';
	props.allowHistory = (props.allowHistory === true);
	return Div({ class: `flex-none ${margin}` }, [
		Button({ variant: 'back', class: 'ghost', ...props })
	]);
});

/**
 * This renders the header section for the 1-1 meeting page.
 *
 * @param {object} meeting - The meeting data
 * @returns {object}
 */
const Header = ({ meeting }) =>
(
	Div({ class: "flex items-center justify-between mb-6 py-2" }, [
		Div({ class: "flex items-center" }, [
			BackButton({
				backUrl: `/directory/user/${meeting.userId}/one-on-one`,
			}),
			H2({ class: "text-2xl font-semibold" }, `${meeting.title} / ${meeting.date}`),
		])
	])
);

/**
 * This renders the goals section for the 1-1 meeting.
 *
 * @param {object} meeting - The meeting data
 * @returns {object}
 */
const Goals = ({ meeting }) =>
(
	Div({ class: "mb-8" }, [
		Div({ class: "flex items-center justify-between mb-3" }, [
			H3({ class: "text-lg font-medium" }, "Goals"),
			Button({
                variant: "withIcon",
				class: "outline",
				onClick: () => console.log("New goal clicked"),
                icon: Icons.circlePlus
			}, "New goal")
		]),
		meeting.goals.map(goal =>
			Card({ class: "p-4", margin: "mb-3", hover: true }, [
				Div({ class: "flex items-start" }, [
					Div({ class: "p-2 mr-4" }, [
                        Div({ class: "w-12 h-12 bg-accent rounded-full p-3" }, [
                            Icon({ size: 'sm' }, Icons.document.default)
                        ])
					]),
					Div({ class: "grow" }, [
						Div({ class: "flex items-center justify-between" }, [
							P({ class: "font-medium" }, goal.title),
							Span({ class: `text-sm ${goal.progress >= 100 ? "text-green-600" : "text-muted-foreground"}` },
								`${goal.progress}%`
							)
						]),
						P({ class: "text-sm text-muted-foreground" }, `${goal.date}`)
					])
				])
			])
		)
	])
);

/**
 * This renders a single topic section for the meeting.
 *
 * @param {object} topic - The topic data
 * @returns {object}
 */
const TopicItem = ({ topic }) =>
(
	Card({ margin: "mb-3", hover: true }, [
		Div({ class: "p-4" }, [
			Div({ class: "flex items-center justify-between mb-2" }, [
				Div({ class: "flex items-center" }, [
					Span({ class: "w-2 h-2 bg-accent rounded-full mr-2" }),
					P({ class: "font-medium" }, topic.title)
				]),
				Div({ class: "flex items-center gap-x-2" }, [
                    Button({
                        variant: 'icon',
                        icon: Icons.ellipsis.horizontal
                    })
				])
			])
		]),
		Div({ class: "px-4 pb-4" }, [
			...topic.tasks.map(task =>
				Div({ class: "flex items-center gap-x-2 py-1" }, [
					P({ class: "text-sm text-muted-foreground" }, `- ${task}`)
				])
			),
			Div({ class: "mt-2" }, [
				Button({
                    variant: 'withIcon',
                    class: 'outline',
                    icon: Icons.plus
                }, "New task")
			])
		])
	])
);

/**
 * This renders the topics section for the 1-1 meeting.
 *
 * @param {object} meeting - The meeting data
 * @returns {object}
 */
const Topics = ({ meeting }) =>
(
	Div({ class: "mb-6" }, [
		Div({ class: "flex items-center justify-between mb-3" }, [
			H3({ class: "text-lg font-medium" }, "Topics"),
			Button({
                variant: "withIcon",
				class: "outline",
				onClick: () => console.log("New topic clicked"),
                icon: Icons.circlePlus
			}, "New topic")
		]),
		...meeting.topics.map(topic => TopicItem({ topic }))
	])
);

/**
 * OneOnOnePage
 *
 * Renders the 1-1 meeting page with goals and topics sections.
 *
 * @returns {BlankPage}
 */
export const OneOnOnePage = () => (
	new BlankPage({ class: 'p-0' }, [
		Div({ class: "flex flex-col w-full px-4 lg:px-8 max-w-[1800px] 2xl:max-w-[2200px] mx-auto" }, [
			UseParent(({ route }) =>
			{
				const meeting = getMeetingById(route.meetingId);

				return Div({ class: "flex flex-col contained" }, [
					Header({ meeting }),
					Goals({ meeting }),
					Topics({ meeting })
				]);
			})
		])
	])
);

export default OneOnOnePage;
