import './kontakt.css'
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import contactimg from '../../assets/images/kontaktimg.png' 

const Kontakt = () => {
  return (
    <div className="contact-container">
      <div className="contact-text">
        <div className="ueberschrift contact-title">Kontaktiere uns!</div>
        <div className="contact-description">
          Wir freuen uns Dich kennenzulernen! Melde Dich bei uns und werde Teil unseres Teams.
        </div>
        <div className="contact-info">
          <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
            <div className="contact-detail">03591-491348</div>
          </div>
          <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon" />
            <div className="contact-detail">Am Strehlaer Wasser 26, 02625 Bautzen</div>
          </div>
          <div className="contact-item">
          <FaEnvelope className="contact-icon" />
            <div className="contact-detail">kontakt@bcsachsen90bautzen.de</div>
          </div>
        </div>
      </div>
      <div className="contact-image">
        <img src={contactimg} alt="Bowlingball auf Bowlingbahn" loading="lazy" className="image" />
       
      </div>
    </div>
  );
};

export default Kontakt;
