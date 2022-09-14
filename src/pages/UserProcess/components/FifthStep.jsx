import { Button } from '../../../components/Button/Button.jsx';
import stepFifthImg from '../../../assets/images/hiring-process/fifth-step.png';

export const FifthStep = ({ next, prev }) => {
  const nextHandler = () => {
    next && next();
  };

  const prevHandler = () => {
    prev && prev();
  };

  return (
    <div className="flex flex-col lg:flex-row h-auto items-center mt-32">
      <div className="hiring-process-content__form">
        <div className="title-container">
          <h1 className="subtitle text-white">
            TUS DATOS
            <span className="text-primary">
              &nbsp;HAN SIDO ENVIADOS CON ÉXITO
            </span>
          </h1>
        </div>
        <p className="text-white font-semibold">
          En breve recibirás un correo de confirmación por parte del equipo de
          AtomicLabs
          <br />
          Recuerda revisar tu bandeja de SPAM
          <br />
          ¡Esperamos verte pronto!
        </p>
      </div>
    </div>
  );
};
