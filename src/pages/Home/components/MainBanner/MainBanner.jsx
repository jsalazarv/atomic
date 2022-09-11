import './MainBanner.css';
import { Button } from '../../../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import astronaut from '../../../../assets/images/home/astronaut.png';

export const MainBanner = () => {
  const navigate = useNavigate();
  const redirectToUserProcess = () => {
    navigate(`/user-process/`);
  };

  return (
    <div className="main-banner bg-[url('./assets/images/home/banner-background.png')]">
      <div className="main-banner__content">
        <div className="content__info">
          <h1 className="title text-white">
            Desarrolla todo <span className="text-primary">tu potencial</span>{' '}
            dentro del equipo
            <span className="text-primary"> Atomic</span>Labs
          </h1>
          <Button
            onClick={() => redirectToUserProcess()}
            className="content__info__button">
            ¡Quiero ser parte!
          </Button>
        </div>
        <div className="content__image-container">
          <img className="image-container__image" src={astronaut} alt="" />
        </div>
      </div>
    </div>
  );
};
