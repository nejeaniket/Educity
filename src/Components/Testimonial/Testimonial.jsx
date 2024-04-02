import React, { useRef } from 'react'
import './Testimonial.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonial = () => {

    const slider = useRef()
    let tx = 0;

    const slideforword = () =>{
        if(tx > -50){
            tx -=25;
        }
        slider.current.style.transfrom = `translateX(${tx}%)`;
    }
    const slidebackword = () =>{
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transfrom = `translateX(${tx}%)`;
    }

  return (
    <div className='testimonial'>
      
      <img src={next_icon} className='next-btn' onClick={slideforword}/>
      <img src={back_icon} className='back-btn' onClick={slidebackword}/>

      <div className='slider'>

        <ul ref={slider}>

            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_1}></img>
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>choosing to pursur my degree at Edusity</p>
                </div>
            </li>

            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_2}></img>
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>choosing to pursur my degree at Edusity</p>
                </div>
            </li>

            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_3}></img>
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>choosing to pursur my degree at Edusity</p>
                </div>
            </li>

            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_4}></img>
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>choosing to pursur my degree at Edusity</p>
                </div>
            </li>
            
        </ul>
        
      </div>

    </div>
  )
}

export default Testimonial
