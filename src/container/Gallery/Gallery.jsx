import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { SubHeading} from "../../components"
import { images } from '../../constants'
import './Gallery.css';
import { useRef } from 'react';

const gallery = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]
const Gallery = () => {
  const scrollRef = useRef(null)
  function scroll(direction){
    if(direction === 'left'){
      scrollRef.current.scrollLeft -=300
    } else {
      scrollRef.current.scrollLeft +=300
    }
  }
  return (
  <div className='app__gallery flex__center'>
    <div className="app__gallery-content">
      <SubHeading title="Instagram" />
      <h1 className="headtext__cormorant">Photo Gallery</h1>
      <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
      <button type="button" className="custom__button">View More</button>
    </div>
    <div className="app__gallery-images">
      <div className="app__gallery-images_container" ref={scrollRef}>
        {gallery.map((img, index) => (
          <div key = {index} className="app__gallery-images_card flex__center">
            <img src={img} alt="gallery image" />
            <BsInstagram className="gallery__image-icon" />
          </div>
        ))} 
      </div>
      <div className="app__gallery-images_arrows">
        <BsArrowLeftShort className='gallery__arrow-icon' onClick={()=>{scroll('left')}}/>
        <BsArrowRightShort className='gallery__arrow-icon' onClick={()=>{scroll('right')}}/>
      </div>
    </div>
  </div>
)};

export default Gallery;
