import React, { useState } from 'react'
import Slider from "react-slick";
import Banner1 from '../assets/banner1.jpg'
import Banner2 from '../assets/banner2.jpg'
import Banner3 from '../assets/banner3.jpg'
import Banner4 from '../assets/banner4.jpg'
import Banner5 from '../assets/banner5.jpg'
import Banner6 from '../assets/banner6.jpg'


const Banner = () => {
  const [dotActive, setDotActive] = useState(0)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        beforeChange: (prev, next) => {
          setDotActive(next)
        },
        appendDots: dots => (
          <div
            style={{
             position: 'absolute',
             top: '50%',
             left: '50%',
             transform: 'translate(-50%)',
             width: '250px'
             
            }}
          >
            <ul style={{ 
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
             }}> {dots} </ul>
          </div>
        ),
        customPaging: i => (
          <div
            style={
             i === dotActive ?{
             background: '#0e1921',
             color: 'white',
             borderRadius: '50%',
             width: '30px',
             height: '30px',
             display: 'flex',
             alignItems: 'center',
             justifyContent: 'center'
            }
            :{
              background: '#1e2f3e',
              color: 'white',
              borderRadius: '50%',
              width: '30px',
              height: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
             }
          }
          >
            {i + 1}
          </div>
        )
      };
    return (
        <div className='w-full h-full absolute z-[-1]'>
            <div className='w-full h-full relative'>
            <Slider {...settings}>
                <div>
                    <img src={Banner1} alt="" />
                </div>
                <div>
                    <img src={Banner2} alt="" />
                </div>
                <div>
                    <img src={Banner3} alt="" />
                </div>
                <div>
                    <img src={Banner4} alt="" />
                </div>
                <div>
                    <img src={Banner5} alt="" />
                </div>
                <div>
                    <img src={Banner6} alt="" />
                </div>
              
            </Slider>
            </div>
        </div>


    )
}

export default Banner
