import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Label from "../components/Label";

const meta = {
  title: "Text/Label", //경로
  component: Label, //사용 컴포넌트
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    //컴포넌트의 props
    htmlFor: { control: "text", description: "label의 for속성" },
    children: { control: "text", description: "label의 내용" },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LabelStory: Story = {
  args: {
    htmlFor: "username",
    children: "이메일",
  },
};
