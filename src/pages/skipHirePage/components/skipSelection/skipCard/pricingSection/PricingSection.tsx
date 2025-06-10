import React, { memo, useMemo } from "react";
import clsx from "clsx";
import type { PriceSectionProps } from "./PricingSection.types";
import { formatPriceWithVAT } from "../../../../../../common/utils/priceUtils";

const PriceSection: React.FC<PriceSectionProps> = memo(
  ({ skip, className }) => {
    const totalPrice = useMemo(() => {
      return formatPriceWithVAT(skip.price_before_vat, skip.vat);
    }, [skip.price_before_vat, skip.vat]);

    return (
      <section
        className={clsx(
          "mb-6 text-center",
          "transform transition-all duration-300 hover:scale-[1.01]",
          "focus-within:ring-2 focus-within:ring-primary/50 focus-within:scale-[1.01]",
          "outline-none",
          className
        )}
        aria-label="Pricing information"
        tabIndex={0}
      >
        <span
          className={clsx(
            "block text-sm text-gray-500",
            "transition-colors duration-300 hover:text-gray-700"
          )}
          aria-hidden="true"
        >
          Total Price
        </span>

        <p
          className={clsx(
            "my-1 text-2xl sm:text-[28px] font-bold",
            "text-gray-900 transition-colors duration-300",
            "hover:text-gray-800"
          )}
          aria-live="polite"
        >
          {totalPrice}
        </p>

        <span
          className={clsx(
            "text-sm text-gray-500",
            "transition-colors duration-300 hover:text-gray-700"
          )}
        >
          incl. VAT & delivery
          <span className="sr-only">, {skip.vat}% VAT included</span>
        </span>
      </section>
    );
  }
);

PriceSection.displayName = "PriceSection";
export default PriceSection;
