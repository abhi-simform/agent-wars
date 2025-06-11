import type { Meta, StoryObj } from '@storybook/react-vite';
import { ThemeProvider } from '@/components/theme-provider';

const meta: Meta<typeof ThemeProvider> = {
  title: 'UI/ThemeProvider',
  component: ThemeProvider,
  tags: ['autodocs'],
  argTypes: {
    children: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof ThemeProvider>;

export const Default: Story = {
  args: {
    children: 'ThemeProvider children',
  },
};
