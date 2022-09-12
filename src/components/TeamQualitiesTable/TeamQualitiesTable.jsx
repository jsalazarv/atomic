import './TeamQualitiesTable.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';

export const TeamQualitiesTable = () => {
  return (
    <div className="team-qualities-table">
      <table className="table">
        <thead scope="col">
          <tr>
            <th scope="row">CARACTERÍSTICAS</th>
            <th scope="col">
              <h4 className="u-slab">OTROS</h4>
            </th>
            <th className="text-2xl bg-muted" scope="col">
              <h4 className="u-slab">ATOMIC</h4>
            </th>
          </tr>
        </thead>
        <tbody className="table__body">
          <tr>
            <th scope="col">Equípo inclusivo, honesto y auténtico</th>
            <td className="bg-white">
              <FontAwesomeIcon className="icon" icon={faCircleCheck} />
            </td>
            <td className="bg-muted">
              <FontAwesomeIcon className="icon" icon={faCircleCheck} />
            </td>
          </tr>
          <tr>
            <th scope="col">Puntualidad es nuestro segundo nombre</th>
            <td className="bg-white">
              <FontAwesomeIcon className="icon" icon={faCircleCheck} />
            </td>
            <td className="bg-muted">
              <FontAwesomeIcon className="icon" icon={faCircleCheck} />
            </td>
          </tr>
          <tr>
            <th scope="col">Siempre innovamos en nuestros productos</th>
            <td className="bg-white"></td>
            <td className="bg-muted">
              <FontAwesomeIcon className="icon" icon={faCircleCheck} />
            </td>
          </tr>
          <tr>
            <th scope="col">
              Te ayudamos a crecer e implementar nuevos conocimientos
            </th>
            <td className="bg-white"></td>
            <td className="bg-muted">
              <FontAwesomeIcon className="icon" icon={faCircleCheck} />
            </td>
          </tr>
          <tr>
            <th scope="col">Nos preocupamos por tu bienestar</th>
            <td className="bg-white"></td>
            <td className="bg-muted">
              <FontAwesomeIcon className="icon" icon={faCircleCheck} />
            </td>
          </tr>
          <tr>
            <th scope="col">El respeto es una parte fundamental</th>
            <td className="bg-white"></td>
            <td className="bg-muted">
              <FontAwesomeIcon className="icon" icon={faCircleCheck} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
