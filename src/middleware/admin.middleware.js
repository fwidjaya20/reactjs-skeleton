import React from 'react';
import { Redirect } from 'react-router-dom';

export class MustAdmin {
    handle() {
        if ('ADMIN' !== localStorage.getItem('role')) {
            return (
                <Redirect
                    to={{pathname: `/auth/login`}} />
            );
        }
    };
};
