import ApiClient from "../../api/api.client";
import { stringify } from 'query-string';

export default class LoginService extends ApiClient {

    /***
     *
     * @param payload
     */
    login = (payload) => {
        const params = stringify({
            id: 1
        });

        return this.request('GET', `users?${params}`, payload);
    }
}
