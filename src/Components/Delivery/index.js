import React from 'react'
import './index.css'
import Filters from '../commom/Filters'
import DeliveryCollection from './DeliveryCollection';
import TopBrands from './TopBrands';
import ExploreSection from '../commom/ExploreSection';
import { restaurants } from '../../Data/Restaurants';

const DeliveryFilters = [
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
    title: "Safe & Hygienic",
  },
  
  {
    id:4,
    title: "Pure Veg",
  },
  
  {
    id:5,
    icon: <i class="fi fi-rr-app-sort absolute-center"></i>,
    title: "Delivery Time",
  },
  {
    id:6,
    title: "Great Offers"
  },
  
];
const RestaurantList = restaurants;
const Delivery = () => {
  return (
    <div>
      <div className='max-width'>
        <Filters filterList={DeliveryFilters}/>
      </div>
      <DeliveryCollection />
      <TopBrands />
      <ExploreSection 
        list={RestaurantList} 
        collectionName='Delivery Restaurants in Surat'
      />
    </div>
  )
}

export default Delivery
