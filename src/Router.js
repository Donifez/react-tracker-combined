import React from 'react';
import { BrowserRouter, Route , Switch } from 'react-router-dom';
import home from "./home";
import App from "./App";

const Router = () => (
   <BrowserRouter>
       <Switch>
           <Route exact path="/" src={App} />
           <Route exact path="/App/:appId" src={home} />
       
       </Switch>
   </BrowserRouter> 
);

export default Router;