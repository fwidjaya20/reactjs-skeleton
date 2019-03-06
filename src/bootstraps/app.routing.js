import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { DASHBOARD_ROUTING as DashboardRouting } from "../modules/dashboard/views/dashboard.routing";
import { AUTH_ROUTING as AuthRouting } from "../modules/auth/views/auth.routing";
import { routeFactory } from "../commons/factories/router/router.factory";

const routes = [
  ...DashboardRouting,
  ...AuthRouting
];

export const ApplicationRouting = (
    <Router>
        <Switch>
            {routeFactory(routes)}
        </Switch>
    </Router>
);
