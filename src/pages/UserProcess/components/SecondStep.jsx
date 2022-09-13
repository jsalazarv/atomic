import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../../components/Button/Button.jsx';
import stepTwoImg from '../../../assets/images/hiring-process/step-two.png';

export const SecondStep = ({ next, prev }) => {
  const nextHandler = () => {
    next && next();
  };

  const prevHandler = () => {
    prev && prev();
  };
  return (
    <div className="flex flex-col lg:flex-row h-full items-center">
      <div className="hiring-process-content__form">
        <div className="title-container">
          <div className="dot-counter">2</div>
          <h1 className="subtitle text-white">
            TE QUEREMOS <span className="text-primary">&nbsp;CONOCER</span>
          </h1>
        </div>
        <p className="text-white font-semibold">
          Necesitamos validar tu número para continuar <br />
          Ingresa tu número a 10 dígitos y te enviaremos un código SMS
        </p>
        <form className="form-step">
          <div className="input-container">
            <div className="relative md:w-full xl:w-2/3">
              <label className="text-white font-medium">
                Número de Celular
              </label>
              <input type="text" className="input" />
              <div className="input__icon">
                <FontAwesomeIcon icon={faLock} />
              </div>
            </div>
          </div>
          <div className="submit-container">
            <Button
              style="primary"
              className="w-full lg:w-1/4"
              type="submit"
              onClick={nextHandler}>
              CONTINUAR
            </Button>
          </div>
        </form>
      </div>
      <div className="hiring-process-content__image">
        <img className="float-animation" src={stepTwoImg} alt="" />
      </div>
    </div>
  );
};
