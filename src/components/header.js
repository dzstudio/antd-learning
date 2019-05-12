import React, { Component } from 'react'
import { Menu, Icon, Row, Col, Button } from 'antd'
import { Redirect } from "react-router-dom";

export default class Header extends Component {
    constructor(props, context) {
        super(props)
        const token = sessionStorage.getItem('login_token')
        this.state = {
            userToken: token,
            current: [ this.props.selectedTab ],
            navigateTo: ''
        }        
    }

    componentWillReceiveProps(nextProps) {
        this.setState({navigateTo: ''})
    }

    handleClick = (e) => {
        this.setState({current: [e.key], navigateTo: e.key})
    }
    
    render() {
        return (
            <header id="navbar" className="boxed">
                {
                    (this.state.navigateTo.length > 0) ? <Redirect to={this.state.navigateTo} /> : ''
                }
                <Row className="row text-right">
                    <Col id="navbarLogo" span={6}>
                        <label>Cruise</label>
                    </Col>
                    <Col span={18}>
                        <Row className="row text-right">
                            <Col>
                                <label>Signed in as { this.state.userToken }</label><Button type="link" onClick={ this.props.onLogout }>Sign out</Button>
                            </Col>
                        </Row>
                        <Row className="row text-right">
                            <Col>
                                <Menu selectedKeys={this.state.current} onClick={this.handleClick}>
                                    <Menu.Item key="/dashboard"><Icon type="home" />DASHBOARD</Menu.Item>
                                    <Menu.Item key="/mycruise"><Icon type="schedule" />MY CRUISE</Menu.Item>
                                    <Menu.Item key="/agents"><Icon type="solution" />AGENTS</Menu.Item>
                                    <Menu.Item key="/help"><Icon type="question-circle" />HELP</Menu.Item>
                                </Menu>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </header>
        )
    }
}