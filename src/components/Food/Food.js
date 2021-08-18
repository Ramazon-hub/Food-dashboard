import './Food.css'
function Food( { img,foodName,price,qoldiq} ){

    return(
        <>
            <li className="food-list-item">
                <img src={img} className="food-img"/>
                <h3 className="food-name" >{foodName}</h3>
                <p className="food-price" >{price}</p>
                <p className="food-qoldiq">{qoldiq}</p>
            </li>
        </>
    )
}
export default Food