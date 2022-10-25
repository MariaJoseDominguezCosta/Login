import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
import FormL from './components/organisms/Container';
import FormR from './components/organisms/ContainerRegister';

const Router = () => (
<BrowserRouter>
    <Switch>
        <Route exact path="/" component={FormL}/>
        <Route path="/register" component={FormR}/>
    </Switch>
</BrowserRouter>
);

export default Router;