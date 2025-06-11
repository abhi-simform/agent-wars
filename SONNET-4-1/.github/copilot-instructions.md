# Copilot Instructions

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

This is a React TypeScript application.

## Project Context
- **Framework**: React with TypeScript
- **Build Tool**: Vite
- **UI Components**: Shadcn UI for modern design
- **Styling**: Tailwind CSS for utility-first styling
- **Comonent Testing**: Storybook for UI component development

## Code Style Guidelines
- Use TypeScript with strict type checking
- Follow React best practices with functional components and hooks
- Keep components modular and reusable
- If given a link to a library or documentation, read it and use it in the code, strictly follow the documentation.
- All the libraries and dependencies should be of the latest version unless specified otherwise.

## Key features
- Minimalist UI with Shadcn components
- Responsive design

## Documentation
- Keep a changelog.md file updated with description of changes done by AI after each command. If the file does not exist, create it.
- Use comments to explain complex logic or important decisions
- Document public APIs and components in a README.md file
- Use Storybook for component documentation and testing

## Project Setup Status

### Completed Setup Steps
1. ✅ **Project Scaffolding** (June 9, 2025)
   - Created Vite React TypeScript project using `npm create vite@latest . -- --template react-ts`
   - Package name: `sonnet-4-1`
   - Successfully installed dependencies with `npm install`

2. ✅ **Tailwind CSS Integration** (June 9, 2025)
   - Installed `tailwindcss` and `@tailwindcss/vite` following official documentation
   - Configured Vite plugin in `vite.config.ts`
   - Added Tailwind import to `src/index.css`
   - Tested with utility classes to verify integration

3. ✅ **Shadcn UI Setup** (June 9, 2025)
   - Installed `@types/node` for path resolution
   - Configured path mapping in `tsconfig.json` and `tsconfig.app.json`
   - Updated `vite.config.ts` with path aliases
   - Initialized Shadcn UI with `npx shadcn@latest init`
   - Added Button component with `npx shadcn@latest add button`
   - Created components.json configuration file
   - Set up utils.ts library for styling utilities

4. ✅ **Custom Primary Color** (June 9, 2025)
   - Set primary color to `#ff7d00` (vibrant orange)
   - Updated CSS variables in `src/index.css` using OKLCH color space
   - Configured both light and dark mode color variants
   - Applied color to primary buttons and sidebar components

5. ✅ **Dark Mode Implementation** (June 9, 2025)
   - Added dropdown-menu component via `npx shadcn@latest add dropdown-menu`
   - Created `theme-provider.tsx` with React context for theme management
   - Created `mode-toggle.tsx` with dropdown for Light/Dark/System options
   - Wrapped App.tsx with ThemeProvider and added toggle to UI

6. ✅ **Storybook Setup** (June 9, 2025)
   - Installed Storybook 9.0.6 with React-Vite framework
   - Configured dark mode support with @storybook/addon-themes
   - Created stories for Button, DropdownMenu, and ModeToggle components
   - Integrated Tailwind CSS styles in Storybook
   - Set up interactive component documentation

### Current Project Structure
```
├── .github/
│   └── copilot-instructions.md
├── .storybook/
│   ├── main.ts
│   └── preview.ts
├── .gitignore
├── README.md
├── changelog.md
├── components.json
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── public/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── button.stories.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   └── dropdown-menu.stories.tsx
│   │   ├── theme-provider.tsx
│   │   ├── mode-toggle.tsx
│   │   └── mode-toggle.stories.tsx
│   ├── lib/
│   │   └── utils.ts
│   └── stories/ (default Storybook examples)
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run storybook` - Start Storybook development server
- `npm run build-storybook` - Build Storybook for production

### Next Steps
- [x] Set up Tailwind CSS
- [x] Install and configure Shadcn UI
- [x] Set up Storybook for component development
- [x] Update README.md with project-specific information
- [x] Add more Shadcn UI components (Card, Input, Dialog, etc.)
- [x] Create example pages/layouts showcasing the design system
- [ ] Add form validation with React Hook Form
- [ ] Implement routing with React Router
- [ ] Add more advanced components (Table, Tabs, Accordion, etc.)
- [ ] Create reusable layout components
- [ ] Add unit tests with Vitest
- [ ] Set up CI/CD pipeline
