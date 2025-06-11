# Changelog

All notable changes to the SONNET-4-1 project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Custom primary color configuration: `#ff7d00` (vibrant orange)
- Enhanced button showcase with primary color demonstration
- OKLCH color space implementation for better color consistency
- Primary color variants for both light and dark themes
- **Storybook 9.0.6**: Complete setup for component development and documentation
- **Theme Support in Storybook**: Dark/light mode toggle with @storybook/addon-themes
- **Component Stories**: Created stories for Button, DropdownMenu, and ModeToggle components
- **Tailwind CSS Integration**: Configured Storybook to use project's Tailwind styles
- **Interactive Documentation**: All UI components documented with controls and examples
- **Project README**: Complete project documentation with features, tech stack, and usage instructions
- **Additional Shadcn UI Components**: Card, Input, Dialog, and Label components with comprehensive stories
- **Dashboard Page Example**: Complete dashboard layout showcasing all UI components and design patterns
- **Navigation System**: Simple page navigation between demo and dashboard views
- **Interactive Stories**: Enhanced Storybook documentation with multiple variants for each component
- **Real-world Examples**: Practical component combinations and use cases

### Changed
- Updated CSS variables in `src/index.css` for primary color scheme
- Modified App.tsx to showcase the new primary color prominently
- Enhanced button display with larger primary color demonstration
- Configured sidebar primary colors to match theme
- **Storybook Configuration**: Updated main.ts and preview.ts for optimal React/Vite integration
- **Story Structure**: Organized stories by component type (UI/ and Components/ folders)
- **Component Documentation**: Enhanced with argTypes, tags, and interactive controls
- **README.md**: Replaced default Vite template with comprehensive project documentation
- **App.tsx Navigation**: Added simple state-based navigation between demo and dashboard pages
- **Component Organization**: Structured components with consistent story patterns and documentation
- **Story Coverage**: Comprehensive stories for all UI components including error states and variations

### Fixed
- **Button Color Issues (June 9, 2025)**: Comprehensive fixes for button text and background color inconsistencies
  - Fixed dark mode `--primary-foreground` color (was dark, now light for proper contrast)
  - Added missing `--destructive-foreground` color variable for both light and dark modes
  - Resolved CSS conflicts between global button styles and Shadcn UI components
  - Updated destructive button variant to use `text-destructive-foreground` instead of `text-white`
  - Simplified outline button variant for better theme consistency
  - Removed conflicting global color declarations that were overriding theme system
  - Enhanced global button selector to exclude Shadcn UI buttons: `button:not([data-slot="button"])`
- **Storybook Import Issues (June 9, 2025)**: Fixed import path errors in component stories
  - Corrected relative import paths in `mode-toggle.stories.tsx`
  - Ensured all story files use proper component imports for consistent development experience

### Enhanced
- **UI Testing (June 9, 2025)**: Added comprehensive color testing components
  - Enhanced App.tsx with complete button variant showcase
  - Added Card component examples to test text color contrast
  - Created comprehensive test layout for both light and dark mode validation
  - Development server running on `http://localhost:5174/`
  - Storybook documentation available at `http://localhost:6006/`

### Technical Details
- **Primary Color**: `#ff7d00` converted to OKLCH: `oklch(0.724 0.173 45.899)`
- **Color Space**: Using OKLCH for better perceptual uniformity
- **Theme Support**: Both light and dark mode variants configured
- **Components Affected**: Primary buttons, sidebar elements, and accent colors
- **Storybook Version**: 9.0.6 with React-Vite framework
- **Addons**: @storybook/addon-themes for dark mode support
- **Story Patterns**: `../src/**/*.stories.@(js|jsx|mjs|ts|tsx)`
- **Development Server**: `http://localhost:6006` for Storybook
- **Theme Integration**: Uses project's ThemeProvider for consistent theming
- **New Components**: Card, Input, Dialog, Label with full TypeScript support
- **Dashboard Features**: Stats cards, project listings, quick actions, and modal dialogs
- **Story Examples**: Default, variants, error states, and interactive examples for each component
- **Navigation**: State-based routing using React useState for simple page switching

### Components Documented
- **Button**: All variants (default, destructive, outline, secondary, ghost, link) and sizes
- **DropdownMenu**: Interactive examples with separators and labels
- **ModeToggle**: Theme switching component with provider wrapper
- **Card**: Multiple variants including form cards, notification cards, and stat displays
- **Input**: Text, email, password, file inputs with label integration and error states
- **Dialog**: Modal dialogs for forms, confirmations, and content sharing
- **Label**: Accessible form labels with required field indicators and help text
- **Dashboard Page**: Complete page layout demonstrating component integration

### Deprecated
- N/A

### Removed
- N/A

### Security
- N/A

---

## [0.2.0] - 2025-06-09

### Added
- **Tailwind CSS Integration**: Installed and configured Tailwind CSS using the official Vite plugin
- **@tailwindcss/vite Plugin**: Added the latest Tailwind CSS Vite plugin for seamless integration
- **Utility-First Styling**: Enabled Tailwind's utility-first CSS framework
- **Test Implementation**: Added sample Tailwind classes to verify the setup works correctly

### Changed
- **Vite Configuration**: Updated `vite.config.ts` to include the Tailwind CSS plugin
- **CSS Import**: Modified `src/index.css` to import Tailwind CSS using `@import "tailwindcss"`
- **Component Styling**: Enhanced App.tsx with Tailwind utility classes for visual confirmation

### Technical Details
- **Packages Installed**: `tailwindcss` and `@tailwindcss/vite`
- **Configuration Method**: Used the official Vite plugin approach (recommended method)
- **Import Method**: CSS import in main stylesheet
- **Testing**: Applied classes like `text-3xl`, `font-bold`, `underline`, `text-blue-600`, `bg-blue-500`, etc.

### Documentation Updates
- Updated copilot-instructions.md with Tailwind CSS setup completion
- Marked Tailwind CSS setup as completed in next steps checklist

---

## [0.1.0] - 2025-06-09

### Added
- Created `.github` folder structure for project documentation
- Initialized `copilot-instructions.md` with project guidelines and setup tracking
- Scaffolded Vite React TypeScript project using official Vite documentation
- Set up package.json with scripts for development, build, and preview
- Configured TypeScript with strict type checking
- Integrated ESLint for code quality and consistency
- Created this changelog to track all project modifications

### Technical Details
- **Build Tool**: Vite (latest version)
- **Framework**: React 18 with TypeScript
- **Package Manager**: npm
- **Node.js**: Compatible with 18+ or 20+
- **Development Server**: `http://localhost:5173`
- **Template Used**: `react-ts` from create-vite

### Project Structure Established
- Source code in `src/` directory
- Public assets in `public/` directory
- TypeScript configurations: `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`
- Vite configuration: `vite.config.ts`
- ESLint configuration: `eslint.config.js`
