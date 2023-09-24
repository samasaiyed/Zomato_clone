import React from 'react'
import './index.css'

const DeliveryItem = ({item}) => {
  return (
    <div>
        <div className='delivery-item-cover'>
            <img src={item.cover} className='delivery-item-image' alt={item.title}/>
            <div className='delivery-item-title'>{item.title}</div>
        </div>
    </div>
  )
}

export default DeliveryItem
