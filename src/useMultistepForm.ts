import { ReactElement, useState } from "react";

export function useMultistepForm(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function next() {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) {
        console.log(i, 'i', steps)
        return i;
      } else {
        return i + 1;
      }
    });
  }

  function back() {
    setCurrentStepIndex((i) => {
      if (i <= 0) {
        return i;
      } else {
        return i - 1;
      }
    });
  }

  function goTo(index: number) {
    setCurrentStepIndex(index);
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    firstStep: currentStepIndex === 0,
    lastStep: currentStepIndex === steps.length -1,
    goTo,
    next,
    back,
  };
}
