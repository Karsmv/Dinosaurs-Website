import React from 'react'
import '../style.css'

const DinoComponentHeader = ({dinoType}) => {

  let dinoComponentContainer = 'dinoComponent-caption medium-shadow '
  dinoComponentContainer += dinoType === 'carnivore' ? 'carnivore' : 'herbivore';
  let dinoDietCaption = dinoType === 'carnivore' ? 'Carnivores' : 'Herbivores'

  return (

    <div className="dinoComponent-container">

      <div className="dinoComponent">
      {/* <div className='dinoComponent-caption carn medium-shadow'> */}
      {/* <div className='dinoComponent-caption carn medium-shadow'> */}
      <div className={dinoComponentContainer}>
            <h1>{dinoDietCaption}</h1>
        </div>
        
        {/* <div className='dinoComponent-img-container carn'> */}
        <div className='dinoComponent-img-container '>
        {/* <img className='image-component carn skeleton' src={require("./img/rex-carnHeader.png")} alt="" /> */}
          {/* <img className='image-component  skeleton' src={require("./img/rex-carnHeader.png")} alt="" /> */}
        </div>
        
      </div>
      {/* <div className='dinoComponent-content carn'> */}
      <div className='dinoComponent-content '>
        
        </div>

    </div>
  )
}

export default DinoComponentHeader