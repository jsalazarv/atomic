import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from 'react';

const StepperContext = createContext({});

export const StepperProvider = ({ children, step = 0 }) => {
  const ref = useRef(null);
  const [currentStepIndex, setCurrentStepIndex] = useState(step);

  const canGoBack = async () => {
    if (!ref.current?.beforePrev) {
      return true;
    }

    try {
      return await ref.current.beforePrev();
    } catch (e) {
      return false;
    }
  };
  const canGoNext = async () => {
    if (!ref.current?.beforeNext) {
      return true;
    }

    try {
      return await ref.current.beforeNext();
    } catch (e) {
      return false;
    }
  };

  const canGoTo = async (index) => {
    try {
      if (
        index < currentStepIndex &&
        children[index] &&
        ref.current?.beforePrev
      ) {
        return await ref.current.beforePrev();
      }

      if (
        index > currentStepIndex &&
        children[index] &&
        ref.current?.beforeNext
      ) {
        return await ref.current.beforeNext();
      }
    } catch (e) {
      return false;
    }
  };

  const next = async () => {
    if (await canGoNext()) {
      setCurrentStepIndex(Math.min(currentStepIndex + 1, children.length - 1));
    }
  };

  const prev = useCallback(async () => {
    if (await canGoBack()) {
      setCurrentStepIndex(Math.max(0, currentStepIndex - 1));
    }
  }, [setCurrentStepIndex, currentStepIndex]);

  return (
    <StepperContext.Provider
      value={{
        next,
        prev,
        current: currentStepIndex,
        ref,
      }}>
      {children[currentStepIndex]}
    </StepperContext.Provider>
  );
};

export const useStepperContext = () => useContext(StepperContext);
