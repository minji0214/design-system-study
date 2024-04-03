import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import IconButton from "../components/IconButton";

const meta = {
  title: "Text/IconButton", //경로
  component: IconButton, //사용 컴포넌트
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    alt: { control: "text", description: "이미지의 alt속성" },
    iconPath: { control: "text", description: "이미지의 src" },
    onClick: { control: "function", description: "버튼 클릭시 이벤트" },
  },

  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    alt: "icon",
    iconPath: "/icons/ic-close.svg",
  },
};
