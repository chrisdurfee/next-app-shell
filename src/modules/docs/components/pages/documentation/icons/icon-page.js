import { A, Div, H3, H5, I, P, Span } from "@base-framework/atoms";
import { Strings } from "@base-framework/base";
import { Icon, MaterialIcon, UniversalIcon, isHeroicon, isMaterialIcon } from "@base-framework/ui/atoms";
import { Icons, MaterialSymbols } from "@base-framework/ui/icons";
import { DocSection } from "../../../molecules/doc-section.js";
import { DocPage } from "../../doc-page.js";

/**
 * This will create an icon card.
 *
 * @param {string} icon
 * @param {string} iconName
 * @param {string|null} path
 * @returns {object}
 */
const IconCard = (icon, iconName, path = null) =>
{
	path = 'Icons' + ((path) ? '.' + path : '');
	return Div({ class: 'flex flex-auto flex-col items-center gap-2 w-full max-w-[150px] h-34 cursor-pointer' }, [
		Div({ class: 'flex flex-auto w-full h-full justify-center items-center flex-wrap rounded-lg border bg-card text-base shadow-sm hover:bg-muted/50',
			click: () =>
			{
				// copy to clipboard
				navigator.clipboard.writeText(`${path}.${iconName}`);

				// @ts-ignore
				app.notify({
					title: "Icon copied",
					description: `The icon '${path}.${iconName}' has been copied to your clipboard.`,
					icon: Icons.clipboard.checked
				});
			}
		}, [
			Icon(icon),
		]),
		Div({ class: 'text-muted-foreground' }, iconName)
	]);
};

/**
 * This will create an icon row.
 *
 * @param {*} icons
 * @param {array} layout
 * @param {string|null} path
 */
const IconRow = (icons, layout, path) =>
{
	const isIconObject = (typeof icons === 'object');
	if (isIconObject)
	{
		layout.push(P({ class: 'text-muted-foreground' }, 'path: ' + path + '.{icon}'));
	}

	const row = [];
	layout.push(Div({ class: 'flex flex-auto flex-wrap gap-2 my-8' }, row));

	if (isIconObject === false)
	{
		row.push(IconCard(icons, path));
	}
	else
	{
		for (var prop in icons)
		{
			if (icons.hasOwnProperty(prop) === false)
			{
				continue;
			}

			const icon = icons[prop];
			if(typeof icon !== 'object')
			{
				row.push(IconCard(icon, prop, path));
				continue;
			}

			const childPath = `${path}.${prop}`;
			IconRow(icon, layout, childPath);
		}
	}
};

/**
 * This will greate the icon guide layout.
 *
 * @param {object} obj
 * @returns {array}
 */
const IconGuide = (obj) =>
{
	if (!obj || typeof obj !== 'object')
	{
		return;
	}

	const layout = [];
	for (let [prop, value] of Object.entries(obj))
	{
		if (prop === 'parse')
		{
			continue;
		}

		layout.push(H5({
			id: prop.toLowerCase(),
			class: 'text-2xl font-bold'
		}, Strings.titleCase(prop)));

		const icon = value;
		IconRow(icon, layout, prop);
	}

	return layout;
};

/**
 * IconPage
 *
 * This will create an icon page..
 *
 * @returns {object}
 */
