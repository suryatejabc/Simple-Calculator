import React from "react";

export interface ScreenProps {
  displayValue: string;
}

export const Screen: React.FC<ScreenProps> = ({ displayValue }) => {
  return (
    <div className="bg-gray-800 text-white text-right p-4 rounded-lg">
      <p className="text-2xl">{displayValue}</p>
    </div>
  );
};

