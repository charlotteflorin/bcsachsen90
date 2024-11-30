import './kontakt.css'

const Kontakt = () => {
    return (
      <>
      <div className=" ueberschrift">Kontakt</div>
      <div className="kontakt-container">
       
        <br></br>
        
        <div className="kontakt-person">
          <div className="kontakt-name">Mario Schuler</div>
          <div className="kontakt-info">
            <div className='kontakt-funktion'>Vorstandsvorsitzender</div>
            <div className="kontakt-tel">Tel.: 0151 11111111</div>
            <div className="kontakt-email">E-Mail: Mario.schuler@email.com</div>
          </div>
        </div>
        <br></br>
        
        <div className="kontakt-person">
          <div className="kontakt-name">Charlotte Florin</div>
          <div className="kontakt-info">
            <div className='kontakt-funktion'>Kassenwärtin</div>
            <div className="kontakt-tel">Tel.: 0151 111111111</div>
            <div className="kontakt-email">E-Mail: cf99@gmx.net</div>
          </div>
        </div>

        <br></br>
        
        <div className="kontakt-person">
          <div className="kontakt-name">René Kretzschmer</div>
          <div className="kontakt-info">
            <div className='kontakt-funktion'>Sportwart</div>
            <div className="kontakt-tel">Tel.: 0151 111111111</div>
            <div className="kontakt-email">E-Mail: cf99@gmx.net</div>
          </div>
        </div>
      </div>
      </>
    );
  };
  
  export default Kontakt;