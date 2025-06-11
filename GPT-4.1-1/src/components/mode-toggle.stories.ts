import type { Meta, StoryObj } from '@storybook/react-vite';
import { ModeToggle } from '@/components/mode-toggle';

const meta: Meta<typeof ModeToggle> = {
  title: 'UI/ModeToggle',
  component: ModeToggle,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ModeToggle>;

export const Default: Story = {
  render: () => ModeToggle(),
};
