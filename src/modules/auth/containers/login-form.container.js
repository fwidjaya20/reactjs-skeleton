import React, { Component } from 'react';
import {Button} from "antd";
import LoginForm from "../components/login-form";
import {LOGIN_FORM_RULE} from "../../../domains/login/rules/login-form.rule";
import LoginService from "../../../domains/login/services/login.service";
import {NotifierService} from "../../../commons/services/notifier.service";

export default class LoginFormContainer extends Component {
    constructor(props) {
        super(props);

        this.loginService = new LoginService();
        this.rules = LOGIN_FORM_RULE;
        this.state = {
            ui: {
                isLoading: false
            }
        };
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

    handleLoginFormSubmitted = async () => {
        let errors, payload = {};

        this.refs.loginForm.validateFields((err, values) => {
            errors = err;
            payload = values;
        });

        if (!errors) {
            this.setState({ ui: {...this.state.ui, isLoading: true} });

            await this.loginService.login(payload)
                .then((result) => {
                    this.setState({ui: {...this.state.ui, isLoading: false}});
                    console.log(result);

                    NotifierService.showNotif('success', {
                        message: result.status,
                        description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
                    });

                    NotifierService.showMessage('success', 'Success Login');

                    localStorage.setItem('_token', 'tryme');
                    this.props.history.push(`/apps/dashboard`);
                })
                .catch((error) => {
                    this.setState({ui: {...this.state.ui, isLoading: false}});
                    return error;
                });
        }
    };
}