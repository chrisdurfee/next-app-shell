import { A, Div, H2, On, P } from "@base-framework/atoms";
import { Component, Jot } from "@base-framework/base";
import { Card, Skeleton } from "@base-framework/ui/atoms";
import { Avatar } from "@base-framework/ui/molecules";

/**
 * SkeletonUser
 * Displays a skeleton loader for a user.
 *
 * @returns {object}
 */
const SkeletonUser = () => (
	Div({ class: "flex flex-row md:flex-col bg-card rounded-md shadow-md p-2 md:p-0 space-x-4 md:space-x-0 md:space-y-4" }, [
		// Avatar placeholder
		Div({ class: "flex-none flex items-center justify-center" }, [
			/* small screens: 40px circle, md+: 64px */
			Skeleton({
				shape: "circle",
				width: "w-10 md:w-32",
				height: "h-10 md:h-32",
			}),
		]),

		// Text placeholders
		Div({ class: "flex flex-col flex-auto md:space-y-4" }, [
			Div({ class: "flex flex-col space-y-2 md:pb-2" }, [
				// Name line
				Skeleton({ width: "w-3/4", height: "h-5", class: "rounded-md" }),

				// Role line
				Skeleton({ width: "w-1/2", height: "h-4", class: "rounded-md" }),
			]),

			// Footer (location + ext)
			Div({ class: "flex justify-between items-center mt-2 md:mt-0" }, [
				Skeleton({ width: "w-1/3", height: "h-3", class: "rounded-md" }),
				Skeleton({ width: "w-1/4", height: "h-3", class: "rounded-md" }),
			]),
		]),
	])
);

/**
 * User
 *
 * Displays a user.
 *
 * @param {object} user
 * @returns {Array<object>}
 */
const User = (user) => ([
	A({ href: `directory/users/${user.id}`, class: 'flex flex-auto flex-row md:flex-col' }, [
		Div({ class: "mb-4 flex-auto flex-col justify-center items-center hidden md:flex" }, [
			Avatar({ src: user.image, alt: user.name, fallbackText: user.name, size: '2xl' }),
		]),
		Div({ class: "flex-none flex-col justify-center items-center flex md:hidden pr-4" }, [
			Avatar({ src: user.image, alt: user.name, fallbackText: user.name, size: 'lg' }),
		]),
		Div({ class: "flex flex-auto flex-col" }, [
			H2({ class: "text-lg font-semibold text-foreground" }, `${user.firstName} ${user.lastName}`),
			P({ class: "text-sm text-muted-foreground" }, user.role),
			Div({ class: "mt-4 flex justify-between items-center" }, [
				P({ class: "text-xs text-muted-foreground" }, user.location),
				P({ class: "text-xs text-muted-foreground" }, `Ext: ${user.ext}`),
			])
		])
	])
]);

/**
 * UserItem
 *
 * Simulates loading for each individual user.
 *
 * @type {typeof Component}
 */
export const UserItem = Jot(
	{
		/**
		 * Initial state for the Jot.
		 */
		state:
		{
			loaded: false,
		},

		/**
		 * Sets up the loading simulation.
		 *
		 * @returns {void}
		 */
		after() {
			// Simulate loading for 500ms
			const DELAY = 500;
			// @ts-ignore
			setTimeout(() => this.state.loaded = true, DELAY);
		},

		/**
		 * Renders the UserItem.
		 *
		 * @returns {object}
		 */
		render() {
			// @ts-ignore
			const { user } = this;

			return Card({ class: "w-full max-w-sm mx-auto bg-card space-y-4", margin: 'mb-1 md:mb-2', padding: 'p-4 md:p-6' }, [
				Div({ class: "transition" }, [
					On('loaded', (loaded) => (!loaded)
						? SkeletonUser()
						: User(user))
				])
			]);
		}
	});

export default UserItem;
