export function SignUpPage(): object;
export default SignUpPage;
export type PageSettings = {
    /**
     * - Defines initial state.
     */
    setupStates: Function;
    /**
     * - Updates the "step" state.
     */
    showStep: Function;
};
