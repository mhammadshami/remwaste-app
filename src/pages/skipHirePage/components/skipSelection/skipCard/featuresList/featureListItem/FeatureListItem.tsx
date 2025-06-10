import { memo } from "react";
import type { FeatureListItemProps } from "./FeatureListItem.types";

const FeatureListItem: React.FC<FeatureListItemProps> = memo(({ item }) => (
  <li 
    className={`
      flex items-center text-sm sm:text-base
      hover:bg-gray-50/50 active:bg-gray-100
      rounded-lg p-2 transition-all duration-200
      ${item.condition ? "" : "opacity-80"}
    `}
    aria-label={item.ariaLabel}
  >
    <div
      className={`
        p-1 rounded-full mr-3
        ${item.iconColorClass} 
        transition-all duration-200
        hover:scale-110 active:scale-95
      `}
      aria-hidden="true"
    >
      {item.icon}
    </div>
    <span 
      className={`
        text-gray-700 transition-colors duration-200
        ${item.condition ? "" : "line-through decoration-1"}
      `}
    >
      {item.text}
    </span>
  </li>
));

FeatureListItem.displayName = "FeatureListItem";
export default FeatureListItem;