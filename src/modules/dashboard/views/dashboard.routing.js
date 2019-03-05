import DashboardPage from "./pages/dashboard.page";
import DashboardWizardPage from "./pages/dashboard-wizard.page";

const routing = [
    {
        path: '/apps/dashboard',
        exact: true,
        component: DashboardPage
    },
    {
        path: '/apps/dashboard/wizard',
        exact: true,
        component: DashboardWizardPage
    },
];

export const DASHBOARD_ROUTING = routing;