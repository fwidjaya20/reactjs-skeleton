import React, { Component } from 'react';
import LandingTemplate from "../../../../templates/landing/landing-template";
import {Button} from "antd";

export default class NotAuthorized extends Component {
    render() {
        return (
            <LandingTemplate>
                <div className="landing-card">
                    <div className="card">
                        <div className='text-center'>
                            <h3> You are not authorized! </h3>
                            <Button htmlType='button' onClick={this.props.history.goBack()}> Go Back </Button>
                        </div>
                    </div>
                </div>
            </LandingTemplate>
        );
    }
}
