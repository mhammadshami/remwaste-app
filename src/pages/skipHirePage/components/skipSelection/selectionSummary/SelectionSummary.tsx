import React from "react";
import { FiAlertCircle, FiArrowRight, FiChevronLeft } from "react-icons/fi";
import clsx from "clsx";
import type { SelectionSummaryProps } from "./SelectionSummary.types";
import { useStepperStore } from "../../../../../store/useStepperStore";

const SelectionSummary: React.FC<SelectionSummaryProps> = ({
  selectedSkip,
  className,
}) => {
  const totalPrice = (
    selectedSkip.price_before_vat *
    (1 + selectedSkip.vat / 100)
  ).toFixed(2);

  const { handleContinue, handleBack } = useStepperStore();

  return (
    <div
      className={clsx(
        "bg-white rounded-lg border border-gray-200",
        "shadow-sm hover:shadow-md transition-shadow duration-300",
        className
      )}
    >
      {/* Disclaimer Banner */}
      <div className="bg-gray-50 p-3 text-xs text-gray-500 border-b border-gray-200">
        <FiAlertCircle className="inline mr-1" />
        Imagery and information shown throughout this website may not reflect
        the exact shape or size specification, colours may vary, options and/or
        accessories may be featured at additional cost.
      </div>

      {/* Main Content */}
      <div className="p-5">
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={handleBack}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Go back"
          >
            <FiChevronLeft className="mr-1" />
            Back
          </button>

          <div className="text-right">
            <p className="text-sm text-gray-500">14 day hire</p>
            <p className="text-xl font-bold text-gray-900">
              {selectedSkip.size} Yard Skip £{totalPrice}
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-gray-200">
          <div className="text-sm text-gray-500">
            Price includes VAT and delivery
          </div>

          <button
            onClick={handleContinue}
            className={clsx(
              "bg-primary text-white px-5 py-2 rounded-md",
              "flex items-center justify-center",
              "hover:bg-primary-dark transition-colors",
              "focus:outline-none focus:ring-2 focus:ring-primary/50",
              "disabled:opacity-50 disabled:cursor-not-allowed"
            )}
            aria-label="Continue to checkout"
          >
            Continue
            <FiArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectionSummary;
