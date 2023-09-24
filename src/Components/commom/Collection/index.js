import React from 'react'
import './index.css'
import Slider from 'react-slick'
import NextArrow from '../Carousel/NextArrow';
import PreviousArrow from '../Carousel/PreviousArrow';


const settings = {
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PreviousArrow />
};

const Collection = ({ list }) => {
  return (
    <>
    <div className='collection-wrapper'>
      <div className='max-width collection'>
        <div className='collection-title'>Collections</div>
        <div className='collection-subtitle-row'>
          <div className='collection-subtitle-text'>
            Explore curated lists of top restaurants, cafes, pubs, and bars in Surat, based on trends
          </div>
          <div className='collection-location'> All collection in Surat 
          <i className="fi fi-rr-caret-right absolute-center"></i> </div>
        </div>
        <Slider {...settings}>
          {list.map((item) => {
            return(<>
                        <div>
              {item.name}
              {<div className='collection-cover'>
                <img 
                  src={item.cover} 
                  className='collection-image' 
                  alt={item.title} 
                />
                <div className='gradient-bg'></div>
                <div className='collection-card-title'>
                  <div className='card-title'>{item.title}</div>
                  <div className='card-subtitle'>
                    <div> {item.places} <i className="fi fi-rr-caret-right absolute-center caret"></i> </div>
                  </div>
                </div>
              </div>}
            </div>
            </>)
          })}
        </Slider>
      </div>
    </div>
  </>
  )
}

export default Collection
