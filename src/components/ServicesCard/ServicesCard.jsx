import './ServicesCard.css';

export const ServicesCard = ({ image, title, list }) => {
  return (
    <div className="services-card">
      <div className="services-card__header">
        <img
          className="header__image"
          src="../../src/assets/images/home/atomic-services/imagine.png"
          alt=""
        />
      </div>
      <div className="services-card__body">
        <div className="body__title__container">
          <span className="divider line one-line">-</span>
          <h2 className="title">{title}</h2>
        </div>
        <div className="service-list">
          <ul className="list-disc">
            <li>Estrategia Digital</li>
            <li>Big Data & Analysis</li>
            <li>Consultoría Tecnológica</li>
            <li>Reducción de Costos TI</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
