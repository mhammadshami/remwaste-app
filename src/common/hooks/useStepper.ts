import { useState } from "react";

export const useStepper = (maxStep: number, initialStep = 0) => {
    const [currentStep, setCurrentStep] = useState(initialStep);

    const handleBack = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 0));
    };

    const handleContinue = () => {
        setCurrentStep((prev) => Math.min(prev + 1, maxStep));
    };

    const isFirstStep = currentStep === 0;
    const isLastStep = currentStep === maxStep;

    return {
        currentStep,
        handleBack,
        handleContinue,
        isFirstStep,
        isLastStep,
        setCurrentStep,
    };
};
