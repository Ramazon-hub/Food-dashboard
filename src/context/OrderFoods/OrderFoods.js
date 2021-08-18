import './OrderFoods.css'
import { createContext, useState } from 'react'
const FoodContext = createContext()
function FoodProvider( { children } ){
    const [foods,setFoods] = useState([])
    return(
        <FoodContext.Provider value={ { foods,setFoods } }>
            { children }
        </FoodContext.Provider>
    )
}
export {
    FoodContext,
    FoodProvider
}