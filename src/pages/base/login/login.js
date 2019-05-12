import React, { Component } from 'react'
import { Form } from 'antd'

import LoginForm from "./loginform";
import "../../../styles/login.css";

export default class Login extends Component {
    constructor(props, context) {
        super(props)
    }

    render() {
        const WrappedLoginForm = Form.create({ name: 'login_form' })(LoginForm);
        return (
            <WrappedLoginForm />
        )
    }
}