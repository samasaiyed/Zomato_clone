import React, { useState } from 'react'
import Header from '../../Components/commom/Header'
import TabOption from '../../Components/commom/TabOption'
import Footer from '../../Components/commom/Footer'
import Delivery from '../../Components/Delivery'
import DinningOut from '../../Components/DinningOut'

const Homepage = () => {

  const [activeTab, setActiveTab] = useState("Delivery")
  return (
    <>
    <Header />
    <TabOption activeTab={activeTab} setActiveTab={setActiveTab}/>
    {getScreen(activeTab)}
    <Footer />
    </>
  )
}
const getScreen = (tab) =>{
    switch(tab){
        case "Delivery" :
            return <Delivery />
        case "Dinning Out" :
            return <DinningOut />
        }
}
export default Homepage
