import { notification } from 'antd';

export const errorNotifierInterceptor = (errors) => {
    if (401 === errors.request.status) {
        localStorage.removeItem('_token');
        window.location.href = `/auth/login`;

        notification.error({
            message: errors.statusText,
            description: errors.message,
            duration: 3000
        });
    }
};
