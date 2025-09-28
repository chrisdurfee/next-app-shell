# Copilot instructions for next-app-shell

This is a Base Framework SPA scaffold built with Vite + Tailwind. It uses Base’s Atom/Component primitives and a modular routing system under `src/modules/**`. Follow these project-specific patterns.

## Architecture
- Entry/build: Vite with Tailwind plugin (`vite.config.js`). Aliases: `@components`, `@modules`, `@shell`.
- Shell: `src/shell/app-shell.js` renders the top-level container and switches between sign-up, onboarding, and the main app (`switch`-based router).
- Main content: `src/shell/main-content.js` wires navigation + the active panel (`switch: routes`, `cache: 'mainBody'`).
- Modules: Each feature lives in `src/modules/<name>/module.js`. Register modules by importing them in `src/modules/imported-modules.js` (order defines nav aggregation).
- Aggregation: `src/modules/modules.js` -> `AddModules(AppModules)` returns `{ routes, links }` consumed by the shell.

## Routing & modules
- Define module routes via `Module.convertRoutes([ { path, component? | import?, title?, preventScroll? } ])`.
- Eager vs lazy:
  - Eager: `{ path: '/x', component: MyPage(), title: 'X' }`
  - Lazy: `{ path: '/x', import: () => import('./components/pages/x/x-page.js'), title: 'X' }`
- Router expects objects like `{ uri, component | import, title?, preventScroll?, persist: true }` (built by `ModuleRoutes.add()`/`load()`; see `src/modules/module/module-routes.js`).
- Example module: `src/modules/home/module.js` exposes `'/'` via lazy import and a single `links` entry using `Icons.home`.

## Navigation
- Desktop/mobile nav under `src/shell/navigation/**`.
- Provide `links` from modules: `{ label, href, icon, mobileOrder?, exact?, options? }`. `AppControl` composes `MainNavigation` + `MobileNavigation` and persists `pinned` state via `Data.setKey()/resume()`.

## State & components (Base Framework)
- Use `Atom`, `Component`, `Jot`, `State`, `Data` from `@base-framework/base`.
- `onState: [ [key, mapper], ... ]` drives reactive UI; `addState()` declares defaults. Example: `src/shell/app-content.js` toggles login vs main and updates `body` class.

## PWA, service worker, push
- Register SW in `src/service.js` (only when protocol ≠ `http`). Scope and URL use `Configs.router.baseUrl`.
- SW code in `public/sw.js` + `public/worker/*`: pre-caches `./` and `./index.html`, caches GET requests, ignores navigation/CORS/api (`Service.isDataRequest` uses `/api/`). Version via `APP_NAME`/`version` constants.
- SW → app messages: `{ update: true }` maps to `State.set('app','update',true)`; handle in UI if needed.
- Push: `src/shell/push/push.js` uses `Configs.push.publicId` (VAPID). Backend endpoints expected at `/api/user/{userId}/push/{subscribe|unsubscribe}`; adjust per TODO comments.
- Install prompt: `src/shell/installation/install.js` debounces with `localStorage('installPrompt')` and opens custom `InstallPrompt`.

## Config & styling
- Global config: `src/configs.js` (base URL, title, short nav toggle, push, API endpoints). Base URL defaults to `/next-app-shell/` (GitHub Pages friendly).
- Styling: Tailwind utility classes in components; global CSS in `src/css/**`.
- Aliases: Import via `@shell/...`, `@modules/...`, `@components/...` (defined in `vite.config.js`).

## Dev workflow
- Scripts (`package.json`):
  - `npm run dev` (Vite dev server)
  - `npm run build` (Vite build + `tsc` emit declarations; JS is type-checked via `checkJs`)
  - `npm run preview` (serve production build)

## Common tasks
- Add a new feature module:
  1) Create `src/modules/<name>/module.js` with `routes = Module.convertRoutes([...])` and `links = [...]`.
  2) Add `import "./<name>/module.js"` to `src/modules/imported-modules.js`.
  3) Implement pages under `src/modules/<name>/components/pages/**` and lazy import them.

Key references: `src/shell/app-shell.js`, `src/shell/main-content.js`, `src/modules/module/module-routes.js`, `src/service.js`, `public/sw.js`, `vite.config.js`, `src/configs.js`.
