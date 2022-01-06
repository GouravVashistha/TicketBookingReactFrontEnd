import React from 'react'
import './style.css'
import Slider from 'react-slick'
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

import { data } from '../../data';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';

const PreviousBtn = (props) => {
    const { className, onClick } = props
    return (
        <div className={className} onClick={onClick}>
            <ArrowBackIos className='left' style={{ color: "blue", fontSize: "30px" }} />
        </div>
    );
}


const NextBtn = (props) => {
    const { className, onClick } = props
    return (
        <div className={className} onClick={onClick}>
            <ArrowForwardIos className='left' style={{ color: "blue", fontSize: "30px" }} />
        </div>
    );

};

const Carousal = () => {

    return (
        <div style={{ margin: "30px" }}>

            <Slider
                autoplay
                autoplaySpeed={1000}
                dots
                initialSlide={1}
                prevArrow={<PreviousBtn />}
                nextArrow={<NextBtn />}
            >
                {
                    data.map(item => (
                        <div className="">
                            <img className='Slider__img' src={item} alt="" style={{ width: "100%", height: "40vh" }} />
                        </div>
                    ))
                }

                {/* <div className="">
                    <img src={img2} alt=""  style={{width:"100%",height:"50vh"}}/>
                </div>
                <div className="">
                    <img src={img3} alt=""   style={{width:"100%",height:"50vh"}}/>
                </div> */}

            </Slider>
        </div>
    )
}

export default Carousal
