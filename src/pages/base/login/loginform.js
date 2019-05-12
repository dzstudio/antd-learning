import React, { Component } from 'react'
import { Spin, Form, Input, Icon, Button } from 'antd'
import { Redirect } from "react-router-dom";
    
function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

export default class LoginForm extends Component {
    constructor(props, context) {
        super(props)
        this.state = {
          loading: false,
          loginSuccess: false
        }
    }

    componentDidMount() {
        this.props.form.validateFields();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const username = values.username
                sessionStorage.setItem('login_token', username)
                this.setState({ loginSuccess : true })
            }
        });
    }

    render() {

        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched, } = this.props.form;
        
        // Only show error after a field is touched.
        const usernameError = isFieldTouched('username') && getFieldError('username');
        const passwordError = isFieldTouched('password') && getFieldError('password');
      
        return (
            <div id="loginPage">
                <div className="login-header">
                    <label>Front End Homework - 张黎 0510</label>
                </div>
                {
                    (this.state.loginSuccess) ? <Redirect to="/" /> : ''
                }
                <Spin spinning={this.state.loading}>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''} >
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                            )}
                        </Form.Item>
                        <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
                            {getFieldDecorator('password', {
                                rules: [{required: true, message: 'Please input your password!'}]
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())} >Log in</Button>
                        </Form.Item>
                        <Form.Item>
                            <label>Tips: Mock data, you can input any word.</label>
                        </Form.Item>
                    </Form>
                </Spin>
            </div>
        )
    }
}