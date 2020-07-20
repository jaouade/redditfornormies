import {Router,Switch,Route} from 'react-router-dom';
import React from 'react';
import {createBrowserHistory} from 'history';
import Dashboard from '../components/Dashboard';
import Explore from '../components/Explore';
import NotFound from '../components/NotFound';

export const history=createBrowserHistory();

const AppRouter=()=>(
		<Router history={history}>
			<Switch>
				<Route path="/" component={Dashboard} exact={true}/>
				<Route path="/home" component={Dashboard} />
				<Route path="/explore" component={Explore} />
			</Switch>
		</Router>
)

export default AppRouter;