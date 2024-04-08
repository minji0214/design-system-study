import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import PrimaryButton from "../components/PrimaryButton";

const meta = {
  title: "Text/PrimaryButton", //경로
  component: PrimaryButton, //사용 컴포넌트
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    isDisabled: {
      control: "boolean",
      description: "버튼 비활성화 여부",
      defaultValue: false,
    },
    theme: {
      control: {
        type: "select",
        options: ["dark", "light", "social", "text"],
      },
      description: "버튼 테마",
      defaultValue: "dark",
    },
    onClick: { action: "clicked", description: "버튼 클릭시 이벤트" },
    children: {
      control: "text",
      description: "PrimaryButton의 내용",
      defaultValue: "",
    },
  },
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {
    isDisabled: false,
    theme: "dark",
    onClick: fn(),
    children: "버튼",
  },
};

export const Light: Story = {
  args: {
    isDisabled: false,
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
