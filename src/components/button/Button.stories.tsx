import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./index";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Marbella/Button",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = (args: any) => <Button>Click me</Button>;
Primary.args = {
  primary: true,
  disabled: false,
  text: "Primary",
};
