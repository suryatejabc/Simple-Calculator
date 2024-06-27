import React from "react";
import { Button } from "@headlessui/react";

export interface OperandButtonProps {
    label : string
    onClick : (buttonLabel: string) => void
}
export const OperandButton: React.FC<OperandButtonProps> = ({ label, onClick }) => {

  return (
    <Button className="rounded w-full bg-gray-600 py-2 px-4 text-sm text-white data-[hover]:bg-opacity-80" onClick={() => onClick(label)}>
      {label}
    </Button>
  );
};
