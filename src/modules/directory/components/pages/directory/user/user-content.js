import { Div, H2, Header, P } from "@base-framework/atoms";
import { AboutSection, PositionHistorySection, ProjectsSection, ReviewsSection, SkillsSection } from "./sections/profile-sections.js";

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
 * UserContent
 *
 * Displays the body content of the post.
 *
 * @param {object} props
 * @param {object} props.user - The user data.
 * @returns {object}
 */
export const UserContent = ({ user }) => (
	Div({ class: "space-y-12 mt-2" }, [
		AboutSection(user),
		PositionHistorySection({ history: user.positionHistory }),
		ProjectsSection({ projects: user.projects }),
		SkillsSection({ skills: user.skills }),
		ReviewsSection({ reviews: user.reviews }),
	])
);