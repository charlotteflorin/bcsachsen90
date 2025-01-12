import './werte.css'
import werte1 from "../../assets/images/werte1.JPG" 
import werte2 from "../../assets/images/werte2.jpg" 
import werte3 from "../../assets/images/werte3.JPG" 

import React from 'react'

const Werte = () => {
  return (
    <div className='werte-container'>
     <CustomSection
        title="Jugendliche im Fokus"
        text="Unsere Jugendarbeit ist das Herzstück unseres Vereins. Mit erfahrenen Trainern fördern wir junge Bowling-Talente und bereiten sie auf regionale und nationale Wettbewerbe vor."
        img={werte1} 
        alt="Bild unserer Jugend"
      />
      <CustomSection
        title="Vorbereitung auf Wettkämpfe"
        text="Unsere Mitglieder nehmen regelmäßig an sächsischen und deutschen Meisterschaften teil. Mit gezieltem Training und professioneller Unterstützung bereiten wir uns intensiv auf diese Herausforderungen vor."
        img={werte2} 
        alt="Unsere Jugend mit Medaillien"
      />
      <CustomSection
        title="Förderung aller Leistungstufen"
        text="Bei uns sind sowohl Hobbysportler als auch ambitionierte Wettkampfspieler willkommen. Jeder findet das richtige Training und Unterstützung, um sich sportlich zu entwickeln."
        img={werte3}
        alt="Bild von unserer 2. Mannschaft"
      />
      
    </div>
  )
}

const CustomSection = ({ title, text, img, alt }) => {
    return(
        <div className="card">
          <img src={img} alt={alt} loading='lazy'/>
          <div className="card-body">
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
        </div>
    )
  };

export default Werte
