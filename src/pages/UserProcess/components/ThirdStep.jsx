import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../../components/Button/Button.jsx';
import stepTwoImg from '../../../assets/images/hiring-process/step-two.png';

export const ThirdStep = ({ next, prev }) => {
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
          <div className="dot-counter">3</div>
          <h1 className="subtitle text-white">
            CÓDIGO DE <span className="text-primary">&nbsp;VERIFICACIÓN</span>
          </h1>
        </div>
        <p className="text-white font-semibold">
          Te enviamos un SMS al número: <br />
          +52 55 1850 9196
        </p>
        <p className="text-white font-semibold mt-6">
          Ingresa el código de verificación:
        </p>
        <form className="form-step">
          <div className="input-container">
            <div className="relative md:w-full xl:w-2/3">
              <label className="text-white font-medium">
                Código de verificación
              </label>
              <input type="text" className="input" />
              <div className="input__icon">
                <FontAwesomeIcon icon={faLock} />
              </div>
            </div>
          </div>
          <p className="text-white font-semibold mt-6">
            ¿No recibiste el código?{' '}
            <span>
              &nbsp;
              <Button
                style="link"
                className="hover:text-primary p-2 font-extrabold">
                Reenviar código
              </Button>
            </span>
          </p>
          <div className="submit-container">
            <Button
              style="primary"
              className="w-full lg:w-1/4"
              type="submit"
              onClick={nextHandler}>
              VALIDAR CÓDIGO
            </Button>
          </div>
        </form>
      </div>
      <div className="hiring-process-content__image">
        <img className="rotate-animation" src={stepTwoImg} alt="" />
      </div>
    </div>
  );
};
