import React from 'react';
import '../style.css';
import './header.css'
import {Link} from 'react-scroll'


const Header = () => {
  return (
    <div className='headerComponent' id='header'>

      <div className='navbar'>
          <h1 className='faunaSaurus-heading'>FaunaSaurus</h1>
          <Link to="description" spy={true} smooth={true} offset={0} duration={500} >
          <h2 className='about-heading'>About</h2>
          </Link>
          
      </div>

      <div className='head-content'>

          <div className="header-column herbBack">
            <img className='image-component herb' src={require('./img/herbback2.png')} alt="Triceratops" style={{opacity: 0.85}}/>
            
            <Link className='head-herb-btn' to="herbivores" spy={true} smooth={true} offset={0} duration={500}>
            <span>Herbivores </span>
            </Link>
            
          </div>

          <div className="header-column carnBack">
            <img className='image-component carn' src={require('./img/carnback.png')} alt="trex"/>
            
            <Link className='head-carn-btn' to="carnivores" spy={true} smooth={true} offset={0} duration={500}>
            <span>Carnivores</span>
            </Link>
            
          </div>

      </div>
      
    </div>
  )
}

export default Header