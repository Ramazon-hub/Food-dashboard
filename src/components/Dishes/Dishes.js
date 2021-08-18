import './Dishes.css'
import foods from "../../assets/fonts/data/Foodsdata";
import Food from "../Food/Food";

function Dishes(){
    return(
        <div>
            <div className="choose-dine">
                <p className="choose-dishes">Choose Dishes</p>     

            </div>
            {
                foods.length>0 && 
                <ul className="food-list">

                    {
                        foods.map(food=>(
                            <Food
                                key = {food.id}
                                img = {food.img}
                                foodName = {food.foodName}
                                price = {food.price}
                                qoldiq = {food.qoldiq}

                             />
                         ))
                    }
                </ul>
            }
        </div>
    )
}
export default Dishes