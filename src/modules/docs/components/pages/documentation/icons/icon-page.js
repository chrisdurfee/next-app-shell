import { A, Div, H3, H5, I, P } from "@base-framework/atoms";
import { Strings } from "@base-framework/base";
import { Icon } from "@components/atoms/icon.js";
import { Icons } from "@components/icons/icons.js";
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
const IconCard = (icon, iconName, path) =>
{
    path = 'Icons' + ((path) ? '.' + path : '');
    return Div({ class: 'flex flex-auto flex-col items-center gap-2 max-w-[150px] h-[8.5rem] cursor-pointer' }, [
        Div({ class: 'flex flex-auto w-full h-full justify-center items-center flex-wrap rounded-lg border bg-card text-base shadow-sm hover:bg-accent hover:text-accent-foreground',
            click: () =>
            {
                // copy to clipboard
                navigator.clipboard.writeText(`${path}.${iconName}`);
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
 * @param {object} props
 * @param {object} children
 * @returns {DocPage}
 */
export const IconPage = () => (
    DocPage(
        {
            title: 'Icons',
            description: 'The icons are from the Hericon library. They are SVG icons that can be used in your project. This icon set uses the outline style.'
        },
        [
            A({ href: 'https://heroicons.com/', target: '_blank', class: 'bttn link' }, 'link: Hericons'),

            DocSection({
                title: 'Icons',
                description: 'This is an icon.',
                preview: [
                    I({ html: Icons.home} )
                ],
                code: `
import { Icons } from '@components/icons/icons.js';
import { I } from '@base-framework/atoms';

export const HomeIcon = () => (
    I({ html: Icons.home} )
);`
            }),

            Div({ class: 'my-20' }, [
                H3({ class: 'text-2xl font-bold' }, 'Default Icons'),
                P({ class: 'text-muted-foreground' }, 'A few of the icons have been saved to the "Icons" object. You can use these icons in your project. Click to copy the Icon path. Here is a list of the icons that are available:'),
            ]),

            DocSection({
                title: 'Icon Atom',
                description: 'An Icon is a helper atom that makes it easier to use icons in your project. ',
                preview: [
                    Icon(Icons.home)
                ],
                code: `
import { Icon } from '@components/atoms/icon.js';

Icon(Icons.home);`
            }),

            Div({ class: 'my-20' }, [
                H3({ class: 'text-2xl font-bold' }, 'Default Icons'),
                P({ class: 'text-muted-foreground' }, 'A few of the icons have been saved to the "Icons" object. You can use these icons in your project. Click to copy the Icon path. Here is a list of the icons that are available:'),
            ]),

            IconGuide(Icons)
        ]
    )
);

export default IconPage;