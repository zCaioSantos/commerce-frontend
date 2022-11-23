import axios, { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../../services/context/Auth/hook';
import { LoginProps } from '../../services/types/LoginProps';
import { Layout } from './Layout';

export function Controller() {
 const { onSingIn } = useAuth();
 const navigate = useNavigate();
 const {
  control,
  register,
  handleSubmit,
  setValue,
  getValues,
  formState: { errors },
 } = useForm<LoginProps>();

 const onAuth = useMutation({
  mutationFn: (data: LoginProps) => {
   return axios.post(`http://localhost:5000/auth/`, data);
  },
  onMutate: () => {
   toast.loading('Entrando..', {
    toastId: `onAuth`,
   });
  },
  onSuccess: async (response) => {
   toast.update('onAuth', {
    render: 'Logado com sucesso!',
    type: 'success',
    isLoading: false,
    autoClose: 5000,
    closeOnClick: true,
   });
   await onSingIn(response.data);
   navigate('/');
  },
  onError: (response: AxiosError) => {
   console.log(response);
   toast.update('onAuth', {
    render: `${response.response?.data}`,
    type: 'error',
    isLoading: false,
    autoClose: 5000,
    closeOnClick: true,
   });
  },
 });

 const onSubmit = (dataAuth: LoginProps) => {
  onAuth.mutate(dataAuth);
 };

 const data = {
  hookForm: {
   control,
   register,
   handleSubmit,
   onSubmit: (dataAuth: LoginProps) => onSubmit(dataAuth),
   errors,
   setValue,
   getValues,
  },
 };

 return <Layout data={data} />;
}
