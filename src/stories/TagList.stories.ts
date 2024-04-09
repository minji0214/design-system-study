import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import TagList from "../components/TagList";

const meta = {
  title: "Text/TagList", //경로
  component: TagList, //사용 컴포넌트
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    tagList: {
      control: "array",
      description: "태그 리스트",
      defaultValue: ["태그1", "태그2", "태그3"],
    },
    onTagClick: {
      action: "clicked",
      description: "태그 클릭시 이벤트",
    },
  },
} satisfies Meta<typeof TagList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {
    tagList: ["태그1", "태그2", "태그3"],
    onTagClick: fn(),
  },
};
