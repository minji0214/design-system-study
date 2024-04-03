import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import DefaultTextField from "../components/DefaultTextField";

const meta = {
  title: "Text/DefaultTextField", //경로
  component: DefaultTextField, //사용 컴포넌트
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    //컴포넌트의 props
    children: {
      control: "text",
      description: "DefaultTextField의 내용",
      defaultValue: "",
    },
    placeholder: {
      control: "text",
      description: "DefaultTextField의 placeholder",
      defaultValue: "텍스트를 입력해주세요",
    },
    onClick: { action: "clicked", description: "버튼 클릭시 이벤트" },
    onChange: {
      action: "changed",
      description: "DefaultTextField의 내용이 변경될 때 이벤트",
    },
    value: {
      control: "text",
      description: "DefaultTextField의 value",
      defaultValue: "",
    },
    iconPath: { control: "text", description: "이미지의 src" },
    alt: { control: "text", description: "이미지의 alt속성" },
    isError: {
      control: "boolean",
      description: "에러 메시지가 있는지 여부",
      defaultValue: false,
    },
  },
} satisfies Meta<typeof DefaultTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultTextFieldStory: Story = {
  args: {
    children: "에러 메시지",
    placeholder: "이메일을 입력해주세요",
    onClick: fn(),
    onChange: fn(),
    value: "",
    iconPath: "/icons/ic-cancel.svg",
    alt: "delete-icon",
    isError: false,
    id: "email",
  },
};
