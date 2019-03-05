import React, { Component } from 'react';
import OrderFormWrapper from "../components/order-form";
import { ORDER_FORM_RULE } from '../../../domains/dashboard/rules/order-form.rule';
import {Button} from "antd";

export default class OrderWizardContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ui: {
                isLoading: false
            }
        };

        this.rules = {ORDER_FORM_RULE};

        this.order$ = {
            from: 'A',
            to: 'B',
            date: '2019/03/15'
        };
    };

    render() {
        return (
            <div className="container-fluid">
                <div className='row'>
                    <div className="col-12">
                        <OrderFormWrapper
                            ref='orderForm'
                            formRules={this.rules}
                            formValues={this.order$}/>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12">
                        <Button
                            htmlType='button'
                            loading={this.state.ui.isLoading}
                            onClick={this.handleOrderFormSubmitted}> Order </Button>
                    </div>
                </div>
            </div>
        );
    };

    handleOrderFormSubmitted = () => {
        this.setState({ ui: {...this.state.ui, isLoading: true} });
        const handleToNextStep = this.props.nextWizardStep;

        this.refs.orderForm.validateFields((errors, values) => {
            console.log(values);
            setTimeout(() => {
                this.setState({ui: {...this.state.ui, isLoading: false}});

                if (!errors) {
                    handleToNextStep();
                    // hit some service
                }
            }, 5000);
        });
    };
}
