import React, { Component } from 'react';
import './card.scss';

export default class Card extends Component {
    render() {
        return (
            <section className='card'>
                {this.props.children}
            </section>
        );
    };
}

export class CardHeader extends Component {
    render() {
        return (
            <div
                className={
                    'card-header ' + (this.props.hasDivider ? 'card-header-divider ' : '')
                }
            >
                {this.props.children}
            </div>
        );
    };
}

export class CardContent extends Component {
    render() {
        return (
            <div className='card-content'>
                {this.props.children}
            </div>
        );
    };
}

export class CardFooter extends Component {
    render() {
        return (
            <div
                className={
                    'card-footer ' + (this.props.hasDivider ? 'card-footer-divider ' : '')
                }
            >
                {this.props.children}
            </div>
        );
    };
}
