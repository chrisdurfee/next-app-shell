export const clients = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    name: `Client ${index + 1}`,
    status: index % 2 === 0 ? 'Active' : 'Inactive',
    email: `client${index + 1}@example.com`,
    totalAmount: (Math.random() * 1000).toFixed(2),
    image: '',
    role: index % 2 === 0 ? 'Premium Member' : 'Basic Member',
}));

/**
 * Finds a client by its ID.
 *
 * @param {string} clientId - The ID of the client to fetch.
 * @returns {object|null}
 */
export const getClientById = (clientId) => clients.find((client) => client.id.toString() === clientId) || null;