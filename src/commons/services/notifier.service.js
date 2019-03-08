import {notification, message} from "antd";

export class NotifierService {
    static showNotif = (type, config = {}) => {
        notification[type]({
            duration: 2,
            placement: 'bottomRight',
            ...config
        });
    };

    static showMessage = (type, content, duration = 1) => {
        message[type](content, duration);
    };
}