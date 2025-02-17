import { Div } from '@base-framework/atoms';
import { StepHeader, StepItemCard } from '../atoms/atoms.js';

/**
 * ThemingSection component that renders the theme support section.
 *
 * @returns {object}
 */
export const ThemingSection = () => (
    Div({ class: 'flex flex-col items-start' }, [
        StepHeader({
            title: 'Theme Support',
            description: 'Customizable themes for a personalized experience.'
        }),

        StepItemCard({
            title: 'Light & Dark Themes',
            content: 'The base app supports light and dark themes with customizable theme variables.'
        }),

        StepItemCard({
            title: 'Mobile First Design',
            content: 'The app is designed with a mobile-first approach for a responsive experience.'
        })
    ])
);