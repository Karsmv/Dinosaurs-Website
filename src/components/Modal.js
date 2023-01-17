import React from 'react'
import ReactDOM from 'react-dom'
import '../style.css'
import './modal.css';
import {FiX} from 'react-icons/fi'
import GrayCircle from './img/grey-circle.png'
import GreenCircle from './img/smoky-green-circle.png'

import { useState } from 'react';

const Modal = (props) => {

  
 
    if (!props.ifOpen) return null

  return ReactDOM.createPortal(

    <>
    <div className='new-modal-container'></div>
      <div className='new-modal'>
        <FiX className='close-icon' onClick={props.onClose}></FiX>
        {/* <button onClick={onHide}>Close</button> */}
        <div className='new-modal-content-wrapper'>

          <div className='modal-brief-info-image'>
            
          
            <div className='modal-brief-info'>
            <h1 align="center" style={{ marginBottom: "3rem"}} >{props.name}</h1>
            {/* brief dino info */}
              <p className='dino-info-paragraphs brief-info'>{props.pronunciation}</p>
              <p className='dino-info-paragraphs brief-info'>{props.nameMeaning}</p>
              <br/>
              <span className='dino-info-paragraphs brief-info span-bold'>{"Diet: "}</span>
              <span className='dino-info-paragraphs brief-info'>{props.diet}</span>
              <br/>
              <span className='dino-info-paragraphs brief-info span-bold'>{"Type: "}</span>
              <span className='dino-info-paragraphs brief-info'>{props.type}</span>
              <br/><br/>

              <span className='dino-info-paragraphs brief-info span-bold'>{"Length: "}</span>
              <span className='dino-info-paragraphs brief-info'>{props.length}</span>
              <br/>

              <span className='dino-info-paragraphs brief-info span-bold'>{"Weight: "}</span>
              <span className='dino-info-paragraphs brief-info'>{props.weight}</span>
              <br/><br/>

              <span className='dino-info-paragraphs brief-info span-bold'>{"When it lived: "}</span>
              <span className='dino-info-paragraphs brief-info'>{props.temporalRange}</span>
              <span className='dino-info-paragraphs brief-info'>{"; " + props.temporalRangeNumbers}</span>
              <br/>

              <span className='dino-info-paragraphs brief-info span-bold'>{"Found in: "}</span>
              <span className='dino-info-paragraphs brief-info'>{props.found}</span>
              <br/><br/>

            </div>

            {/* dinosaur image and background circle */}
            <div className='modal-image'>
              <div className='modal-image-background'>
                <img className='image-component modal-dino-image-background' src={props.diet === 'Carnivorous' ? GrayCircle : GreenCircle} alt="" />
                <img className='image-component modal-dino-image' src={props.image} alt={props.name} />
              </div>
            </div>

          </div>

          {/* first info paragraph */}
          <div className='dino-info-paragraphs modal-paragraphs'>{props.firstParagraph}</div>

          {/* second info paragraph and skeleton image */}
          <div className='modal-second-paragraph-skeleton'>
            <div className='modal-skeleton-container shadow-out'>
              <img className="image-component skeleton " src={props.skeletonImage} alt="" />
            </div>
            <div className='dino-info-paragraphs modal-paragraphs'>{props.secondParagraph}</div>
            <div className='dino-info-paragraphs modal-paragraphs'>
              <br/>
              <span className='dino-info-paragraphs brief-info span-bold'>{"Taxonomy: "}</span>
              <span className='dino-info-paragraphs brief-info'>{props.taxonomy}</span>
              <br/><br/>
              <span className='dino-info-paragraphs brief-info span-bold'>{"Named by: "}</span>
              <span className='dino-info-paragraphs brief-info'>{props.namedBy}</span>
            </div>
          </div>

        </div>
      </div>
    </>,
    document.getElementById('portal')
  )
}

export default Modal