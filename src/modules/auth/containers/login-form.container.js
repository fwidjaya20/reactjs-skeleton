import React, { Component } from 'react';
import {Button} from "antd";
import LoginForm from "../components/login-form";
import {LOGIN_FORM_RULE} from "../../../domains/login/rules/login-form.rule";

export default class LoginFormContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ui: {
                isLoading: false
            }
        };

        this.rules = LOGIN_FORM_RULE;
    }

    render() {
        return (
            <div className="row mb-4">
                <div className="col-12">
                    <LoginForm
                        ref='loginForm'
                        formRules={this.rules}/>
                </div>
                <div className="col-12">
                    <Button
                        htmlType='button'
                        loading={this.state.ui.isLoading}
                        type='primary'
                        block
                        onClick={this.handleLoginFormSubmitted}> {!this.state.ui.isLoading ? 'Login' : ''} </Button>
                </div>
            </div>
        );
    };

    handleLoginFormSubmitted = () => {
        this.refs.loginForm.validateFields((errors, values) => {
            console.log(errors, values);
            if (!errors) {
                this.setState({ ui: {...this.state.ui, isLoading: true} });

                setTimeout(() => {
                    this.setState({ui: {...this.state.ui, isLoading: false}});

                    localStorage.setItem('_token', 'tryme');

                    this.props.history.push(`/apps/dashboard`);
                }, 2000);
            }
        })
    }
}