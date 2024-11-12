import { Div } from '@base-framework/atoms';
import { LoginPage } from './login/login-page.js';
import { MainContent } from './main-content.js';

/**
 * This will update the body class based on the sign in state.
 *
 * @param {boolean} isSignedIn
 * @returns {void}
 */
const updateBodyClass = (isSignedIn) =>
{
	const className = 'authed';
	// if the body does not have the class, add it.
	if (isSignedIn && !document.body.classList.contains(className))
	{
		document.body.classList.add(className);
		return;
	}

	// if the body has the class, remove it.
	else if (!isSignedIn && document.body.classList.contains(className))
	{
		document.body.classList.remove(className);
	}
};

/**
 * This will create the app content.
 *
 * @param {object} props
 * @returns {object}
 */
export const AppContent = (props) => (
	Div({
		class: 'app-content flex flex-auto flex-col',

		/**
		 * This will add a state to sign in.
		 *
		 * @returns {object}
		 */
		addState()
		{
			return {
				isSignedIn: true
			};
		},

		onState: [
			// this will renderr the app content based on the sign in state.
			['isSignedIn', (isSignedIn) => (!isSignedIn)? LoginPage() : MainContent(props)],

			// this will add the authed class to the body if the user is signed in.
			['isSignedIn', updateBodyClass]
		]
	})
);