import type { Meta, StoryObj } from "@storybook/react";

import { Calculator, CalculatorProps } from "../../AppFeatures/Calculator/Calculator";
import React from "react";

const meta: Meta<CalculatorProps> = {
  component: Calculator,
  title: "AppFeatures/Calculator",
  render: ({ ...args }) => <Calculator {...args}></Calculator>,
};
export default meta;

type Story = StoryObj<CalculatorProps>;

export const Primary: Story = {
  
};
