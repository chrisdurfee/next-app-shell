import { Div } from '@base-framework/atoms';
import { openInstallPrompt } from './installation/install.js';
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
	const AUTHED_CLASS_NAME = 'authed';
	const hasClass = document.body.classList.contains(AUTHED_CLASS_NAME);

	// if the body does not have the class and the user is authed, add it.
	if (isSignedIn && !hasClass)
	{
		document.body.classList.add(AUTHED_CLASS_NAME);
		return;
	}

	// if the body has the class and the user is not authed, remove it.
	if (!isSignedIn && hasClass)
	{
		document.body.classList.remove(AUTHED_CLASS_NAME);
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
		class: 'app-content flex flex-auto flex-col will-change-contents',

		/**
		 * This will open the install prompt when the app is created.
		 *
		 * @returns {void}
		 */
		onCreated()
		{
			const WAIT_TIME = 1000;
			window.setTimeout(() => openInstallPrompt(), WAIT_TIME);
		},

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

		/**
		 * This will add the app content or the login page. It will also update the body class
		 * based on the sign in state.
		 */
		onState: [
			/**
			 * This will add the login page if the user is not signed in.
			 */
			['isSignedIn', (isSignedIn) => (!isSignedIn)? LoginPage() : MainContent(props)],

			/**
			 * This will update the body class based on the sign in state.
			 */
			['isSignedIn', updateBodyClass]
		]
	})
);

export default AppContent;