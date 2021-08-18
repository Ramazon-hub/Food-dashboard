import './Sidebar.css'
import { NavLink } from "react-router-dom";
import Discount from "../svgs/Discount";
import HomeIco from "../svgs/HomeIco";
import Logo from "../svgs/Logo";
import LogoutIco from "../svgs/LogoutIco";
import Messages from "../svgs/Messages";
import NotificationIco from "../svgs/NotificationIco";
import SozlamalrIco from "../svgs/Sozlamalar";
import StatistikIco from "../svgs/StatistikIco";

function Sidebar(){
    return(
        <div className="Sidebar">
           <NavLink to="/" className="logo">
               <Logo/>
           </NavLink>
           <ul className="navlist">
               <li className="navitem">
                   <NavLink to="/home" className="navlink" activeClassName="active-navlink" >
                       <span>
                            <HomeIco/>
                       </span>
                   </NavLink>
               </li>
               <li className="navitem">
                   <NavLink to="/discpunt" className="navlink" activeClassName="active-navlink" >
                        <span>
                            <Discount/>
                        </span>
                   </NavLink>
               </li> 
               <li className="navitem">
                   <NavLink to="/dashboard" className="navlink" activeClassName="active-navlink" >
                        <span>
                            <StatistikIco/>
                        </span>
                   </NavLink>
               </li> 
               <li className="navitem">
                   <NavLink to="/messages" className="navlink" activeClassName="active-navlink" >
                        <span>
                            <Messages/>
                        </span>
                   </NavLink>
               </li> 
               <li className="navitem">
                   <NavLink to="notification" className="navlink" activeClassName="active-navlink" >
                        <span>
                            <NotificationIco/>
                        </span>
                   </NavLink>
               </li> 
               <li className="navitem">
                   <NavLink to="/settings" className="navlink" activeClassName="active-navlink" >
                        <span>
                            <SozlamalrIco/>
                        </span>
                   </NavLink>
               </li>
                <li className="navitem">
                   <NavLink to="/logout" className="navlink" activeClassName="active-navlink" >
                        <span>
                            <LogoutIco/>
                        </span>
                   </NavLink>
               </li>
           </ul>
        </div>
    )
}
export default Sidebar