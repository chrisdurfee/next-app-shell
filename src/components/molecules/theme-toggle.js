import { Button, Div, Span } from "@base-framework/atoms";
import { Atom, Jot } from "@base-framework/base";
import { Icon } from "@components/atoms/icon.js";
import { Icons } from "@components/icons/icons.js";

const match = window.matchMedia;

/**
 * This will create a state button.
 *
 * @param {object} props
 * @returns {object}
 */
const ThemeButton = Atom(({ value, label, icon }) => (
	Button({
		class: 'text-sm gap-1 font-medium leading-none disabled:cursor-not-allowed disabled:opacity-70 flex flex-col items-center justify-between rounded-md border-2 bg-popover p-4 hover:bg-accent hover:text-accent-foreground data-[state="active"]:border-primary [&:has([data-state="active"])]:border-primary',
		onState: ['method', { active: value}],
		dataSet: ['method', ['state', value, 'active']],
		click: (e, {state}) =>
        {
            state.method = value;

            localStorage.setItem('theme', value);
            if (value === 'system')
        {
                localStorage.removeItem('theme');
            }
            checkTheme(value);
        }
	}, [
        Icon(icon),
        Span(label)
    ])
));

/**
 * This wil check the theme.
 *
 * @param {string} theme
 * @returns {void}
 */
const checkTheme = (theme) =>
{
    const htmlTag = document.documentElement;
    if (theme === 'system')
    {
        theme = window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    }

    // if theme HAS been set and is different from OS, add class to html tag
    if (match && !match('(prefers-color-scheme: ' + theme + ')').matches)
    {
        htmlTag.classList.add(theme);
        return;
    }

    const opposite = (theme === 'light')? 'dark' : 'light';
    htmlTag.classList.remove(opposite);
};

/**
 * ButtonGroup
 *
 * This will create a button group.
 *
 * @class
 */
export const ThemeToggle = Jot(
{
    /**
     * This will render the component.
     *
     * @returns {object}
     */
	render()
	{
		return Div({ class: 'flex flex-auto flex-col' }, [
			Div({ class: 'grid grid-cols-3 gap-4'}, [
				ThemeButton({ label: 'System', value: 'system', icon: Icons.adjustments.horizontal }),
				ThemeButton({ label: 'Light', value: 'light', icon: Icons.sun }),
				ThemeButton({ label: 'Dark', value: 'dark', icon: Icons.moon })
			])
		]);
	},

    /**
     * This will setup the states.
     *
     * @returns {object}
     */
	state()
	{
		return {
			method: window.localStorage.getItem('theme') ?? 'system'
		};
	}
});