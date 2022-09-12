import './BenefitsCard.css';

export const BenefitsCard = ({ image }) => {
  return (
    <div className="benefits-card">
      <div className="benefits-card__header">
        <img className="benefits-card__header__image" src={image} alt="" />
      </div>
      <div className="benefits-card__content">
        <ul>
          <li>Usamos las tecnologias mas modernas.</li>
          <li>Innovamos y creamos proyectos retadores.</li>
        </ul>
      </div>
    </div>
  );
};
