import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import ErrorMessage from "../components/ErrorMessage";

const meta = {
  title: "Text/ErrorMessage", //경로
  component: ErrorMessage, //사용 컴포넌트
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    //컴포넌트의 props
    children: { control: "text", description: "ErrorMessage의 내용" },
  },
} satisfies Meta<typeof ErrorMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LabelStory: Story = {
  args: {
    children: "에러 메시지는 여기로",
  },
};
