import React from 'react'
import '../style.css'
import './herbivores.css'
import { Parallax } from 'react-parallax'
import Gallery from './Gallery'
import DinoComponentHeader from './DinoComponentHeader'
import HerbivoreDino from './img/image_8654_1e-Irisosaurus-yimenensis.jpg'

const Herbivores = ({dinosaurs}) => {
  return (
    <div className='herb-component-container' id="herbivores">

      <DinoComponentHeader dinoType={'herb'}/>

      <Parallax 
        className='parallax-one large-shadow' 
        blur={0} 
        bgImage={HerbivoreDino} 
        bgImageAlt="fossil" 
        strength={120}>
       
       <div className='parallax-one content' style={{ height: '100vh'}}>
         
       </div>
      
      </Parallax>

      <div style={{height: "20vh"}}></div>

      <Gallery dinosaurs={dinosaurs} />
      <div className='footer'></div>
    </div>
  )
}

export default Herbivores