import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Training from './components/training/Training';
import Werte from './components/werte/Werte';
import SocialMedia from './components/socialmedia/Socialmedia';
import Kontakt from './components/kontakt/Kontakt';
import Impressum from './components/impressum/Impressum';

function App() {
  return (
    <>
      <Navbar/>

      <section id="home" className="section home">
        <Home/>
      </section>

      <section id="training" className="section">
        <Training/>
      </section>
<br></br>
      <section id="werte" className="section">
        <Werte/>
      </section>

      <section id="socialmedia" className="section">
        <SocialMedia/>
      </section>
      <br></br><br></br><br></br>

      <section id="kontakt" className="section">
        <Kontakt/>
      </section>

      <br></br> <br></br>

      <section id="impressum" className="section">
        <Impressum/>
      </section>

      
    </>
    

    
  )
}

export default App;
