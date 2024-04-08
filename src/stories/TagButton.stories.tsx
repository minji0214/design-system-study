import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import TagButton from "../components/TagButton";

const meta = {
  title: "Text/TagButton", //경로
  component: TagButton, //사용 컴포넌트
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    isChecked: {
      control: "boolean",
      description: "버튼 체크 여부",
      defaultValue: false,
    },
    onClick: { action: "clicked", description: "버튼 클릭시 이벤트" },
    children: {
      control: "text",
      description: "TagButton의 내용",
      defaultValue: "",
    },
  },
} satisfies Meta<typeof TagButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {
    isChecked: false,
    onClick: fn(),
    children: "버튼",
  },
};

export const Light: Story = {
  args: {
    isChecked: false,
    theme: "light",
    onClick: fn(),
    children: "버튼",
  },
};

export const Social: Story = {
  args: {
    isDisabled: false,
    theme: "social",
    onClick: fn(),
    children: "버튼",
  },
};
export const Text: Story = {
  args: {
    isDisabled: false,
    theme: "text",
    onClick: fn(),
    children: "버튼",
  },
};
export const Diabled: Story = {
  args: {
    isDisabled: true,
    theme: "social",
    onClick: fn(),
    children: "버튼",
  },
};
