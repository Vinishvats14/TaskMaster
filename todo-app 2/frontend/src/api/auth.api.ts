import api from './axios';
import { SignupInput, SigninInput, ForgotPasswordInput } from '../schemas/auth.schema';

export const authAPI = {
  signup: async (data: SignupInput) => {
    const response = await api.post('/auth/signup', data);
    return response.data;
  },

  signin: async (data: SigninInput) => {
    const response = await api.post('/auth/signin', data);
    return response.data;
  },

  forgotPassword: async (data: ForgotPasswordInput) => {
    const response = await api.post('/auth/forgot-password', data);
    return response.data;
  },

  resetPassword: async (token: string, password: string) => {
    const response = await api.post('/auth/reset-password', { token, password });
    return response.data;
  },
};
