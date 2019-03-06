import React, { Component } from 'react';
import {Form, Input} from "antd";

class LoginFormComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rule: this.props.formRules
        };
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return(
            <Form noValidate>
                <Form.Item>
                    <label htmlFor='email'> E-mail </label>
                    {
                        getFieldDecorator('email', {rules: this.state.rule.email})(
                            <Input id='email' type='email' />
                        )
                    }
                </Form.Item>
                <Form.Item>
                    <label htmlFor='password'> Password </label>
                    {
                        getFieldDecorator('password', {rules: this.state.rule.password})(
                            <Input id='password' type='password' />
                        )
                    }
                </Form.Item>
            </Form>
        );
    };
}

const LoginForm = Form.create({})(LoginFormComponent);

export default LoginForm;