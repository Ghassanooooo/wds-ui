import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Alert, AlertDescription, AlertTitle } from "./index";

const meta: Meta<typeof Alert> = {
  component: Alert,
  title: "Marbella/Alert",
  argTypes: {},
};
export default meta;

type Story = StoryObj;

export const Primary: Story = (args: any) => (
  <Alert>
    <AlertTitle>Heads up!</AlertTitle>
    <AlertDescription>
      You can add components to your app using the cli.
    </AlertDescription>
  </Alert>
);
Primary.args = {
  primary: true,
  disabled: false,
  text: "Primary",
};
