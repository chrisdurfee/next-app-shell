import { Div } from '@base-framework/atoms';
import { LoginPage } from './login/login-page.js';
import { MainContent } from './main-content.js';

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

		/**
		 * This will render the content based on the sign in state.
		 */
		onState: ['isSignedIn', (isSignedIn) => (!isSignedIn)? LoginPage() : MainContent(props)]
	})
);