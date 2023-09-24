import React from 'react'
import './index.css'
import Slider from 'react-slick';
import NextArrow from '../../commom/Carousel/NextArrow';
import PreviousArrow from '../../commom/Carousel/PreviousArrow';

const topBrands =[
    {
        id:1,
        title:"La Pino'z Pizza",
        time:"24 min",
        cover:'https://b.zmtcdn.com/data/brand_creatives/logos/05142cf68ce04384bb185659e1bfe450_1625160258.png',
    },
    {
        id:2,
        title:"Bismillah",
        time: "17 min",
        cover:'https://b.zmtcdn.com/data/brand_creatives/logos/a4ae81b582113bae13b46a75a4e85c20_1617972894.png',
    },
    {
        id:3,
        title:"McDonald's" ,
        time: "20 min",
        cover:'https://b.zmtcdn.com/data/brand_creatives/logos/0e6f4a6a6d54c88d548abaa04a0227bc_1625165256.png',
    },
    {
        id:4,
        title:'Burger King',
        time: "29 min",
        cover:'https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188400.png',
    },
    {
        id:5,
        title:'Trishiv Chinese Corner',
        time: "27 min",
        cover:'https://b.zmtcdn.com/data/brand_creatives/logos/8acd3229db5ca430a6be045a0fdb3724_1583389614.png',
    },
    {
        id:6,
        title:'KFC',
        time: "36 min",
        cover:'https://b.zmtcdn.com/data/brand_creatives/logos/9da52e2b69f19bb603227a750e788d33_1613215810.png',
    },
    {
        id:7,
        title:'Pizza Hut',
        time: "34 min",
        cover:'https://b.zmtcdn.com/data/brand_creatives/logos/9742d760cf95e9dbf9b869ca9c753f8f_1613213827.png',
    },
    {
        id:8,
        title:'Faasos - Wraps & Rolls',
        time: "26 min",
        cover:'https://b.zmtcdn.com/data/brand_creatives/logos/45137b90df2f1154a8766b00c03c8fc3_1655798661.png',
    },
    {
        id:9,
        title:'Natural Ice Cream',
        time: "18 min",
        cover:'https://b.zmtcdn.com/data/brand_creatives/logos/11f0a050068db77b5b959dd97cc11965_1644900886.png',
    },
];
const settings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />
  };
const TopBrands = () => {
  return (
    <div className='top-brands'>
    <div className='max-width'>
      <div className='collection-title'> Top brands for you </div>
      <Slider {...settings}>
        {topBrands.map((brand) => {
          return <div>
            <div className='top-brands-cover'>
                <img src={brand.cover} className='top-brands-image' alt={brand.title}/>
            </div>
            <div className='top-brands-title'>{brand.title}</div>
            <div className='top-brands-time'>{brand.time}</div>
          </div>
        })}
      </Slider>
    </div>
  </div>
  )
}

export default TopBrands
