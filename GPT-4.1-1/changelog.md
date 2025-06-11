## [2025-06-09] Vite React + TypeScript Project Scaffolded
- Scaffolded a new React + TypeScript project in the current directory using Vite, following the official documentation: https://vite.dev/guide/
- Ran `npm install` to install all dependencies.
- The project is now ready for further setup (UI libraries, styling, etc.).

## [2025-06-09] Tailwind CSS Installed and Configured
- Installed `tailwindcss` and `@tailwindcss/vite` as per the official documentation: https://tailwindcss.com/docs/installation/using-vite
- Added the Tailwind Vite plugin to `vite.config.ts`.
- Imported Tailwind CSS in `src/index.css`.
- Project is now ready to use Tailwind utility classes in React components.

## [2025-06-09] shadcn/ui Installed and Button Component Added
- Updated `tsconfig.json` and `tsconfig.app.json` to add `baseUrl` and `paths` for aliasing as per https://ui.shadcn.com/docs/installation/vite
- Updated `vite.config.ts` to add path alias for `@` to `src`
- Ran `shadcn init` to initialize shadcn/ui
- Added the Button component using `shadcn add button`
- Updated `App.tsx` to use the new Button component

## [2025-06-09] Set Primary Color to #ff7d00
- Updated `src/index.css` to set `--primary` and `--sidebar-primary` CSS variables to `#ff7d00` and their foregrounds to `#fff`.
- All components using the primary color now reflect the new brand color.

## [2025-06-09] Dark Mode Support Added
- Implemented dark mode using shadcn/ui as per https://ui.shadcn.com/docs/dark-mode/vite
- Added `ThemeProvider` and `useTheme` hook in `src/components/theme-provider.tsx`
- Added `ModeToggle` component in `src/components/mode-toggle.tsx` with dropdown and icons
- Wrapped the app in `ThemeProvider` and added the dark mode toggle to the homepage

## [2025-06-09] Storybook Stories for UI Components
- Added Storybook stories for Button (`src/components/ui/button.stories.ts`), DropdownMenu (`src/components/ui/dropdown-menu.stories.ts`), ModeToggle (`src/components/mode-toggle.stories.ts`), and ThemeProvider (`src/components/theme-provider.stories.ts`).
- Stories demonstrate different variants and usage of each component for UI development and testing.

## [2025-06-09] Fix Button Color and Style Conflicts
- Commented out default button CSS in `src/index.css` to prevent style conflicts with shadcn/ui and Tailwind buttons.
- Removed unsupported CSS at-rules (`@custom-variant`, `@theme`, `@layer`, `@apply`) from `src/index.css` to fix build errors and ensure correct style application.
- Button components now use the correct text and background color as defined by shadcn/ui and Tailwind.

## [2025-06-09] Fix Storybook JSX/TSX Errors
- Updated all Storybook stories to use `@storybook/react-vite` for type imports and function call syntax for rendering components, avoiding JSX and renderer import issues.
- Commented out or removed the `erasableSyntaxOnly` option in `tsconfig.app.json` to allow JSX in stories.
- Storybook should now display all custom UI components without transform errors.
