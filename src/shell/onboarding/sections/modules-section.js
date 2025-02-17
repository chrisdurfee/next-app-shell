import { Button, Code, Div, H2, H3, P } from '@base-framework/atoms';
import { Icons } from '@base-framework/ui/icons';
import { STEPS } from '../steps.js';

export const ModulesSection = () =>
{
    const nextStep = () => app.showStep(STEPS.APP_SHELL);
    const prevStep = () => app.showStep(STEPS.THEMING);

    return Div({ class: 'flex flex-col items-start' }, [
        H2({ class: 'text-2xl font-bold mb-4' }, 'Working with Modules'),

        ModuleStep('Module Structure', [
            P({ class: 'text-muted-foreground' }, 'Each module is self-contained in the src/modules directory with its own:'),
            Div({ class: 'ml-4 mt-2 space-y-2' }, [
                P('• Components'),
                P('• CSS styles'),
                P('• Routes'),
                P('• Business logic')
            ])
        ]),

        ModuleStep('Creating a Module', [
            P({ class: 'text-muted-foreground' }, 'Create a new module with this structure:'),
            Code({ class: 'my-4 p-4 bg-muted rounded-md block whitespace-pre' },
`modules/
  your-module/
    components/
    css/
    module.js`
            ),
            P({ class: 'text-muted-foreground mt-4' }, 'Define your module in module.js:'),
            Code({ class: 'my-4 p-4 bg-muted rounded-md block whitespace-pre' },
`import { Icons } from "@base-framework/ui/icons";
import { Module } from '../module/module.js';

const routes = Module.convertRoutes([
  {
    path: '/your-route/:param?',
    import: import('./components/your-page.js'),
    title: 'Your Page'
  }
]);

Module.create({
  routes,
  links: [
    {
      group: 'Your Group',
      options: [
        {
          label: 'Your Link',
          href: 'your-route',
          icon: Icons.home
        }
      ]
    }
  ]
});`
            )
        ]),

        ModuleStep('Registering Modules', [
            P({ class: 'text-muted-foreground' }, 'Import your module in src/modules/imported-modules.js:'),
            Code({ class: 'my-4 p-4 bg-muted rounded-md block' },
`import "./main/module.js";
import "./your-module/module.js";`
            )
        ]),

        ModuleStep('Best Practices', [
            P({ class: 'text-muted-foreground' }, 'Follow these guidelines for modules:'),
            Div({ class: 'ml-4 mt-2 space-y-2' }, [
                P('• Keep modules focused on a single domain/feature'),
                P('• Use clear, descriptive names for routes and components'),
                P('• Maintain module-specific styles in the css folder'),
                P('• Document module configuration and dependencies')
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
                'Next: App Shell ',
                Icons.arrowRight()
            ])
        ])
    ]);
};

const ModuleStep = (title, content) =>
    Div({ class: 'mb-8' }, [
        H3({ class: 'text-xl font-semibold mb-4' }, title),
        ...content
    ]);