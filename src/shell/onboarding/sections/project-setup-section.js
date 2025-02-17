import { Button, Code, Div, H2, H3, P } from '@base-framework/atoms';
import { Icons } from '@base-framework/ui/icons';
import { STEPS } from '../steps.js';

export const ProjectSetupSection = () =>
{
    const nextStep = () => app.showStep(STEPS.THEMING);
    const prevStep = () => app.showStep(STEPS.WELCOME);

    return Div({ class: 'flex flex-col items-start' }, [
        H2({ class: 'text-2xl font-bold mb-4' }, 'Project Setup'),

        SetupStep('Prerequisites', [
            P({ class: 'text-muted-foreground' }, 'Before you begin, ensure you have:'),
            Div({ class: 'ml-4 mt-2 space-y-2' }, [
                P('• Node.js (version 16+)'),
                P('• npm or yarn package manager'),
                P('• A code editor (VS Code recommended)')
            ])
        ]),

        SetupStep('Installation', [
            P({ class: 'text-muted-foreground' }, 'Run the following command in your terminal:'),
            Code({ class: 'my-4 p-4 bg-muted rounded-md block' }, 'npm install'),
            P({ class: 'text-muted-foreground' }, 'Or if you prefer yarn:'),
            Code({ class: 'my-4 p-4 bg-muted rounded-md block' }, 'yarn install')
        ]),

        SetupStep('Package Configuration', [
            P({ class: 'text-muted-foreground' }, 'Update your package.json with your project details:'),
            Code({ class: 'my-4 p-4 bg-muted rounded-md block whitespace-pre' },
`{
  "name": "your-app-name",
  "version": "1.0.0",
  "description": "Your app description",
  "keywords": ["pwa", "vite", "tailwind"],
  "author": "Your Name"
}`
            )
        ]),

        SetupStep('Development Commands', [
            P({ class: 'text-muted-foreground' }, 'Start the development server:'),
            Code({ class: 'my-4 p-4 bg-muted rounded-md block' }, 'npm run dev'),
            P({ class: 'text-muted-foreground' }, 'Build for production:'),
            Code({ class: 'my-4 p-4 bg-muted rounded-md block' }, 'npm run build')
        ]),

        Div({ class: 'flex justify-between mt-8' }, [
            Button({
                variant: 'outline',
                click: prevStep
            }, [
                Icons.arrowLeft(),
                ' Back'
            ]),
            Button({
                click: nextStep
            }, [
                'Next: Theming ',
                Icons.arrowRight()
            ])
        ])
    ]);
};

const SetupStep = (title, content) =>
    Div({ class: 'mb-8' }, [
        H3({ class: 'text-xl font-semibold mb-4' }, title),
        ...content
    ]);