import React, {useState} from 'react'
import Trex from './img/carnivores/T-Rex.png'

import Modal from './Modal.js'

const GalleryItem = ({ dinoInfo}) => {

  const [modalState, setModalState] = useState(false)

  const openModal = () => setModalState(true)
  const closeModal = () => setModalState(false)
  
  let dinoBorderColor = 'gallery-preview-pic-container ';
  dinoBorderColor += dinoInfo.diet === 'Carnivorous' ? 'carn-border' : 'herb-border'
  
  return (
    <>
    <div key={dinoInfo.pronunciation} className='gallery-item small-shadow' onClick={openModal} >

        <div className={dinoBorderColor}> 
          <img className='gallery-preview-image image-component' src={dinoInfo.icon} alt={dinoInfo.name}/>
        </div>
        
        <p className='gallery-preview-heading' align="center" key={dinoInfo.name} >{dinoInfo.name}</p>
        

    </div>

    <Modal
      ifOpen={modalState}
      onClose={closeModal}

      name ={dinoInfo.name}
      image = {dinoInfo.icon}
      skeletonImage = {dinoInfo.skeletonImage}
      diet = {dinoInfo.diet}
      pronunciation = {dinoInfo.pronunciation}
      nameMeaning = {dinoInfo.nameMeaning}
      temporalRange = {dinoInfo.temporalRange}
      temporalRangeNumbers = {dinoInfo.temporalRangeNumbers}
      type = {dinoInfo.type}
      found = {dinoInfo.found}
      length = {dinoInfo.length}
      weight = {dinoInfo.weight}
      firstParagraph = {dinoInfo.firstParagraph}
      secondParagraph = {dinoInfo.secondParagraph}
      taxonomy={dinoInfo.taxonomy}
      namedBy={dinoInfo.namedBy}

    />

    </>
  )
}

export default GalleryItem