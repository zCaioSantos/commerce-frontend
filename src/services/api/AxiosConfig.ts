import axios, { AxiosError, AxiosRequestConfig } from 'axios';

import { toast } from 'react-toastify';

const api = axios.create({
 baseURL: 'http://localhost:5000/',
});

api.interceptors.request.use(
 async (request: AxiosRequestConfig) => {
  const token = await localStorage.getItem('@token');
  if (token) {
   request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
 },
 (error: AxiosError) => {
  toast.error('Erro na Authorization!', {
   toastId: 'authorization',
  });
  Promise.reject(error);
 }
);

api.interceptors.response.use(
 (response) => {
  return response;
 },
 (error: AxiosError) => {
  switch (error.response?.status) {
   case 401:
   case 403:
    toast.error('Usuário sem permissão!', {
     toastId: '403',
    });
    break;
   case 500:
    toast.error('Ops ocorreu um erro no servidor interno!', {
     toastId: 500,
    });
    break;
   default:
    toast.error('Ops ocorreu um erro inesperado!', {
     toastId: 'inesperado',
    });
    break;
  }
  return Promise.reject(error);
 }
);

export default api;
