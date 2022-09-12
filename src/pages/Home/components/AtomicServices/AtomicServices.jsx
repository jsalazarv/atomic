import './AtomicServices.css';
import { ServicesCard } from '../../../../components/ServicesCard/ServicesCard.jsx';
import { useState } from 'react';
import exploreCardImage from '../../../../assets/images/home/atomic-services/explore.png';
import imagineCardImage from '../../../../assets/images/home/atomic-services/imagine.png';
import conquestCardImage from '../../../../assets/images/home/atomic-services/conquest.png';

export const AtomicServices = () => {
  const { isSelected, setIsSelected } = useState('selected');

  const selected = () => {
    setIsSelected('selected');
  };

  return (
    <div className="wrap">
      <div className="atomic-services">
        <h2 className="title text-white text-center my-4">
          SOMOS EL BRAZO DERECHO <br />
          <span className="text-primary"> DE LA TECNOLOGÍA</span>
        </h2>
        <div className="service-cards">
          <div
            className={`card-container ${isSelected}`}
            onClick={() => selected()}>
            <ServicesCard title="EXPLORA" image={exploreCardImage} />
          </div>
          <div className="card-container">
            <ServicesCard title="IMAGINA" image={imagineCardImage} />
          </div>
          <div className="card-container">
            <ServicesCard title="CONQUISTA" image={conquestCardImage} />
          </div>
        </div>
      </div>
    </div>
  );
};
