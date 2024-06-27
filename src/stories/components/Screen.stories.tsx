import type { Meta, StoryObj } from "@storybook/react";

import { Screen, ScreenProps } from "../../Components/Screen/Screen";
import React from "react";

const meta: Meta<ScreenProps> = {
  component: Screen,
  title: "Components/Screen",
  render: ({ ...args }) => <Screen {...args}></Screen>,
};
export default meta;

type Story = StoryObj<ScreenProps>;

export const Primary: Story = {
  args: {
    displayValue: "|",
  },
};
