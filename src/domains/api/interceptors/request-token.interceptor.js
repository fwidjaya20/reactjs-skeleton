export const requestTokenInterceptor = (headers) => {
    const _token = localStorage.getItem('_token');

    if (_token) {
        return {
            ...headers,
            Authorization: `Bearer ${_token}`
        };
    }
};
