import { A, I } from "@base-framework/atoms";
import { Icons } from "../../../../../../components/icons/icons.js";
import { DocSection } from "../../../molecules/doc-section.js";
import { DocPage } from "../../doc-page.js";

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
                title: 'Badge',
                description: 'This is a badge.',
                preview: [
                    I({ html: Icons.home} )
                ],
                code: `
import { Icons } from '../components/icons/icons.js';
import { I } from '@base-framework/atoms';

export const HomeIcon = () => (
    I({ html: Icons.home} )
);`
            })
        ]
    )
);

export default IconPage;