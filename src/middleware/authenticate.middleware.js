import React from 'react';
import { Redirect } from 'react-router-dom';

export class Authenticate {
    handle() {
        if (!localStorage.getItem('_token')) {
            return (
                <Redirect
                    to={{pathname: `/auth/login`}} />
            );
        }
    };
};
