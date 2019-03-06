import React, { Component } from 'react';
import LandingTemplate from "../../../../../templates/landing/landing-template";
import logo from '../../../../../logo.svg';
import LoginFormContainer from "../../../containers/login-form.container";

export default class LoginPage extends Component {
    render() {
        return (
            <LandingTemplate>
                <div className="landing-card">
                    <div className="card">
                        <div className='text-center'>
                            <img src={logo} width='120px' height='120px' style={{objectFit: 'cover'}} alt='' />
                        </div>
                        <div className='mt-3'>
                            <LoginFormContainer {...this.props} />
                        </div>
                    </div>
                </div>
            </LandingTemplate>
        );
    };
}
