import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { DASHBOARD_ROUTING as DashboardRouting } from "../modules/dashboard/views/dashboard.routing";
import {AUTH_ROUTING as AuthRouting } from "../modules/auth/views/auth.routing";

const routeFactory = (routeObj) => {
    return routeObj.map((value, index) => {
        return (<Route exact={value.exact} path={value.path} component={value.component} key={index}/>);
    });
};

export const ApplicationRouting = (
    <Router>
        <Switch>
            {routeFactory(AuthRouting)}
            {routeFactory(DashboardRouting)}
        </Switch>
    </Router>
);

export const WebRouting = (
    <Router>
        <Switch>
            {routeFactory(AuthRouting)}
        </Switch>
    </Router>
);