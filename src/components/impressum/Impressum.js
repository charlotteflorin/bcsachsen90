import React from 'react';
import './impressum.css'; // Du kannst hier eine separate CSS-Datei verwenden, um die Klassen zu stylen

const Impressum = () => {
  return (
    <>
    <div className=" ueberschrift impressum-header">Impressum</div>
    <div className="impressum-container">
     
      
      <div className="impressum-details">
        <div className="impressum-title">BC Sachsen 90 Bautzen e.V.</div>
        
        <div className="impressum-representative">
          <div className="impressum-subtitle">vertreten durch</div>
          <div className="impressum-name">Mario Schuler</div>
          <div className="impressum-address">Am Strehlaer Wasser 26</div>
          <div className="impressum-city">02625 Bautzen</div>
          <div className="impressum-tel">Tel.: 03591-491348</div>
          <div className="impressum-email">E-Mail: mario.schuler@mail</div>
        </div>
        
        <div className="impressum-register">
          <div className="impressum-register-title">Registernummer</div>
          <div className="impressum-register-number">[Hier einfügen]</div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Impressum;
