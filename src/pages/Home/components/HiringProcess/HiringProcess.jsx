import { Button } from '../../../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import hiringProcessImage from '../../../../assets/images/home/hiring-process/hiring-process.png';
import './HiringProcess.css';

export const HiringProcess = () => {
  const navigate = useNavigate();
  const redirectToUserProcess = () => {
    navigate(`/user-process/`);
  };

  return (
    <div className="hiring-process">
      <div className="hiring-process__content">
        <div className="hiring-process__content__info">
          <h1 className="title text-white text-center">
            ¡TE ENCANTARÁ <br />
            <span className="text-primary">TRABAJAR CON NOSOTROS!</span>
          </h1>
          <div className="image__container">
            <img src={hiringProcessImage} alt="" />
          </div>
          <div className="process-steps">
            <ol className="process-steps__list">
              <li className="process-steps__list__item">
                <h3 className="process-steps__list__item__text">
                  Contratación remota
                </h3>
              </li>
              <li className="process-steps__list__item">
                <h3 className="process-steps__list__item__text">
                  Entrevista con el área de RH
                </h3>
              </li>
              <li className="process-steps__list__item">
                <h3 className="process-steps__list__item__text">
                  Prueba práctica
                </h3>
              </li>
              <li className="process-steps__list__item">
                <h3 className="process-steps__list__item__text">
                  Entrevista técnica
                </h3>
              </li>
            </ol>
          </div>
          <div className="text-center">
            <Button
              onClick={() => redirectToUserProcess()}
              className="content__info__button">
              ¡Quiero ser parte!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
