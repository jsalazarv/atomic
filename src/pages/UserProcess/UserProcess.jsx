import './UserProcess.css';
import { FirstStep } from './components/FirstStep.jsx';
import { useMemo, useState } from 'react';
import { SecondStep } from './components/SecondStep';
import { ThirdStep } from './components/ThirdStep';
import { FourthStep } from './components/FourthStep';
import { FifthStep } from './components/FifthStep';
import { FormStateContext } from '../../contexts/FormStateContext';

export const UserProcess = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const next = () => {
    setCurrentStep(Math.min(currentStep + 1, steps.length - 1));
  };

  const prev = () => {
    setCurrentStep(Math.max(0, currentStep - 1));
  };
  const steps = [
    <FirstStep next={next} />,
    <SecondStep next={next} prev={prev} />,
    <ThirdStep next={next} prev={prev} />,
    <FourthStep next={next} prev={prev} />,
    <FifthStep />,
  ];
  const step = useMemo(() => steps[currentStep], [currentStep]);
  const initialState = {
    name: '',
    phone: '',
  };

  return (
    <FormStateContext initialState={initialState}>
      <div className="hiring-process-container">
        <div className="main-banner bg-[url('./assets/images/home/banner-background.png')]">
          {step}
        </div>
      </div>
    </FormStateContext>
  );
};
