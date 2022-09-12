import './AtomicServices.css';
import { ServicesCard } from '../../../../components/ServicesCard/ServicesCard.jsx';
import { useState } from 'react';

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
            <ServicesCard title="EXPLORA" />
          </div>
          <div className="card-container">
            <ServicesCard title="IMAGINA" />
          </div>
          <div className="card-container">
            <ServicesCard title="CONQUISTA" />
          </div>
        </div>
      </div>
    </div>
  );
};
