import React, { Component } from 'react';
import {Button} from "antd";
import LandingTemplate from "../401/not-authorized.page";

export default class PageNotFound extends Component {
    render() {
        return (
            <LandingTemplate>
                <div className="landing-card">
                    <div className="card">
                        <div className='text-center'>
                            <h3> Page Not Found! </h3>
                            <Button htmlType='button' onClick={this.props.history.goBack()}> Go Back </Button>
                        </div>
                    </div>
                </div>
            </LandingTemplate>
        );
    }
}