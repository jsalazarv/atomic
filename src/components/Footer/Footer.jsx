import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '../Button/Button';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

export const Footer = ({ phrase = 'Designed with' }) => {
  return (
    <>
      <footer className="bg-black">
        <div className="container-footer">
          <div className="rights-reserved">
            <div className="text-footer">
              © 2020 AtomicLabs. Todos los derechos reservados
            </div>
          </div>
          <div className="notice-privacy">
            <div className="social-networks">
              <div className="text-footer">
                <Button style="link">Aviso de provacidad</Button>
              </div>
              <div className="">
                <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
              </div>
              <div className="">
                <FontAwesomeIcon className="icon" icon={faTwitter} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
