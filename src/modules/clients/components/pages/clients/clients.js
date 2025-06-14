/**
 * Mock client data for summary page.
 *
 * @type {Array<object>}
 */
export const clients = Array.from({ length: 20 }, (_, i) => {
	const id = i + 1;
	const isActive = id % 2 === 0;
	const pkg = id % 3 === 0
		? "Elite"
		: id % 3 === 1
			? "Standard"
			: "Basic";

	// Two sample tickets per client
	const tickets = [1, 2].map((n) => {
		const tid = id * 10 + n;
		return {
			id: tid,
			priority: n % 2 === 0 ? "down" : "up",
			subject: `Issue #${tid}`,
			owner: `User ${tid}`,
			status: n % 2 === 0 ? "Closed" : "Open"
		};
	});

	return {
		id,
		name: `Client Name ${id}`,
		code: `#${3000 + id}`,
		//avatar: `https://i.pravatar.cc/150?img=${(i % 70) + 1}`,
		status: isActive ? "Active" : "Inactive",
		email: `client${id}@example.com`,
		about: `This is a brief description of client and what they do so our team can understand their needs and how we can assist them. This text is a placeholder and can be replaced with actual client information.`,

		payment: (Math.random() * 1000 + 50).toFixed(2),
		package: pkg,
		nextDue: "May 1, 2024",
		passphrase: `pass-${Math.random().toString(36).slice(2, 8)}`,
		since: `Jan ${((i % 28) + 1)}, 2023`,
		contactName: `Example Contact`,

		contractExpires: `Jan ${((i % 12) + 1)}, 2025`,
		contractStatus: "In Contract",
		addOns: ["Boosting", "Sponsored Posts"],

		tickets
	};
});

/**
 * Finds a client by its ID.
 *
 * @param {string} clientId - The ID of the client to fetch.
 * @returns {object|null}
 */
export const getClientById = (clientId) => clients.find((client) => client.id.toString() === clientId) || null;