import React from 'react'
import './BootstrapMulti.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"


import { Rating } from "@material-ui/lab";
import { multiData } from '../../data';
import { ArrowBackIos, ArrowForwardIos, FavoriteBorder } from '@material-ui/icons';

const PreviousBtn = (props) => {
  const { className, onClick } = props
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "white", fontSize: "30px" }} />
    </div>
  );
}


const NextBtn = (props) => {
  const { className, onClick } = props
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "white", fontSize: "30px" }} />
    </div>
  );

};

const BootstrapMultiCarousal = () => {
  var settings = {

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="BootstrapMulti" style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <div style={{ width: '80%' }}>
        <h1 style={{ display: 'flex', justifyContent: 'center', textTransform: 'uppercase', textDecoration: 'underline ', color: 'green' }}>Best Movies</h1>
        <Slider
          slidesToScroll={3}
          prevArrow={<PreviousBtn />}
          nextArrow={<NextBtn />}
          slidesToShow={4}
          infinite={true}
          {...settings}
        >
          {
            multiData.map(item => (
              <Card item={item} />

            ))
          }

        </Slider>
      </div>
    </div>
  )
}

const Card = ({ item }) => {
  return (
    <div style={{
      textAlign: 'center', margin: 20, padding: '0 10px', width: 220, boxShadow: "0 1px 6px 0 rgb(32 33 36 / 28%)",
      borderRadius: 5,
    }}>
      <span style={{ float: 'right', padding: '5px' }}>
        <FavoriteBorder style={{ color: 'gray' }} />
      </span>
      <img className="multi__image" src={item} alt="" style={{ width: "100%", height: "120px", objectFit: "contain", marginBottom: '10px' }} />
      <p style={{ fontSize: "18px", padding: '2px 0', color: 'gray', fontWeight: 400 }}>Thor</p>
      <Rating precision={0.5} size='small' />
      <p>
        <span style={{ textDecoration: 'line-through', color: 'gray', marginRight: '7px', fontWeight: 300 }}>
          ₹7070
        </span>
        <span style={{ color: 'gray', fontWeight: 700 }}>
          ₹7079
        </span>
      </p>
      <button>Add To Cart</button>
    </div>
  )
}

export default BootstrapMultiCarousal;
