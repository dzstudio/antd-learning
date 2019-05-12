import React, { Component } from 'react'
import { Menu, Icon, Row, Col, Button, Popconfirm } from 'antd'
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom'

export default class Header extends Component {
    constructor(props, context) {
        super(props)
        const token = sessionStorage.getItem('login_token')
        this.state = {
            userToken: token,
            navigateTo: ''
        }        
    }

    componentWillReceiveProps(nextProps) {
        this.setState({navigateTo: ''})
    }

    handleClick = (e) => {
        this.setState({ navigateTo: e.key})
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
                                <label>Signed in as <Link to="/profile">{ this.state.userToken }</Link></label>
                                <Popconfirm onConfirm={this.props.onLogout} placement="bottomRight" title="Are you sure to logout？" icon={<Icon type="question-circle-o" style={{ color: 'red' }} />}>
                                    <Button  type="link"><Icon type="caret-right" style={{ color: '#1890ff' }} />Sign out</Button>
                                </Popconfirm>
                            </Col>
                        </Row>
                        <Row className="row text-right">
                            <Col>
                                <Menu selectedKeys={[this.props.selectedTab]} onClick={this.handleClick}>
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