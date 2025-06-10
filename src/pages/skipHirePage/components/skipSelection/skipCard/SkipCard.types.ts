import type { Skip } from "../../../types/types";

export interface SkipCardProps {
  skip: Skip;
  isSelected: boolean;
  onClick: () => void;
  className?: string;
}