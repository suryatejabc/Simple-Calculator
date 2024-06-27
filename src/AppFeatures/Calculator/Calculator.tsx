import React, { useState } from "react";
import Screen from "../../Components/Screen";
import ACButton from "../../Components/ACButton";
import OperandButton from "../../Components/OperandButton";
import OperatorButton from "../../Components/OperatorButton";

export interface CalculatorProps {}

const Operands = ['1','2','3','4','5','6','7','8','9','0','00']
const Operators = ['+','-','*','/']

export const Calculator: React.FC<CalculatorProps> = () => {
   const [displayValue, setDisplayValue] = useState('|');

   function onButtonClick(label: string) {
     switch (label) {
       case 'AC':
         setDisplayValue('|');
         break;
       case '=':
        try {
          setDisplayValue(eval(displayValue));
        } catch (error) {
          setDisplayValue('Error');
        }
         //We can also use a library called mathjs to calculate the expression
         break;
       default:
         displayValue === '|' ? setDisplayValue(label) : setDisplayValue(displayValue + label);
     }
   }

    return (
      <>
        <div className=" max-w-2xl mx-auto flex flex-col gap-2 border-2 border-gray-500 rounded-2xl p-4">
          {/* Screen to display the Value */}
          <div>
            <Screen displayValue={displayValue} />
          </div>

          {/* AC Button to clear the displayValue State */}
          <div className="flex w-full">
            <div className="flex-grow"></div>
            <div className="w-[20%] items-center justify-end">
              <div className="w-full">
                <ACButton key={"AC"} label="AC" onClick={onButtonClick} />
              </div>
            </div>
          </div>

          {/* Operand and Operator Buttons */}
          <div className="flex flex-row gap-2">
            {/* Left Side Buttons (Operand Buttons) */}
            <div className="w-[70%] grid grid-cols-3 gap-2">
              {Operands.map((operand) => {
                return (
                  <OperandButton key={operand} label={operand} onClick={onButtonClick} />
                );
              })}
              <OperatorButton label={"="} onClick={onButtonClick} />
            </div>

            {/* Right Side Buttons (Operator Buttons) */}
            <div className="w-[30%] grid grid-cols-1 gap-2">
              {Operators.map((operator) => {
                return (
                  <OperatorButton
                    key={operator}
                    label={operator}
                    onClick={onButtonClick}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
}