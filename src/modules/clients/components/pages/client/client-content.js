import { Div, H2, Header, P } from "@base-framework/atoms";
import { AboutSection, OrgDetailsSection, PersonalDetailsSection, PositionHistorySection, ProjectsSection, ReviewsSection, ScheduleSection, SkillsSection, TimeOffRequestsSection } from "./sections/profile-sections.js";

/**
 * This will create the card header.
 *
 * @param {object} props
 * @returns {object}
 */
export const CardHeader = ({ title, description }) => (
	Header({ class: 'text-left' }, [
		H2({ class: "font-semibold tracking-tight text-2xl" }, title),
		P({ class: "text-sm text-muted-foreground" }, description)
	])
);

/**
 * ClientContent
 *
 * Displays the body content of the post.
 *
 * @param {object} props
 * @param {object} props.client - The client data.
 * @returns {object}
 */
export const ClientContent = ({ client }) => (
	Div({ class: "space-y-12 mt-6 md:px-6" }, [
		AboutSection(client),
		OrgDetailsSection(),
		PersonalDetailsSection(),
		ScheduleSection(),
		PositionHistorySection({ history: client.positionHistory || [] }),
		ProjectsSection({ projects: client.projects || [] }),
		SkillsSection({ skills: client.skills || [] }),
		ReviewsSection({ reviews: client.reviews || [] }),
		TimeOffRequestsSection()
	])
);