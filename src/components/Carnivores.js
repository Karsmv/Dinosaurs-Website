import React from 'react'
import  '../style.css'
import './carnivores.css'
import {Parallax} from 'react-parallax'
import DinoComponentHeader from './DinoComponentHeader'
import Gallery from './Gallery'
import Modal from './Modal'
import CarnivoreDino from './img/sn-jurassich2.jpg'

const Carnivores = ({dinosaurs}) => {
  return (
    <div className='carn-component-container' id="carnivores">
      <DinoComponentHeader
        dinoType = {'carnivore'}
      />      
      <Parallax 
        className='parallax-one large-shadow' 
        blur={0} 
        bgImage={CarnivoreDino} 
        bgImageAlt="fossil" 
        strength={120}>
       
       <div className='parallax-one content' style={{ height: '100vh'}}>
         
       </div>
      
      </Parallax>

      <div style={{height: "20vh"}}></div>
      <Gallery 
      dinosaurs={dinosaurs}
      />
     
    </div>
  )
}

export default Carnivores