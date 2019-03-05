import React, { Component } from 'react';
import AppsTemplate from "../../../../templates/apps/apps-template";
import {Button, Steps} from "antd";
import OrderWizardContainer from "../../containers/order-wizard.container";

export default class DashboardWizardPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            wizardStep: 0
        };
    };

    render() {
        const contentStep1 = (<OrderWizardContainer nextWizardStep={this.next} />);
        const contentStep2 = (
            <section className='container-fluid'>
                <div className='row'>
                    <div className="col-12"> Wizard Step 2 </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <Button
                            htmlType='button'
                            onClick={this.prev}> Prev </Button>
                        &nbsp;
                        <Button
                            htmlType='button'
                            onClick={this.next}> Next </Button>
                    </div>
                </div>
            </section>
        );
        const contentStep3 = (
            <section className='container-fluid'>
                <div className='row'>
                    <div className="col-12"> Wizard Step 3 </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <Button
                            htmlType='button'
                            onClick={this.prev}> Prev </Button>
                        &nbsp;
                        <Button
                            htmlType='button'
                            onClick={this.next}> Next </Button>
                    </div>
                </div>
            </section>
        );

        this.steps = [
            { title: '', content: contentStep1 },
            { title: '', content: contentStep2 },
            { title: '', content: contentStep3 },
        ];

        return (
            <AppsTemplate>
                <Steps className='my-3' current={this.state.wizardStep}>
                    {
                        this.steps.map((value, index) => <Steps.Step key={index} title={value.title} />)
                    }
                </Steps>

                {
                    this.state.wizardStep < 3 ?
                        (
                            this.steps[this.state.wizardStep].content
                        ) :
                        (
                            <div className='container-fluid'>
                                Wizard Step Done
                            </div>
                        )
                }
            </AppsTemplate>
        );
    };

    prev = () => {
        const prevStep = this.state.wizardStep - 1;
        this.setState({
            wizardStep: prevStep
        });
    };

    next = () => {
        const nextStep = this.state.wizardStep + 1;

        if ( nextStep <= 3 ) {
            return this.setState({
                wizardStep: nextStep
            });
        }

        this.handleWizardCompleted();
    };

    handleWizardCompleted = () => {
        this.props.history.push('/apps/dashboard');
    };
}
