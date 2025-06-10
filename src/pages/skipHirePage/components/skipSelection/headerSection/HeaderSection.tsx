import { memo } from "react";
import clsx from "clsx";
import type { HeaderSectionProps } from "./HeaderSection.types";

const HeaderSection: React.FC<HeaderSectionProps> = memo(({ 
  className,
  title = "Find Your Perfect Waste Solution",
  subtitle = "Select from our premium range of skips tailored for your project"
}) => {
  return (
    <header 
      className={clsx(
        "text-center mb-12 sm:mb-16 lg:mb-24",
        "px-4 sm:px-6",
        className
      )}
    >
      <h1 
        className={clsx(
          "uppercase text-primary text-2xl sm:text-3xl lg:text-4xl",
          "font-bold mb-2 sm:mb-3",
          "tracking-tight leading-tight",
          "transition-colors duration-300 hover:text-primary-dark"
        )}
      >
        {title}
      </h1>
      <p 
        className={clsx(
          "text-base sm:text-lg lg:text-xl",
          "text-gray-600 max-w-2xl mx-auto",
          "tracking-normal leading-relaxed",
          "transition-colors duration-300 hover:text-gray-700"
        )}
      >
        {subtitle}
      </p>
    </header>
  );
});

HeaderSection.displayName = "HeaderSection";
export default HeaderSection;