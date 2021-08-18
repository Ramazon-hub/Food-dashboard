import './Dishes.css'
import foods from "../../assets/fonts/data/Foodsdata";
import Food from "../Food/Food";
import { useParams } from 'react-router-dom';

function Dishes(){
    const { type } = useParams()
    console.log(type)
    return(
        <div>
            <div className="choose-dine">
                <p className="choose-dishes">Choose Dishes</p>     
                <select className="select">
                    <option>Dine in</option>
                    <option>To Go</option>
                    <option>Delivry</option>


                </select>
            </div>
            {
                foods.length>0 && 
                <ul className="food-list">

                    {
                        foods.filter((food)=>{
                            if(food.type === type ){
                                return food
                            }
                           
                        }).map(food=>(
                            <Food
                                key = {food.id}
                                id={food.id}
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