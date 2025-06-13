import { Div, H2, Header, P } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";
import { Badge, Icon } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";

/**
 * ProfileSection
 *
 * Generic section with a title and description, used for various profile sections.
 * @param {object} props
 * @param {string} props.title - Section title.
 * @param {string} props.description - Section description.
 * @param {Array} children - Child components to render within the section.
 * @returns {object}
 */
const ProfileSection = Atom((props, children) => (
	Div({ class: "space-y-6" }, [
		Header({ class: "flex flex-col space-y-2" }, [
			H2({ class: "text-xl font-semibold" }, props.title),
			props.description && P({ class: "text-sm text-muted-foreground" }, props.description)
		]),
		...children
	])
))

/**
 * AboutSection
 *
 * Simple header + paragraph, no card.
 *
 * @param {object} props
 * @param {string} props.about - User about text.
 * @returns {object}
 */
export const AboutSection = ({ about }) =>
	ProfileSection({ title: "About"}, [
		P({ class: "text-base text-muted-foreground" }, about)
	]);

/**
 * ContactSection
 *
 * Two-column label/value list with separators.
 *
 * @param {object} props
 * @returns {object}
 */
export const ContactSection = ({ user }) =>
	ProfileSection({ title: "Contact Information", description: "User contact details" }, [
		Div({ class: "divide-y divide-muted-200 text-sm text-muted-foreground" }, [
			Div({ class: "flex justify-between py-2" }, [
				P({ class: "font-medium text-foreground" }, "Email"),
				P({ class: "truncate" }, user.email)
			]),
			Div({ class: "flex justify-between py-2" }, [
				P({ class: "font-medium text-foreground" }, "Phone"),
				P({ class: "truncate" }, user.phone || "—")
			])
		])
	]);

/**
 * PositionHistorySection
 *
 * “Work History” list with icons and a thin vertical line.
 *
 * @param {object} props
 * @param {Array} props.history - Array of position history objects.
 *
 * @returns {object}
 */
export const PositionHistorySection = ({ history }) =>
	ProfileSection({ title: "Work Progress" }, [
		Div({ class: "relative pl-6 space-y-6" }, [
			history.map((position, index) => (
				Div({ class: "flex flex-auto flex-row space-x-4" }, [
					Div({ class: 'flex flex-col relative items-center' }, [
						Icon(Icons.breifcase),
						// vertical line
						(index !== (history.length - 1))
							? Div({ class: "h-full w-px bg-border" })
							: null
					]),
					Div({ class: "flex flex-col pb-8" }, [
						P({ class: "font-medium text-foreground" }, position.title),
						P({ class: "text-sm text-accent" }, `${position.company} (${position.from} - ${position.to})`)
					])
				])
			))
		])
	]);

/**
 * ProjectsSection
 *
 * Plain table with header row and subtle row borders.
 *
 * @param {object} props
 * @param {Array} props.projects - Array of project objects with name, role, and status.
 * @returns {object}
 */
export const ProjectsSection = ({ projects }) =>
	ProfileSection({ title: "Current Projects", description: "User's current projects" }, [
		Div({ class: "overflow-x-auto" },
			Div({ class: "min-w-full text-sm divide-y divide-muted-200" }, [
				// header
				Div({ class: "grid grid-cols-3 gap-4 pb-2 font-medium" }, [
					P("Project Name"),
					P("Role"),
					P("Status")
				]),
				// rows
				...projects.map(project =>
					Div({ class: "grid grid-cols-3 gap-4 py-3 items-center" }, [
						P(project.name),
						P({ class: "text-accent" }, project.role),
						Badge({ variant: project.status === "Completed" ? "secondary" : "primary" },
							project.status
						)
					])
				)
			])
		)
	]);

/**
 * SkillsSection
 *
 * Inline badges, wrapped.
 *
 * @param {object} props
 * @param {Array} props.skills - Array of skill strings.
 * @returns {object}
 */
export const SkillsSection = ({ skills }) =>
	ProfileSection({ title: "Skills", description: "User skills and expertise" }, [
		Div({ class: "space-y-4" }, [
			H2({ class: "text-xl font-semibold" }, "Skills"),
			Div({ class: "flex flex-wrap gap-2" }, skills.map(skill => Badge({ variant: "outline" }, skill)))
		])
	]);

/**
 * ReviewsSection
 *
 * Another plain table for performance reviews.
 *
 * @param {object} props
 * @param {Array} props.reviews - Array of review objects with date, reviewer, and rating.
 * @returns {object}
 */
export const ReviewsSection = ({ reviews }) =>
	ProfileSection({ title: "Performance Reviews", description: "User performance reviews" }, [
		Div({ class: "overflow-x-auto" },
			Div({ class: "min-w-full text-sm divide-y divide-muted-200" }, [
				// header
				Div({ class: "grid grid-cols-3 gap-4 pb-2 font-medium" }, [
					P("Date"),
					P("Reviewer"),
					P("Rating")
				]),
				// rows
				...reviews.map(review =>
					Div({ class: "grid grid-cols-3 gap-4 py-3 items-center" }, [
						P(review.date),
						P({ class: "text-accent" }, review.reviewer),
						P(review.rating)
					])
				)
			])
		)
	]);