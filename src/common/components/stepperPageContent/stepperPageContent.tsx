import { lazy, memo, Suspense } from "react";
import LoadingSpinner from "../ui/loadingSpinner/LoadingSpinner";
import { useStepperStore } from "../../../store/useStepperStore";

// Lazy load the main page for better performance
const LazySkipHirePage = lazy(
  () => import("../../../pages/skipHirePage/SkipHirePage")
);

const StepperPageContent: React.FC = () => {
  const { currentStep } = useStepperStore();

  return (
    <main>
      {currentStep === 2 && (
        <Suspense
          fallback={
            <div className="flex items-center justify-center min-h-screen">
              <LoadingSpinner message="Loading..." />
            </div>
          }
        >
          <LazySkipHirePage />
        </Suspense>
      )}
    </main>
  );
};

export default memo(StepperPageContent);
