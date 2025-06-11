import type { Meta, StoryObj } from '@storybook/react-vite';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

const meta: Meta<typeof DropdownMenu> = {
  title: 'UI/DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Basic: Story = {
  render: () => DropdownMenu({
    children: [
      DropdownMenuTrigger({ children: Button({ children: 'Open Menu' }) }),
      DropdownMenuContent({
        children: [
          DropdownMenuItem({ children: 'Item 1' }),
          DropdownMenuItem({ children: 'Item 2' }),
          DropdownMenuItem({ children: 'Item 3' })
        ]
      })
    ]
  }),
};
