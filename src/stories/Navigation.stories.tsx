import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import NavigationBar from "../components/NavigationBar";

const meta = {
  title: "Text/NavigationBar", //경로
  component: NavigationBar, //사용 컴포넌트
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "450px" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    //컴포넌트의 props
    onBackButtonClick: {
      action: "back button clicked",
      description: "뒤로가기 버튼 클릭시 이벤트",
    },
    onCloseButtonClick: {
      action: "close button clicked",
      description: "닫기 버튼 클릭시 이벤트",
    },
    showBackButton: {
      control: "boolean",
      description: "뒤로가기 버튼 보이기 여부",
      defaultValue: true,
    },
    showCloseButton: {
      control: "boolean",
      description: "닫기 버튼 보이기 여부",
      defaultValue: true,
    },
    showTitle: {
      control: "boolean",
      description: "타이틀 보이기 여부",
      defaultValue: true,
    },
    title: {
      control: "text",
      description: "페이지 타이틀",
      defaultValue: "타이틀",
    },
  },
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavigationBarStory: Story = {
  args: {
    onBackButtonClick: fn(),
    onCloseButtonClick: fn(),
    showBackButton: true,
    showCloseButton: true,
    showTitle: true,
    title: "페이지 타이틀",
    isDark: false,
  },
};
