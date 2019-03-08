import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { DASHBOARD_ROUTING as DashboardRouting } from "../modules/dashboard/views/dashboard.routing";
import { AUTH_ROUTING as AuthRouting } from "../modules/auth/views/auth.routing";
import { routeFactory } from "../commons/factories/router/router.factory";
import NotAuthorized from "../commons/views/pages/401/not-authorized.page";
import PageNotFound from "../commons/views/pages/404/not-found.page";

const routes = [
    ...DashboardRouting,
    ...AuthRouting,
    {
        path: '/401',
        exact: true,
        component: NotAuthorized
    },
    {
        component: PageNotFound
    }
];

export const ApplicationRouting = (
    <Router>
        <Switch>
            {routeFactory(routes)}
        </Switch>
    </Router>
);
