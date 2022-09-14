import './UserProcess.css';
import { FirstStep } from './components/FirstStep.jsx';
import { useMemo, useState } from 'react';
import { SecondStep } from './components/SecondStep';
import { ThirdStep } from './components/ThirdStep';
import { FourthStep } from './components/FourthStep';
import { FifthStep } from './components/FifthStep';
import { FormStateContext } from '../../contexts/FormStateContext';
import { ProgressBar } from './components/ProgressBar';
import step1Img from '../../assets/images/hiring-process/step-one.png';
import step2Img from '../../assets/images/hiring-process/step-two.png';
import step3Img from '../../assets/images/hiring-process/step-two.png';
import step4Img from '../../assets/images/hiring-process/fourth-step.png';
import step5Img from '../../assets/images/hiring-process/fifth-step.png';

const stepImages = [step1Img, step2Img, step3Img, step4Img, step5Img];

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
  const progressSteps = steps.length - 1;
  const isCompleted = currentStep >= progressSteps;

  return (
    <FormStateContext initialState={initialState}>
      <div className="hiring-process-container">
        <div className="main-banner bg-[url('./assets/images/home/banner-background.png')]">
          <div className="sm:flex-row lg:flex">
            <div className="lg:w-3/4">
              <ProgressBar
                steps={progressSteps}
                current={currentStep}
                hidden={isCompleted}
              />
              {step}
            </div>
            <div className="lg:w-1/2">
              <div className="hiring-process-content__image">
                <img
                  className="float-animation"
                  src={stepImages[currentStep]}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </FormStateContext>
  );
};
