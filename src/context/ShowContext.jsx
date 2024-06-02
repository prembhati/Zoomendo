import { createContext } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

 
  cont [cartItems,setCartItems] = useState({});

  const addToCart = (itemId) => {

    if (!carItems[itemId])  {

      setCartItems((prev)=>({...prev,[itemId]:1}))

 }
    else {

        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }

}
 
 const removedFromCart = (itemId) => {


    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]}))
 }
 
 useEffect(()=> {

    console.log(cartItems);
 

 },[cartItems])
 
 
 
 
 
    const contextValue = {
    food_list,
    cartItems,
    SetCartItems,
    addToCart,
    removedFromCart

  }
 
  return (
    <StoreContext.Provider value={contextValue}>
        {props.children}
    </StoreContext.Provider>
  )








}