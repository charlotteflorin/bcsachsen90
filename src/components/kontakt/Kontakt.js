import './kontakt.css'
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import contactimg from '../../assets/images/kontaktimg.png' 

const Kontakt = () => {
  return (
    <>
    <h2 className="ueberschrift contact-header">Kontaktinformationen</h2>
    <div className="contact-container">
      <div className="contact-content">
        
        <div className="contact-details">
         
          <div className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <span className="contact-text">0123456789</span>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span className="contact-text">Am Strehlaer Wasser 26, 02625 Bautzen</span>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span className="contact-text">info@bcsachsen90.de</span>
          </div>
        </div>
        <div className="contact-image">
          <img
            src={contactimg}
            alt="Kontakt"
            className="contact-img"
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default Kontakt;
