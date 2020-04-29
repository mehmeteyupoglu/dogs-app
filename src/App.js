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
                    <Route path="/" exact component={Homepage} />
                    <Route path='/hakkinda' exact component={() => <div>Hakkimizda Componenti</div>} />
                    <Route path="/tur/:yazilanTur" exact component={FilteredDogs} />
                    <Route path="/details/:id/:breedSlug" exact component={Details} />
                    <Route component={() => <div><h1>404 sayfa bulununamadi</h1></div>} />
                </Switch>
            </div>
            
        );
    }
}


export default App;
