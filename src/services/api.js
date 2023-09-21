import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api'
});

export const loginUser = async (email, password) => {
    try {
        const response = await api.post('/auth/login', { email, password });
        return response.data;
    } catch (error) {
        if (error.response) {
            throw new Error(`An error has occurred: ${error.response.status}`);
        }
        throw error;
    }
};

export const registerUser = async (email, password) => {
    try {
        const response = await api.post('/auth/register', { email, password });
        return response.data;
    } catch (error) {
        if (error.response) {
            throw new Error(`An error has occurred: ${error.response.status}`);
        }
        throw error;
    }
};

export const initiatePasswordReset = async (email) => {
    try {
        const response = await api.post('/auth/forgotpassword', { email });
        return response.data;
    } catch (error) {
        if (error.response) {
            throw new Error(`An error has occurred: ${error.response.status}`);
        }
        throw error;
    }
};
