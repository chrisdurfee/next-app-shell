import { A } from "@base-framework/atoms";
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
            A({ href: 'https://heroicons.com/', target: '_blank', class: 'bttn link' }, 'link: Hericons')
        ]
    )
);

export default IconPage;