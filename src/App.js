import {useState, useRef} from 'react'
import { Link } from 'react-scroll';

import Modal from "./components/Modal";
import Header from './components/Header'
import Description from "./components/Description";
import Carnivores from './components/Carnivores'
import Herbivores from './components/Herbivores'
import Footer from './components/Footer';


import Dinosaurs from './dino-info.json';
import Arrow from './components/img/arrow.png'

function App() {
 
  // const [modalActive, setModalActive] = useState(false)


  return (

    <div className="App">
        <Link className="arrowUp" to="header" spy={true} smooth={true} offset={155} duration={500}>
          <img src={Arrow}/>
        </Link>

      <Header/>

      <Description/>

       
      {/* <Carnivores dinosaurs={Dinosaurs.carnivores} onClick={() => setModalActive(true)} ifOpen={modalActive} onClose={() => setModalActive(false)}/> */}
      <Carnivores dinosaurs={Dinosaurs.carnivores}/>
      
      <Herbivores dinosaurs={Dinosaurs.herbivores}/>
      <Footer/>
    </div>
  );
  
}
export default App;
