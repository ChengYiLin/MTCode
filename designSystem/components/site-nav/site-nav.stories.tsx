import type { Meta, StoryObj } from "@storybook/nextjs";
import { SiteNav } from "./site-nav";

const meta: Meta<typeof SiteNav> = {
  title: "Blog/SiteNav",
  component: SiteNav,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof SiteNav>;

export const HomeActive: Story = {
  parameters: {
    nextjs: { navigation: { pathname: "/" } },
    viewport: { defaultViewport: "desktop" },
  },
  decorators: [
    (Story) => (
      <div className="relative h-screen bg-muted">
        <Story />
      </div>
    ),
  ],
};

export const ArticlesActive: Story = {
  parameters: {
    nextjs: { navigation: { pathname: "/articles" } },
    viewport: { defaultViewport: "desktop" },
  },
  decorators: [
    (Story) => (
      <div className="relative h-screen bg-muted">
        <Story />
      </div>
    ),
  ],
};

export const SlidesActive: Story = {
  parameters: {
    nextjs: { navigation: { pathname: "/slides" } },
    viewport: { defaultViewport: "desktop" },
  },
  decorators: [
    (Story) => (
      <div className="relative h-screen bg-muted">
        <Story />
      </div>
    ),
  ],
};

export const AboutActive: Story = {
  parameters: {
    nextjs: { navigation: { pathname: "/about" } },
    viewport: { defaultViewport: "desktop" },
  },
  decorators: [
    (Story) => (
      <div className="relative h-screen bg-muted">
        <Story />
      </div>
    ),
  ],
};

export const MobileHomeActive: Story = {
  parameters: {
    nextjs: { navigation: { pathname: "/" } },
    viewport: { defaultViewport: "mobile1" },
  },
  decorators: [
    (Story) => (
      <div className="relative h-screen bg-muted">
        <Story />
      </div>
    ),
  ],
};

export const MobileArticlesActive: Story = {
  parameters: {
    nextjs: { navigation: { pathname: "/articles" } },
    viewport: { defaultViewport: "mobile1" },
  },
  decorators: [
    (Story) => (
      <div className="relative h-screen bg-muted">
        <Story />
      </div>
    ),
  ],
};
