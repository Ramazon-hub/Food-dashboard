import './App.css';

import {Switch,Route} from 'react-router-dom'
//components
//pages
import Home from './pages/Home/Home' ;
import Dashboard from './pages/Dashboard/Dashboard';
import Sozlamlar from './pages/Sozlamalar/Sozlamalar';
import Sidebar from './components/Sidebar/Sidebar';
function App() {
 return(
        <div className="app-wrapper">
            <Sidebar/>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/dashboard" component={Dashboard}/>
              <Route path="/settings" component={Sozlamlar}/>


            </Switch>
        </div>
    
 )
}

export default App;
