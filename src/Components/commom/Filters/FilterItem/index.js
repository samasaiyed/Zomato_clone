import React from 'react'
import './index.css'

const FilterItem = ({filter}) => {
  return (
    <div className='filter-item'>
        {filter.icon && filter.icon}&nbsp;
        <div>{filter.title}</div>
    </div>
  )
}

export default FilterItem
