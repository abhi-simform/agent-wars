import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from './theme-provider';
import { Button } from '@/components/ui/button'; // Assuming you want to show something within the ThemeProvider

const meta: Meta<typeof ThemeProvider> = {
  title: 'Components/ThemeProvider',
  component: ThemeProvider,
  argTypes: {
    defaultTheme: {
      control: 'select',
      options: ['light', 'dark', 'system'],
    },
  },
  args: {
    defaultTheme: 'light',
    storageKey: 'storybook-theme-provider',
  },
  decorators: [
    (Story, { args }) => (
      <ThemeProvider defaultTheme={args.defaultTheme} storageKey={args.storageKey}>
        <div style={{ padding: '20px', border: '1p solid #ccc', borderRadius: '4px' }}>
          <p>This content is inside a ThemeProvider.</p>
          <p>Current theme: {args.defaultTheme}</p>
          <Button>Sample Button</Button>
        </div>
      </ThemeProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ThemeProvider>;

export const LightMode: Story = {
  args: {
    defaultTheme: 'light',
  },
};

export const DarkMode: Story = {
  args: {
    defaultTheme: 'dark',
  },
};

export const SystemMode: Story = {
  args: {
    defaultTheme: 'system',
  },
};