export const IconPage = () => (
	DocPage(
		{
			title: 'Icons',
			description: 'Base UI features a universal icon handler that seamlessly supports both Heroicons (SVG-based) and Material Symbols (font-based). All components automatically detect and render the appropriate icon type - just pass your icon and it works!'
		},
		[
			Div({ class: 'flex gap-4 mb-8' }, [
				A({ href: 'https://heroicons.com/', target: '_blank', class: 'bttn link' }, 'Heroicons Library'),
				A({ href: 'https://fonts.google.com/icons', target: '_blank', class: 'bttn link' }, 'Material Symbols Browser'),
			]),

			// Universal Icon Handler Section
			Div({ class: 'my-8 p-6 bg-primary/10 rounded-lg border-2 border-primary/30' }, [
				H3({ class: 'text-xl font-bold mb-3' }, '✨ Universal Icon Handler'),
				P({ class: 'text-muted-foreground mb-3' }, 'All icon-using components (Button, Alert, Modal, Navigation, etc.) now automatically detect and render both icon systems. No configuration needed!'),
				Div({ class: 'space-y-2 text-sm' }, [
					Div([
						Span({ class: 'font-semibold' }, '✅ No Breaking Changes: '),
						Span({ class: 'text-muted-foreground' }, 'Existing Heroicons code works as-is')
					]),
					Div([
						Span({ class: 'font-semibold' }, '✅ Automatic Detection: '),
						Span({ class: 'text-muted-foreground' }, 'Pass any icon type - it just works')
					]),
					Div([
						Span({ class: 'font-semibold' }, '✅ Consistent Sizes: '),
						Span({ class: 'text-muted-foreground' }, 'Same size props (xs-3xl) work for both systems')
					]),
					Div([
						Span({ class: 'font-semibold' }, '✅ Mix & Match: '),
						Span({ class: 'text-muted-foreground' }, 'Use both icon systems in the same project')
					])
				])
			]),

			// Overview Section
			Div({ class: 'my-8' }, [
				H3({ class: 'text-xl font-bold mb-3' }, 'Icon Systems Overview'),
				Div({ class: 'grid md:grid-cols-2 gap-4' }, [
					Div({ class: 'p-4 bg-muted/30 rounded-lg border' }, [
						H5({ class: 'font-semibold mb-2' }, 'Heroicons (SVG)'),
						Div({ class: 'space-y-1 text-sm text-muted-foreground' }, [
							P('• SVG-based icons'),
							P('• Curated, smaller set'),
							P('• Precise SVG control'),
							P('• Perfect for customization')
						])
					]),
					Div({ class: 'p-4 bg-muted/30 rounded-lg border' }, [
						H5({ class: 'font-semibold mb-2' }, 'Material Symbols (Font)'),
						Div({ class: 'space-y-1 text-sm text-muted-foreground' }, [
							P('• Font-based icons'),
							P('• 11,000+ icons available'),
							P('• 4 style variants (outlined/filled/rounded/sharp)'),
							P('• Great for Material Design')
						])
					])
				])
			]),

			// UniversalIcon Section
			Div({ class: 'my-20' }, [
				H3({ class: 'text-3xl font-bold mb-2' }, 'UniversalIcon - The Recommended Way'),
				P({ class: 'text-muted-foreground mb-8' }, 'UniversalIcon automatically detects whether you\'re using Heroicons (SVG) or Material Symbols and renders the appropriate component. All Base UI components use this internally.')
			]),

			DocSection({
				title: 'Universal Icon Usage',
				description: 'Pass any icon type to UniversalIcon and it automatically detects and renders correctly. Works with Heroicons SVG strings, Material Symbol names, or Material Symbol objects.',
				preview: [
					Div({ class: 'flex gap-4 items-center' }, [
						Div({ class: 'flex flex-col items-center gap-2' }, [
							UniversalIcon({ size: 'lg' }, Icons.home),
							Span({ class: 'text-xs text-muted-foreground' }, 'Heroicon')
						]),
						Div({ class: 'flex flex-col items-center gap-2' }, [
							UniversalIcon({ size: 'lg' }, MaterialSymbols.home),
							Span({ class: 'text-xs text-muted-foreground' }, 'Material Symbol')
						]),
						Div({ class: 'flex flex-col items-center gap-2' }, [
							UniversalIcon({ size: 'lg' }, 'home'),
							Span({ class: 'text-xs text-muted-foreground' }, 'String name')
						]),
						Div({ class: 'flex flex-col items-center gap-2' }, [
							UniversalIcon({ size: 'lg' }, { name: 'favorite', variant: 'filled' }),
							Span({ class: 'text-xs text-muted-foreground' }, 'With variant')
						])
					])
				],
				code: `
import { UniversalIcon } from "@base-framework/ui/atoms";
import { Icons, MaterialSymbols } from "@base-framework/ui/icons";

// All of these work with UniversalIcon:
UniversalIcon({ size: 'lg' }, Icons.home)                          // Heroicon SVG
UniversalIcon({ size: 'lg' }, MaterialSymbols.home)                // Material Symbol
UniversalIcon({ size: 'lg' }, 'home')                              // Material Symbol name
UniversalIcon({ size: 'lg' }, { name: 'favorite', variant: 'filled' }) // With variant`
			}),

			DocSection({
				title: 'Consistent Sizes Across Both Systems',
				description: 'MaterialIcon now uses the exact same pixel sizes as Icon (Heroicons), so size props work identically across both systems.',
				preview: [
					Div({ class: 'flex flex-wrap gap-6' }, [
						Div({ class: 'flex flex-col items-center gap-2' }, [
							Div({ class: 'flex gap-2 items-center' }, [
								UniversalIcon({ size: 'sm' }, Icons.home),
								UniversalIcon({ size: 'sm' }, MaterialSymbols.home)
							]),
							Span({ class: 'text-xs text-muted-foreground' }, 'sm: 24px')
						]),
						Div({ class: 'flex flex-col items-center gap-2' }, [
							Div({ class: 'flex gap-2 items-center' }, [
								UniversalIcon({ size: 'md' }, Icons.home),
								UniversalIcon({ size: 'md' }, MaterialSymbols.home)
							]),
							Span({ class: 'text-xs text-muted-foreground' }, 'md: 32px')
						]),
						Div({ class: 'flex flex-col items-center gap-2' }, [
							Div({ class: 'flex gap-2 items-center' }, [
								UniversalIcon({ size: 'lg' }, Icons.home),
								UniversalIcon({ size: 'lg' }, MaterialSymbols.home)
							]),
							Span({ class: 'text-xs text-muted-foreground' }, 'lg: 40px')
						])
					])
				],
				code: `
// Both systems use identical sizes:
// xs: 16px (w-4 h-4)
// sm: 24px (w-6 h-6) - default
// md: 32px (w-8 h-8)
// lg: 40px (w-10 h-10)
// xl: 48px (w-12 h-12)
// 2xl: 56px (w-14 h-14)
// 3xl: 64px (w-16 h-16)

UniversalIcon({ size: 'sm' }, Icons.home)           // 24px
UniversalIcon({ size: 'sm' }, MaterialSymbols.home) // 24px (same!)`
			}),

			DocSection({
				title: 'Using in Components',
				description: 'All Base UI components (Button, Alert, Modal, etc.) automatically support both icon systems through UniversalIcon. Just pass your icon!',
				preview: [
					Div({ class: 'flex flex-col gap-4' }, [
						Div({ class: 'flex gap-2' }, [
							Div({ class: 'bttn primary flex items-center gap-2' }, [
								UniversalIcon({ size: 'sm' }, Icons.plus),
								Span('Heroicon')
							]),
							Div({ class: 'bttn primary flex items-center gap-2' }, [
								UniversalIcon({ size: 'sm' }, MaterialSymbols.add),
								Span('Material Symbol')
							])
						]),
						P({ class: 'text-sm text-muted-foreground' }, 'Both buttons work identically - the component automatically detects the icon type!')
					])
				],
				code: `
import { Button } from '@base-framework/ui/atoms';
import { Icons, MaterialSymbols } from '@base-framework/ui/icons';

// Both work automatically:
Button({ variant: 'withIcon', icon: Icons.plus }, 'Add Item')
Button({ variant: 'withIcon', icon: MaterialSymbols.add }, 'Add Item')
Button({ variant: 'withIcon', icon: 'add' }, 'Add Item')

// Works in Alert:
Alert({ type: 'success', icon: Icons.check, title: 'Success!' })
Alert({ type: 'success', icon: MaterialSymbols.status.success, title: 'Success!' })

// Works in Modal:
new Modal({ title: 'Edit', icon: Icons.pencil }).open()
new Modal({ title: 'Edit', icon: MaterialSymbols.actions.edit }).open()`
			}),

			DocSection({
				title: 'Helper Functions',
				description: 'Two helper functions are available for checking icon types in your own components.',
				preview: [
					Div({ class: 'p-4 bg-muted/30 rounded-lg font-mono text-sm space-y-1' }, [
						Div({ class: 'text-muted-foreground' }, [
							Span('isMaterialIcon(Icons.home) → '),
							Span({ class: 'text-red-500 font-semibold' }, String(isMaterialIcon(Icons.home)))
						]),
						Div({ class: 'text-muted-foreground' }, [
							Span('isMaterialIcon("home") → '),
							Span({ class: 'text-green-500 font-semibold' }, String(isMaterialIcon('home')))
						]),
						Div({ class: 'text-muted-foreground' }, [
							Span('isHeroicon(Icons.home) → '),
							Span({ class: 'text-green-500 font-semibold' }, String(isHeroicon(Icons.home)))
						]),
						Div({ class: 'text-muted-foreground' }, [
							Span('isHeroicon("home") → '),
							Span({ class: 'text-red-500 font-semibold' }, String(isHeroicon('home')))
						])
					])
				],
				code: `
import { isMaterialIcon, isHeroicon } from '@base-framework/ui/atoms';

// Check if icon is Material Symbol
isMaterialIcon('home')              // true
isMaterialIcon(MaterialSymbols.add) // true (object with name)
isMaterialIcon(Icons.home)          // false (SVG string)

// Check if icon is Heroicon (SVG)
isHeroicon(Icons.home)              // true
isHeroicon('home')                  // false`
			}),

			// Material Symbols Section
			Div({ class: 'my-20' }, [
				H3({ class: 'text-3xl font-bold mb-2' }, 'Material Symbols'),
				P({ class: 'text-muted-foreground mb-8' }, 'Font-based icons from Google Material Symbols with support for multiple variants and sizes. All fonts are automatically loaded from Google Fonts CDN.')
			]),

			DocSection({
				title: 'Basic Material Icon',
				description: 'Material Symbols use font ligatures and come in four style variants: outlined (default), filled, rounded, and sharp.',
				preview: [
					Div({ class: 'flex gap-4 items-center' }, [
						MaterialIcon({ name: 'home', size: 'md' })
					])
				],
				code: `
import { MaterialIcon } from "@base-framework/ui/atoms";
import { MaterialSymbols } from "@base-framework/ui/icons";

// Using predefined symbol names
MaterialIcon({ name: MaterialSymbols.home, size: 'md' })

// Using any Material Symbol name directly
MaterialIcon({ name: 'home', size: 'md' })`
			}),

			DocSection({
				title: 'Material Icon Sizes (Now Consistent!)',
				description: 'Material icons now use the EXACT same pixel sizes as Heroicons for perfect consistency across both systems.',
				preview: [
					Div({ class: 'flex flex-wrap gap-4 items-center' }, [
						Div({ class: 'flex flex-col items-center justify-center' }, [
							MaterialIcon({ name: 'home', size: 'xs' }),
							Span({ class: 'text-sm text-muted-foreground' }, 'xs: 16px'),
						]),
						Div({ class: 'flex flex-col items-center justify-center' }, [
							MaterialIcon({ name: 'home', size: 'sm' }),
							Span({ class: 'text-sm text-muted-foreground' }, 'sm: 24px'),
						]),
						Div({ class: 'flex flex-col items-center justify-center' }, [
							MaterialIcon({ name: 'home', size: 'md' }),
							Span({ class: 'text-sm text-muted-foreground' }, 'md: 32px'),
						]),
						Div({ class: 'flex flex-col items-center justify-center' }, [
							MaterialIcon({ name: 'home', size: 'lg' }),
							Span({ class: 'text-sm text-muted-foreground' }, 'lg: 40px'),
						]),
						Div({ class: 'flex flex-col items-center justify-center' }, [
							MaterialIcon({ name: 'home', size: 'xl' }),
							Span({ class: 'text-sm text-muted-foreground' }, 'xl: 48px'),
						]),
						Div({ class: 'flex flex-col items-center justify-center' }, [
							MaterialIcon({ name: 'home', size: '2xl' }),
							Span({ class: 'text-sm text-muted-foreground' }, '2xl: 56px'),
						]),
						Div({ class: 'flex flex-col items-center justify-center' }, [
							MaterialIcon({ name: 'home', size: '3xl' }),
							Span({ class: 'text-sm text-muted-foreground' }, '3xl: 64px'),
						]),
					])
				],
				code: `
import { MaterialIcon } from "@base-framework/ui/atoms";

// Sizes now match Heroicons exactly:
MaterialIcon({ name: 'home', size: 'xs' })  // 16px (w-4 h-4)
MaterialIcon({ name: 'home', size: 'sm' })  // 24px (w-6 h-6) - default
MaterialIcon({ name: 'home', size: 'md' })  // 32px (w-8 h-8)
MaterialIcon({ name: 'home', size: 'lg' })  // 40px (w-10 h-10)
MaterialIcon({ name: 'home', size: 'xl' })  // 48px (w-12 h-12)
MaterialIcon({ name: 'home', size: '2xl' }) // 56px (w-14 h-14)
MaterialIcon({ name: 'home', size: '3xl' }) // 64px (w-16 h-16)`
			}),

			DocSection({
				title: 'Material Icon Variants',
				description: 'Material Symbols come in four visual styles: outlined (default), filled, rounded, and sharp.',
				preview: [
					Div({ class: 'flex flex-wrap gap-6 items-center' }, [
						Div({ class: 'flex flex-col items-center justify-center gap-2' }, [
							MaterialIcon({ name: 'favorite', variant: 'outlined', size: 'lg' }),
							Span({ class: 'text-sm text-muted-foreground' }, 'outlined'),
						]),
						Div({ class: 'flex flex-col items-center justify-center gap-2' }, [
							MaterialIcon({ name: 'favorite', variant: 'filled', size: 'lg' }),
							Span({ class: 'text-sm text-muted-foreground' }, 'filled'),
						]),
						Div({ class: 'flex flex-col items-center justify-center gap-2' }, [
							MaterialIcon({ name: 'favorite', variant: 'rounded', size: 'lg' }),
							Span({ class: 'text-sm text-muted-foreground' }, 'rounded'),
						]),
						Div({ class: 'flex flex-col items-center justify-center gap-2' }, [
							MaterialIcon({ name: 'favorite', variant: 'sharp', size: 'lg' }),
							Span({ class: 'text-sm text-muted-foreground' }, 'sharp'),
						]),
					])
				],
				code: `
import { MaterialIcon } from "@base-framework/ui/atoms";

MaterialIcon({ name: 'favorite', variant: 'outlined' })  // Default
MaterialIcon({ name: 'favorite', variant: 'filled' })    // Solid
MaterialIcon({ name: 'favorite', variant: 'rounded' })   // Rounded edges
MaterialIcon({ name: 'favorite', variant: 'sharp' })     // Sharp angles`
			}),

			DocSection({
				title: 'Material Icon Colors',
				description: 'Material icons can be colored using Tailwind CSS classes, just like Heroicons.',
				preview: [
					Div({ class: 'flex flex-wrap gap-4 items-center' }, [
						MaterialIcon({ name: 'star', variant: 'filled', size: 'lg', class: 'text-yellow-500' }),
						MaterialIcon({ name: 'favorite', variant: 'filled', size: 'lg', class: 'text-red-500' }),
						MaterialIcon({ name: 'check_circle', variant: 'filled', size: 'lg', class: 'text-green-500' }),
						MaterialIcon({ name: 'info', variant: 'filled', size: 'lg', class: 'text-blue-500' }),
					])
				],
				code: `
import { MaterialIcon } from "@base-framework/ui/atoms";

MaterialIcon({ name: 'star', variant: 'filled', class: 'text-yellow-500' })
MaterialIcon({ name: 'favorite', variant: 'filled', class: 'text-red-500' })
MaterialIcon({ name: 'check_circle', variant: 'filled', class: 'text-green-500' })
MaterialIcon({ name: 'info', variant: 'filled', class: 'text-blue-500' })`
			}),

			DocSection({
				title: 'Using MaterialSymbols Object',
				description: 'The MaterialSymbols object provides organized access to common icon names. Browse all 11,000+ icons at fonts.google.com/icons.',
				preview: [
					Div({ class: 'flex flex-wrap gap-4 items-center' }, [
						MaterialIcon({ name: MaterialSymbols.home, size: 'md' }),
						MaterialIcon({ name: MaterialSymbols.search, size: 'md' }),
						MaterialIcon({ name: MaterialSymbols.settings, size: 'md' }),
						MaterialIcon({ name: MaterialSymbols.favorite, size: 'md' }),
					])
				],
				code: `
import { MaterialIcon } from "@base-framework/ui/atoms";
import { MaterialSymbols } from "@base-framework/ui/icons";

// Top-level access
MaterialIcon({ name: MaterialSymbols.home })
MaterialIcon({ name: MaterialSymbols.search })
MaterialIcon({ name: MaterialSymbols.settings })

// Nested categories (if available)
MaterialIcon({ name: MaterialSymbols.actions?.add })
MaterialIcon({ name: MaterialSymbols.status?.success })`
			}),

			DocSection({
				title: 'Material Symbol Objects with Variants',
				description: 'You can pass Material Symbols as objects with variant information. This works in all components that accept icons.',
				preview: [
					Div({ class: 'flex gap-2' }, [
						Div({ class: 'bttn primary flex items-center gap-2' }, [
							UniversalIcon({ size: 'sm' }, { name: 'add', variant: 'outlined' }),
							Span('Outlined')
						]),
						Div({ class: 'bttn secondary flex items-center gap-2' }, [
							UniversalIcon({ size: 'sm' }, { name: 'favorite', variant: 'filled' }),
							Span('Filled')
						]),
						Div({ class: 'bttn success flex items-center gap-2' }, [
							UniversalIcon({ size: 'sm' }, { name: 'check_circle', variant: 'rounded' }),
							Span('Rounded')
						]),
					])
				],
				code: `
import { UniversalIcon } from "@base-framework/ui/atoms";
import { Button } from "@base-framework/ui/atoms";

// Pass as object with variant:
Button({
  variant: 'withIcon',
  icon: { name: 'favorite', variant: 'filled' }
}, 'Like')

// Works with UniversalIcon directly:
UniversalIcon({ size: 'sm' }, { name: 'star', variant: 'filled' })`
			}),

			// Migration & Mixing Section
			Div({ class: 'my-16 p-6 bg-muted/30 rounded-lg border' }, [
				H3({ class: 'text-xl font-bold mb-4' }, 'Migration & Mixing Icon Systems'),
				Div({ class: 'space-y-4 text-sm' }, [
					Div([
						H5({ class: 'font-semibold text-base mb-2' }, '✅ Existing Code Still Works'),
						P({ class: 'text-muted-foreground mb-2' }, 'All existing Heroicons code continues to work without any changes:'),
						Div({ class: 'p-3 bg-background rounded font-mono text-xs' }, [
							Div('Button({ icon: Icons.plus }, "Add") // ✅ Still works'),
							Div('Alert({ icon: Icons.check }) // ✅ Still works')
						])
					]),
					Div([
						H5({ class: 'font-semibold text-base mb-2' }, '🔄 Easy Migration'),
						P({ class: 'text-muted-foreground mb-2' }, 'Simply substitute Material Symbols where desired:'),
						Div({ class: 'p-3 bg-background rounded font-mono text-xs' }, [
							Div({ class: 'text-muted-foreground' }, '// Before:'),
							Div('Button({ icon: Icons.plus }, "Add")'),
							Div({ class: 'text-muted-foreground mt-2' }, '// After:'),
							Div('Button({ icon: MaterialSymbols.add }, "Add")')
						])
					]),
					Div([
						H5({ class: 'font-semibold text-base mb-2' }, '🎨 Mix Both Systems'),
						P({ class: 'text-muted-foreground mb-2' }, 'Use both icon systems in the same project:'),
						Div({ class: 'p-3 bg-background rounded font-mono text-xs' }, [
							Div('Button({ icon: Icons.pencil }, "Edit")'),
							Div('Button({ icon: MaterialSymbols.delete }, "Delete")'),
							Div({ class: 'text-green-500 mt-1' }, '// No configuration needed!')
						])
					])
				])
			]),

			// Comparison Section
			Div({ class: 'my-8 p-6 bg-muted/30 rounded-lg border' }, [
				H3({ class: 'text-xl font-bold mb-4' }, 'When to Use Which Icon System'),
				Div({ class: 'grid md:grid-cols-2 gap-6 text-sm' }, [
					Div({ class: 'space-y-2' }, [
						H5({ class: 'font-semibold text-base' }, 'Use Material Symbols When:'),
						Div({ class: 'space-y-1 text-muted-foreground' }, [
							P('• You need a large variety of icons (11,000+)'),
							P('• Building Material Design interfaces'),
							P('• You want multiple style variants (outlined/filled/rounded/sharp)'),
							P('• Font-based rendering is preferred'),
							P('• Need consistent icon weights and fills'),
						])
					]),
					Div({ class: 'space-y-2' }, [
						H5({ class: 'font-semibold text-base' }, 'Use Heroicons When:'),
						Div({ class: 'space-y-1 text-muted-foreground' }, [
							P('• You need SVG-based icons for advanced styling'),
							P('• Already using Heroicons in your project'),
							P('• Prefer a curated, smaller icon set'),
							P('• SVG precision is important'),
							P('• Need direct SVG manipulation'),
						])
					])
				])
			]),

			// Heroicons Section
			Div({ class: 'my-20' }, [
				H3({ class: 'text-3xl font-bold mb-2' }, 'Heroicons (SVG-based)'),
				P({ class: 'text-muted-foreground mb-8' }, 'SVG icons from Heroicons library. These use the outline style and provide precise control over SVG properties.')
			]),

			DocSection({
				title: 'Basic Heroicon (SVG)',
				description: 'Heroicons are SVG-based and can be used directly in HTML elements or with the Icon component.',
				preview: [
					I({ html: Icons.home} )
				],
				code: `
import { Icons } from "@base-framework/ui/icons";
import { I } from '@base-framework/atoms';

export const HomeIcon = () => (
	I({ html: Icons.home })
);`
			}),

			DocSection({
				title: 'Heroicon Atom',
				description: 'The Icon atom is a helper that makes it easier to use Heroicons with consistent sizing and styling.',
				preview: [
					Icon(Icons.home)
				],
				code: `
import { Icon } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";

Icon(Icons.home);`
			}),

			DocSection({
				title: 'Heroicon Sizes',
				description: 'Heroicons can be rendered in various sizes using the Icon component with the size property.',
				preview: [
					Div({ class: 'flex flex-wrap gap-4 items-center' }, [
						Div({ class: 'flex flex-col items-center justify-center' }, [
							Icon({ size: 'xs' }, Icons.home),
							Span({ class: 'text-sm text-muted-foreground' }, 'xs'),
						]),
						Div({ class: 'flex flex-col items-center justify-center' }, [
							Icon({ size: 'sm' }, Icons.home),
							Span({ class: 'text-sm text-muted-foreground' }, 'sm'),
						]),
						Div({ class: 'flex flex-col items-center justify-center' }, [
							Icon({ size: 'md' }, Icons.home),
							Span({ class: 'text-sm text-muted-foreground' }, 'md'),
						]),
						Div({ class: 'flex flex-col items-center justify-center' }, [
							Icon({ size: 'lg' }, Icons.home),
							Span({ class: 'text-sm text-muted-foreground' }, 'lg'),
						]),
						Div({ class: 'flex flex-col items-center justify-center' }, [
							Icon({ size: 'xl' }, Icons.home),
							Span({ class: 'text-sm text-muted-foreground' }, 'xl'),
						]),
						Div({ class: 'flex flex-col items-center justify-center' }, [
							Icon({ size: '2xl' }, Icons.home),
							Span({ class: 'text-sm text-muted-foreground' }, '2xl'),
						]),
						Div({ class: 'flex flex-col items-center justify-center' }, [
							Icon({ size: '3xl' }, Icons.home),
							Span({ class: 'text-sm text-muted-foreground' }, '3xl'),
						]),
					])

				],
				code: `
import { Icon } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";

Icon({ size: 'xs' }, Icons.home)   // Extra Small
Icon({ size: 'sm' }, Icons.home)   // Small
Icon({ size: 'md' }, Icons.home)   // Medium
Icon({ size: 'lg' }, Icons.home)   // Large
Icon({ size: 'xl' }, Icons.home)   // Extra Large
Icon({ size: '2xl' }, Icons.home)  // 2X Large
Icon({ size: '3xl' }, Icons.home)  // 3X Large`
			}),

			DocSection({
				title: 'Heroicon Colors',
				description: 'Heroicons can be styled with colors using Tailwind CSS classes.',
				preview: [
					Div({ class: 'flex flex-wrap gap-4 items-center' }, [
						Icon({ class: 'text-red-500' }, Icons.phone.missed),
						Icon({ class: 'text-blue-500' }, Icons.phone.inbound),
						Icon({ class: 'text-yellow-500' }, Icons.phone.outbound),
					])
				],
				code: `
import { Icon } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";

Icon({ class: 'text-red-500' }, Icons.phone.missed)
Icon({ class: 'text-blue-500' }, Icons.phone.inbound)
Icon({ class: 'text-yellow-500' }, Icons.phone.outbound)`
			}),

			Div({ class: 'my-20' }, [
				H3({ class: 'text-2xl font-bold' }, 'Available Heroicons'),
				P({ class: 'text-muted-foreground' }, 'Below is a curated collection of Heroicons available in the Icons object. Click any icon to copy its path to your clipboard.')
			]),

			IconGuide(Icons)
		]
	)
);

export default IconPage;