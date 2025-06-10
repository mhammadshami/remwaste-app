import { FaCalendarAlt, FaCreditCard, FaMapMarkerAlt, FaShieldAlt, FaTrash, FaTruck } from "react-icons/fa";
import type { Step } from "../types/types";

export const MAX_STEPPER_STEP = 5;

export const DEFAULT_STEPS: Step[] = [
  { title: "Postcode", icon: FaMapMarkerAlt },
  { title: "Waste Type", icon: FaTrash },
  { title: "Select Skip", icon: FaTruck },
  { title: "Permit Check", icon: FaShieldAlt },
  { title: "Choose Date", icon: FaCalendarAlt },
  { title: "Payment", icon: FaCreditCard },
];