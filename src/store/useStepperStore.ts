import { create } from "zustand";

interface StepperStore {
  currentStep: number;
  maxStep: number;
  setMaxStep: (max: number) => void;
  setCurrentStep: (step: number) => void;
  handleBack: () => void;
  handleContinue: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}

export const useStepperStore = create<StepperStore>((set, get) => ({
  currentStep: 2,
  maxStep: 5, 

  setMaxStep: (max) => set({ maxStep: max }),

  setCurrentStep: (step) =>
    set(() => ({
      currentStep: Math.max(0, Math.min(step, get().maxStep)),
    })),

  handleBack: () =>
    set((state) => ({
      currentStep: Math.max(state.currentStep - 1, 0),
    })),

  handleContinue: () =>
    set((state) => ({
      currentStep: Math.min(state.currentStep + 1, state.maxStep),
    })),

  get isFirstStep() {
    return get().currentStep === 0;
  },

  get isLastStep() {
    return get().currentStep === get().maxStep;
  },
}));
