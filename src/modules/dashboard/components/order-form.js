import React, { Component } from 'react';
import { Form, Input, DatePicker } from "antd";
import moment from "moment";

class OrderForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rule: this.props.formRules
        };
    };

    componentDidMount() {
        /**
         * this statement able to use if form component is default component
         *
         * this.props.form.setFields(this.props.formValues);
         */
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const dateFormat = 'DD/MM/YYYY';
        const formVal = this.props.formValues;
        return (
            <Form noValidate>
                <Form.Item>
                    <label htmlFor='from'> From </label>
                    {
                        getFieldDecorator('from', {
                            initialValue: (formVal) ? formVal['from'] : '',
                            rules: this.state.rule['from']})(

                            <Input id='from'/>
                        )
                    }
                </Form.Item>
                <Form.Item>
                    <label htmlFor='to'> To </label>
                    {
                        getFieldDecorator('to', {
                            initialValue: formVal ? formVal['to'] : '',
                            rules: this.state.rule['to']})(

                            <Input id='to'/>
                        )
                    }
                </Form.Item>
                <Form.Item>
                    <label htmlFor='date'> Date </label>
                    {
                        getFieldDecorator('date', {
                            initialValue: formVal ? moment(formVal['date'], dateFormat): null,
                            rules: this.state.rule['date']})(

                            <DatePicker
                                id='date'
                                className='w-100'
                                format={dateFormat} />
                        )
                    }
                </Form.Item>
            </Form>
        );
    };
}

const OrderFormWrapper = Form.create({})(OrderForm);

export default OrderFormWrapper;
