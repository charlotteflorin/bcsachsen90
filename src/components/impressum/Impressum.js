import React from 'react';
import './impressum.css'; // Du kannst hier eine separate CSS-Datei verwenden, um die Klassen zu stylen

const Impressum = () => {
  return (
    <>
    <div className=" ueberschrift impressum-header">Impressum</div>
    <div className="impressum-container">
     
      
      <div className="impressum-details container-impr">
        <div className="impressum-title">BC Sachsen 90 Bautzen e.V.</div>
        </div>
        
        <div className="impressum-representative container-impr">
          <div className="impressum-subtitle">vertreten durch</div>
          <div className="impressum-name">Vereinsvorsitzender</div>
          <div className="impressum-name">Mario Schuler</div>
          <div className="impressum-address">Am Strehlaer Wasser 26</div>
          <div className="impressum-city">02625 Bautzen</div>
          <div className="impressum-tel">Tel.: 03591-491348</div>
          <div className="impressum-email">E-Mail: m.schuler-finanzfachmann@t-online.de</div>
          <br></br>
          <div className="impressum-name">Kassenwartin</div>
          <div className="impressum-name">Charlotte Florin</div>
          <br></br>
          <div className="impressum-name">Sportwart</div>
          <div className="impressum-name">René Kretschmer</div>
        </div>
        
        <div className="impressum-register container-impr">
          <div className="impressum-register-title">Registernummer</div>
          <div className="impressum-register-number">Registergericht Dresden</div>
          <div className="impressum-register-number">VR 30173</div>
          <br></br>
          <div className="impressum-subtitle">V.i.S.d §18 Abs.2 MStV</div>
          <div className="impressum-name">Charlotte Florin</div>
          <div className="impressum-address">Boltenhagener Str. 69</div>
          <div className="impressum-city">01109 Dresden</div>
          <br></br>
          
        </div>
      
    </div>
    <div className='rights'>&copy; 2025 BC Sachsen 90 Bautzen e.V. Alle Rechte vorbehalten.</div>
    
    </>
  );
};

export default Impressum;
