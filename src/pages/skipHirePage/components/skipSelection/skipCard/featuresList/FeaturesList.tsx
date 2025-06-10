import { memo } from "react";

// hooks
import { useFeatureItems } from "../../../../hooks/useFeatureItems";
import FeatureListItem from "./featureListItem/FeatureListItem";

// types 
import type { FeatureItem} from "../../../../types/types";
import type { FeaturesListProps } from "./FeaturesList.types";

const FeaturesList: React.FC<FeaturesListProps> = memo(
  ({ skip, className }) => {
    const featureItems: FeatureItem[] = useFeatureItems(skip);

    return (
      <ul
        className={`flex flex-col gap-1 mb-4 ${className}`}
        aria-label="Skip features"
      >
        {featureItems.map((item) => (
          <FeatureListItem key={item.id} item={item} />
        ))}
      </ul>
    );
  }
);

FeaturesList.displayName = "FeaturesList";
export default FeaturesList;
