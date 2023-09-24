import React from 'react'
import './index.css'
import Collection from '../commom/Collection'
import Filters from '../commom/Filters'; 
import ExploreSection from '../commom/ExploreSection';
import { Dinning_Out } from '../../Data/Dinning_out';
const CollectionList = [
  {
    id:"2",
    title:"8 Premium Coffee Shops",
    cover:"https://b.zmtcdn.com/data/collections/b3c25f31e72bfefcfbbaba04ffc81f30_1687877898.png?output-format=webp",
    places:"8 places",
  },
  {
    id:"3",
    title:"9 Local Favorite Places",
    cover:"https://b.zmtcdn.com/data/collections/92aaa9b449d0e05e0d118b5a0fa8fadd_1682856493.png?output-format=webp",
    places:"9 places",
  },
  {
    id:"4",
    title:"6 Luxury Dinning Places",
    cover:"https://b.zmtcdn.com/data/collections/1861a2246de9e8cc96569b5dc4c3405c_1687946858.jpg?output-format=webp",
    places:"6 places",
  },
  {
    id:"5",
    title:"11 Great Cafes",
    cover:"https://b.zmtcdn.com/data/collections/61d06b1dc0a478a6216bcf07ff8b2d67_1687781175.jpg?output-format=webp",
    places:"11 places",
  },
  {
    id:"6",
    title:"7 Serene Rooftop places",
    cover:"https://b.zmtcdn.com/data/collections/293255cbfe49f4ebdb244c1bfc3a0f74_1687783029.jpg?output-format=webp",
    places:"7 places",
  },
  {
    id:"7",
    title:"13 Unmissable Gujarati Delicacies",
    cover:"https://b.zmtcdn.com/data/collections/4531ccbcfd8b86011b48929470daee3e_1686316381.png?output-format=webp",
    places:"13 places",
  },
  {
    id:" 8",
    title:"9 Places for Bingeworthy Desserts",
    cover:"https://b.zmtcdn.com/data/collections/3b1f56c1936a6bfa702efd28188ebe6f_1688043047.png?output-format=webp",
    places:"9 places",
  },
];
const DinnigOutFilters = [
  {
    id:1,
    icon: <i class="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters",
  },
  {
    id:2,
    title: "Rating: 4.0+",
  },
  
  {
    id:3,
    icon: <img src="https://b.zmtcdn.com/data/o2_assets/577bf55ff265ae45e11cfe6911d176941687789024.png" alt='Gold' width='18px' height='18px' className='absolute-center' />,
    title: "Gold",
  },
  
  {
    id:4,
    title: "Outdoor Seating",
  },
  
  {
    id:5,
    icon: <i class="fi fi-rr-app-sort absolute-center"></i>,
    title: "Open Now",
  },
  
];
const Dinninglist = Dinning_Out;
const DinningOut = () => {
  return (
    <div>
     <Collection list={CollectionList}/>
     <div className='max-width'>
        <Filters filterList={DinnigOutFilters} />
     </div>
     <div className='image-wrapper'>
      <div className='max-width img-container-cover'>
        <div height='100%' width='100%' className='img-container'>
          <div className='gradient-bg'></div>
          <img alt="" src="https://b.zmtcdn.com/data/o2_assets/da94405b04f6ae6bf64a4e2a01b1b5c11686563732.png" loading="auto" className='img' />
        </div>
      </div>
     </div>
     <ExploreSection list={Dinninglist} collectionName="Trending dining restaurants in Surat"/>
    </div>
  )
}

export default DinningOut
