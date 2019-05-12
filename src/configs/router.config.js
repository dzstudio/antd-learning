import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import * as base from '../pages/base'

// 全局页面路由
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