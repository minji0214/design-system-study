import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import CategoryButton from "../components/CategoryButton";

const meta = {
  title: "Text/CategoryButton", //경로
  component: CategoryButton, //사용 컴포넌트
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    iconPath: {
      control: "text",
      description: "아이콘 경로",
      defaultValue: "",
    },
    iconAlt: {
      control: "text",
      description: "아이콘 대체 텍스트",
      defaultValue: "",
    },
    text: {
      control: "text",
      description: "CategoryButton의 내용",
      defaultValue: "",
    },
    onClick: { action: "clicked", description: "버튼 클릭시 이벤트" },
  },
} satisfies Meta<typeof CategoryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {
    iconPath: "/icons/ic-search.svg",
    iconAlt: "",
    text: "카테고리 버튼",
    onClick: fn(),
  },
};
