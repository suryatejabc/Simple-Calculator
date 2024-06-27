import React from "react";
import { Button } from "@headlessui/react";

export interface ACButtonProps {
  label: string;
  onClick: (buttonLabel: string) => void;
}

export const ACButton: React.FC<ACButtonProps> = ({ label, onClick }) => {
  return (
    <Button
      onClick={() => onClick(label)}
      className="w-full rounded bg-red-600 py-2 px-4 text-sm text-white hover:bg-opacity-80"
    >
      {label}
    </Button>
  );
};
