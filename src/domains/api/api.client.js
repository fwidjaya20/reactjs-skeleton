import { enviroment } from '../../enviroments/enviroment';
import axios from 'axios';
import {requestTokenInterceptor} from "./interceptors/request-token.interceptor";
import {errorNotifierInterceptor} from "./interceptors/error-notifier.interceptor";

export default class ApiClient {
    /***
     * API Base Endpoint
     *
     * @type {string}
     */
    baseUrl = '';

    /***
     * @type {void}
     */
    constructor() {
        this.baseUrl = enviroment.endpoint;

        this.requestInterceptors();
        this.responseInterceptors();
    }

    /***
     * Custom Request Interceptors
     *
     * @return {Object | Promise}
     */
    requestInterceptors() {
        axios.interceptors.request.use(
            (config) => {
                return {
                    ...config,
                    headers: {
                        ...config.headers,
                        ...requestTokenInterceptor(config.headers)
                    }
                };
            },
            (error) => {
                return Promise.reject(error);
            }
        )
    }

    /***
     * Custom Response Interceptors
     *
     * @return {Object | Promise}
     */
    responseInterceptors() {
        axios.interceptors.response.use(
            (response) => {
                return response;
            },
            (error) => {
                errorNotifierInterceptor(error);
                return Promise.reject(error);
            }
        )
    }

    /***
     *
     * @param method            [GET, POST, PUT, PATCH, OPTIONS]
     * @param url               {string}
     * @param payload           {object}
     * @param additionalConfig  {object}
     *
     * @type {Promise}
     * @return {Promise<resolve, reject>}
     */
    request(method, url, payload = {}, additionalConfig = {}) {
        if (method === '' || url === '') {
            console.error('METHOD and URL must be filled!');
            return;
        }

        if (typeof method !== 'string' && typeof url !== 'string') {
            console.error('METHOD and URL must be string!');
            return;
        }

        const config = {
            url: `${this.baseUrl}/${url}`,
            method: method,
            data: payload,
            ...additionalConfig
        };

        return axios.request(config);
    }
}
