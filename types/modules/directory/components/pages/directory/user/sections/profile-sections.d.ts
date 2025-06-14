export function OrgDetailsSection(): object;
export function PersonalDetailsSection(): object;
export function ScheduleSection(): object;
export function AboutSection({ about }: {
    about: string;
}): object;
export function ContactSection({ user }: object): object;
export function PositionHistorySection({ history }: {
    history: any[];
}): object;
export function ProjectsSection({ projects }: {
    projects: any[];
}): object;
export function SkillsSection({ skills }: {
    skills: any[];
}): object;
export function ReviewsSection({ reviews }: {
    reviews: any[];
}): object;
/**
 * CancelledRequestItem
 *
 * Renders a single cancelled time-off request row.
 *
 * @param {object} props
 * @param {string} props.typeLabel
 * @param {string} props.startDate
 * @param {string} props.endDate
 * @param {number} props.days
 * @param {number} props.percent
 * @param {string} props.icon
 * @param {string} props.status
 * @returns {object}
 */
export const CancelledRequestItem: Function;
/**
 * PendingRequestItem
 *
 * Renders a single pending time-off request row, with action buttons.
 *
 * @param {object} props
 * @param {string} props.typeLabel
 * @param {string} props.startDate
 * @param {number} props.days
 * @param {number} props.percent
 * @param {string} props.icon
 * @param {string} props.status
 * @param {string} [props.reason]
 * @returns {object}
 */
export const PendingRequestItem: Function;
export function TimeOffRequestsSection(): object;
