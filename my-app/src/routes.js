import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Initial from './pages/Initial';
//import Register from './pages/Register'; 
//import Profile from './pages/Profile';
//import NewIncident from './pages/NewIncident';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>        
                <Route path="/" exact component={Initial}/>
            </Switch>
        </BrowserRouter>
    );
}