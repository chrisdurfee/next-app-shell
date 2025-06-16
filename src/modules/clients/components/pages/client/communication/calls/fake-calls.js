/**
 * FakeCalls
 *
 * Mock data for client calls list.
 *
 * @type {Array<object>}
 */
export const FakeCalls = Array.from({ length: 15 }, (_, i) =>
{
	const id = i + 1;
	const names = [
		"Alice Johnson","Bob Martinez","Cynthia Lee","David Kim","Emma González",
		"Fiona Chen","George Patel","Hannah Smith","Ian Thompson","Julia Roberts",
		"Kevin Brown","Laura Davis","Michael Nguyen","Natalie Clark","Oliver Wright"
	];

	return {
		id,
		contactName: names[i],
		avatar: `https://i.pravatar.cc/150?img=${i+1}`,
		time: `2025-06-${String((i % 30) + 1).padStart(2,"0")} ${9 + (i % 8)}:00 ${i % 2 === 0 ? "AM" : "PM"}`,
		duration: `${String((i*3) % 60).padStart(2,"0")}:${String((i*7) % 60).padStart(2,"0")}`,
		status: i % 3 === 0 ? "Missed" : "Outgoing"
	};
});
