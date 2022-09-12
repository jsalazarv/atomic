import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import stepOneImg from '../../../assets/images/hiring-process/step-one.png';
import { Button } from '../../../components/Button/Button';

export const FirstStep = ({ next }) => {
  const submitHandler = () => {
    next && next();
  };

  return (
    <div className="flex flex-col lg:flex-row h-full items-center">
      <div className="hiring-process-content__form">
        <div className="title-container">
          <div className="dot-counter">1</div>
          <h1 className="subtitle text-white">
            TE QUEREMOS <span className="text-primary">CONOCER</span>
          </h1>
        </div>
        <p className="text-white font-semibold">
          Queremos saber que eres tú, por favor ingresa los siguientes datos:
        </p>
        <form className="form-step">
          <div className="input-container">
            <div className="relative md:w-full xl:w-2/3">
              <label className="text-white font-medium">Nombre(s)</label>
              <input type="text" className="input" />
              <div className="input__icon">
                <FontAwesomeIcon icon={faLock} />
              </div>
            </div>
          </div>
          <div className="input-container">
            <div className="relative md:w-full xl:w-2/3">
              <label className="text-white font-medium">Apellidos</label>
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
              onClick={submitHandler}>
              ENVIAR
            </Button>
          </div>
        </form>
      </div>
      <div className="hiring-process-content__image">
        <img src={stepOneImg} alt="" />
      </div>
    </div>
  );
};
