import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';

import { checkLogin } from '../../../configs/common'
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import asyncComponent from '../../../components/asyncComponent';

export default class Home extends Component {
    constructor(props, context) {
        super(props, context)

        // User current path as key to specify current highlight tab.
        const currentPath = this.props.location.pathname
        this.state = {
            isLogin : checkLogin(),
            selectedTab : (currentPath === '/' ? '/agents' : currentPath)
        }
    }

    componentWillReceiveProps(nextProps) {
        // Update current highlight tab key.
        const currentPath =nextProps.location.pathname
        this.setState({selectedTab : (currentPath === '/' ? '/agents' : currentPath)})
    }

    onLogout() {
        // Clear login_token the only login state identifier.
        sessionStorage.removeItem('login_token')
        this.setState({ isLogin : false })
    }

    render() {
        const AsyncAgents = asyncComponent(() => import('../agents/agents'))
        const AsyncDashboard = asyncComponent(() => import('../dashboard/dashboard'))
        const AsyncMycruise = asyncComponent(() => import('../mycruise/mycruise'))
        const AsyncHelp = asyncComponent(() => import('../help/help'))
        const AsyncProfile = asyncComponent(() => import('../profile/profile'))

        return (
            <div>
                <Header selectedTab={ this.state.selectedTab } onLogout={ () => { this.onLogout() } } ></Header>
                <div id="mainContent">
                {
                    this.state.isLogin ? 
                    <Switch>
                    <Route exact path="/" component={AsyncAgents} />
                    <Route path="/agents" component={AsyncAgents} />
                    <Route path="/dashboard" component={AsyncDashboard} />
                    <Route path="/mycruise" component={AsyncMycruise} />
                    <Route path="/help" component={AsyncHelp} />
                    <Route path="/profile" component={AsyncProfile} />
                    </Switch> : <Redirect to="/login" />
                }
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
