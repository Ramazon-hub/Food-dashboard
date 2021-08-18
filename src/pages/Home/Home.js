import './Home.css';
import { Link, Switch,Route, useRouteMatch } from 'react-router-dom';
import Dishes from '../../components/Dishes/Dishes';
function Home(){
    const {url,path} = useRouteMatch();
    console.log(url,'url');
    console.log(path,'path');
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
                                <Link to={`${url}/hotdishes`} className="nested-link" activeClassName="active-nested-link">Hot Dishes</Link>
                            </li>
                            <li className="nested-item">
                                <Link to={`${path}/colddishes`} className="nested-link" activeClassName="active-nested-link">Cold Dishes</Link>
                            </li>
                            <li className="nested-item">
                                <Link to={`${url}/soup`} className="nested-link" activeClassName="active-nested-link">Soup</Link>
                            </li>
                            <li className="nested-item">
                                <Link to={`${url}/grill`} className="nested-link" activeClassName="active-nested-link">Grill</Link>
                            </li>
                            <li className="nested-item">
                                <Link to={`${url}/appetizer`} className="nested-link" activeClassName="active-nested-link">Appetizer</Link>
                            </li>
                            <li className="nested-item">
                                <Link to={`${url}/disert`} className="nested-link" activeClassName="active-nested-link">Disert</Link>
                            </li>
                        </ul>       
                        <Switch>
                            <Route path={`${url}/hotdishes`} component={Dishes}/>
                            <Route path={`${path}/colddishes`} component={Dishes} />
                            <Route path={`${path}/soup`} component={Dishes}/>
                            <Route path={`${path}/grill`} component={Dishes}/>
                            <Route path={`${path}/appetizer`} component={Dishes}/>
                            <Route path={`${path}/disert`} component={Dishes}/>

                            
                               
                        </Switch>                
                    
                </div>
                <div className="orders">
                    <p>Orders</p>
                </div>
        </div>
    )
}
export default  Home
