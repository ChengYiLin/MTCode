import type { Meta, StoryObj } from "@storybook/react";
import { MediaPlaceholder } from "./media-placeholder";

const meta: Meta<typeof MediaPlaceholder> = {
  title: "Blog/MediaPlaceholder",
  component: MediaPlaceholder,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof MediaPlaceholder>;

export const CardThumbnail: Story = {
  args: { iconSize: 42, className: "aspect-[16/9] w-[320px]" },
};

export const HeroLarge: Story = {
  args: { iconSize: 60, className: "h-[360px] w-[760px] rounded-hh-l" },
};

export const WithCaption: Story = {
  args: {
    iconSize: 56,
    className: "h-[240px] w-[480px] overflow-hidden rounded-hh-m",
  },
  render: (args) => (
    <MediaPlaceholder {...args}>
      <span className="absolute bottom-2.5 right-3 rounded-hh-s bg-black/45 px-2 py-0.5 text-xs text-white">
        credit: placeholder
      </span>
    </MediaPlaceholder>
  ),
};
