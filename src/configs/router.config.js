import React from 'react'
import { Router, Route, Switch } from 'react-router'
import * as base from '../pages/base'

export default () => (
    <Router>
        <Switch path="/" component={base.home}>
            <Route exact path="/agents" component={base.agents}></Route>
            <Route path="/dashboard" component={base.dashboard}></Route>
            <Route path="/mycruise" component={base.mycruise}></Route>
            <Route path="/help" component={base.help}></Route>
            <Route path="/profile" component={base.profile}></Route>
        </Switch>
        <Route path="/login" component={base.login}></Route>
        <Route path="*" component={base.notfound}></Route>
    </Router>

//   <Router history={hashHistory}>
//   <Route path="/" component={base.app} onEnter={isLogin}>
//     <IndexRoute component={base.example} />
//     <Route path="/desk$/index" component={base.example} />
//     {/** *菜单 开始 */}
//     <Route path="/echarts" component={menu.echarts} />
//     <Route path="/editor" component={menu.editor} />
//     {/** *菜单 结束 */}
//     {/** *系统设置 开始 */}
//     <Route path={`/${set}/userManage`} component={sysSet.userManage} />
//     <Route path={`/${set}/roleManage`} component={sysSet.roleManage} />
//     <Route path={`/${set}/moduleManage`} component={sysSet.moduleManage} />
//     {/** *系统设置 结束 */}
//   </Route>
//   <Route path="/login" component={base.login} />
//   <Route path="*" component={base.notfound} />
//  </Router>
)