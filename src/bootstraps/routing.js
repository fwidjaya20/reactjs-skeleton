import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { DASHBOARD_ROUTING as DashboardRouting } from "../modules/dashboard/views/dashboard.routing";

const routeFactory = (routeObj) => {
    return routeObj.map((value, index) => {
        return (<Route exact={value.exact} path={value.path} component={value.component} key={index}/>);
    });
};

export const ApplicationRouting = (
    <Router>
        <Switch>
            {routeFactory(DashboardRouting)}
        </Switch>
    </Router>
);