import LoginPage from "./pages/login/login.page";

const routing = [
    {
        path: '/auth/login',
        exact: true,
        component: LoginPage
    }
];

export const AUTH_ROUTING = routing;