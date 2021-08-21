import './OrderFood.css';
function OrderFood( { foodName,qty,img,price,deleteBtn } ){
    return(
        <>
            <li className="order-item">
                <div className="order-item-top">
                <img src={img} className="order-food-img" alt="img"/>
                <div>
                    <h3 className="order-food-name">{foodName}</h3>
                    <span className="order-food-price">$ {price}</span>
                </div>
                <p className="order-food-qty">{qty}</p>
                <p className="order-price-qty" >$ {price*qty}</p>
                </div>
                <form className="order-form">
                    <input type="text" placeholder="Order Note ..." className="order-note"/>
                    <span>
                        <img src={deleteBtn} className="order-delete-btn" alt="img" onClick={
                            ()=>{
                                console.log(qty);
                               
                            }
                        }/>
                    </span>
                </form>
            </li>
            
        </>
    )
}
function CalcFoodPrice( { totalMoney,price } ){
    return(
        <>
            <p>Discount</p>
            <p>Sub total</p>
            <p>{totalMoney*price}</p>
        </>
    )
}
export {
    OrderFood,
    CalcFoodPrice

}