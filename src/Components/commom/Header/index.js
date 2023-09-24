import React from 'react'
import './index.css'

const header = () => {
  return (
    <>
    <div className="max-width header">
        <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="Zomato-logo" className='zomato-logo'/>
        <div className='header-right'>
            <div className='header-location-search-container'> 
              <div className='location-wrapper'>
                <div className='location-icon-name'> 
                  <i className="fi fi-rr-marker absolute-center location-icon"></i>
                  <div> Surat </div>
                </div>
                <i class="fi fi-rr-caret-down absolute-center"></i>
              </div>
              <div className='location-search-separator'></div>
              <div className='header-search-bar'> 
                <i className="fi fi-rr-search absolute-center search-icon"></i>
                <input type='text' placeholder='Search for restaurent, cuisine or a dish' className='search-input' />
              </div>
            </div>
            <div className='profile-wrapper'> 
              <img src="https://b.zmtcdn.com/data/user_profile_pictures/028/780711e526a516d047f7c57075891028.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A" 
                  alt='profile-image'
                  className='header-profile-image'
              />
              <span className='header-username'>Sama</span>
              <i className="fi fi-rr-angle-small-down absolute-center profile-options-icon"></i>
            </div>
        </div>
    </div>
    <div className='max-width header-location'>
       <span className='location'> Home </span><span className='slash'>/</span> 
       <span className='location'> India </span><span className='slash'>/</span>
       <span className='location'> Surat </span> <span className='slash'>/</span>
    </div>
    </>
  )
}

export default header
