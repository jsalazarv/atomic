import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../../components/Button/Button.jsx';
import stepTwoImg from '../../../assets/images/hiring-process/step-two.png';
import { useFormStateContext } from '../../../contexts/FormStateContext.jsx';
import { useForm } from 'react-hook-form';
import { SMSHandlerService } from '../../../services/SMSHandlerService.js';
import { useEffect } from 'react';
import { Loader } from '../../../components/Loader/Loader.jsx';
import imgPlane from '../../../assets/images/hiring-process/plane.png';
import imgSuccess from '../../../assets/images/hiring-process/checkmark.png';

const smsHandlerService = new SMSHandlerService();

export const ThirdStep = ({ next, prev }) => {
  const { state, updateState } = useFormStateContext();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting, isSubmitSuccessful },
  } = useForm({ mode: 'onChange' });

  const nextHandler = () => {
    next && next();
  };

  const prevHandler = () => {
    prev && prev();
  };

  const verifyOtp = async (otp, sid) => {
    try {
      const {
        data: { success },
      } = await smsHandlerService.verifyCode({
        otp,
        sid,
      });

      return success;
    } catch (error) {
      return false;
    }
  };

  const submit = async (values) => {
    const { otp } = values;
    await verifyOtp(otp, state.sid);
  };

  useEffect(() => {
    if (isSubmitSuccessful && !isSubmitting) {
      const timer = setTimeout(() => {
        nextHandler();
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isSubmitSuccessful]);

  if (isSubmitting && isValid) {
    return <Loader title="Estamos validando el código..." image={imgPlane} />;
  }

  if (isSubmitSuccessful) {
    return <Loader title="Hemos validado el código..." image={imgSuccess} />;
  }

  return (
    <div className="flex flex-col lg:flex-row h-auto items-center mt-32">
      <div className="hiring-process-content__form">
        <div className="title-container">
          <div className="dot-counter">3</div>
          <h1 className="subtitle text-white">
            CÓDIGO DE <span className="text-primary">&nbsp;VERIFICACIÓN</span>
          </h1>
        </div>
        <p className="text-white font-semibold">
          Te enviamos un SMS al número: <br />
          +52 {state.phone}
        </p>
        <p className="text-white font-semibold mt-6">
          Ingresa el código de verificación:
        </p>
        <form className="form-step" onSubmit={handleSubmit(submit)}>
          <div className="input-container">
            <div className="relative w-full lg:w-3/4">
              <label className="text-white font-medium">
                Código de verificación
              </label>
              <input
                type="text"
                className="input"
                {...register('otp', {
                  required: true,
                  minLength: 5,
                  maxLength: 5,
                })}
              />
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
              disabled={!isValid}>
              VALIDAR CÓDIGO
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
