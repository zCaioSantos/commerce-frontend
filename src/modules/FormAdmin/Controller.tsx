import axios, { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { AdminProps } from '../../pages/Users/types';
import queryClient from '../../services/api/queryClient';

import { Layout } from './Layout';

export function Controller() {
 const {
  control,
  register,
  handleSubmit,
  setValue,
  getValues,
  formState: { errors },
 } = useForm<AdminProps>();

 const onCreate = useMutation({
  mutationFn: (data: AdminProps) => {
   return axios.post(`http://localhost:5000/users/novoAdmin`, data);
  },
  onMutate: () => {
   toast.loading('Ativando/desativando usuário..', {
    toastId: 'onCreateAdmin',
   });
  },
  onSuccess: () => {
   queryClient.invalidateQueries('getAdmins');
   toast.update('onCreateAdmin', {
    render: 'Usuario criado com sucesso!',
    type: 'success',
    isLoading: false,
    autoClose: 5000,
    closeOnClick: true,
   });
  },
  onError: (error: AxiosError) => {
   toast.update('onCreateAdmin', {
    render: error.message,
    type: 'error',
    isLoading: false,
    autoClose: 5000,
    closeOnClick: true,
   });
  },
 });

 const data = {
  hookForm: {
   control,
   register,
   handleSubmit,
   onSubmit: (dataAdmin: AdminProps) => onCreate.mutate(dataAdmin),
   errors,
   setValue,
   getValues,
  },
 };

 return <Layout data={data} />;
}
