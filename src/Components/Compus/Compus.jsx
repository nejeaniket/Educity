import React from 'react'
import './Compus.css'
import gallery_1 from '../../assets/gallery-1.png'
import gallery_2 from '../../assets/gallery-2.png'
import gallery_3 from '../../assets/gallery-3.png'
import gallery_4 from '../../assets/gallery-4.png'

const Compus = () => {
  return (
    <div className='campus'>
      
        <div className='gallery'>

            <img src={gallery_1}></img>
            <img src={gallery_2}></img>
            <img src={gallery_3}></img>
            <img src={gallery_4}></img>

        </div>

        <button className='btn dark-btn'>See More hare &#8594;</button>

    </div>
  ) 
}

export default Compus
