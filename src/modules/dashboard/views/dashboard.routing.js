import DashboardPage from "./pages/dashboard.page";
import DashboardWizardPage from "./pages/dashboard-wizard.page";
import {Authenticate} from "../../../middleware/authenticate.middleware";
import {MustAdmin} from "../../../middleware/admin.middleware";

const routing = [
    {
        path: '/apps/dashboard',
        exact: true,
        component: DashboardPage,
        middleware: [Authenticate]
    },
    {
        path: '/apps/dashboard/wizard',
        exact: true,
        component: DashboardWizardPage,
        middleware: [Authenticate, MustAdmin]
    },
];

export const DASHBOARD_ROUTING = routing;