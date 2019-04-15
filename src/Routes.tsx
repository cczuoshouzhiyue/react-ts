import * as React from 'react';
import { Router, Route, Switch } from 'dva/router';
import App from './App';
import About from './routers/About/index';
import Api from './routers/API/index'
import GettingStarted from './routers/GettingStarted/index';
import HomePage from './routers/HomePage/index';
import Setting from './routers/Setting/index'
import UnreadMessage from './routers/UnreadMessage/index';
import Error from './routers/Error/index'

export const routerConfig = ({history}:any) => {
    return (
        <Router history={history}>
         <App>
             <Route path= '/' render={() =>
               <Switch>
                   <Route exact={true} path='/'  component = { HomePage } />
                   <Route  path='/home'  component = { HomePage } />
                   <Route  path='/unerad'  component = { UnreadMessage } />
                   <Route  path='/getting'  component = { GettingStarted } />
                   <Route  path='/api'  component = { Api } />
                   <Route  path='/about'  component = { About } />
                   <Route  path='/setting'  component = { Setting } />
                   <Route component={Error}/>
               </Switch>
            } />
         </App>
        </Router>
    )
};