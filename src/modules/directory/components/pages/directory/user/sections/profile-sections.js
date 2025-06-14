import { Div, H2, Header, P, Td, Tr } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";
import { Card } from "@base-framework/ui";
import { Badge, Icon } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";
import { DataTable } from "@base-framework/ui/organisms";

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

/* existing sections omitted for brevity… */

/**
 * EmploymentDetailsSection
 *
 * Placeholder fields: start date, tenure, department, manager,
 * work style, birthday. Other common fields include employee ID,
 * office location, time zone, emergency contact.
 *
 * @returns {object}
 */
export const EmploymentDetailsSection = () =>
	ProfileSection({ title: "Employment Details" }, [
		Card({ class: "p-6", margin: "m-0" }, [
			Div({ class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" }, [
				// Date Started
				Div({ class: "space-y-1" }, [
					P({ class: "text-sm text-muted-foreground" }, "Date Started"),
					P({ class: "font-medium text-foreground" }, "Jan. 1, 2020")
				]),

				// Years at Company
				Div({ class: "space-y-1" }, [
					P({ class: "text-sm text-muted-foreground" }, "Years at Company"),
					P({ class: "font-medium text-foreground" }, "3 years")
				]),

				// Department
				Div({ class: "space-y-1" }, [
					P({ class: "text-sm text-muted-foreground" }, "Department"),
					P({ class: "font-medium text-foreground" }, "Engineering")
				]),

				// Reporting Manager
				Div({ class: "space-y-1" }, [
					P({ class: "text-sm text-muted-foreground" }, "Reporting Manager"),
					P({ class: "font-medium text-foreground" }, "Jordan Smith")
				]),

				// Work Style
				Div({ class: "space-y-1" }, [
					P({ class: "text-sm text-muted-foreground" }, "Work Style"),
					P({ class: "font-medium text-foreground" }, "Hybrid")
				]),

				// Birthday
				Div({ class: "space-y-1" }, [
					P({ class: "text-sm text-muted-foreground" }, "Birthday"),
					P({ class: "font-medium text-foreground" }, "Jun. 7th")
				])
			])
		])
	]);

/**
 * ScheduleSection
 *
 * Placeholder weekly in/out times.
 *
 * @returns {object}
 */
export const ScheduleSection = () => {
	const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
	return ProfileSection({ title: "Schedule" }, [
		Card({ class: '', margin: 'm-0' }, [
			Div({ class: "grid grid-cols-7 gap-2 text-sm text-muted-foreground divide-x divide-border" },
				days.map((day) =>
					(day == 'Sat' || day == 'Sun')
					? Div({ class: "flex flex-col items-center space-y-1 p-2 bg-card rounded" }, [
						P({ class: "font-medium text-foreground" }, day),
						P("-")
					])
					: Div({ class: "flex flex-col items-center space-y-1 p-2 bg-card rounded" }, [
						P({ class: "font-medium text-foreground flex-col" }, day),
						P("9:00 am"),
						P("5:00 pm")
					])
				)
			)
		])
	]);
};

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
	ProfileSection({ title: "Position History" }, [
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
						P({ class: "font-medium" }, position.title),
						P({ class: "text-sm text-muted-foreground" }, `(${position.from} - ${position.to})`)
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
	ProfileSection({ title: "Current Projects" }, [
		Div({ class: "overflow-x-auto" },
			new DataTable({
				key: 'id',
				headers: [
					{ label: 'Project Name', key: 'name' },
					{ label: 'Role', key: 'role' },
					{ label: 'Status', key: 'status' }
				],
				rows: projects,
				rowItem: (project) => Tr({ class: "items-center px-4 py-2 hover:bg-muted/50" }, [
					Td({ class: "p-4" }, P(project.name)),
					Td({ class: "p-4 text-muted-foreground" }, P(project.role)),
					Td({ class: "p-4" }, Badge({ variant: project.status === "Completed" ? "secondary" : "primary" }, project.status))
				])
			})
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
	ProfileSection({ title: "Skills" }, [
		Div({ class: "space-y-4" }, [
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
		Div({ class: "overflow-x-auto" }, [
			new DataTable({
				key: 'id',
				headers: [
					{ label: 'Date', key: 'date' },
					{ label: 'Reviewer', key: 'reviewer' },
					{ label: 'Rating', key: 'rating' }
				],
				rows: reviews,
				rowItem: (review) => Tr({ class: "items-center px-4 py-2 hover:bg-muted/50" }, [
					Td({ class: "p-4" }, P(review.date)),
					Td({ class: "p-4 text-muted-foreground" }, P(review.reviewer)),
					Td({ class: "p-4" }, P(review.rating))
				])
			})
		])
	]);