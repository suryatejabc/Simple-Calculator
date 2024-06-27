import type { Meta, StoryObj } from "@storybook/react";

import { OperandButton, OperandButtonProps } from "../../Components/OperandButton/OperandButton";
import React from "react";

const meta: Meta<OperandButtonProps> = {
  component: OperandButton,
  title: "Components/OperandButton",
  render: ({ ...args }) => <OperandButton {...args}></OperandButton>,
};
export default meta;

type Story = StoryObj<OperandButtonProps>;

export const Primary: Story = {
  args: {
    label: "1",
    onClick: (label) => {
      console.log(label);
    },
  },
};
