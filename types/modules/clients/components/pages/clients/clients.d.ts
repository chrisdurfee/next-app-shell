export const clients: {
    id: number;
    name: string;
    status: string;
    email: string;
    totalAmount: string;
    image: string;
    role: string;
}[];
export function getClientById(clientId: string): object | null;
