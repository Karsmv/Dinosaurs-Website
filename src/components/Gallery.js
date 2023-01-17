import React, {useState} from 'react'
import './gallery.css'
import Modal from './Modal'
import GalleryItem from './GalleryItem'

const Gallery = ({dinosaurs}) => {

 

  return (

    <div className='gallery-container'>

      <div className='gallery-scroll' id='gallery-scroller'>

      {dinosaurs.map((dino) => {


        return(
          <>
            <GalleryItem
              key={dino.nameMeaning}
              dinoInfo={dino}
            />

          </>      
        )
      })}
      </div>
    </div>
  )
}

export default Gallery