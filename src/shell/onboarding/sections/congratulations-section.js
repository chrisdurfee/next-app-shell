import { A, Div, H1, P } from '@base-framework/atoms';
import { Icons } from '@base-framework/ui/icons';

/**
 * @function CongratulationsSection
 * @description
 *  A page section that displays the final success message.
 *
 * @returns {object} A Section component containing the success message UI.
 */
export const CongratulationsSection = () =>
{
   return Div({ class: 'flex flex-col items-start' }, [
        Div({ class: 'w-16 h-16 mb-6 text-primary' }, Icons.checkCircle()),
        H1({ class: 'text-2xl font-bold mb-4' }, "You're Ready to Build!"),
        P({ class: 'text-base text-muted-foreground mb-4' },
            "You now have a solid understanding of the App Shell framework. Start building your application with confidence."
        ),
        Div({ class: 'grid gap-4' }, [
            A({
                href: 'docs',
                class: 'bttn outline'
            }, [
                Icons.document.text(),
                ' View Documentation'
            ])
        ])
    ]);
};