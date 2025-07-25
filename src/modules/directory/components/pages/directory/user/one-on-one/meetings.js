/**
 * Mock data for 1-1 meetings.
 *
 * @type {Array<object>} MEETINGS
 */
export const MEETINGS = [
	{
		id: 1,
		userId: 1,
		userName: "Jon Smith",
		title: '1:1 Meeting with Jon Smith',
		description: "This is a mock meeting for testing purposes.",
		position: "J",
		trialMode: true,
		trialDaysLeft: 14,
        date: "2025-06-07",
		lastMeeting: "2025-06-07T10:30Z",
		goals: [
			{
				id: 1,
				title: "Establish clear expectations and goals for the first 30 days.",
				date: "2024-10-07",
				progress: 0
			}
		],
		topics: [
			{
				id: 1,
				title: "Welcome and Introductions",
				tasks: [
					"Briefly introduce yourself and your role.",
					"Learn more about the new hire's background and interests."
				]
			},
			{
				id: 2,
				title: "Company Culture and Values",
				tasks: [
					"Discuss the company's mission, vision, and values.",
					"Explain how the new hire's role contributes to these."
				]
			},
			{
				id: 3,
				title: "Initial Goals and Expectations",
				tasks: [
					"Outline specific objectives for the first 30 days.",
					"Discuss key performance indicators (KPIs) and milestones."
				]
			},
			{
				id: 4,
				title: "Performance Review",
				tasks: [
					"Explain the performance review process.",
					"Discuss how feedback will be provided and how often."
				]
			}
		]
	},
	{
		id: 2,
		userId: 1,
		userName: "Jon Smith",
		title: '1:1 Meeting with Jon Smith',
		description: "This is a mock meeting for testing purposes.",
		position: "J",
		trialMode: true,
		trialDaysLeft: 14,
        date: "2025-06-07",
		lastMeeting: "2025-06-07T10:30Z",
		goals: [
			{
				id: 1,
				title: "Establish clear expectations and goals for the first 30 days.",
				date: "2024-10-07",
				progress: 0
			}
		],
		topics: [
			{
				id: 1,
				title: "Welcome and Introductions",
				tasks: [
					"Briefly introduce yourself and your role.",
					"Learn more about the new hire's background and interests."
				]
			},
			{
				id: 2,
				title: "Company Culture and Values",
				tasks: [
					"Discuss the company's mission, vision, and values.",
					"Explain how the new hire's role contributes to these."
				]
			},
			{
				id: 3,
				title: "Initial Goals and Expectations",
				tasks: [
					"Outline specific objectives for the first 30 days.",
					"Discuss key performance indicators (KPIs) and milestones."
				]
			},
			{
				id: 4,
				title: "Performance Review",
				tasks: [
					"Explain the performance review process.",
					"Discuss how feedback will be provided and how often."
				]
			}
		]
	},
	{
		id: 3,
		userId: 1,
		userName: "Jon Smith",
		title: '1:1 Meeting with Jon Smith',
		description: "This is a mock meeting for testing purposes.",
		position: "J",
		trialMode: true,
		trialDaysLeft: 14,
        date: "2025-06-07",
		lastMeeting: "2025-06-07T10:30Z",
		goals: [
			{
				id: 1,
				title: "Establish clear expectations and goals for the first 30 days.",
				date: "2024-10-07",
				progress: 0
			}
		],
		topics: [
			{
				id: 1,
				title: "Welcome and Introductions",
				tasks: [
					"Briefly introduce yourself and your role.",
					"Learn more about the new hire's background and interests."
				]
			},
			{
				id: 2,
				title: "Company Culture and Values",
				tasks: [
					"Discuss the company's mission, vision, and values.",
					"Explain how the new hire's role contributes to these."
				]
			},
			{
				id: 3,
				title: "Initial Goals and Expectations",
				tasks: [
					"Outline specific objectives for the first 30 days.",
					"Discuss key performance indicators (KPIs) and milestones."
				]
			},
			{
				id: 4,
				title: "Performance Review",
				tasks: [
					"Explain the performance review process.",
					"Discuss how feedback will be provided and how often."
				]
			}
		]
	}
];

/**
 * Finds a meeting by its ID.
 *
 * @param {string} meetingId - The ID of the meeting to fetch.
 * @returns {object|null}
 */
export const getMeetingById = (meetingId) => MEETINGS.find((meeting) => meeting.id.toString() === meetingId) || null;
