import React from 'react'
import './Home.css'
import ExploreMenu from '../ExploreMenu/ExploreMenu'
import FoodDisplay from '../components/FoodDisplay/FoodDisplay'



const home = () => {

 const [category,setCategory]= useState("All")


  return (
    <div>
      <Headers/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
    </div>
  )
}

export default home
