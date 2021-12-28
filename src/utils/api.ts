import axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios';
import { useEffect, useState } from 'react';

const API_BASE_URL = '';

export const axiosConfig = {
    baseURL: API_BASE_URL,
    headers: { 'x-app-id': 'APP' },
};
const axiosClientInstance = axios.create(axiosConfig);

const fetchApiEffect = (path: string, method: Method) => {
    const [response, setResponse] = useState({
        error: null,
        data: {},
        loading: true,
    });

    const consultAPI = async () => {
        try {
            const options: AxiosRequestConfig = {
                url: `${API_BASE_URL}/${path}`,
                method: method
            }
            const axiosResponse: AxiosResponse = await axiosClientInstance(options);
            setResponse({ ...response, loading: false, data: axiosResponse, }
            )
        } catch (error: any) {
            setResponse({ ...response, loading: true, error: error, }
            )
        }
    }

    useEffect(() => {
        consultAPI();
    }, []);

    return response;
};

export { fetchApiEffect };

