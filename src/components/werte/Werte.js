import './werte.css'
import image from "../../assets/images/unnamed.jpg" 

import React from 'react'

const Werte = () => {
  return (
    <div className='werte-container'>
     <CustomSection
        title="Jugendliche im Fokus"
        text="Unsere Jugendarbeit ist das Herzstück unseres Vereins. Mit erfahrenen Trainern fördern wir junge Bowling-Talente und bereiten sie auf regionale und nationale Wettbewerbe vor."
        img={image} // Dein Bildlink hier
      />
      <CustomSection
        title="Vorbereitung auf Wettkämpfe"
        text="Unsere Mitglieder nehmen regelmäßig an sächsischen und deutschen Meisterschaften teil. Mit gezieltem Training und professioneller Unterstützung bereiten wir uns intensiv auf diese Herausforderungen vor."
        img={image} // Dein Bildlink hier
      />
      <CustomSection
        title="Förderung aller Leistungstufen"
        text="Bei uns sind sowohl Hobbysportler als auch ambitionierte Wettkampfspieler willkommen. Jeder findet das richtige Training und Unterstützung, um sich sportlich zu entwickeln"
        img={image}// Dein Bildlink hier
      />
      
    </div>
  )
}

const CustomSection = ({ title, text, img }) => {
    return(
        <div className="card">
          <img src={img} />
          <div className="card-body">
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
        </div>
    )
  };

export default Werte
