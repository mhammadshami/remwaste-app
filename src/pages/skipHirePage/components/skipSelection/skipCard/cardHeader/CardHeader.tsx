import React from "react";
import { FiTruck } from "react-icons/fi";
import clsx from "clsx";
import type { CardHeaderProps } from "./CardHeader.types";

const CardHeader: React.FC<CardHeaderProps> = ({ skip, className }) => {
  return (
    <header
      className={clsx(
        "p-6 bg-gradient-to-r from-[#eef5ff] to-[#e6f0ff]",
        "hover:from-[#e6f0ff] hover:to-[#d9e9ff]",
        "transition-all duration-300 ease-in-out",
        className
      )}
      aria-label={`${skip.size} yard skip header`}
    >
      <div className="flex justify-between items-start gap-4">
        <h2 className="text-xl font-bold tracking-tight text-gray-800 hover:text-gray-900 transition-colors duration-300">
          {skip.size} Yard Skip
        </h2>

        <span
          aria-label={`Size: ${skip.size} yards`}
          className={clsx(
            "bg-primary text-white text-sm font-bold px-3 py-1 rounded-full",
            "shadow-sm hover:shadow-md transform hover:scale-105",
            "transition-all duration-300 ease-in-out",
            "min-w-[3.5rem] text-center"
          )}
        >
          {skip.size} YD
        </span>
      </div>

      <div className="mt-2 flex items-center" aria-label="Delivery information">
        <div className="flex items-center">
          <FiTruck
            className={clsx(
              "mr-2 text-[#0a2463]/70 hover:text-[#0a2463]",
              "transition-all duration-300 ease-in-out",
              "transform hover:scale-110"
            )}
            aria-hidden="true"
          />
          <span className="uppercase text-sm text-[#0a2463]/70 hover:text-[#0a2463] transition-colors duration-300">
            Next day delivery available
          </span>
        </div>
      </div>
    </header>
  );
};

export default React.memo(CardHeader);
