# SONNET-4-1

A modern React TypeScript application built with Vite, featuring Shadcn UI components, Tailwind CSS styling, and comprehensive Storybook documentation.

## 🚀 Features

- **React 19** with TypeScript for type-safe development
- **Vite** for lightning-fast development and building
- **Tailwind CSS** for utility-first styling
- **Shadcn UI** for beautiful, accessible components
- **Dark Mode** with system preference detection
- **Storybook** for component development and documentation
- **Custom Primary Color** - Vibrant orange (#ff7d00)

## 🛠️ Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Component Documentation**: Storybook 9.0.6
- **Code Quality**: ESLint

## 🎨 Design System

- **Primary Color**: `#ff7d00` (vibrant orange)
- **Theme Support**: Light/Dark/System modes
- **Typography**: Modern, clean font stack
- **Components**: Fully accessible Shadcn UI components

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run storybook` - Start Storybook development server
- `npm run build-storybook` - Build Storybook for production

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **View Storybook**:
   ```bash
   npm run storybook
   ```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Shadcn UI components
│   │   ├── button.tsx
│   │   └── dropdown-menu.tsx
│   ├── theme-provider.tsx
│   └── mode-toggle.tsx
├── lib/                # Utility functions
│   └── utils.ts
├── stories/            # Default Storybook stories
└── App.tsx            # Main application component
```

## 🎨 Component Documentation

All UI components are documented in Storybook with interactive examples and dark mode support. Access Storybook at `http://localhost:6006` when running locally.

## 🌙 Dark Mode

The application supports three theme modes:
- **Light**: Traditional light theme
- **Dark**: Dark theme for low-light environments  
- **System**: Automatically matches your system preference

Theme selection is persisted in localStorage and can be toggled using the mode toggle component in the top-right corner.
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
