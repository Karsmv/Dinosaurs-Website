import React from 'react'
import "../style.css"
import "./description.css"
import {Parallax} from 'react-parallax'
import {FiChevronLeft, FiChevronRight} from "react-icons/fi"

import TrexFossil from './img/1884823.jpg'
import TrexHunting from './img/first-parallax3.jpg'
import Sauropods from './img/sauropods.jpg'
import SauropodsScroll from './img/sauropods_scroll.png'
import Dragon from './img/Chinese-dragon-creative-vector-material.jpg'
import SluggishDino from './img/Sprawling.jpg'


const Description = () => {

  const scrollLeft = () => {
    let scroller = document.getElementById('scroller')
    scroller.scrollLeft = scroller.scrollLeft - 350
  }

  const scrollRight = () => {
    let scroller = document.getElementById('scroller')
    scroller.scrollLeft = scroller.scrollLeft + 350
  }

  return (

    <div 
      className='description-component-container' 
      id="description">     

      <Parallax 
        className='parallax-one large-shadow' 
        blur={0} 
        bgImage={TrexFossil} 
        bgImageAlt="fossil" 
        strength={120}>
       
       <div className='parallax-one content' style={{ height: '100vh'}}>
         <h1 className='description-heading'>DINOSAURS</h1>
         
       </div>
      
      </Parallax>

      <div className='description-info section-one'>
  
        <div className='paragraph one shadow-out' align="center">
    
          <h1 className=''>Dinosaurs</h1>
    
          <p className='dino-info-paragraphs'>
          (clade Dinosauria), the common name given to a group of reptiles, often very large, that first appeared roughly 245 million years ago (near the beginning of the Middle Triassic Epoch) and thrived worldwide for nearly 180 million years. Most died out by the end of the Cretaceous Period, about 66 million years ago
          </p>
    
        </div>
  
        <div className='paragraph two shadow-in ' >

          <div className='paragraph-container section-one'>

            <p className='dino-info-paragraphs'>Giant bones that have been found since ancient times were considered the remains of the heroes of the era of the Trojan War, in the Middle Ages and up to the 19th century - the remains of giants, which are mentioned in the Bible, who died during the Flood.</p>
            <p className='dino-info-paragraphs'> In the East they were considered the bones of dragons and attributed to them healing properties. These events, with the development of human civilization, were recorded by the first naturalists and were reflected in art.</p>
       
          </div>

          <div className='dragon pic-container'>
            <img className='dragon-pic image-component' src={Dragon} alt='dragon'></img>
          </div>
            
        </div>

      </div>
  
      <Parallax 
        className='parallax-two large-shadow' 
        blur={0} 
        bgImage={TrexHunting} 
        bgImageAlt="hunting" 
        strength={120}>

         <div className='' style={{ height: '100vh' }} />
         <div className='additional-info parallax'>
          <p className='dino-info-paragraphs parallax-info' align="center">While dinosaurs were ancestrally bipedal, many extinct groups included quadrupedal species, and some were able to shift between these stances</p>
         </div>
      </Parallax>

      <div className='description-info section-two' >

        <div className='paragraph three'>
          <div className='paragraph-container section-two'>

            <p className='dino-info-paragraphs shadow-out'>
              Dinosaurs are represented on every continent by both extant species (birds) and fossil remains. Through the first half of the 20th century, before birds were recognized as dinosaurs, most of the scientific community believed dinosaurs to have been sluggish and cold-blooded. 
            </p>
            <p className='dino-info-paragraphs'>
            Most research conducted since the 1970s, however, has indicated that dinosaurs were active animals with elevated metabolisms and numerous adaptations for social interaction. Some were herbivorous, others carnivorous. Evidence suggests that all dinosaurs were egg-laying, and that nest-building was a trait shared by many dinosaurs, both avian and non-avian.
            </p>

          </div>
          <div className='sluggish-dino pic-container shadow-in'>
            <img className='sluggish-dino image-container shadow-out' src={SluggishDino} alt="sluggish dino" />
          </div>
        </div>
      </div>

      <div className='sauropods-container'>
        <FiChevronLeft onClick={scrollLeft} size={40} className='scroll-icons left'/>
        <div className='additional-info sauropods-image'>
          <p className='dino-info-paragraphs sauropods-info' align="center">Sauropods are considered the largest terrestrial animals ever existed</p>
        </div>

        <div className='sauropods-scroll' id='scroller'>
          <img className='sauropods' src={SauropodsScroll} alt="sauropods" />
        </div>
        <FiChevronRight onClick={scrollRight} size={40} className='scroll-icons right'/>
        
      </div>

      {/* <Parallax 
        className='parallax-one large-shadow' 
        blur={0} 
        bgImage={Sauropods} 
        bgImageAlt="sauropods" 
        strength={120}>
       
       <div className='parallax-one content' style={{ height: '100vh'}}>
         
       </div>
      
      </Parallax> */}
    </div>
  )
}

export default Description