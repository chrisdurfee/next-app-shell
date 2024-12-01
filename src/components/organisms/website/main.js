import { Div } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';
import { Header } from './header/header.js';
import { HeroSection } from './hero/hero.js';

/**
 * This will create the main layout for the website.
 *
 * @returns {object}
 */
export const MainLayout = Atom(() =>
{
    return Div([Header(), HeroSection()]);
});

export default MainLayout;
