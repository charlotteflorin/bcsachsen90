import React from "react";
import "./training.css";

const Training = () => {
  return (
    <div className="training-container">
      <div className="training-text">
        <div className="ueberschrift">Training für Jugendliche</div>
        <div className="text">Jeden Freitag von 15:00 Uhr bis 18:00 Uhr</div>
        <br></br>
        <div className="ueberschrift">Training für Erwachsene</div>
        <div className="text">Jeden Montag ab 17:00 Uhr</div>
      </div>
      <div className="training-map">
      <iframe
        title="Bowlingarena Bautzen"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10165.481450338432!2d14.42186567551844!3d51.16424937275869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4708557db3810527%3A0x90f21a54d328319c!2sBowlingarena%20Bautzen!5e0!3m2!1sen!2sde!4v1699296058711!5m2!1sen!2sde"
        loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Training;