import { useContext } from "react";
import { FoodContext } from "../../context/OrderFoods/OrderFoods";
function useOrderFoods(){
    const {foods,setFoods} = useContext(FoodContext)
    return [foods,setFoods]
}
export default useOrderFoods