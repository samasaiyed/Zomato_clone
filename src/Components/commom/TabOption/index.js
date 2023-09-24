import React from 'react'
import './index.css'

const tabs = [
  {
    id:1,
    name:"Delivery",
    active_image: "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png", /* copied image adress from zomato website*/
    backdrop: "#FCEEC0", /* background-color for image*/
    inactive_image : "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
  },
  {
    id:2,
    name:"Dinning Out",
    active_image: "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
    backdrop: "#E5F3F3",
    inactive_image : "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
  },
];

const TabOption = ({activeTab, setActiveTab}) => {
  return (
    <div className='tab-options'>
      <div className='max-width options-wrapper'>
      {tabs.map((tab) => {
        return <div 
                onClick={() => setActiveTab(tab.name)} 
                className={`tab-item cursor-pointer absolute-center ${activeTab === tab.name && "active-tab"}`}> 
                  <div 
                    className='tab-image-container absolute-center'
                    style={{
                      backgroundColor: `${activeTab === tab.name ? tab.backdrop : ""}`}}>
                        <img className='tab-image' alt={tab.name} 
                          src={activeTab === tab.name ? tab.active_image : tab.inactive_image} />

                </div> 
                <div className='tab-name'>{tab.name}</div>
              </div>
        })}
      </div>
    </div>
  )
}

export default TabOption
