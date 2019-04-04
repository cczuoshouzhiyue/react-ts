import * as React from 'react';
import { HashRouter, Route, Switch}  from 'react-router-dom';
import App from './App';
import About from './routers/About/index';
import Api from './routers/API/index'
import GettingStarted from './routers/GettingStarted/index';
import HomePage from './routers/HomePage/index';
import Setting from './routers/Setting/index'
import UnreadMessage from './routers/UnreadMessage/index';
import Error from './routers/Error/index'

class Router extends React.Component{
    public render () {
        return (
            <HashRouter>
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
            </HashRouter>
        )
    }
}
export default Router