// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from "@storybook/react";

import { userEvent, waitFor, within, expect, fn } from "@storybook/test";

import LoginForm from "../components/LoginForm";

const meta: Meta<typeof LoginForm> = {
  title: "Forms/Form",
  parameters: {
    layout: "centered",
  },
  component: LoginForm,
  args: {
    // 👇 Use `fn` to spy on the onSubmit arg
    onSubmit: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

/*
 * See https://storybook.js.org/docs/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */

export const Submitted: Story = {
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    //원라인 작성시 추후 바꿔야될 경우가 많다. 무조건 분리해서 작성할것.
    const emailInput = canvas.getByTestId("email");
    const passwordInput = canvas.getByTestId("password");
    const loginButton = canvas.getByRole("button", { name: "로그인" });
    await step("Enter credentials", async () => {
      await userEvent.type(emailInput, "hi@example.com");
      await userEvent.type(passwordInput, "supersecret");
    });

    await step("Submit form", async () => {
      await userEvent.click(loginButton);
    });

    // 👇 Now we can assert that the onSubmit arg was called
    await waitFor(() => expect(args.onSubmit).toHaveBeenCalled());
  },
};

export const EmptyForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const emailInput = canvas.getByTestId("email");
    await expect(emailInput).toBeInTheDocument();
    const passwordInput = canvas.getByTestId("password");
    await expect(passwordInput).toBeInTheDocument();
    const loginButton = canvas.getByRole("button", { name: "로그인" });
    await expect(loginButton).toBeDisabled();
  },
};
export const FilledForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const emailInput = canvas.getByTestId("email");
    await expect(emailInput).toBeInTheDocument();
    const passwordInput = canvas.getByTestId("password");
    await expect(passwordInput).toBeInTheDocument();
    const loginButton = canvas.getByRole("button", { name: "로그인" });
    await expect(loginButton).toBeInTheDocument();
  },
};
