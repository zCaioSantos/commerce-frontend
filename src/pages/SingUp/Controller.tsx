import axios, { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { SingUpProps } from '../../services/types/SingUpProps';
import { Layout } from './Layout';

export function Controller() {
 const navigate = useNavigate();
 const {
  register,
  handleSubmit,
  formState: { errors },
 } = useForm<SingUpProps>();

 const onSingUp = useMutation({
  mutationFn: (data: SingUpProps) => {
   return axios.post(`http://localhost:5000/cliente/`, data);
  },
  onMutate: () => {
   toast.loading('Cadastrando..', {
    toastId: `onSingUp`,
   });
  },
  onSuccess: async () => {
   toast.update('onSingUp', {
    render: 'Cadastrado com sucesso!',
    type: 'success',
    isLoading: false,
    autoClose: 5000,
    closeOnClick: true,
   });
   navigate('/login');
  },
  onError: (response: AxiosError) => {
   toast.update('onSingUp', {
    render: `${response.response?.data}`,
    type: 'error',
    isLoading: false,
    autoClose: 5000,
    closeOnClick: true,
   });
  },
 });

 const data = {
  hookForm: {
   register,
   handleSubmit,
   onSubmit: (dataSingUp: SingUpProps) => onSingUp.mutate(dataSingUp),
   errors,
   isLoading: onSingUp.isLoading,
  },
 };

 return <Layout data={data} />;
}
