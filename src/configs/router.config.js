import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import asyncComponent from '../components/asyncComponent';

// The root route for whole app.
const AsyncHome = asyncComponent(() => import('../pages/base/home/home'))
const AsyncLogin = asyncComponent(() => import('../pages/base/login/login'))
const AsyncNotFound = asyncComponent(() => import('../pages/base/notfound'))

export default () => (
    <Router>
        <Switch>
            <Route exact path="/" component={AsyncHome} />
            <Route path="/(agents|dashboard|mycruise|help|profile)/" component={AsyncHome} />
            <Route path="/login" component={AsyncLogin} />
            <Route component={AsyncNotFound} />
        </Switch>
    </Router>
)