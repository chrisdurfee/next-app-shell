import { Button, Code, Div, H2, H3, P } from '@base-framework/atoms';
import { Icons } from '@base-framework/ui/icons';
import { STEPS } from '../steps.js';

export const AppShellSection = () =>
{
    const nextStep = () => app.showStep(STEPS.DEVELOPMENT);
    const prevStep = () => app.showStep(STEPS.MODULES);

    return Div({ class: 'flex flex-col items-start' }, [
        H2({ class: 'text-2xl font-bold mb-4' }, 'Understanding the App Shell'),

        ShellStep('Core Components', [
            P({ class: 'text-muted-foreground' }, 'The App Shell consists of these key components:'),
            Div({ class: 'ml-4 mt-2 space-y-2' }, [
                P('• Router and navigation system'),
                P('• Service Worker for PWA features'),
                P('• Authentication flow'),
                P('• Global state management'),
                P('• Push notification support')
            ])
        ]),

        ShellStep('Configuration', [
            P({ class: 'text-muted-foreground' }, 'Configure global settings in src/configs.js:'),
            Code({ class: 'my-4 p-4 bg-muted rounded-md block whitespace-pre' },
`export const Configs = {
    APP_NAME: 'Your App Name',
    router: {
        baseUrl: '/your-base-url/',
        title: 'Your App'
    },
    push: {
        publicId: 'your-push-id'
    }
}`
            )
        ]),

        ShellStep('Service Worker', [
            P({ class: 'text-muted-foreground' }, 'The service worker (public/sw.js) handles:'),
            Div({ class: 'ml-4 mt-2 space-y-2' }, [
                P('• Asset caching'),
                P('• Offline functionality'),
                P('• Push notifications'),
                P('• App updates')
            ]),
            P({ class: 'text-muted-foreground mt-4' }, 'Update the version when deploying:'),
            Code({ class: 'my-4 p-4 bg-muted rounded-md block' },
`const APP_NAME = 'your-app-name',
      version = '1.0.0';`
            )
        ]),

        ShellStep('Authentication', [
            P({ class: 'text-muted-foreground' }, 'The shell includes built-in auth flows:'),
            Div({ class: 'ml-4 mt-2 space-y-2' }, [
                P('• Sign-in/sign-up pages'),
                P('• User session management'),
                P('• Protected routes'),
                P('• Customizable auth providers')
            ])
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
                'Next: Development ',
                Icons.arrowRight()
            ])
        ])
    ]);
};

const ShellStep = (title, content) =>
    Div({ class: 'mb-8' }, [
        H3({ class: 'text-xl font-semibold mb-4' }, title),
        ...content
    ]);