import { Button } from '../../../../components/Button/Button.jsx';
import { TeamQualitiesTable } from '../../../../components/TeamQualitiesTable/TeamQualitiesTable';
import { BenefitsCard } from '../../../../components/BenefitsCard/BenefitsCard';
import { useNavigate } from 'react-router-dom';
import './WhyAtomic.css';
import pictureOfCardOne from '../../../../assets/images/home/why-atomic/why-atomic-1.png';
import pictureOfCardTwo from '../../../../assets/images/home/why-atomic/why-atomic-2.png';
import pictureOfCardThree from '../../../../assets/images/home/why-atomic/why-atomic-3.png';

export const WhyAtomic = () => {
  const navigate = useNavigate();
  const redirectToUserProcess = () => {
    navigate(`/user-process/`);
  };

  return (
    <div className="why-atomic">
      <h2 className="title text-white text-center mb-64">
        ¿POR QUÉ
        <span className="text-primary">&nbsp;ATOMICS?</span>
      </h2>
      <div className="why-atomic__content">
        <div className="why-atomic__content__benefits">
          <div className="benefit__card__container">
            <BenefitsCard image={pictureOfCardOne} />
          </div>
          <div className="benefit__card__container">
            <BenefitsCard image={pictureOfCardTwo} />
          </div>
          <div className="benefit__card__container">
            <BenefitsCard image={pictureOfCardThree} />
          </div>
        </div>
        <div className="qualities">
          <TeamQualitiesTable />
        </div>
        <Button
          onClick={() => redirectToUserProcess()}
          className="content__info__button">
          ¡Quiero ser parte!
        </Button>
      </div>
    </div>
  );
};
