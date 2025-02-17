import { Code, Div, H2, H3, P } from '@base-framework/atoms';

export const ThemingSection = () =>
{
    return Div({ class: 'flex flex-col items-start' }, [
        H2({ class: 'text-2xl font-bold mb-4' }, 'Theming Your App'),

        ThemeStep('Base Theme', [
            P({ class: 'text-muted-foreground' }, 'The app uses Tailwind CSS with a customizable theme system. Edit src/css/base.css to modify the root theme variables:'),
            Code({ class: 'my-4 p-4 bg-muted rounded-md block whitespace-pre' },
`@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;
    --card: 0 0% 100%;
    /* Add your custom variables */
  }

  @media (prefers-color-scheme: dark) {
    :root:not(.light) {
      --background: 240 10% 3.9%;
      --foreground: 0 0% 98%;
      /* Dark theme overrides */
    }
  }
}`
            )
        ]),

        ThemeStep('Meta Tags', [
            P({ class: 'text-muted-foreground' }, 'Update theme colors in your index.html:'),
            Code({ class: 'my-4 p-4 bg-muted rounded-md block' },
`<meta name="theme-color" content="#09090b">
<meta name="msapplication-TileColor" content="#09090b">`
            )
        ]),

        ThemeStep('PWA Manifest', [
            P({ class: 'text-muted-foreground' }, 'Configure app appearance in public/manifest.json:'),
            Code({ class: 'my-4 p-4 bg-muted rounded-md block whitespace-pre' },
`{
  "theme_color": "#09090b",
  "background_color": "#09090b",
  "icons": [
    {
      "src": "./images/icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}`
            )
        ]),

        ThemeStep('Custom Components', [
            P({ class: 'text-muted-foreground' }, 'The app includes Shadcn-inspired UI components that automatically use your theme variables. Components are built with accessibility and customization in mind.')
        ])
    ]);
};

const ThemeStep = (title, content) =>
    Div({ class: 'mb-8' }, [
        H3({ class: 'text-xl font-semibold mb-4' }, title),
        ...content
    ]);