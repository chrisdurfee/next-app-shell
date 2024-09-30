import { Div } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';
import { Header } from './header/header.js';
import { HeroSection } from './hero/hero.js';

export const MainLayout = Atom(() =>
{
    return Div({ class: 'bg-white' }, [Header(), HeroSection()]);
});

export default MainLayout;
