import { Button } from '../../../components/Button/Button.jsx';
import stepFourthImg from '../../../assets/images/hiring-process/fourth-step.png';
import { useForm } from 'react-hook-form';

export const FourthStep = ({ next, prev }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'onChange' });

  const nextHandler = () => {
    next && next();
  };

  const prevHandler = () => {
    prev && prev();
  };

  const submit = async () => {
    nextHandler();
  };
  return (
    <div className="flex flex-col lg:flex-row h-auto items-center mt-32">
      <div className="hiring-process-content__form">
        <div className="title-container">
          <div className="dot-counter">4</div>
          <h1 className="subtitle text-white">
            TÉRMINOS Y <span className="text-primary">&nbsp;CONDICIONES</span>
          </h1>
        </div>
        <p className="text-white font-semibold">
          Por favor revisa nuestros términos y condiciones para este servicio:
          <br />
          <Button
            style="link"
            className="hover:text-primary pl-0 font-extrabold">
            Consulta Términos y Condiciones
          </Button>
        </p>
        <form className="form-step" onSubmit={handleSubmit(submit)}>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="accent-primary w-6 h-6 hover:accent-primary"
              {...register('terms', {
                required: true,
              })}
            />
            <span className="ml-3 text-white font-bold hover:text-primary">
              Acepto los términos y condiciones
            </span>
          </label>
          <div className="submit-container">
            <Button
              style="primary"
              className="w-full lg:w-1/4"
              type="submit"
              disabled={!isValid}>
              ENVIAR
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
