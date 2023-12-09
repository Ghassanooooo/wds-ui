import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./index";

const meta: Meta<typeof Skeleton> = {
  component: Skeleton,
  title: "Marbella/Skeleton",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Primary: Story = (args: any) => (
  <Skeleton className="h-12 w-12 rounded-full" />
);

Primary.args = {
  primary: true,
  disabled: false,
  text: "Primary",
};
