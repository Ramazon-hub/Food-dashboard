import foods from '../../assets/fonts/data/Foodsdata'
import useOrderFoods from '../../hooks/useOrderFoods/useOrderFoods'
import './Food.css'
function Food( { id,img,foodName,price,qoldiq} ){
    const [arr,setArr] = useOrderFoods()
    const clickFood = (e=>{
        const foundFood = foods.find(food=>food.id === Number(e.currentTarget.dataset.id));
            if(arr.length>0){            
                arr.forEach(el=>{
                    if(el.id === foundFood.id){
                        el.qty=el.qty+1;
                        setArr([ ...arr])
                        // console.log(el.qty)
                        
                    }
              
            })
        }
        if(!arr.includes(foundFood)){
            setArr([ ...arr,foundFood])

        }
        })

    return(
        <>
            <li className="food-list-item" onClick={clickFood} data-id={id}>
                <img src={img} className="food-img" alt="img" />
                <h3 className="food-name" >{foodName}</h3>
                <p className="food-price" >${price}</p>
                <p className="food-qoldiq">{qoldiq}</p>
            </li>
        </>
    )
}
export default Food