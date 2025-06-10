import { FiCalendar, FiCheck, FiX } from "react-icons/fi";
import type { Skip, FeatureItem } from "../types/types";

export const useFeatureItems = (skip: Skip): FeatureItem[] => {
  const yes = <FiCheck />;
  const no = <FiX />;

  return [
    {
      id: "road-placement",
      condition: skip.allowed_on_road,
      icon: skip.allowed_on_road ? yes : no,
      text: skip.allowed_on_road ? "Road placement allowed" : "No road placement",
      iconColorClass: skip.allowed_on_road ? "text-green-600" : "text-red-600",
      ariaLabel: skip.allowed_on_road ? "Road placement allowed" : "Road placement not allowed",
    },
    {
      id: "heavy-waste",
      condition: skip.allows_heavy_waste,
      icon: skip.allows_heavy_waste ? yes : no,
      text: skip.allows_heavy_waste ? "Heavy waste accepted" : "No heavy waste",
      iconColorClass: skip.allows_heavy_waste ? "text-green-600" : "text-red-600",
      ariaLabel: skip.allows_heavy_waste ? "Heavy waste accepted" : "Heavy waste not accepted",
    },
    {
      id: "hire-period",
      condition: true,
      icon: <FiCalendar />,
      text: `${skip.hire_period_days} day${skip.hire_period_days !== 1 ? "s" : ""} hire period`,
      iconColorClass: "text-gray-700",
      ariaLabel: `${skip.hire_period_days} day hire period`,
    },
  ];
};
