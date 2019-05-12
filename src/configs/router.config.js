import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import * as base from '../pages/base'

// The root route for whole app.
export default () => (
    <Router>
        <Switch>
            <Route exact path="/" component={base.home} />
            <Route path="/(agents|dashboard|mycruise|help|profile)/" component={base.home} />
            <Route path="/login" component={base.login} />
            <Route component={base.notfound} />
        </Switch>
    </Router>
)