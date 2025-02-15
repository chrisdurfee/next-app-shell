export function OnboardingPage(): object;
export default OnboardingPage;
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
