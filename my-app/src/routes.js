import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Initial from './pages/Initial';
import page2 from './pages/teste';
/*import page3 from './pages/page3';
import page4 from './pages/page4';*/
//import Register from './pages/Register'; 
//import Profile from './pages/Profile';
//import NewIncident from './pages/NewIncident';

export default function Routes() { 
    return(
        <BrowserRouter>
            <Switch>        
                <Route path="/" exact component={Initial}/>
                <Route path="/teste" exact component={page2}/>
                <Route component={() => <div>Page 404!</div>}/>
            </Switch>
        </BrowserRouter>
    );
    /*
                <Route path="/page3" component={page3}/>
                <Route path="/page4" component={page4}/> */
}