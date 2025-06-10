import React, { memo, useCallback } from "react";
import { FiCheck } from "react-icons/fi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import clsx from "clsx";

// components
import FeaturesList from "./featuresList/FeaturesList";
import CardHeader from "./cardHeader/CardHeader";
import PricingSection from "./pricingSection/PricingSection";
import Button from "../../../../../common/components/ui/button/Button";

// types
import type { SkipCardProps } from "./SkipCard.types";

const SkipCard: React.FC<SkipCardProps> = memo(({ 
  skip, 
  isSelected, 
  onClick,
  className 
}) => {
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick();
    }
  }, [onClick]);

  const cardClasses = clsx(
    "relative rounded-xl overflow-hidden",
    "border-[0.5px] border-solid cursor-pointer bg-white",
    "shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out",
    "transform hover:scale-[1.01] outline-none",
    "focus-visible:ring-2 focus-visible:ring-secondary",
    {
      "ring-2 ring-secondary scale-[1.01]": isSelected,
      "border-gray-100 hover:border-indigo-100": !isSelected,
    },
    className
  );

  return (
    <article
      role="button"
      tabIndex={0}
      aria-pressed={isSelected}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      className={cardClasses}
    >
      <CardHeader skip={skip} />

      <div className="p-6 group">
        <PricingSection skip={skip} />

        <hr className="border-t border-gray-200 my-6 group-hover:border-gray-300 transition-colors duration-300" />

        <FeaturesList skip={skip} />

        <Button
          variant={isSelected ? "primary" : "secondary"}
          fullWidth
          size="lg"
          aria-label={isSelected ? "Selected skip" : "Select this skip"}
          icon={isSelected ? <FiCheck /> : <HiOutlineArrowNarrowRight />}
          className="mt-4"
        >
          {isSelected ? "Selected" : "Select This Skip"}
        </Button>
      </div>
    </article>
  );
});

SkipCard.displayName = "SkipCard";
export default SkipCard;