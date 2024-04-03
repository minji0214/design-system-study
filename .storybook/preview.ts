import type { Preview } from "@storybook/react";
import "../src/index.css";
import "@fontsource/noto-sans-kr/400.css";
import "@fontsource/noto-sans-kr/700.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
