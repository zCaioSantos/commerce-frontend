import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import api from '../../services/api/AxiosConfig';
import queryClient from '../../services/api/queryClient';
import { useAuth } from '../../services/context/Auth/hook';
import { ProfileProps } from '../../services/types/ProfileProps';
import { Layout } from './Layout';
import { ControllerProps } from './types';

export function Controller({ data: cliente }: ControllerProps) {
 const { updateUser } = useAuth();
 const {
  register,
  handleSubmit,
  formState: { errors },
 } = useForm<ProfileProps>({
  defaultValues: cliente,
 });

 const onEditProfile = useMutation({
  mutationFn: (dataProfile: ProfileProps) => {
   return api.put(`/cliente/${cliente?.id}`, dataProfile);
  },
  onMutate: () => {
   toast.loading('Editando perfil..', {
    toastId: 'onEditProfile',
   });
  },
  onSuccess: (response) => {
   queryClient.invalidateQueries('getProfile');
   updateUser(response.data);
   toast.update('onEditProfile', {
    render: 'Perfil editado com sucesso.',
    type: 'success',
    isLoading: false,
    autoClose: 5000,
    closeOnClick: true,
   });
  },
  onError: () => {
   toast.update('onEditProfile', {
    render: 'Falha ao tentar editar perfil!',
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
   onSubmit: (dataProfile: ProfileProps) => onEditProfile.mutate(dataProfile),
   errors,
   isLoading: onEditProfile.isLoading,
  },
 };
 return <Layout data={data} />;
}
