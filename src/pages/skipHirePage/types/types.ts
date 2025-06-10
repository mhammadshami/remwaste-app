export interface Skip {
  id: number;
  size: number;
  hire_period_days: number;
  price_before_vat: number;
  vat: number;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
}

export interface FeatureItem {
  id: string;
  condition: boolean;
  icon: React.ReactNode;
  text: string;
  iconColorClass: string;
  ariaLabel: string;
}