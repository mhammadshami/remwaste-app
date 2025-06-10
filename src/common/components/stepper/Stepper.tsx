import clsx from "clsx";

// constants
import { DEFAULT_STEPS } from "../../constants/constants";

// types
import type { StepperProps } from "../../types/types";

// hooks
import { useStepperStore } from "../../../store/useStepperStore";

const Stepper = ({ steps = DEFAULT_STEPS, className = "" }: StepperProps) => {
  const { currentStep } = useStepperStore();

  const validatedCurrentStep = Math.max(
    0,
    Math.min(currentStep, steps.length - 1)
  );

  return (
    <div className={clsx("py-4 sm:py-8 px-2 sm:px-6 lg:px-8", className)}>
      <div className="max-w-2xl mx-auto">
        <div className="relative">
          <div className="hidden sm:block absolute top-6 left-[5px] right-[5px] h-[2px] bg-gray-200 z-0" />

          <div className="grid grid-cols-6 gap-2 sm:flex sm:justify-between relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isCompleted = index < validatedCurrentStep;
              const isActive = index === validatedCurrentStep;
              const isUpcoming = index > validatedCurrentStep;

              return (
                <div key={index} className="flex flex-col items-center">
                  {/* Step circle - smaller on mobile */}
                  <div
                    className={clsx(
                      "w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-1 sm:mb-2 border-2 relative",
                      {
                        "bg-secondary border-secondary text-white": isActive,
                        "bg-white border-secondary text-secondary": isCompleted,
                        "bg-white border-gray-300 text-gray-400": isUpcoming,
                      }
                    )}
                  >
                    <Icon className="w-3 h-3 sm:w-5 sm:h-5" />
                    {isCompleted && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-secondary rounded-full flex items-center justify-center text-white text-[8px] sm:text-[10px]">
                        ✓
                      </div>
                    )}
                  </div>

                  {/* Step title - smaller and truncated on mobile */}
                  <span
                    className={clsx(
                      "text-[10px] sm:text-xs font-medium truncate max-w-full px-1 text-center",
                      {
                        "text-secondary font-semibold": isActive || isCompleted,
                        "text-gray-500": isUpcoming,
                      }
                    )}
                    title={step.title} 
                  >
                    {step.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
