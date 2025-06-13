/**
 * Mock data for directory & profile pages.
 *
 * @type {Array<object>} USERS
 */
export const USERS = [
	{
		id: 1,
		firstName: "Leslie",
		lastName: "Alexander",
		email: "leslie.alexander@example.com",
		phone: "(555) 123-0001",
		image:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		role: "Co-Founder / CEO",
		department: "Executive",
		lastSeen: "2025-06-11T13:23Z",
		status: "offline",
		about:
			"Leslie is a highly skilled software engineer with over 8 years of experience in developing scalable web applications. She specializes in backend development using Java and Python, and has a strong understanding of cloud technologies. Leslie is a team player and always strives to deliver high-quality work.",
		bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		location: "New York, USA",
		positionHistory: [
			{ title: "Co-Founder / CEO", company: "Acme Co", from: "2020", to: "Present" },
			{ title: "Chief Operating Officer", company: "Startup Inc.", from: "2016", to: "2020" },
		],
		projects: [
			{ name: "Project Phoenix", role: "Executive Sponsor", status: "In Progress" },
			{ name: "Project Nova", role: "Board Liaison", status: "Completed" },
		],
		skills: ["Leadership", "Strategic Planning", "Fundraising"],
		reviews: [
			{ date: "2023-01-15", reviewer: "Sophia Bennett", rating: "Excellent" },
			{ date: "2022-01-20", reviewer: "Owen Carter", rating: "Good" },
		],
	},
	{
		id: 2,
		firstName: "Michael",
		lastName: "Foster",
		email: "michael.foster@example.com",
		phone: "(555) 123-0002",
		image:
			"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		role: "Co-Founder / CTO",
		department: "Engineering",
		lastSeen: "2025-06-12T08:47Z",
		status: "online",
		about:
			"Michael is a highly skilled software engineer with over 8 years of experience in developing scalable web applications. He specializes in backend development using Java and Python, and has a strong understanding of cloud technologies. Michael is a team player and always strives to deliver high-quality work.",
		bio: "Passionate about building scalable tech solutions.",
		location: "San Francisco, USA",
		positionHistory: [
			{ title: "Co-Founder / CTO", company: "Acme Co", from: "2020", to: "Present" },
			{ title: "Lead Engineer", company: "DevWorks", from: "2016", to: "2020" },
		],
		projects: [
			{ name: "Project Phoenix", role: "Tech Lead", status: "In Progress" },
			{ name: "Project Nova", role: "Architect", status: "Completed" },
		],
		skills: ["System Architecture", "Cloud Infrastructure", "Kubernetes"],
		reviews: [
			{ date: "2023-02-10", reviewer: "Emma Stone", rating: "Excellent" },
			{ date: "2022-03-05", reviewer: "Liam Brooks", rating: "Good" },
		],
	},
	{
		id: 3,
		firstName: "Dries",
		lastName: "Vincent",
		email: "dries.vincent@example.com",
		phone: "(555) 123-0003",
		image:
			"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		role: "Business Relations",
		department: "Operations",
		lastSeen: "2025-06-10T17:05Z",
		status: "away",
		about:
			"Dries is a highly skilled software engineer with over 8 years of experience in developing scalable web applications. He specializes in backend development using Java and Python, and has a strong understanding of cloud technologies. Dries is a team player and always strives to deliver high-quality work.",
		bio: "Connecting partners and driving growth strategies.",
		location: "London, UK",
		positionHistory: [
			{ title: "Business Relations", company: "Acme Co", from: "2021", to: "Present" },
			{ title: "Account Manager", company: "BizGrow", from: "2018", to: "2021" },
		],
		projects: [
			{ name: "Project Phoenix", role: "Client Lead", status: "In Progress" },
			{ name: "Project Nova", role: "Partnership Coordinator", status: "Completed" },
		],
		skills: ["Negotiation", "Stakeholder Management", "Contracting"],
		reviews: [
			{ date: "2023-04-12", reviewer: "Mia Rodriguez", rating: "Good" },
			{ date: "2022-06-08", reviewer: "Noah Lee", rating: "Excellent" },
		],
	},
	{
		id: 4,
		firstName: "Emma",
		lastName: "Williams",
		email: "emma.williams@example.com",
		phone: "(555) 123-0004",
		image:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		role: "Product Designer",
		department: "Design",
		lastSeen: "2025-06-12T09:15Z",
		status: "online",
		about:
			"Emma is a highly skilled software engineer with over 8 years of experience in developing scalable web applications. She specializes in backend development using Java and Python, and has a strong understanding of cloud technologies. Emma is a team player and always strives to deliver high-quality work.",
		bio: "Designing intuitive user experiences for all platforms.",
		location: "Berlin, Germany",
		positionHistory: [
			{ title: "Product Designer", company: "Acme Co", from: "2019", to: "Present" },
			{ title: "UI/UX Designer", company: "Creative Labs", from: "2016", to: "2019" },
		],
		projects: [
			{ name: "Project Phoenix", role: "Lead Designer", status: "In Progress" },
			{ name: "Project Nova", role: "UX Researcher", status: "Completed" },
		],
		skills: ["Figma", "User Research", "Interaction Design"],
		reviews: [
			{ date: "2023-03-22", reviewer: "Oliver Stone", rating: "Excellent" },
			{ date: "2022-08-14", reviewer: "Chloe Bennett", rating: "Good" },
		],
	},
	{
		id: 5,
		firstName: "James",
		lastName: "Smith",
		email: "james.smith@example.com",
		phone: "(555) 123-0005",
		image:
			"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		role: "Software Engineer",
		department: "Engineering",
		lastSeen: "2025-06-11T11:02Z",
		status: "online",
		about:
			"James is a highly skilled software engineer with over 8 years of experience in developing scalable web applications. He specializes in backend development using Java and Python, and has a strong understanding of cloud technologies. James is a team player and always strives to deliver high-quality work.",
		bio: "Full-stack dev with a love for JavaScript and PHP.",
		location: "Austin, USA",
		positionHistory: [
			{ title: "Software Engineer", company: "Acme Co", from: "2021", to: "Present" },
			{ title: "Junior Developer", company: "WebStart", from: "2018", to: "2021" },
		],
		projects: [
			{ name: "Project Phoenix", role: "Backend Developer", status: "In Progress" },
			{ name: "Project Nova", role: "API Integrator", status: "Completed" },
		],
		skills: ["JavaScript", "PHP", "Node.js"],
		reviews: [
			{ date: "2023-05-30", reviewer: "Harper Lee", rating: "Good" },
			{ date: "2022-11-12", reviewer: "Ethan Cooper", rating: "Excellent" },
		],
	},
	{
		id: 6,
		firstName: "Olivia",
		lastName: "Brown",
		email: "olivia.brown@example.com",
		phone: "(555) 123-0006",
		image:
			"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		role: "UX Designer",
		department: "Design",
		lastSeen: "2025-06-10T20:34Z",
		status: "busy",
		about:
			"Olivia is a highly skilled software engineer with over 8 years of experience in developing scalable web applications. She specializes in backend development using Java and Python, and has a strong understanding of cloud technologies. Olivia is a team player and always strives to deliver high-quality work.",
		bio: "Advocate for human-centered design processes.",
		location: "Toronto, Canada",
		positionHistory: [
			{ title: "UX Designer", company: "Acme Co", from: "2020", to: "Present" },
			{ title: "UI Designer", company: "OldCo", from: "2017", to: "2020" },
		],
		projects: [
			{ name: "Project Phoenix", role: "UX Researcher", status: "In Progress" },
			{ name: "Project Nova", role: "Prototype Lead", status: "Completed" },
		],
		skills: ["Figma", "User Research", "Prototyping"],
		reviews: [
			{ date: "2023-07-22", reviewer: "Alex Johnson", rating: "Excellent" },
			{ date: "2022-12-05", reviewer: "Jamie Fox", rating: "Good" },
		],
	},
	{
		id: 7,
		firstName: "Liam",
		lastName: "Johnson",
		email: "liam.johnson@example.com",
		phone: "(555) 123-0007",
		image:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		role: "DevOps Engineer",
		department: "Engineering",
		lastSeen: "2025-06-12T07:58Z",
		status: "online",
		about:
			"Liam is a highly skilled software engineer with over 8 years of experience in developing scalable web applications. He specializes in backend development using Java and Python, and has a strong understanding of cloud technologies. Liam is a team player and always strives to deliver high-quality work.",
		bio: "Automating everything from CI/CD to cloud infra.",
		location: "Seattle, USA",
		positionHistory: [
			{ title: "DevOps Engineer", company: "Acme Co", from: "2020", to: "Present" },
			{ title: "Systems Engineer", company: "OldCo", from: "2017", to: "2020" },
		],
		projects: [
			{ name: "Project Phoenix", role: "DevOps Specialist", status: "In Progress" },
			{ name: "Project Nova", role: "Infrastructure Lead", status: "Completed" },
		],
		skills: ["CI/CD", "Docker", "Kubernetes"],
		reviews: [
			{ date: "2023-08-10", reviewer: "Morgan Lee", rating: "Excellent" },
			{ date: "2022-10-18", reviewer: "Taylor Reed", rating: "Good" },
		],
	},
	{
		id: 8,
		firstName: "Sophia",
		lastName: "Davis",
		email: "sophia.davis@example.com",
		phone: "(555) 123-0008",
		image:
			"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		role: "QA Engineer",
		department: "Quality Assurance",
		lastSeen: "2025-06-11T16:44Z",
		status: "offline",
		about:
			"Sophia is a highly skilled software engineer with over 8 years of experience in developing scalable web applications. She specializes in backend development using Java and Python, and has a strong understanding of cloud technologies. Sophia is a team player and always strives to deliver high-quality work.",
		bio: "Ensuring top-notch product quality.",
		location: "Dublin, Ireland",
		positionHistory: [
			{ title: "QA Engineer", company: "Acme Co", from: "2020", to: "Present" },
			{ title: "Test Engineer", company: "OldCo", from: "2017", to: "2020" },
		],
		projects: [
			{ name: "Project Phoenix", role: "QA Lead", status: "In Progress" },
			{ name: "Project Nova", role: "Automation Specialist", status: "Completed" },
		],
		skills: ["Test Automation", "Selenium", "Load Testing"],
		reviews: [
			{ date: "2023-09-02", reviewer: "Jordan Smith", rating: "Good" },
			{ date: "2022-11-21", reviewer: "Cameron Gray", rating: "Excellent" },
		],
	},
	{
		id: 9,
		firstName: "Noah",
		lastName: "Martinez",
		email: "noah.martinez@example.com",
		phone: "(555) 123-0009",
		image:
			"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		role: "Data Scientist",
		department: "Data Science",
		lastSeen: "2025-06-10T22:10Z",
		status: "away",
		about:
			"Noah is a highly skilled software engineer with over 8 years of experience in developing scalable web applications. He specializes in backend development using Java and Python, and has a strong understanding of cloud technologies. Noah is a team player and always strives to deliver high-quality work.",
		bio: "Turning data into actionable insights.",
		location: "Singapore",
		positionHistory: [
			{ title: "Data Scientist", company: "Acme Co", from: "2020", to: "Present" },
			{ title: "Data Analyst", company: "OldCo", from: "2017", to: "2020" },
		],
		projects: [
			{ name: "Project Phoenix", role: "Data Analyst", status: "In Progress" },
			{ name: "Project Nova", role: "ML Engineer", status: "Completed" },
		],
		skills: ["Python", "Machine Learning", "Statistics"],
		reviews: [
			{ date: "2023-07-14", reviewer: "Casey Bennett", rating: "Excellent" },
			{ date: "2022-08-30", reviewer: "Riley Adams", rating: "Good" },
		],
	},
	{
		id: 10,
		firstName: "Isabella",
		lastName: "Garcia",
		email: "isabella.garcia@example.com",
		phone: "(555) 123-0010",
		image:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		role: "HR Manager",
		department: "Human Resources",
		lastSeen: "2025-06-12T10:20Z",
		status: "online",
		about:
			"Isabella is a highly skilled software engineer with over 8 years of experience in developing scalable web applications. She specializes in backend development using Java and Python, and has a strong understanding of cloud technologies. Isabella is a team player and always strives to deliver high-quality work.",
		bio: "Building a happy and productive workplace culture.",
		location: "Madrid, Spain",
		positionHistory: [
			{ title: "HR Manager", company: "Acme Co", from: "2020", to: "Present" },
			{ title: "HR Coordinator", company: "OldCo", from: "2017", to: "2020" },
		],
		projects: [
			{ name: "Project Phoenix", role: "HR Coordinator", status: "In Progress" },
			{ name: "Project Nova", role: "Recruitment Lead", status: "Completed" },
		],
		skills: ["Employee Relations", "Benefits Administration", "Recruitment"],
		reviews: [
			{ date: "2023-06-18", reviewer: "Quinn Brooks", rating: "Good" },
			{ date: "2022-12-22", reviewer: "Drew Carter", rating: "Excellent" },
		],
	},
	{
		id: 11,
		firstName: "Mason",
		lastName: "Rodriguez",
		email: "mason.rodriguez@example.com",
		phone: "(555) 123-0011",
		image:
			"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		role: "Marketing Manager",
		department: "Marketing",
		lastSeen: "2025-06-11T09:37Z",
		status: "busy",
		about:
			"Mason is a highly skilled software engineer with over 8 years of experience in developing scalable web applications. He specializes in backend development using Java and Python, and has a strong understanding of cloud technologies. Mason is a team player and always strives to deliver high-quality work.",
		bio: "Crafting campaigns that really connect.",
		location: "Chicago, USA",
		positionHistory: [
			{ title: "Marketing Manager", company: "Acme Co", from: "2020", to: "Present" },
			{ title: "Marketing Specialist", company: "OldCo", from: "2017", to: "2020" },
		],
		projects: [
			{ name: "Project Phoenix", role: "Campaign Manager", status: "In Progress" },
			{ name: "Project Nova", role: "Content Strategist", status: "Completed" },
		],
		skills: ["SEO", "Content Strategy", "Analytics"],
		reviews: [
			{ date: "2023-04-05", reviewer: "Sydney Lee", rating: "Excellent" },
			{ date: "2022-09-30", reviewer: "Parker Jones", rating: "Good" },
		],
	},
	{
		id: 12,
		firstName: "Mia",
		lastName: "Hernandez",
		email: "mia.hernandez@example.com",
		phone: "(555) 123-0012",
		image:
			"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		role: "Sales Representative",
		department: "Sales",
		lastSeen: "2025-06-10T18:55Z",
		status: "offline",
		about:
			"Mia is a highly skilled software engineer with over 8 years of experience in developing scalable web applications. She specializes in backend development using Java and Python, and has a strong understanding of cloud technologies. Mia is a team player and always strives to deliver high-quality work.",
		bio: "Driving revenue and long-term client success.",
		location: "Sydney, Australia",
		positionHistory: [
			{ title: "Sales Representative", company: "Acme Co", from: "2020", to: "Present" },
			{ title: "Account Executive", company: "OldCo", from: "2017", to: "2020" },
		],
		projects: [
			{ name: "Project Phoenix", role: "Account Exec", status: "In Progress" },
			{ name: "Project Nova", role: "Lead Developer", status: "Completed" },
		],
		skills: ["Negotiation", "CRM", "Lead Generation"],
		reviews: [
			{ date: "2023-03-14", reviewer: "Kennedy Brown", rating: "Good" },
			{ date: "2022-10-08", reviewer: "Avery Davis", rating: "Excellent" },
		],
	},
	{
		id: 13,
		firstName: "Ethan",
		lastName: "Lopez",
		email: "ethan.lopez@example.com",
		phone: "(555) 123-0013",
		image:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		role: "Customer Support",
		department: "Customer Support",
		lastSeen: "2025-06-12T06:50Z",
		status: "online",
		about:
			"Ethan is a highly skilled software engineer with over 8 years of experience in developing scalable web applications. He specializes in backend development using Java and Python, and has a strong understanding of cloud technologies. Ethan is a team player and always strives to deliver high-quality work.",
		bio: "Here to help you 24/7 with anything you need.",
		location: "Manila, Philippines",
		positionHistory: [
			{ title: "Customer Support", company: "Acme Co", from: "2020", to: "Present" },
			{ title: "Support Specialist", company: "OldCo", from: "2017", to: "2020" },
		],
		projects: [
			{ name: "Project Phoenix", role: "Support Specialist", status: "In Progress" },
			{ name: "Project Nova", role: "Ticket Manager", status: "Completed" },
		],
		skills: ["Zendesk", "Customer Service", "Troubleshooting"],
		reviews: [
			{ date: "2023-05-22", reviewer: "Reese Evans", rating: "Excellent" },
			{ date: "2022-11-19", reviewer: "Dakota Morgan", rating: "Good" },
		],
	},
	{
		id: 14,
		firstName: "Ava",
		lastName: "Gonzalez",
		email: "ava.gonzalez@example.com",
		phone: "(555) 123-0014",
		image:
			"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		role: "Finance Manager",
		department: "Finance",
		lastSeen: "2025-06-11T14:18Z",
		status: "away",
		about:
			"Ava is a highly skilled software engineer with over 8 years of experience in developing scalable web applications. She specializes in backend development using Java and Python, and has a strong understanding of cloud technologies. Ava is a team player and always strives to deliver high-quality work.",
		bio: "Keeping the books balanced and transparent.",
		location: "Zurich, Switzerland",
		positionHistory: [
			{ title: "Finance Manager", company: "Acme Co", from: "2020", to: "Present" },
			{ title: "Financial Analyst", company: "OldCo", from: "2017", to: "2020" },
		],
		projects: [
			{ name: "Project Phoenix", role: "Financial Analyst", status: "In Progress" },
			{ name: "Project Nova", role: "Budget Lead", status: "Completed" },
		],
		skills: ["Excel", "Financial Modeling", "Forecasting"],
		reviews: [
			{ date: "2023-02-18", reviewer: "Blake Wilson", rating: "Excellent" },
			{ date: "2022-07-25", reviewer: "Hayden Turner", rating: "Good" },
		],
	},
	{
		id: 15,
		firstName: "Logan",
		lastName: "Wilson",
		email: "logan.wilson@example.com",
		phone: "(555) 123-0015",
		image:
			"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		role: "Legal Counsel",
		department: "Legal",
		lastSeen: "2025-06-10T21:12Z",
		status: "offline",
		about:
			"Logan is a highly skilled software engineer with over 8 years of experience in developing scalable web applications. He specializes in backend development using Java and Python, and has a strong understanding of cloud technologies. Logan is a team player and always strives to deliver high-quality work.",
		bio: "Advising on compliance and contracts.",
		location: "Houston, USA",
		positionHistory: [
			{ title: "Legal Counsel", company: "Acme Co", from: "2020", to: "Present" },
			{ title: "Associate Attorney", company: "OldCo", from: "2017", to: "2020" },
		],
		projects: [
			{ name: "Project Phoenix", role: "Legal Advisor", status: "In Progress" },
			{ name: "Project Nova", role: "Contract Lead", status: "Completed" },
		],
		skills: ["Contract Law", "Compliance", "Litigation"],
		reviews: [
			{ date: "2023-04-27", reviewer: "Peyton Clark", rating: "Good" },
			{ date: "2022-05-10", reviewer: "Rowan Kelly", rating: "Excellent" },
		],
	},
	{
		id: 16,
		firstName: "Charlotte",
		lastName: "Moore",
		email: "charlotte.moore@example.com",
		phone: "(555) 123-0016",
		image:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		role: "Office Manager",
		department: "Administration",
		lastSeen: "2025-06-12T08:05Z",
		status: "online",
		about:
			"Charlotte is a highly skilled software engineer with over 8 years of experience in developing scalable web applications. She specializes in backend development using Java and Python, and has a strong understanding of cloud technologies. Charlotte is a team player and always strives to deliver high-quality work.",
		bio: "Keeping day-to-day operations running smoothly.",
		location: "Amsterdam, Netherlands",
		positionHistory: [
			{ title: "Office Manager", company: "Acme Co", from: "2020", to: "Present" },
			{ title: "Administrative Assistant", company: "OldCo", from: "2017", to: "2020" },
		],
		projects: [
			{ name: "Project Phoenix", role: "Office Coordinator", status: "In Progress" },
			{ name: "Project Nova", role: "Vendor Liaison", status: "Completed" },
		],
		skills: ["Office Management", "Vendor Relations", "Scheduling"],
		reviews: [
			{ date: "2023-06-30", reviewer: "Emerson Stewart", rating: "Excellent" },
			{ date: "2022-12-15", reviewer: "Skyler Hughes", rating: "Good" },
		],
	},
	{
		id: 17,
		firstName: "Lucas",
		lastName: "Taylor",
		email: "lucas.taylor@example.com",
		phone: "(555) 123-0017",
		image:
			"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		role: "Content Strategist",
		department: "Content",
		lastSeen: "2025-06-11T12:29Z",
		status: "busy",
		about:
			"Lucas is a highly skilled software engineer with over 8 years of experience in developing scalable web applications. He specializes in backend development using Java and Python, and has a strong understanding of cloud technologies. Lucas is a team player and always strives to deliver high-quality work.",
		bio: "Planning and creating content that resonates.",
		location: "Melbourne, Australia",
		positionHistory: [
			{ title: "Content Strategist", company: "Acme Co", from: "2020", to: "Present" },
			{ title: "Copywriter", company: "OldCo", from: "2017", to: "2020" },
		],
		projects: [
			{ name: "Project Phoenix", role: "Content Writer", status: "In Progress" },
			{ name: "Project Nova", role: "Editorial Lead", status: "Completed" },
		],
		skills: ["Copywriting", "Editorial", "SEO"],
		reviews: [
			{ date: "2023-05-12", reviewer: "Kendall Cruz", rating: "Excellent" },
			{ date: "2022-10-05", reviewer: "Payton Foster", rating: "Good" },
		],
	},
	{
		id: 18,
		firstName: "Amelia",
		lastName: "Anderson",
		email: "amelia.anderson@example.com",
		phone: "(555) 123-0018",
		image:
			"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		role: "SEO Specialist",
		department: "Marketing",
		lastSeen: "2025-06-10T19:48Z",
		status: "offline",
		about:
			"Amelia is a highly skilled software engineer with over 8 years of experience in developing scalable web applications. She specializes in backend development using Java and Python, and has a strong understanding of cloud technologies. Amelia is a team player and always strives to deliver high-quality work.",
		bio: "Optimizing our reach on every major search engine.",
		location: "São Paulo, Brazil",
		positionHistory: [
			{ title: "SEO Specialist", company: "Acme Co", from: "2020", to: "Present" },
			{ title: "SEO Analyst", company: "OldCo", from: "2017", to: "2020" },
		],
		projects: [
			{ name: "Project Phoenix", role: "SEO Strategist", status: "In Progress" },
			{ name: "Project Nova", role: "Keyword Researcher", status: "Completed" },
		],
		skills: ["Keyword Research", "On-Page SEO", "Analytics"],
		reviews: [
			{ date: "2023-04-20", reviewer: "Dakota Reed", rating: "Excellent" },
			{ date: "2022-07-22", reviewer: "Charlie Hayes", rating: "Good" },
		],
	},
	{
		id: 19,
		firstName: "Henry",
		lastName: "Thomas",
		email: "henry.thomas@example.com",
		phone: "(555) 123-0019",
		image:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		role: "Social Media Manager",
		department: "Marketing",
		lastSeen: "2025-06-12T09:55Z",
		status: "online",
		about:
			"Henry is a highly skilled software engineer with over 8 years of experience in developing scalable web applications. He specializes in backend development using Java and Python, and has a strong understanding of cloud technologies. Henry is a team player and always strives to deliver high-quality work.",
		bio: "Driving engagement across all social channels.",
		location: "Los Angeles, USA",
		positionHistory: [
			{ title: "Social Media Manager", company: "Acme Co", from: "2020", to: "Present" },
			{ title: "Community Coordinator", company: "OldCo", from: "2017", to: "2020" },
		],
		projects: [
			{ name: "Project Phoenix", role: "Social Strategist", status: "In Progress" },
			{ name: "Project Nova", role: "Engagement Lead", status: "Completed" },
		],
		skills: ["Community Engagement", "Social Listening", "Content Creation"],
		reviews: [
			{ date: "2023-03-18", reviewer: "Harley Reed", rating: "Good" },
			{ date: "2022-11-02", reviewer: "Logan Ryan", rating: "Excellent" },
		],
	},
	{
		id: 20,
		firstName: "Ella",
		lastName: "Jackson",
		email: "ella.jackson@example.com",
		phone: "(555) 123-0020",
		image:
			"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		role: "Project Manager",
		department: "Operations",
		lastSeen: "2025-06-11T10:41Z",
		status: "away",
		about:
			"Ella is a highly skilled software engineer with over 8 years of experience in developing scalable web applications. She specializes in backend development using Java and Python, and has a strong understanding of cloud technologies. Ella is a team player and always strives to deliver high-quality work.",
		bio: "Coordinating cross-functional teams to hit milestones.",
		location: "Vancouver, Canada",
		positionHistory: [
			{ title: "Project Manager", company: "Acme Co", from: "2020", to: "Present" },
			{ title: "Project Coordinator", company: "OldCo", from: "2017", to: "2020" },
		],
		projects: [
			{ name: "Project Phoenix", role: "Project Coordinator", status: "In Progress" },
			{ name: "Project Nova", role: "Risk Manager", status: "Completed" },
		],
		skills: ["Agile", "Scrum", "Risk Management"],
		reviews: [
			{ date: "2023-02-25", reviewer: "Peyton Brooks", rating: "Excellent" },
			{ date: "2022-09-15", reviewer: "Avery Kelly", rating: "Good" },
		],
	},
	{
		id: 21,
		firstName: "Jack",
		lastName: "White",
		email: "jack.white@example.com",
		phone: "(555) 123-0021",
		image:
			"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		role: "Operations Manager",
		department: "Operations",
		lastSeen: "2025-06-10T23:15Z",
		status: "offline",
		about:
			"Jack is a highly skilled software engineer with over 8 years of experience in developing scalable web applications. He specializes in backend development using Java and Python, and has a strong understanding of cloud technologies. Jack is a team player and always strives to deliver high-quality work.",
		bio: "Optimizing workflows and vendor relationships.",
		location: "Dubai, UAE",
		positionHistory: [
			{ title: "Operations Manager", company: "Acme Co", from: "2020", to: "Present" },
			{ title: "Operations Analyst", company: "OldCo", from: "2017", to: "2020" },
		],
		projects: [
			{ name: "Project Phoenix", role: "Operations Specialist", status: "In Progress" },
			{ name: "Project Nova", role: "Logistics Lead", status: "Completed" },
		],
		skills: ["Logistics", "Process Improvement", "Vendor Management"],
		reviews: [
			{ date: "2023-01-30", reviewer: "Jordan Taylor", rating: "Good" },
			{ date: "2022-08-22", reviewer: "Riley Smith", rating: "Excellent" },
		],
	},
	{
		id: 22,
		firstName: "Harper",
		lastName: "Lee",
		email: "harper.lee@example.com",
		phone: "(555) 123-0022",
		image:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		role: "Partnerships Manager",
		department: "Business Development",
		lastSeen: "2025-06-11T15:58Z",
		status: "busy",
		about:
			"Harper is a highly skilled software engineer with over 8 years of experience in developing scalable web applications. She specializes in backend development using Java and Python, and has a strong understanding of cloud technologies. Harper is a team player and always strives to deliver high-quality work.",
		bio: "Building strategic alliances with key partners.",
		location: "Paris, France",
		positionHistory: [
			{ title: "Partnerships Manager", company: "Acme Co", from: "2020", to: "Present" },
			{ title: "Business Development Rep", company: "OldCo", from: "2017", to: "2020" },
		],
		projects: [
			{ name: "Project Phoenix", role: "Partnership Manager", status: "In Progress" },
			{ name: "Project Nova", role: "Joint Venture Lead", status: "Completed" },
		],
		skills: ["Partner Negotiation", "Joint Ventures", "Business Development"],
		reviews: [
			{ date: "2023-04-08", reviewer: "Morgan Lee", rating: "Excellent" },
			{ date: "2022-09-12", reviewer: "Casey Bennett", rating: "Good" },
		],
	},
	{
		id: 23,
		firstName: "Sebastian",
		lastName: "Martin",
		email: "sebastian.martin@example.com",
		phone: "(555) 123-0023",
		image:
			"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		role: "Community Manager",
		department: "Community",
		lastSeen: "2025-06-12T07:30Z",
		status: "online",
		about:
			"Sebastian is a highly skilled software engineer with over 8 years of experience in developing scalable web applications. He specializes in backend development using Java and Python, and has a strong understanding of cloud technologies. Sebastian is a team player and always strives to deliver high-quality work.",
		bio: "Engaging our users and growing the community.",
		location: "Bangalore, India",
		positionHistory: [
			{ title: "Community Manager", company: "Acme Co", from: "2020", to: "Present" },
			{ title: "Event Coordinator", company: "OldCo", from: "2017", to: "2020" },
		],
		projects: [
			{ name: "Project Phoenix", role: "Community Lead", status: "In Progress" },
			{ name: "Project Nova", role: "Forum Moderator", status: "Completed" },
		],
		skills: ["Forum Management", "Event Planning", "User Advocacy"],
		reviews: [
			{ date: "2023-03-28", reviewer: "Alex Jordan", rating: "Good" },
			{ date: "2022-10-30", reviewer: "Taylor Gray", rating: "Excellent" },
		],
	},
	{
		id: 24,
		firstName: "Grace",
		lastName: "Clark",
		email: "grace.clark@example.com",
		phone: "(555) 123-0024",
		image:
			"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		role: "Technical Writer",
		department: "Documentation",
		lastSeen: "2025-06-10T17:22Z",
		status: "away",
		about:
			"Grace is a highly skilled software engineer with over 8 years of experience in developing scalable web applications. She specializes in backend development using Java and Python, and has a strong understanding of cloud technologies. Grace is a team player and always strives to deliver high-quality work.",
		bio: "Documenting APIs, guides, and internal processes.",
		location: "Chicago, USA",
		positionHistory: [
			{ title: "Technical Writer", company: "Acme Co", from: "2020", to: "Present" },
			{ title: "Documentation Specialist", company: "OldCo", from: "2017", to: "2020" },
		],
		projects: [
			{ name: "Project Phoenix", role: "API Documenter", status: "In Progress" },
			{ name: "Project Nova", role: "Style Guide Lead", status: "Completed" },
		],
		skills: ["Technical Writing", "API Documentation", "Markdown"],
		reviews: [
			{ date: "2023-06-02", reviewer: "Cameron Quinn", rating: "Excellent" },
			{ date: "2022-11-19", reviewer: "Preston Lee", rating: "Good" },
		],
	},
	{
		id: 25,
		firstName: "Owen",
		lastName: "Lewis",
		email: "owen.lewis@example.com",
		phone: "(555) 123-0025",
		image:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		role: "Trainer",
		department: "Training",
		lastSeen: "2025-06-11T13:11Z",
		status: "offline",
		about:
			"Owen is a highly skilled software engineer with over 8 years of experience in developing scalable web applications. He specializes in backend development using Java and Python, and has a strong understanding of cloud technologies. Owen is a team player and always strives to deliver high-quality work.",
		bio: "Leading product and skills workshops.",
		location: "Denver, USA",
		positionHistory: [
			{ title: "Trainer", company: "Acme Co", from: "2020", to: "Present" },
			{ title: "Workshop Facilitator", company: "OldCo", from: "2017", to: "2020" },
		],
		projects: [
			{ name: "Project Phoenix", role: "Workshop Lead", status: "In Progress" },
			{ name: "Project Nova", role: "Curriculum Designer", status: "Completed" },
		],
		skills: ["Workshop Facilitation", "Public Speaking", "Curriculum Design"],
		reviews: [
			{ date: "2023-07-10", reviewer: "Dylan Parker", rating: "Good" },
			{ date: "2022-12-01", reviewer: "Bailey Morgan", rating: "Excellent" },
		],
	},
	{
		id: 26,
		firstName: "Chloe",
		lastName: "Walker",
		email: "chloe.walker@example.com",
		phone: "(555) 123-0026",
		image:
			"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		role: "Recruiter",
		department: "Human Resources",
		lastSeen: "2025-06-12T06:12Z",
		status: "online",
		about:
			"Chloe is a highly skilled software engineer with over 8 years of experience in developing scalable web applications. She specializes in backend development using Java and Python, and has a strong understanding of cloud technologies. Chloe is a team player and always strives to deliver high-quality work.",
		bio: "Finding and hiring top talent for every team.",
		location: "Boston, USA",
		positionHistory: [
			{ title: "Recruiter", company: "Acme Co", from: "2020", to: "Present" },
			{ title: "Talent Sourcer", company: "OldCo", from: "2017", to: "2020" },
		],
		projects: [
			{ name: "Project Phoenix", role: "Recruitment Lead", status: "In Progress" },
			{ name: "Project Nova", role: "Onboarding Lead", status: "Completed" },
		],
		skills: ["Talent Sourcing", "Interviewing", "Onboarding"],
		reviews: [
			{ date: "2023-05-02", reviewer: "Sawyer Reed", rating: "Excellent" },
			{ date: "2022-10-14", reviewer: "Hayden Brooks", rating: "Good" },
		],
	},
	{
		id: 27,
		firstName: "Wyatt",
		lastName: "Hall",
		email: "wyatt.hall@example.com",
		phone: "(555) 123-0027",
		image:
			"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		role: "Executive Assistant",
		department: "Administration",
		lastSeen: "2025-06-11T09:03Z",
		status: "busy",
		about:
			"Wyatt is a highly skilled software engineer with over 8 years of experience in developing scalable web applications. He specializes in backend development using Java and Python, and has a strong understanding of cloud technologies. Wyatt is a team player and always strives to deliver high-quality work.",
		bio: "Supporting leadership with scheduling and logistics.",
		location: "Chicago, USA",
		positionHistory: [
			{ title: "Executive Assistant", company: "Acme Co", from: "2020", to: "Present" },
			{ title: "Office Assistant", company: "OldCo", from: "2017", to: "2020" },
		],
		projects: [
			{ name: "Project Phoenix", role: "Executive Coordinator", status: "In Progress" },
			{ name: "Project Nova", role: "Travel Planner", status: "Completed" },
		],
		skills: ["Executive Support", "Calendar Management", "Travel Coordination"],
		reviews: [
			{ date: "2023-02-14", reviewer: "Riley Casey", rating: "Excellent" },
			{ date: "2022-08-29", reviewer: "Blake Quinn", rating: "Good" },
		],
	},
	{
		id: 28,
		firstName: "Penelope",
		lastName: "Young",
		email: "penelope.young@example.com",
		phone: "(555) 123-0028",
		image:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		role: "Security Specialist",
		department: "Security",
		lastSeen: "2025-06-10T20:01Z",
		status: "offline",
		about:
			"Penelope is a highly skilled software engineer with over 8 years of experience in developing scalable web applications. She specializes in backend development using Java and Python, and has a strong understanding of cloud technologies. Penelope is a team player and always strives to deliver high-quality work.",
		bio: "Protecting data and infrastructure around the clock.",
		location: "Tel Aviv, Israel",
		positionHistory: [
			{ title: "Security Specialist", company: "Acme Co", from: "2020", to: "Present" },
			{ title: "Security Analyst", company: "OldCo", from: "2017", to: "2020" },
		],
		projects: [
			{ name: "Project Phoenix", role: "Security Analyst", status: "In Progress" },
			{ name: "Project Nova", role: "Incident Responder", status: "Completed" },
		],
		skills: ["Network Security", "Incident Response", "Vulnerability Assessment"],
		reviews: [
			{ date: "2023-03-19", reviewer: "Cameron Peyton", rating: "Good" },
			{ date: "2022-12-07", reviewer: "Jamie Parker", rating: "Excellent" },
		],
	},
	{
		id: 29,
		firstName: "Levi",
		lastName: "King",
		email: "levi.king@example.com",
		phone: "(555) 123-0029",
		image:
			"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		role: "IT Support",
		department: "IT",
		lastSeen: "2025-06-12T07:45Z",
		status: "online",
		about:
			"Levi is a highly skilled software engineer with over 8 years of experience in developing scalable web applications. He specializes in backend development using Java and Python, and has a strong understanding of cloud technologies. Levi is a team player and always strives to deliver high-quality work.",
		bio: "Resolving tech issues quickly.",
		location: "Dublin, Ireland",
		positionHistory: [
			{ title: "IT Support", company: "Acme Co", from: "2020", to: "Present" },
			{ title: "Helpdesk Technician", company: "OldCo", from: "2017", to: "2020" },
		],
		projects: [
			{ name: "Project Phoenix", role: "IT Technician", status: "In Progress" },
			{ name: "Project Nova", role: "Systems Administrator", status: "Completed" },
		],
		skills: ["Helpdesk Support", "System Administration", "Network Troubleshooting"],
		reviews: [
			{ date: "2023-01-25", reviewer: "Alexis Taylor", rating: "Excellent" },
			{ date: "2022-11-30", reviewer: "Rowan Jordan", rating: "Good" },
		],
	},
	{
		id: 30,
		firstName: "Victoria",
		lastName: "Wright",
		email: "victoria.wright@example.com",
		phone: "(555) 123-0030",
		image:
			"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		role: "Mobile Developer",
		department: "Engineering",
		lastSeen: "2025-06-11T18:27Z",
		status: "away",
		about:
			"Victoria is a highly skilled software engineer with over 8 years of experience in developing scalable web applications. She specializes in backend development using Java and Python, and has a strong understanding of cloud technologies. Victoria is a team player and always strives to deliver high-quality work.",
		bio: "Building native Android and iOS apps.",
		location: "Tokyo, Japan",
		positionHistory: [
			{ title: "Mobile Developer", company: "Acme Co", from: "2020", to: "Present" },
			{ title: "App Developer", company: "OldCo", from: "2017", to: "2020" }
		],
		projects: [
			{ name: "Project Phoenix", role: "Mobile Architect", status: "In Progress" },
			{ name: "Project Nova", role: "iOS Lead", status: "Completed" }
		],
		skills: ["Swift", "Kotlin", "React Native"],
		reviews: [
			{ date: "2023-02-14", reviewer: "Taylor Casey", rating: "Excellent" },
			{ date: "2022-10-22", reviewer: "Morgan Brooks", rating: "Good" }
		]
	}
];

/**
 * Finds a user by its ID.
 *
 * @param {string} userId - The ID of the user to fetch.
 * @returns {object|null}
 */
export const getUserById = (userId) => USERS.find((user) => user.id.toString() === userId) || null;