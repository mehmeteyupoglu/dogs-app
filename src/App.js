import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./components/Header";
import {Switch, Route} from "react-router-dom";
import routes from "./routes";
import Homepage from "./containers/Homepage";
import FilteredDogs from "./containers/FilteredDogs";
import Details from './components/Details'; 

class App extends React.Component{
    render(){
        return (
            <div className="App" >
                <Header />
                <Switch>
                    {routes.map(route => {
                        return <Route path={route.path} exact={route.exact} component={route.component}/>
                    })}
                </Switch>
            </div>
            
        );
    }
}


export default App;
