import { Button } from "../../../../../../../components/atoms/buttons/buttons.js";
import { DocSection } from "../../../../molecules/doc-section.js";
import { DocPage } from '../../../doc-page.js';

/**
 * ButtonPage
 *
 * This will create a button page.
 *
 * @param {object} props
 * @param {object} children
 * @returns {DocPage}
 */
export const ButtonPage = () => (
	DocPage(
        {
            title: 'Button',
            description: 'Displays a button or a component that looks like a button.'
        },
        [
            DocSection({
                title: 'Primary Button',
                description: 'This is a primary button.',
                preview: [
                    Button({ variant: 'primary' }, 'Click Me')
                ],
                code: `
import { Button } from '../components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const PrimaryButton = Atom((props, children)) => (
    Button({ ...props, variant: 'primary' }, children)
);`
            }),

            DocSection({
                title: 'Secondary Button',
                preview: [
                    Button({ variant: 'secondary' }, 'Secondary')
                ],
                code: `
import { Button } from '../components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const SecondaryButton = Atom((props, children)) => (
    Button({ ...props, variant: 'secondary' }, children)
);`
            }),

            DocSection({
                title: 'Destructive Button',
                preview: [
                    Button({ variant: 'destructive' }, 'Destructive')
                ],
                code: `
import { Button } from '../components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const DestructiveButton = Atom((props, children)) => (
    Button({ ...props, variant: 'destructive' }, children)
);`
            }),

            DocSection({
                title: 'Outline Button',
                preview: [
                    Button({ variant: 'outline' }, 'Outline')
                ],
                code: `
import { Button } from '../components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const OutlineButton = Atom((props, children)) => (
    Button({ ...props, variant: 'outline' }, children)
);`
            }),

            DocSection({
                title: 'Ghost Button',
                preview: [
                    Button({ variant: 'ghost' }, 'Ghost')
                ],
                code: `
import { Button } from '../components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const GhostButton = Atom((props, children)) => (
    Button({ ...props, variant: 'ghost' }, children)
);`
            }),

            DocSection({
                title: 'Link Button',
                preview: [
                    Button({ variant: 'link' }, 'Link')
                ],
                code: `
import { Button } from '../components/atoms/buttons/buttons.js';
import { Atom } from '@base-framework/base';

export const LinkButton = Atom((props, children)) => (
    Button({ ...props, variant: 'link' }, children)
);`
            })
        ]
    )
);

export default DocPage;