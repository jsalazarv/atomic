import './WhyAtomic.css';
import { Button } from '../../../../components/Button/Button.jsx';
import { TeamQualitiesTable } from '../../../../components/TeamQualitiesTable/TeamQualitiesTable';

export const WhyAtomic = () => {
  return (
    <div className="why-atomic">
      <h2 className="title text-white text-center">
        ¿POR QUÉ
        <span className="text-primary">&nbsp;ATOMICS?</span>
      </h2>
      <div>
        <div className="text-center">
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
    </div>
  );
};
