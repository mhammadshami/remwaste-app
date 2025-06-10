import { lazy } from "react";
import ErrorBoundary from "./common/components/errorBoundary/ErrorBoundary";
import ErrorFallbackComponent from "./common/components/ui/errorFallbackComponent/ErrorFallbackComponent";

const Stepper = lazy(() => import("./common/components/stepper/Stepper"));
const StepperPageContent = lazy(
  () => import("./common/components/stepperPageContent/stepperPageContent")
);

const App = () => {
  return (
    <ErrorBoundary fallback={<ErrorFallbackComponent />}>
      <Stepper />
      <StepperPageContent />
    </ErrorBoundary>
  );
};

export default App;
