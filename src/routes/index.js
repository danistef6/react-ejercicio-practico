import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from '../components/pages/main';
import MainDetail from '../components/pages/mainDetail';


const Routes = () => (
    <BrowserRouter>
        <>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/Detail/:Id" component={MainDetail} />
            </Switch>
        </>
    </BrowserRouter>
);

export default Routes;
