import type { Meta, StoryObj } from "@storybook/react";
import { SiteFooter } from "./site-footer";

const meta: Meta<typeof SiteFooter> = {
  title: "Blog/SiteFooter",
  component: SiteFooter,
  parameters: { layout: "fullscreen" },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-hh-surface-soft p-6">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SiteFooter>;

export const Default: Story = {};
