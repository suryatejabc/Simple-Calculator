import type { Meta, StoryObj } from "@storybook/react";

import { OperatorButton ,OperatorButtonProps } from "../../Components/OperatorButton/OperatorButton";
import React from "react";

const meta: Meta<OperatorButtonProps> = {
  component: OperatorButton,
  title: "Components/OperatorButton",
  render: ({ ...args }) => <OperatorButton {...args}></OperatorButton>,
};
export default meta;

type Story = StoryObj<OperatorButtonProps>;

export const Primary: Story = {
  args: {
    label: "/",
    onClick: (label) => {
      console.log(label);
    },
  },
};
