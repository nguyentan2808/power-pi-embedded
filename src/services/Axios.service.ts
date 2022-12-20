import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

class AxiosService {
    private _axios: AxiosInstance;

    constructor() {
        this._axios = axios.create({
            baseURL: 'http://localhost:8080',
            timeout: 3000,
            withCredentials: true,
        });
        this._axios.interceptors.request.use(
            AxiosService._requestInterceptor,
            AxiosService._errorInterceptor
        );
        this._axios.interceptors.response.use(
            AxiosService._responseInterceptor,
            AxiosService._errorInterceptor
        );
    }

    get axios() {
        return this._axios;
    }

    static _requestInterceptor(config: AxiosRequestConfig) {
        return config;
    }

    static _responseInterceptor(response: AxiosResponse) {
        return response;
    }

    static _errorInterceptor(error: any) {
        return Promise.reject(error);
    }
}

export default new AxiosService();
