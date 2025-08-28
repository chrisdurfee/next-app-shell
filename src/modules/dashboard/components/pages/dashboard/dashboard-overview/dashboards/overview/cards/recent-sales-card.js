import { Div, H3, Header, P, Span } from "@base-framework/atoms";
import { Card } from "@base-framework/ui/atoms";
import { Avatar } from "@base-framework/ui/molecules";

/**
 * RecentSalesItem
 *
 * Renders a single recent sale item.
 *
 * @param {object} props
 * @returns {object}
 */
const RecentSalesItem = ({ name, image, email, amount }) => (
	Div({ class: 'flex items-center hover:bg-muted/50 rounded-md p-2' }, [
		Div({ class: 'flex items-center gap-3' }, [
			Span({ class: 'relative flex overflow-hidden rounded-full h-9 w-9' }, [
				Avatar({ src: image, name }), // Assuming the Avatar component supports name for fallback
			]),
			Div({ class: 'space-y-1' }, [
				Span({ class: 'text-sm font-medium leading-none' }, name),
				P({ class: 'text-sm text-muted-foreground' }, email),
			])
		]),
		Span({ class: 'ml-auto font-medium' }, `+${amount}`)
	])
);

/**
 * This will create the RecentSalesCard molecule.
 *
 * @returns {object}
 */
export const RecentSalesCard = () => (
	Card({ padding: 'p-0', margin: 'm-0', class: 'col-span-3' }, [
		Header({ class: 'flex flex-col space-y-1.5 p-6' }, [
			H3({ class: 'font-semibold leading-none tracking-tight' }, 'Recent Sales'),
			P({ class: 'text-sm text-muted-foreground' }, 'You made 265 sales this month.'),
		]),
		Div({ class: 'p-6 pt-0' }, [
			Div({ class: 'space-y-4' }, [
				RecentSalesItem({
					name: 'Olivia Martin',
					image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
					email: 'olivia.martin@email.com',
					amount: '$1,999.00'
				}),
				RecentSalesItem({
					name: 'Jackson Lee',
					image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
					email: 'jackson.lee@email.com',
					amount: '$39.00'
				}),
				RecentSalesItem({
					name: 'Isabella Nguyen',
					image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
					email: 'isabella.nguyen@email.com',
					amount: '$299.00'
				}),
				RecentSalesItem({
					name: 'William Kim',
					image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
					email: 'william.kim@email.com',
					amount: '$99.00'
				}),
				RecentSalesItem({
					name: 'Sofia Davis',
					image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
					email: 'sofia.davis@email.com',
					amount: '$39.00'
				})
			])
		])
	])
);

export default RecentSalesCard;