import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "../components/Button";

const meta = {
  title: "Example/Button", //경로
  component: Button, //사용 컴포넌트
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    //컴포넌트의 props
    backgroundColor: { control: "color", description: "배경색" },
    primary: { control: "boolean", description: "프라이머리" },
  },

  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
};
