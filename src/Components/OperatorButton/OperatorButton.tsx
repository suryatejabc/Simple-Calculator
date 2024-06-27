import React from "react";
import { Button } from "@headlessui/react";

export interface OperatorButtonProps {
  label: string;
  onClick: (buttonLabel: string) => void;
}
export const OperatorButton: React.FC<OperatorButtonProps> = ({
  label,
  onClick,
}) => {
  return (
    <Button className="rounded w-full bg-green-600 py-2 px-4 text-sm text-white data-[hover]:bg-opacity-80"
    onClick={() => onClick(label)}>
      {label}
    </Button>
  );
};
