import './Home.css';
import { Link, Switch,Route, useRouteMatch } from 'react-router-dom';
import Dishes from '../../components/Dishes/Dishes';
import {OrderFood } from '../../components/OrderFood/OrderFood';
import useOrderFoods from '../../hooks/useOrderFoods/useOrderFoods';
import Creditcard from '../../components/svgs/Creditcard';
import Paypal from '../../components/svgs/Paypal';
import Wallet from '../../components/svgs/Wallet';
function Home(){
    const {url,path} = useRouteMatch();
    const [arr] = useOrderFoods();
    return(
        <div className="home">
                <div className="main-section">
                    <div className="main-top">
                        <div>
                        <h1 className="resto-name">Jaegar Resto</h1>
                        <p className="date">Tuesday,2 Feb 2021</p>
                        </div>
                        <label className="search-label">
                            <input type="text" placeholder="Search for food,coffe,etc..."  className="search-food"/>

                        </label>
                        
                    </div>
                        <ul className="nested">
                            <li className="nested-item">
                                <Link to={`${url}/hotdishes`} className="nested-link" >Hot Dishes</Link>
                            </li>
                            <li className="nested-item">
                                <Link to={`${path}/colddishes`} className="nested-link" >Cold Dishes</Link>
                            </li>
                            <li className="nested-item">
                                <Link to={`${url}/soup`} className="nested-link" >Soup</Link>
                            </li>
                            <li className="nested-item">
                                <Link to={`${url}/grill`} className="nested-link" >Grill</Link>
                            </li>
                            <li className="nested-item">
                                <Link to={`${url}/appetizer`} className="nested-link" >Appetizer</Link>
                            </li>
                            <li className="nested-item">
                                <Link to={`${url}/disert`} className="nested-link" >Disert</Link>
                            </li>
                        </ul>  
                        <Switch>
                            <Route path={`${path}`} component={Dishes} exact />
                            <Route path={`${path}/:type`} component={Dishes} />
                        </Switch>                
                    
                </div>
                <div className="orders">
                    <div className="orders-type">
                            <h3 className="order-number">Orders #332535</h3>
                            <button className="order-type-btn "  >Dine In</button>
                            <button className="order-type-btn "  >To Go</button>
                            <button className="order-type-btn "  >Delivery</button>
                           <div className="order-data">
                                <p className=" item">Item</p>
                                <p className=" qty" >Qty</p>
                                <p className="">Price</p>
                           </div>
                    </div>
                    {arr.length>0 && <ul className="orders-list">
                        {
                            arr.map(food=>(
                                 <OrderFood 
                                 foodName={food.foodName}
                                  qty={food.qty} 
                                  price={food.price} 
                                  img={food.img} 
                                  deleteBtn={food.deleteBtn}  
                                  />

                            ))
                        }
                    </ul> 
                    }
                                        
                   <div className="switchto-payment">
                       <div className="discount-div">
                         <p>Dicount</p>
                         <h4>$ 0</h4>
                       </div>
                       <div className="sub-total-div">
                       <p>Sub total</p>
                       <h4>$ 10</h4>
                       </div>
                       <button className="continue-payment" onClick={()=>{
                           const modal= document.querySelector(".modal");
                           if(arr.length>0){
                               modal.style.cssText = `display:block;`
                           }

                           
                           console.log("hello")
                       }}>Continue Payment</button>
                   </div>
                </div>
                <div className="modal">
                    <div className="payment-modal" onClick={(e)=>{
                        console.log(e.target);
                        }}>
                        <div className="payment-modal-top">
                            <h3 className="payment-h3">Payment</h3>
                            <p className="payment-method-3">3 payment method available</p>
                        </div>

                            <p className="payment-methods-p">Peyment Methods</p>
                            <form>
                                <label htmlFor="id">
                                    <Creditcard/>
                                    <span>Credit Card</span>
                                    <input type="radio" id="id"/>
                                </label>
                                <label>
                                    <Paypal/>
                                    <span>Paypal</span>
                                    <input type="radio"/>
                                </label>
                                <label>
                                    <Wallet/>
                                    <span>Wallet</span>
                                    <input type="radio"/>
                                </label>
                            </form>
                    </div>

                </div>
        </div>
    )
}
export default  Home
