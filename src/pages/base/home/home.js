import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';

import { checkLogin } from '../../../configs/common'
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import * as base from '../'

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
        return (
            <div>
                <Header selectedTab={ this.state.selectedTab } onLogout={ () => { this.onLogout() } } ></Header>
                <div id="mainContent">
                {
                    this.state.isLogin ? 
                    <Switch>
                    <Route exact path="/" component={base.agents} />
                    <Route path="/agents" component={base.agents} />
                    <Route path="/dashboard" component={base.dashboard} />
                    <Route path="/mycruise" component={base.mycruise} />
                    <Route path="/help" component={base.help} />
                    <Route path="/profile" component={base.profile} />
                    </Switch> : <Redirect to="/login" />
                }
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
