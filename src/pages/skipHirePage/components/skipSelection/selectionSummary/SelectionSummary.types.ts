import type { Skip } from "../../../types/types";

export interface SelectionSummaryProps {
  selectedSkip: Skip;
  calculateTotalPrice: (price: number, vat: number) => string;
  className?: string;
}