import type { Meta, StoryObj } from "@storybook/react";

import { ACButton, ACButtonProps } from "../../Components/ACButton/ACButton";
import React from "react";

const meta: Meta<ACButtonProps> = {
  component: ACButton,
  title: "Components/ACButton",
  render: ({ ...args }) => <ACButton {...args}></ACButton>,
};
export default meta;

type Story = StoryObj<ACButtonProps>;

export const Primary: Story = {
  args: {
    label: "AC",
    onClick: (label) => {
      console.log(label);
    },
  },
};
