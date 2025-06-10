import React, { memo, useState } from "react";

// components
import SkipCard from "./skipCard/SkipCard";
import SelectionSummary from "./selectionSummary/SelectionSummary";
import HeaderSection from "./headerSection/headerSection";
import LoadingSpinner from "../../../../common/components/ui/loadingSpinner/LoadingSpinner";
import ErrorMessage from "../../../../common/components/ui/errorMessage/ErrorMessage";

// types
import type { Skip } from "../../types/types";

// hooks
import useSkips from "../../hooks/useSkips";
import { calculateTotalPrice } from "../../../../common/utils/priceUtils";

const SkipSelection: React.FC = () => {
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);
  const postcode = "NR32"; // Could be made dynamic
  const area = "Lowestoft"; // Could be made dynamic

  const {
    data: skips,
    isLoading,
    isError,
  } = useSkips(postcode, area);


  if (isLoading) {
    return (
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <LoadingSpinner message="Loading..." />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <ErrorMessage
          message="Failed to load skips data. Please try again later."
          onRetry={() => window.location.reload()}
          className="my-4"
          retryButtonText="Reload Page"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl xl:max-w-7xl mx-auto">
        <HeaderSection />

        {/* Skip Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-11 mb-16">
          {skips?.map((skip) => (
            <SkipCard
              key={skip.id}
              skip={skip}
              isSelected={selectedSkip?.id === skip.id}
              onClick={() => setSelectedSkip(skip)}
            />
          ))}
        </div>

        {selectedSkip && (
          <SelectionSummary
            selectedSkip={selectedSkip}
            calculateTotalPrice={calculateTotalPrice}
          />
        )}
      </div>
    </div>
  );
};

export default memo(SkipSelection);
