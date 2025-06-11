import type { Meta, StoryObj } from '@storybook/react';
import { ModeToggle } from './mode-toggle';
import { ThemeProvider } from './theme-provider'; // Required for ModeToggle to work

const meta: Meta<typeof ModeToggle> = {
  title: 'Components/ModeToggle',
  component: ModeToggle,
  decorators: [
    (Story) => (
      <ThemeProvider defaultTheme="light" storageKey="storybook-theme">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof ModeToggle>;

export const Default: Story = {};

export const DarkModeDefault: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider defaultTheme="dark" storageKey="storybook-theme-dark">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};
