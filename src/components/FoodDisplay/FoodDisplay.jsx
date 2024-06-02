import React from 'react'
import './FoodDisplay.css'
import { storeContext } from '../../context/StoreContext'
import Fooditem from '../Fooditem/Fooditem'



const FoodDisplay = ({category}) => { 
    const {food_list} = useContext(StoreContext)


  return (
    <div className='food-display' id='food-display'>
        <h2> Top Dishes Near You </h2>
     <div className="food-display-list">
        {food_list.map((item,index)=>{

         {console.log(category,item.category);}

         if(category==="All" || category===item.category)


{

            return <FoodItem key={index} id={item.id} name={item.name} description={item.description} price={item.price} image={item.image} />
}
        })}
     </div>
    </div>
  )
}

export default FoodDisplay